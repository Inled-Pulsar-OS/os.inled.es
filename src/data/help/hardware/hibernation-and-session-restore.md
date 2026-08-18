---
title: "Session Restore & Hibernation"
description: "How session restoration works in Pulsar OS, automated setup, and known hardware-specific firmware quirks."
order: 1
---

Pulsar OS includes a native macOS-style **Session Restore** feature accessible from the Apple/Pulsar menu under **Shut Down...** and **Restart...**. 

When checking the option *"Reopen windows when logging back in"*, the system saves a complete snapshot of all running applications, open windows, and desktop state to disk before powering down, restoring everything instantly upon the next boot.

---

## How It Works

1. **Automated Swap & Resume Configuration**:
   During installation or package updates, `pulsaros-setup-hibernation` automatically creates and configures an appropriately sized `/swapfile`, calculates the kernel `resume_offset`, and injects the resume parameters into the bootloader configuration (rEFInd / GRUB).
2. **RAM & VRAM Snapshot**:
   When confirmed in the global menu, the system flushes disk caches and instructs the Linux kernel to write an exact snapshot of the system RAM to the swap space.
3. **Hardware Power Down**:
   Once the snapshot is verified on disk, the kernel triggers a direct hardware power-down (`shutdown` / ACPI S5) or reset (`reboot`).

---

## Graphics & GPU Compatibility

### Intel & AMD Integrated Graphics
Systems using Intel (i915/xe) or AMD (amdgpu) graphics operate seamlessly without any additional configuration.

### NVIDIA & Hybrid Graphics (Optimus)
On laptops with dual GPUs (e.g. AMD iGPU + NVIDIA dGPU):
- Video memory (VRAM) preservation is automatically enabled (`NVreg_PreserveVideoMemoryAllocations=1`).
- The system helper services (`nvidia-hibernate.service`, `nvidia-suspend.service`, `nvidia-resume.service`) are enabled so the GPU state is saved to `/var/tmp` before memory freezing and reloaded into GPU memory upon waking up.

---

## Known Hardware Quirks

### HP Laptops (OMEN, Victus, Envy Series)
Some HP laptop models running certain BIOS firmware revisions (e.g., F.11) contain a known bug in their ACPI AML tables (`AE_AML_BUFFER_LIMIT, Index is beyond end of object` in method `\_SB.WMID.WQBZ`).

**Symptom**:
- The RAM snapshot writes to disk successfully.
- Upon turning the machine back on, **the session restores all windows and apps perfectly**.
- However, immediately after completing the write, the HP Embedded Controller (EC) may fail to drop the hardware power rail, leaving the screen dark and the power indicator LED on instead of turning off automatically.

**Workaround**:
If your HP device does not automatically turn off after the screen goes dark during a Session Restore shutdown, press and hold the power button to finish powering off. When you turn it on again, the system will restore your session normally from the swap image.
