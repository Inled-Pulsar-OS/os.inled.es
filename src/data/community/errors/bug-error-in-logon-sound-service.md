---
type: "error"
title: "[BUG] error in logon sound service"
status: "Completados"
date: 2026-07-03T17:05:28Z
url: "https://github.com/Inled-Pulsar-OS/PKG/issues/48"
---

Para solucionar el problema del sonido de arranque mediante un servicio de `systemd`, hay que entender un detalle técnico clave de cómo funciona el audio en Linux: **los demonios del sistema (`systemd --system`) arrancan antes de que se inicien los servidores de sonido del usuario (como PipeWire o PulseAudio)**.

Si tu servicio de `systemd` intenta reproducir un archivo de audio de forma global antes de que el servidor de sonido del usuario esté levantado, el comando fallará silenciosamente porque no encuentra ningún dispositivo de salida (*sink*) activo.

Para que funcione al 100% en **Pulsar OS**, tienes dos formas de enfocarlo. Elige la que mejor se adapte a la arquitectura de tu distro:

---

### Enfoque 1: Convertirlo en un servicio de Usuario (Recomendado)

En lugar de crear el servicio en `/etc/systemd/system/`, lo ideal es crearlo como un servicio de sesión de usuario. De esta forma, `systemd` esperará a que el entorno gráfico y el servidor de sonido (PipeWire/PulseAudio) del usuario estén listos.

1. Crea el archivo en la ruta de usuario (crea las carpetas si no existen):
```bash
mkdir -p ~/.config/systemd/user/
nano ~/.config/systemd/user/pulsar-sound.service

```


2. Ponle esta estructura (usando `paplay` si usas PulseAudio/PipeWire o `pw-play` para PipeWire nativo):
```ini
[Unit]
Description=Sonido de inicio de Pulsar OS
After=pipewire.service pipewire-pulse.service

[Service]
Type=oneshot
ExecStart=/usr/bin/paplay /usr/share/sounds/pulsar/startup.ogg
RemainAfterExit=yes

[Install]
WantedBy=default.target

```


3. Habilita el servicio para tu usuario con el flag `--user` (sin `sudo`):
```bash
systemctl --user enable pulsar-sound.service

```



---

### Enfoque 2: Si necesitas que suene *antes* (En la pantalla de login de SDDM)

Si lo que buscas es que el sonido suene justo cuando aparece la pantalla de SDDM (antes de meter la contraseña), el servicio global sí que sirve, pero tienes que forzarlo a usar la capa más baja de audio del kernel (**ALSA**), puenteando a PipeWire.

1. Asegúrate de tener instalado `alsa-utils`.
2. Edita tu servicio global en `/etc/systemd/system/pulsar-startup-sound.service`:
```ini
[Unit]
Description=Sonido de arranque global Pulsar OS
After=alsa-initialized.target sound.target
Before=sddm.service

[Service]
Type=oneshot
# Usamos aplay (ALSA) para reproducir un archivo .wav directamente a la tarjeta
ExecStart=/usr/bin/aplay /usr/share/sounds/pulsar/startup.wav

[Install]
WantedBy=multi-user.target

```


3. Recarga y habilita:
```bash
sudo systemctl daemon-reload
sudo systemctl enable pulsar-startup-sound.service

```



### ¿Cómo debuguear por qué está fallando ahora?

Para ver exactamente qué error está escupiendo tu demonio actual, ejecuta este comando tras reiniciar:

```bash
sudo journalctl -u tu-nombre-de-servicio.service --no-pager

```

Si te sale un error del tipo *u nable to open slave* o *connection refused*, es la confirmación de que el servicio está disparándose demasiado pronto, cuando el sistema de audio aún está cerrado con llave.

¿Cómo tienes estructurado el servicio ahora mismo y qué comando usas para reproducir el audio?
