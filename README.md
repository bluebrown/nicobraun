# Personal Developer Page

Template for personal developer page. Fetches info from various platforms.

Currently supported APIs:

- Pinned Github Repos
- Top 6 dev.to posts
- Top 6 Stackoverflow Answers

## Setup

If you choose to fork or clone the repo and roll your own consider the below information.

### Env

In order to retrieve data from the APIs, expose 4 environment variables. You can do so with a .env file or by exporting them.

```bash
GITHUB_USER=bluebrown # your github username
GITHUB_TOKEN=<secret token> # your github token with permission to read public repos
STACK_OVERFLOW_ID=9208887 # your stackoverflow userid
DEVTO_USERNAME=codingsafari # your dev.to username
```

### Data

Once the environment variables are set, most of the data will be populated from those APIs when building the project. However, some data is written in regular json and js data files.

Change personal info in the 3 the data files in *views/_data*

- bio.json
- social.json
- favs.js

### Image of yourself

Overwrite the picture *assets/assets/me.jpg* with a picture of yourself.

## Build

For an optimized production build set `NODE_ENV` to production

```bash
NODE_ENV=production npm run build
```
