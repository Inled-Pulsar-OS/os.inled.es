---
type: "idea"
title: "[IDEA] Drivers NVIDIA y versión arch linux"
status: "Completados"
date: 2026-07-03T16:18:52Z
url: "https://github.com/Inled-Pulsar-OS/PKG/issues/46"
---

I'm thinking about add a better power management than the gnome's default.  
There are two options.

## System76-power and scheduler
System76 has a very good implementation of the nvidia drivers and power management, managing correctly the PRIME, hybrid and all the things.
Pop_OS has by default all this packages related to nvidia:
```text
libgldispatch0-nvidia
libnvidia-cfg1-580:amd64
libnvidia-cfg1-any
libnvidia-common
libnvidia-common-580
libnvidia-compute
libnvidia-compute-580:amd64
libnvidia-compute-580:i386
libnvidia-decode
libnvidia-decode-580:amd64
libnvidia-decode-580:i386
libnvidia-egl-gbm1
libnvidia-egl-wayland1:amd64
libnvidia-egl-wayland1:i386
libnvidia-encode
libnvidia-encode-580:amd64
libnvidia-encode-580:i386
libnvidia-encode1
libnvidia-extra
libnvidia-extra-580:amd64
libnvidia-fbc1
libnvidia-fbc1-580:amd64
libnvidia-fbc1-580:i386
libnvidia-gl
libnvidia-gl-390
libnvidia-gl-410
libnvidia-gl-580:amd64
libnvidia-gl-580:i386
libnvidia-legacy-390xx-egl-wayland1
libnvidia-ml.so.1
libnvidia-ml1
nvidia-common
nvidia-compute-utils
nvidia-compute-utils-580
nvidia-dkms-580-open
nvidia-dkms-kernel
nvidia-driver-580
nvidia-driver-580-open
nvidia-driver-binary
nvidia-egl-wayland-common
nvidia-firmware-580-580.159.03
nvidia-firmware-580-server-580.159.03
nvidia-kernel-common
nvidia-kernel-common-580
nvidia-kernel-source
nvidia-kernel-source-580-open
nvidia-libopencl1-dev
nvidia-opencl-icd
nvidia-persistenced
nvidia-prime
nvidia-settings
nvidia-settings-binary
nvidia-smi
nvidia-utils
nvidia-utils-580
xserver-xorg-video-nvidia-580
```
But that's not all: for the graphic card management, we have [github.com/pop-os/gnome-shell-extension-system76-power](github.com/pop-os/gnome-shell-extension-system76-power). The extension needs to be ported to gnome 48 i think, but i can make this in a bit.  

The system76 packages are:
```text
system76-power
system76-scheduler
```

Links to the source code:
- [system76-power](https://github.com/pop-os/system76-power/)
- [system76-scheduler](https://github.com/pop-os/system76-scheduler)

## Option 2: envycontrol (discontinued)  
When I saw the envycontrol code it seemed to me that what it did was correct, but it is discontinued
[repo](https://github.com/bayasdev/envycontrol)

