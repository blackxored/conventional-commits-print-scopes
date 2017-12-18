# conventional-commits-print-scopes

[![Semantically Released][semantic-release-badge]][semantic-release]
[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![Styled with Prettier][prettier-badge]][prettier]
[![AirBnB style guide][airbnb-style-badge]][airbnb-style]

[![MIT License][license-badge]][LICENSE]
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]
[![Commitizen friendly][commitizen-badge]][commitizen]
[![Code of Conduct][coc-badge]][coc]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

Small utility to print all scopes from a repository that follows [Conventional Commits][conventional-commits]
or Angular-like commit conventions.

## Why

When you're contributing to a new repository that follows the Conventional Commits specification, or alternatively,
the Angular one, is sometimes difficult to figure out which scopes previous contributors have used. While you could
leave that to the maintainer, this utility makes it easier to learn which scopes are used in a particular repository,
so you can format your commit message accordingly.

## Installing / Getting Started


```shell
npm install -g conventional-commits-print-scopes
cd <repo>
conventional-commits-print-scopes
```

Example output:

```shell
navigation
auth
native
system
core
...
```

## Developing

### Built With

* [git-log-reader][git-log-reader].
* [Ramda][ramda].

### Pre-requisites

### Setting up Dev

Here's a brief intro about what a developer must do in order to start 
developing the project further:

```shell
git clone https://github.com/blackxored/conventional-commits-print-scopes
cd conventional-commits-print-scopes
yarn
```

## Versioning

We use [SemVer][semver] for versioning. In addition, it's automatic via
[semantic-release][semantic-release], and our [commit convention][commit-convention].

For the versions available, see the [Releases][releases] on this repository.

## Tests

```shell
yarn test
```

## Style guide

We base our code style on [AirBnB's style guide][airbnb-style] and we check with 
[ESLint][eslint] and automatically format our code with [Prettier][prettier].

## License

This project is licensed under the MIT License - see the 
[license] file for details.

## Contributing

If you're interested in contributing to this project in any form, please read
our [Contribution Guidelines][contributing].

### Code of Conduct

We've adopted a Code of Conduct that we expect project participants to adhere to.
Please read the [full text][coc] so that you can understand what actions 
will and will not be tolerated.

### Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars3.githubusercontent.com/u/133308?v=4" width="100px;"/><br /><sub><b>Adrian Perez</b></sub>](https://adrianperez.codes)<br />[💻](https://github.com/blackxored/conventional-commits-print-scopes/commits?author=blackxored "Code") [📖](https://github.com/blackxored/conventional-commits-print-scopes/commits?author=blackxored "Documentation") [⚠️](https://github.com/blackxored/conventional-commits-print-scopes/commits?author=blackxored "Tests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!


[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/blackxored/conventional-commits-print-scopes.svg?style=flat-square
[build]: https://travis-ci.org/blackxored/conventional-commits-print-scopes
[coverage-badge]: https://img.shields.io/codecov/c/github/blackxored/conventional-commits-print-scopes.svg?style=flat-square
[coverage]: https://codecov.io/github/blackxored/conventional-commits-print-scopes
[version-badge]: https://img.shields.io/npm/v/conventional-commits-print-scopes.svg?style=flat-square
[package]: https://www.npmjs.com/package/conventional-commits-print-scopes
[downloads-badge]: https://img.shields.io/npm/dm/conventional-commits-print-scopes.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/conventional-commits-print-scopes
[license-badge]: https://img.shields.io/npm/l/conventional-commits-print-scopes.svg?style=flat-square
[license]: https://github.com/blackxored/conventional-commits-print-scopes/blob/master/LICENSE.md
[semantic-release]: https://github.com/semantic-release/semantic-release
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square
[commitizen]: http://commitizen.github.io/cz-cli/
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier 
[airbnb-style-badge]: https://img.shields.io/badge/code%20style-airbnb-green.svg?style=flat-square
[airbnb-style]: https://github.com/airbnb/javascript
[eslint]: http://eslint.org 
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[contributing]: https://github.com/blackxored/conventional-commits-print-scopes/blob/master/CONTRIBUTING.md
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/blackxored/conventional-commits-print-scopes/blob/master/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/blackxored/conventional-commits-print-scopes.svg?style=social
[github-watch]: https://github.com/blackxored/conventional-commits-print-scopes/watchers
[github-star-badge]: https://img.shields.io/github/stars/blackxored/conventional-commits-print-scopes.svg?style=social
[github-star]: https://github.com/blackxored/conventional-commits-print-scopes/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20conventional-commits-print-scopes%20by%20%40blackxored%20https%3A%2F%2Fgithub.com%2Fblackxored%2Fconventional-commits-print-scopes%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/blackxored/conventional-commits-print-scopes.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[semver]: http://semver.org/
[releases]: https://github.com/blackxored/conventional-commits-print-scopes/releases
[commit-convention]: https://www.npmjs.com/package/@commitlint/config-angular
[conventional-commits]: https://conventionalcommits.org/
[git-log-reader]: https://www.npmjs.com/package/git-log-reader
[ramda]: http://ramdajs.com/
