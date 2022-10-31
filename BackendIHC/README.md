# inmobiliariahc

Esta aplicación se genera utilizando [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) con el
[diseño inicial del proyecto](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Instalar dependencias

Por defecto, las dependencias fueron instaladas cuando se generó esta aplicación.
Siempre que las dependencias en `package.json` sean cambiadas, hay que ejecutar el siguiente comando:

```
npm install
```

Para instalar sólo las dependencias resueltas en `package-lock.json`:

```
npm ci
```

## Ejecutar la aplicación

```
npm start
```

También se puede ejecutar con ``node .`` para saltarte el paso de construcción.

Se abre http://127.0.0.1:3000 en el navegador.

## Reconstruir el proyecto

Para construir el proyecto de forma incremental:

```
npm run build
```

Para forzar una construcción completa limpiando los artefactos en caché:

```
npm run rebuild
```

## Corregir problemas de estilo y formato del código

```
npm run lint
```

Para arreglar automáticamente estos problemas:

```
npm run lint:fix
```

## Otros comandos útiles

- `npm run migrate`: Migrar los esquemas de la base de datos para los modelos
- `npm run openapi-spec`: Genera la especificación OpenAPI en un archivo
- `npm run docker:build`: Construye una imagen Docker para esta aplicación
- `npm run docker:run`: Ejecuta esta aplicación dentro de un contenedor Docker

## Pruebas

```sh
npm test
```

[![LoopBack](https://github.com/loopbackio/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)