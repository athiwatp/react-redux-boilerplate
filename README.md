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

### Continuous integration and deployment

Requirements for deployment on AWS
* two EC2 instances (dev/prod) e.g. `ec2-000-000-000-000.AWS_REGION.compute.amazonaws.com`
* EC2 Container Registry configured e.g. `AWS_ACCOUNT_ID.dkr.ecr.AWS_REGION.amazonaws.com/react-redux-boilerplate`
* Credentials (Access Key ID and Secret Access Key) of a unique IAM user with `AmazonEC2ContainerRegistryPowerUser` permission to push on the registry

CircleCI v2 setup
* add the repository to [CircleCI](https://circleci.com/)
* *Chat Notifications*: set a Webhook URL for [Slack](https://slack.com/apps/A0F7VRE7N-circleci) to get a notification on each build

Configure the following CircleCI *Environment Variables*:
* AWS_ACCOUNT_ID (registry)
* AWS_REGION e.g. `eu-west-1` (without a/b/c)

Local (without CircleCI)
```
./script/local/local_registry.sh
./script/local/local_deploy.sh
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
* AWS [EC2](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)
* AWS [ECR](http://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html)
