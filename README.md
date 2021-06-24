# ember-adventure

## Base project setup
```bash
cd base/
yarn install
yarn run build
```

The `Base` project needs to be built first

## Vue app setup
```bash
cd vue-app/
yarn install
yarn run build
```

## Serve built app
```bash
# From the root directory
npx http-server ./dist -c-1
```

### Compiles and hot-reloads for development
```bash
docker-compose up
```
