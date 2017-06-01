# {{ name }}

> {{ description }}

## Add Component

``` bash
npm run add -- <name> -t compoent

```

## Add View

``` bash
npm run add -- <name> -t view

```

## Build Setup

``` bash
# install dependencies
npm install
# or yarn install

# serve with hot reload at localhost:8080
npm run dev

# build for qa environment with no minification
npm run qa

# build for production with minification
npm run prod

# build for production and view the bundle analyzer report
npm run build --report
{{#unit}}

# run unit tests
npm run unit
{{/unit}}
{{#e2e}}

# run e2e tests
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
npm test
{{/if_or}}
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
