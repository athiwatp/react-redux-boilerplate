# react-redux-boilerplate

[![CircleCI][circleci-image]][circleci-url]

[circleci-image]: https://circleci.com/gh/brightwindanalysis/react-redux-boilerplate.svg?style=svg
[circleci-url]: https://circleci.com/gh/brightwindanalysis/react-redux-boilerplate

> TODO

### Setup

```
# use node version in .nvmrc
nvm use

# install packages
yarn install

# run development
yarn start

# verify style
yarn run lint

# format code
yarn run format

# build distribution
yarn build
```

### Docker

```
# build image
docker build \
  -t brightwindanalysis/react-redux-boilerplate:latest \
  -f docker/Dockerfile .

# start temporary container
docker run \
  --rm \
  -p 8080:80 \
  --name react-redux-boilerplate \
  brightwindanalysis/react-redux-boilerplate

# access container
docker exec -it react-redux-boilerplate sh
```

### Documentation

* [React Express](http://www.react.express) introduction
* [nvm](https://github.com/creationix/nvm)
* [yarn](https://yarnpkg.com/en)
* [webpack](https://webpack.js.org)
* [Babel](https://babeljs.io) + [ES2015](https://babeljs.io/learn-es2015)
* [Prettier](https://prettier.io)
* [React](https://facebook.github.io/react)
* [React Router](https://reacttraining.com/react-router/web/guides/philosophy)
* [Redux](http://redux.js.org) + [Redux DevTools](https://github.com/gaearon/redux-devtools)
* [axios](https://github.com/mzabriskie/axios) + [redux-axios-middleware](https://github.com/svrcekmichal/redux-axios-middleware)
