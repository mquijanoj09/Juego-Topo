# Juego del Topo

Un juego divertido e interactivo donde debes atrapar topos que aparecen en sus madrigueras. ¡Pon a prueba tus reflejos!

![Vista Previa del Juego](src/images/character.png)

## 🎮 Características

- **Jugabilidad Dinámica**: Los topos aparecen aleatoriamente en diferentes madrigueras
- **Sistema de Puntuación**: Gana diferentes puntos según el tipo de madriguera
  - Madrigueras normales: 100 puntos
  - Madrigueras especiales: 200 puntos
- **Sistema de Vidas**: Comienza con 5 vidas, pierde una por cada fallo
- **Niveles de Dificultad**: Elige entre Fácil, Medio y Difícil
- **Efectos de Sonido**: Retroalimentación auditiva para aciertos y fallos
- **Vibración**: Vibración opcional del dispositivo en los fallos
- **Puntuaciones Altas**: Almacenamiento local de las 10 mejores puntuaciones
- **Diseño Responsivo**: Funciona tanto en escritorio como en dispositivos móviles

## 🛠️ Tecnologías Utilizadas

- HTML5
- SCSS/CSS3
- JavaScript (ES6+)
- Parcel (Empaquetador)
- Howler.js (Audio)
- Capacitor (Móvil)

## 🚀 Comenzando

1. Clona el repositorio:
```bash
git clone [url-del-repositorio]
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm start
```

4. Construye para producción:
```bash
npm run build
```

## 📱 Compilación para Móviles

Para compilar para Android:

```bash
npm run setup
```

Esto realizará:
1. Instalación de dependencias
2. Construcción del proyecto
3. Inicialización de Capacitor
4. Adición de la plataforma Android
5. Sincronización del proyecto
6. Apertura de Android Studio

## 🎯 Controles del Juego

- Haz clic/toca las madrigueras cuando veas un topo
- Las reacciones rápidas son clave para conseguir puntuaciones altas
- Vigila tus vidas restantes
- ¡Intenta superar tu mejor puntuación!

## ⚙️ Configuración

- **Música**: Activar/desactivar música de fondo
- **Efectos de Sonido**: Activar/desactivar efectos del juego
- **Dificultad**: Elige entre Fácil, Medio, Difícil
- **Vibración**: Activar/desactivar vibración del dispositivo

## 📊 Sistema de Puntuación

- Madrigueras normales (marrones): 100 puntos
- Madrigueras especiales (verdes): 200 puntos
- Sigue tus mejores puntuaciones en la tabla de clasificación

## 🎨 Personalización

El juego utiliza SCSS para los estilos, facilitando la personalización:

- `_base.scss`: Estilos base
- `_game.scss`: Estilos específicos del juego
- `_menu.scss`: Interfaz del menú
- `_settings.scss`: Panel de configuración
- `_scores.scss`: Estilos de la tabla de puntuaciones

## 🔧 Estructura del Proyecto

```
src/
├── audio/          # Efectos de sonido
├── images/         # Recursos gráficos
├── js/             # Módulos JavaScript
├── sass/           # Archivos de estilo SCSS
└── index.html      # Punto de entrada
```

## 🤝 Contribuir

1. Haz un fork del repositorio
2. Crea tu rama de características
3. Haz commit de tus cambios
4. Empuja a la rama
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está licenciado bajo la Licencia ISC.

## 👥 Créditos

- Desarrollo: Miguel Quijano Jaramillo & Jhonatan Bosch
- Versión: 1.0.0
- Año: 2024

## 🐛 Problemas Conocidos

- Ninguno reportado actualmente

## 🔜 Mejoras Futuras

- Modo multijugador en línea
- Power-ups adicionales
- Más efectos de sonido
- Sistema de logros
- Diferentes temas visuales
