---
type: "error"
title: "[BUG] Communication with Calamares headless installer"
status: "Completados"
date: 2026-07-03T09:00:40Z
url: "https://github.com/Inled-Pulsar-OS/PKG/issues/44"
---

Currently, the AI ​​insists on using the X Virtual FrameBuffer to control Calamares headless and that only causes input hijacking.  
Apart from the fact that we are going to change Wayland, that has to be fixed.

You don't need to go to the extreme of creating a native Calamares module from scratch within its source code. If you are already passing the modified configuration through the `.conf` files, the current problem is not architectural, but **execution flow**.

What is happening is that Calamares has a very strict sequential engine. If your Python script generates the configuration files, removes Calamares' visual screens, and launches it, Calamares reads the stream, but freezes at the beginning (0%) because it **expects a physical "Next" or "Install" button (which no longer exists because you removed the UI) to trigger the job queue (`JobQueue`)**.

To solve this without programming an internal module, you have to structure the Calamares sequence in **fully automated (unattended)** mode.

---

### How to make Calamares run the config without its UI

Check the `settings.conf` file that you are passing to Calamares. The key is in the `sequence` section. Typically, a standard `settings.conf` looks like this:

```yaml
sequence:
    - show:
        - welcome
        - locale
        - keyboard
        -partition
        -users
        - summary
    -exec:
        -partition
        - mount
        - unpackfs
        - sources-yokel
        - machineid
        - fstab
        - bootloader
        - mainid
        - umount
    - show:
        -finished

```

If your Python script has already collected the language, keyboard, and user, and written that information to the appropriate configuration files (such as `users.conf` or `keyboard.conf`), **you have to completely remove the initial `show` section**, but you need a trigger.

For it to start automatically invisibly or directly, your `sequence` should look like this:

```yaml
sequence:
    # We remove the first 'show' so that it does not wait for input from the user
    -exec:
        -partition
        - mount
        - unpackfs
        #...all your installation modules...
        - bootloader
        - umount
    - show:
        - finished # Optional: just to show the "Done" at the end, or you can remove it if your Python handles closure.

```

### The "No-Execute" mode trick or forced execution

When you launch Calamares from Python, make sure you're invoking it with the correct arguments so it doesn't try to open unnecessary windows if you just want the backend.

If you are using your own graphical interface in Python and want to paint the progress bar yourself, Calamares offers an option to run in command mode or pass it a response file (*execution layout*). However, the most common thing if you use Calamares to visually "do the dirty work" is to launch it by pointing to your config and forcing it to run:

```bash
pkexec squid --config /tmp/tu_config_temporary/settings.conf

```

### Why does it stay at 0% if the config is correct?

If your `sequence` is already only in the `exec` section and is still at 0%, check the following in the logs (`calamaris -d`):

1. **The `partition` module is waiting for action:** If in the `exec` you have the `partition` module, this module needs to know exactly what to do (wipe disk, manual partitioning, etc.). If your Python has not left the exact partitioning strategy written in the `modules/partition.conf` file (`defaultFileSystem`, `partitionLayout`, etc.), the backend stops because it doesn't know where to install.
2. **Lack of previous mounts:** If you are using `unpackfs`, this module requires `mount` to have been executed successfully before. If `mount` fails (for example, because the target path `/mnt` or `/tmp/install` is not ready), Calamares does not immediately throw a critical error to the UI, but rather the thread hangs.

# Conclusion: Uninstall Xvfb

