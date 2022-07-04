# Pre-production

## SEO

We have a boierplate prepared with some analytics ingrained. This includes:

- [Yandex Metrica](https://metrica.yandex.com/about)

To get these running - just provide keys to respective apis. You're advised to copy `.env.example` with rename to `.env` then modify it.

Notice, that if you are about to use Google Maps then you also have to provide it with your personal API key. The key must be defined under the `VUE_APP_GOOGLE_MAPS_API_KEY` environment-variable (more on them below) and can be obtained [here](https://developers.google.com/maps/documentation/javascript/get-api-key).

## Deploy

We use [circleci](https://circleci.com) to deploy vuestic version you're able to see on demo.

If you want to save some time and use our config, do notice that circleci will need the following keys, that you have to set in **Build Settings -> Environment Variables**.

- `DEPLOY_PASSWORD` ssh password.
- `DEPLOY_PATH_PRODUCTION` production build will be loaded to this folder.
- `DEPLOY_PATH_STAGING` staging build will be loaded to this folder.
- `DEPLOY_URL` ssh url.
- `DEPLOY_USER` ssh password.

You can modify [config](../.circleci/config.yml) if our solution doesn't suit your needs exactly.

Couple of things to note:

- in `.env` file keys should look like this `VUE_APP_DRIFT_KEY`. Which will correspond to circleci key `DRIFT_KEY`. You essentially have two ways to pass config into build process.
- Circleci will run tests before both staging and production.

## Demos

You can enable demos in build by:

```
VUE_APP_INCLUDE_DEMOS=true
```

Demos are included in staging build by default. They're not present in production because of significant impact on bundle size.

## Build Version

You can enable build version, hash commit, and timestamp by build to the main page footer:

```
VUE_APP_BUILD_VERSION=true
```

This information are excluded by default.
