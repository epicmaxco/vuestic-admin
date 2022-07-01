# Vue.js Contributing Guide

Hi! We are really excited that you are interested in contributing to Vuestic. Before submitting your contribution though, please make sure to take a moment and read through the following guidelines.

- [Code of Conduct](./../CODE_OF_CONDUCT.md)

## Pull Request Guidelines

- The `master` branch is just a snapshot of the latest stable release. **Do not submit PRs against the `master` branch.**
- Atomic code contribution looks something like this:
  - Checkout from upstream `develop`.
  - Work on your fork in dedicated branch.
  - When you're ready to show results - create PR against upstream `develop` and add a developer for review. You can ping said developer to speed things up ;).
- It's OK to have multiple small commits as you work on the PR - we will let GitHub automatically squash it before merging.

- Good stuff to add in your pull request:
  - If your PR fully resolves existing issue, add `(fix #xxxx[,#xxx])` (#xxxx is the issue id) so that github will close the issue once it's up on `master`. You have to add that to the body of PR, won't work in header :).
  - Provide detailed description of the issue in the PR if it's not done in the issue.
  - If you're working on visual changes - provide before/after screenshot. That speeds up review immensely.

### Branches

- Upstream branches (**epicmax/vuestic-admin**):

  - `master` - stable snapshot from `develop`. Releases and hotfixes only. Do not submit PR's to `master`!.
  - `develop` - main development branch.

- Local branches
  - For local branches naming stick to [commit message convention](./COMMIT_CONVENTION.md). So for feature branch that adds tabs name would be `feat/tabs`.

### For core contributors

- Keep amount of local branches minimal.
- Always link PR to issue (via `fix #123`).
- For small issues you may push to `develop` branch directly while adding (`fix #123`) to commit message.
- Create single PR for one issue. If we have several PRs - move all the code into a single one and close the rest. If one PR covers several issues - either split it in several PRs or mark one of the issues as duplicate.
- Be sure to have only one person assigned per issue.
- Check your code: https://github.com/epicmaxco/vuestic-admin/issues/378.
- We use [yarn](https://yarnpkg.com/lang/en/) for package management.
- Be proactive. If you think something is wrong - create an issue or discuss.
- Recommended tools: [GitKraken](https://www.gitkraken.com/), [WebStorm](https://www.jetbrains.com/webstorm/), [ShareX](https://getsharex.com/)

#### Before release workflow

- Update package versions to newest ones. Update lock files (for both `npm` and `yarn`)

### Vuestic-ui

Vuestic-admin uses vuestic-ui internally. So if you have some troubles with components - it's better to submit issue or PR in [respective repo](https://github.com/epicmaxco/vuestic-ui).

### Commonly used NPM scripts

```bash
# run dev server
$ yarn dev

# build vuestic-admin project into bundle
$ yarn build
```

## Credits

<a href="https://github.com/epicmaxco/vuestic-admin/graphs/contributors">Hall of fame!</a>
