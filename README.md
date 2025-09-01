# Soluciones Integrales Eléctricas Araucanía

Sitio web profesional para servicios eléctricos especializados en la región de La Araucanía, Chile.

## 🚀 Instalación de Tailwind CSS 4.0

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de instalación

1. **Instalar dependencias**
   ```bash
   npm install
   ```

2. **Compilar CSS de desarrollo (con watch)**
   ```bash
   npm run build
   ```

3. **Compilar CSS para producción**
   ```bash
   npm run build:prod
   ```

### Estructura del proyecto

```
electicidad/
├── index.html              # Página principal
├── package.json            # Dependencias del proyecto
├── tailwind.config.js      # Configuración de Tailwind CSS 4.0
├── src/
│   └── input.css          # Archivo CSS de entrada con directivas de Tailwind
├── dist/
│   └── output.css         # CSS compilado (se genera automáticamente)
└── recursos/              # Imágenes y recursos del sitio
```

### Características de Tailwind CSS 4.0

- **Nueva sintaxis**: Usa `@import "tailwindcss"` en lugar de las directivas anteriores
- **Mejor rendimiento**: Compilación más rápida y CSS optimizado
- **Componentes personalizados**: Clases utilitarias como `.btn-primary`, `.card-service`
- **Colores personalizados**: Paleta de colores específica del proyecto
- **Animaciones**: Efectos de hover y transiciones suaves

### Clases personalizadas disponibles

- `.btn-primary` - Botón principal con estilo amarillo
- `.card-service` - Tarjeta de servicio con sombras y hover
- `.section-title` - Título de sección estandarizado
- `.section-subtitle` - Subtítulo de sección estandarizado
- `.text-shadow` - Sombra de texto para mejor legibilidad
- `.backdrop-blur-custom` - Efecto de desenfoque personalizado

### Desarrollo

Para desarrollo local, ejecuta:
```bash
npm run build
```

Esto iniciará el modo watch que recompilará automáticamente el CSS cuando hagas cambios en `src/input.css`.

### Producción

Para producción, ejecuta:
```bash
npm run build:prod
```

Esto generará un CSS minificado optimizado para producción.

## 🎨 Personalización

### Colores del tema
- `amarillo`: #FFD700 (Dorado)
- `azul-oscuro`: #1e3a8a (Azul marino)
- `azul-claro`: #3b82f6 (Azul cielo)

### Fuentes
- **Inter**: Fuente principal del sitio
- **Fallbacks**: Sistema de fuentes del sistema operativo

## 📱 Responsive Design

El sitio está completamente optimizado para dispositivos móviles, tablets y desktop con:
- Breakpoints estándar de Tailwind CSS
- Navegación móvil con menú hamburguesa
- Grid responsivo para servicios
- Imágenes adaptativas

## 🔧 Tecnologías utilizadas

- HTML5 semántico
- Tailwind CSS 4.0 (Alpha)
- JavaScript vanilla
- CSS personalizado con capas de Tailwind
- Fuentes web de Google Fonts

## 📞 Contacto

- **WhatsApp**: +56 9 3517 2731
- **Email**: Mauricioeazocar@gmail.com
- **Dirección**: Cerro Negro #1388, Angol, Araucanía, Chile

---

Desarrollado con ❤️ para Soluciones Integrales Eléctricas Araucanía
