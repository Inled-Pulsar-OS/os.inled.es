---
type: "error"
title: "[BUG] spotlight no se recarga cuando se instala una nueva app"
status: "Backlog"
date: 2026-08-16T18:05:46Z
url: "https://github.com/Inled-Pulsar-OS/PKG/issues/85"
---

Sí, **`Gio` es la opción nativa y más limpia** si tu aplicación utiliza librerías vinculadas a GLib (GObject Introspection), como PyGObject en Python, GJS en JavaScript o bindings en Rust/C/C++.

Al usar `Gio.AppInfoMonitor`, no tienes que preocuparte por monitorizar manualmente cada directorio (`/usr/share/applications`, `~/.local/share/applications`, rutas de Flatpak o Snap), ya que `Gio` se encarga de abstraer todo el sistema y te notifica automáticamente cuando cambia el catálogo de aplicaciones instaladas.

**Ejemplo funcional en Python (`PyGObject`):**

```python
import gi
gi.require_version('Gio', '2.0')
from gi.repository import Gio, GLib

def reload_app_list(monitor):
    print("¡Cambio detectado en las aplicaciones! Recargando...")
    # Aquí vuelves a obtener la lista con Gio.AppInfo.get_all()
    apps = Gio.AppInfo.get_all()
    print(f"Total aplicaciones encontradas: {len(apps)}")

# Obtener la instancia del monitor del sistema
app_monitor = Gio.AppInfoMonitor.get()

# Conectar la señal 'changed'
app_monitor.connect("changed", reload_app_list)

# Bucle de eventos necesario para escuchar las señales
loop = GLib.MainLoop()
loop.run()

```

**Ejemplo en JavaScript (`GJS`):**

```javascript
const { Gio, GLib } = imports.gi;

const monitor = Gio.AppInfoMonitor.get();

monitor.connect('changed', () => {
    log('Las aplicaciones instaladas han cambiado. Recargando lista...');
    let apps = Gio.AppInfo.get_all();
    // Tu lógica para actualizar la interfaz
});

const loop = GLib.MainLoop.new(null, false);
loop.run();

```

**Ventajas de usar `Gio`:**

* **Cero configuración de rutas:** Detecta automáticamente aplicaciones del sistema, de usuario, Flatpaks y Snaps sin que tengas que hardcodear carpetas.
* **Integración nativa:** Utiliza internamente los mecanismos del sistema operativo (`inotify` + eventos del entorno de escritorio) con un consumo de recursos prácticamente nulo.
