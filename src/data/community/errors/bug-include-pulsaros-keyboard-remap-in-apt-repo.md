---
type: "error"
title: "[BUG] Include pulsaros-keyboard-remap in apt repo"
status: "Completados"
date: 2026-07-01T13:31:04Z
url: "https://github.com/Inled-Pulsar-OS/PKG/issues/42"
---

Of course, the Action that makes the iso gives this error 
```text
E: Unable to locate package pulsar-macos-keyboard-remap-x11
yes: standard output: Broken pipe
🧹 Finalizing and releasing chroot-mounted resources...
Error: Process completed with exit code 100.
```
And this is due to a problem at the level of the repo that packages it, PKG:
```text
Run chmod +x package-and-deploy.sh
==============================================================================
📦 INICIANDO COMPILACIÓN DE: pulsar-macos-keyboard-remap-x11
==============================================================================
❌ Error: No se encontró '/home/runner/work/PKG/PKG/pulsar-macos-keyboard-remap-x11/DEBIAN/control'.
Error: Process completed with exit code 1.
```
