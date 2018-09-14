# Vue.js Contributing Guide

Hi! We are really excited that you are interested in contributing to Vuestic. Before submitting your contribution though, please make sure to take a moment and read through the following guidelines.

- [Code of Conduct](https://github.com/epicmaxco/vuestic-admin/master/CODE_OF_CONDUCT.md)

## Pull Request Guidelines

- The `master` branch is basically just a snapshot of the latest stable release. All development should be done in dedicated branches. **Do not submit PRs against the `master` branch.**

- Checkout a topic branch from the relevant branch, e.g. `develop`, and merge back against that branch.

- It's OK to have multiple small commits as you work on the PR - we will let GitHub automatically squash it before merging.

- If fixing a bug:
  - If you are resolving a special issue, add `(fix #xxxx[,#xxx])` (#xxxx is the issue id) in your PR title for a better release log, e.g. `update entities encoding/decoding (fix #3899)`.
  - Provide detailed description of the bug in the PR.

### Committing Changes

Commit messages should follow the [commit message convention](./COMMIT_CONVENTION.md) so that changelogs can be automatically generated. Commit messages will be automatically validated upon commit. If you are not familiar with the commit message convention, you can use `npm run commit` instead of `git commit`, which provides an interactive CLI for generating proper commit messages.

### Commonly used NPM scripts

``` bash
# run dev server
$ npm run serve

# build vuestic project into bundle
$ npm run build
```

## Credits

<a href="https://github.com/epicmaxco/vuestic-admin/graphs/contributors">Hall of fame!</a>
