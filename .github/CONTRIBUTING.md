# Vue.js Contributing Guide

Hi! We are really excited that you are interested in contributing to Vuestic. Before submitting your contribution though, please make sure to take a moment and read through the following guidelines.

* [Code of Conduct](./../CODE_OF_CONDUCT.md)

## Pull Request Guidelines

* The `master` branch is basically just a snapshot of the latest stable release. All development should be done in dedicated branches. **Do not submit PRs against the `master` branch.**
* Checkout a topic branch from the relevant branch, e.g. `develop`, and merge back against that branch.
* It's OK to have multiple small commits as you work on the PR - we will let GitHub automatically squash it before merging.
* If fixing a bug:
  * If you are resolving a special issue, add `(fix #xxxx[,#xxx])` (#xxxx is the issue id) so that github will close the issue once it's up on `master`.
  * Provide detailed description of the bug in the PR if it's not done in the issue.

### Committing Changes

Commit messages should follow the [commit message convention](./COMMIT_CONVENTION.md) so that changelogs can be automatically generated.

### Branches

* Public branches (**epicmax/vuestic-admin**):
  * `master` - stable snapshot from `develop`. Releases and hotfixes only. Do not submit PR's to `master`! (that's not entirely true as hotfixes are still possible to be in master, but not in develop).
  * `develop` - main development branch. Houses `2.0` at the moment.

* Local branches
  * For local branches naming stick to [commit message convention](./COMMIT_CONVENTION.md). So for feature branch that adds tabs name would be `feat/tabs`.

### For core contributors

* Keep amount of local branches minimal.
* Always link PR to issue (via `fix #123`).
* For small issues you may push to `develop` branch directly while adding (`fix #123`) to commit message.
* Create single PR for one issue. If we have several PRs - move all the code into a single one and close the rest. If one PR covers several issues - either split it in several PRs or mark one of the issues as duplicate.
* Be sure to have only one person assigned per issue.
* Check your code: https://github.com/epicmaxco/vuestic-admin/issues/378.
* We use [yarn](https://yarnpkg.com/lang/en/) for package management.
* Be proactive. If you think something is wrong - create an issue or discuss.
* Recommended tools: [GitKraken](https://www.gitkraken.com/), [WebStorm](https://www.jetbrains.com/webstorm/)
* If you work on UI components - work in book environment (`yarn serve:book`). We want to keep global stuff out of components.

#### Before release workflow
* Update package versions to newest ones. Update lock files (for both `npm` and `yarn`)

### Commonly used NPM scripts

``` bash
# run dev server
$ npm run serve

# build vuestic project into bundle
$ npm run build
```

## Credits

<a href="https://github.com/epicmaxco/vuestic-admin/graphs/contributors">Hall of fame!</a>
