# Vue.js Contributing Guide

Hi! We are really excited that you are interested in contributing to Vuestic. Before submitting your contribution though, please make sure to take a moment and read through the following guidelines.

* [Code of Conduct](https://github.com/epicmaxco/vuestic-admin/master/CODE_OF_CONDUCT.md)

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
  * `master` - stable snapshot from `develop`. Releases and hotfixes only. Do not submit PR's to `master`!
  * `develop` - main development branch. Houses `1.9` at the moment.
  * `2.0-release` - secondary development branch. Sits on top of `develop` (feel free to merge if something is missing).

* Local branches
  * For local branches naming stick to [commit message convention](./COMMIT_CONVENTION.md). So for feature branch that adds tabs name would be `feat/tabs`.

### For core contributors

The points below are mostly to simplify code review in a long run.
* Keep amount of local branches minimal.
* Always link PR to issue (via `fix #123`).
* For small issues you may push to `develop` branch directly while adding (`fix #123`) to commit message.
* Be sure to create single PR for one issue. If we have several PRs - move all code into a single one and close the rest. If one PR covers several issues - either split it in several PRs or mark one of the issues as duplicate.
* Be sure to have only one person assigned per issue.
* Check your code: https://github.com/epicmaxco/vuestic-admin/issues/378.

### Commonly used NPM scripts

``` bash
# run dev server
$ npm run serve

# build vuestic project into bundle
$ npm run build
```

## Credits

<a href="https://github.com/epicmaxco/vuestic-admin/graphs/contributors">Hall of fame!</a>
