# Football Status Node MVC

Este proyecto es una aplicación Node.js que utiliza el patrón MVC para consumir la API de estado de fútbol disponible en "https://v3.football.api-sports.io/status". La aplicación está diseñada para manejar adecuadamente los encabezados de respuesta y la política de limitación de velocidad.

## Estructura del Proyecto

```
football-status-node-mvc
├── src
│   ├── app.js                # Configuración de la aplicación Express
│   ├── server.js             # Inicialización del servidor
│   ├── controllers           # Controladores de la aplicación
│   │   └── statusController.js # Controlador para manejar el estado de la API
│   ├── routes                # Definición de rutas
│   │   ├── statusRoutes.js   # Rutas relacionadas con el estado de la API
│   │   └── index.js          # Centralización de rutas
│   ├── services              # Lógica para consumir la API
│   │   └── footballApiService.js # Servicio para realizar solicitudes a la API
│   ├── middlewares           # Middleware para la aplicación
│   │   ├── rateLimiter.js     # Lógica para limitar la tasa de solicitudes
│   │   ├── headersHandler.js   # Manejo de encabezados de respuesta
│   │   └── errorHandler.js     # Manejo de errores
│   ├── config                # Configuración de la aplicación
│   │   ├── apiConfig.js      # Configuración de la API
│   │   └── logger.js         # Configuración del logger
│   ├── utils                 # Funciones utilitarias
│   │   ├── retry.js          # Funciones para reintentar solicitudes
│   │   └── cache.js          # Sistema de caché
│   └── models                # Definiciones de modelos (si es necesario)
│       └── index.js          # Archivo de modelos
├── tests                     # Pruebas unitarias
│   ├── controllers           # Pruebas para controladores
│   └── services              # Pruebas para servicios
├── .env.example              # Ejemplo de configuración de variables de entorno
├── .gitignore                # Archivos y directorios a ignorar por Git
├── package.json              # Configuración del proyecto para npm
└── README.md                 # Documentación del proyecto
```

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del proyecto:
   ```
   cd football-status-node-mvc
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

4. Configura las variables de entorno. Copia el archivo `.env.example` a `.env` y ajusta los valores según sea necesario.

## Uso

Para iniciar la aplicación, ejecuta el siguiente comando:

```
npm start
```

La aplicación escuchará en el puerto especificado en la configuración.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.