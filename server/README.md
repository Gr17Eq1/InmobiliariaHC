# InmobiliariaHC 馃彔

Esta aplicaci贸n se genera utilizando [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) con el
[dise帽o inicial del proyecto](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Instalar dependencias

Por defecto, las dependencias fueron instaladas cuando se gener贸 esta aplicaci贸n.
Siempre que las dependencias en `package.json` sean cambiadas, hay que ejecutar el siguiente comando:

```
npm install
```

Para instalar s贸lo las dependencias resueltas en `package-lock.json`:

```
npm ci
```

## Ejecutar la aplicaci贸n

```
npm start
```

Tambi茅n se puede ejecutar con ``node .`` para saltarte el paso de construcci贸n.

Se abre http://127.0.0.1:3000 en el navegador.

## Reconstruir el proyecto

Para construir el proyecto de forma incremental:

```
npm run build
```

Para forzar una construcci贸n completa limpiando los artefactos en cach茅:

```
npm run rebuild
```

## Corregir problemas de estilo y formato del c贸digo

```
npm run lint
```

Para arreglar autom谩ticamente estos problemas:

```
npm run lint:fix
```

## Otros comandos 煤tiles

- `npm run migrate`: Migrar los esquemas de la base de datos para los modelos
- `npm run openapi-spec`: Genera la especificaci贸n OpenAPI en un archivo
- `npm run docker:build`: Construye una imagen Docker para esta aplicaci贸n
- `npm run docker:run`: Ejecuta esta aplicaci贸n dentro de un contenedor Docker

## Pruebas

```sh
npm test
```

[![LoopBack](https://github.com/loopbackio/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

## Diagrama Entidad-Relaci贸n
![InmobiliariaHC](https://i.imgur.com/fabxjpp.png)
