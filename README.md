<div align="center">
  <img src="./media/logo.svg">
</div>

<div align="center">
  <strong>📝 Make slides with Markdown easily.</strong>
</div>

<br />

[![npm](https://img.shields.io/npm/v/fusuma.svg?style=flat-square)](https://www.npmjs.com/package/fusuma)
[![Azure](https://img.shields.io/azure-devops/build/hiroppy/11c2bed9-94f9-46ea-a0f9-908f1763e0c4/1.svg?style=flat-square)](https://dev.azure.com/hiroppy/fusuma)
[![Codecov](https://img.shields.io/codecov/c/github/hiroppy/fusuma.svg?style=flat-square)](https://codecov.io/gh/hiroppy/fusuma)

Just write Markdown and create cool slides.😎

## Features

- supports [mdx](https://github.com/mdx-js/mdx)
  - you can write JavaScript in Markdown
- supports [WebSlides](https://webslides.tv)
- supports [Presentation API](https://developer.mozilla.org/en-US/docs/Web/API/Presentation_API)
  - also, it works even without Presentation API
- supports various modes
  - development
  - production build
  - exporting as PDF
  - deploying to GitHub Pages
- supports SNS, OGP, FullScreen, and etc...
- supports Presenter Mode
  - you can give a speech while watching a presenter's notes and timer
- customizes JavaScript and CSS freely

## Demos

- [introduction slide of Fusuma](https://hiroppy.github.io/fusuma/intro) [[repository](/samples/intro)]
- others [[repository](https://github.com/hiroppy/slides#my-slides)]

You can also try Fusuma in Gitpod, a one-click online IDE for GitHub:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/hiroppy/fusuma/blob/master/samples/intro/slides/0-title.md)

## Install

Node versions > v8

```sh
$ npm i fusuma --save-dev # or npm i fusuma -g

# if you want to use yarn
$ yarn add fusuma --dev
```

## Procedure

Just execute the following three lines for executing, generating and deploying slides!

```sh
$ npm i fusuma -D
$ npx fusuma init
$ mkdir slides && echo '# Hello😄' > slides/title.md

# --- Tree ---
$ tree -a
.
├── .fusumarc.yml
└── slides
    └── title.md

1 directory, 2 files

# --- executable tasks---
$ npx fusuma start    # development
$ npx fusuma build    # build as NODE_ENV=production
$ npx fusuma deploy   # deploy to github pages
$ npx fusuma pdf      # export as PDF from HTML
```

When `npx fusuma start` is executed, fusuma will create a slide as follows and serves localhost:8080.

![](./media/procedure-screenshot.png)

And you can customize the slide using CSS.

## Directory Structure

Please see [samples/intro](/samples/intro) or [Verification Repository](https://github.com/issue-verifier/fusuma).

Slide order is numeric, alphabetical.

```
.
├── .fusumarc.yml       <-- the configuration file
├── index.js            <-- optional for rewriting
├── slides              <-- slides written by Markdown or HTML
│   ├── 0-title.md
│   ├── 01-content.md
│   ├── 02-body
│   │   └── 0-title.md
│   └── 03-end.md
└── style.css           <-- optional for rewriting

2 directories, 7 files
```

Or slides can be divided by `---` like below.

```markdown
## Hello

This is the first slide.

---

## 🤭

This is the second slide.
```

## Usage

Fusuma provides CLI.

```sh
   fusuma.js 1.0.0 - CLI for easily make slides with Markdown

   USAGE

     fusuma.js <command> [options]

   COMMANDS

     init                Create a configure file
     start               Start with webpack-dev-server
     build               Build with webpack
     deploy              Deploy to GitHub pages
     pdf                 Export as PDF
     help <command>      Display help for a specific command

   GLOBAL OPTIONS

     -h, --help         Display help
     -V, --version      Display version
     --no-color         Disable colors
     --quiet            Quiet mode - only displays warn and error messages
     -v, --verbose      Verbose mode - will also output debug messages
```

## Configuration File

Supports for `yaml` and `js` and it can be generated by running `fusuma init`.

### .fusumarc.yml

<details>

```yaml
meta:
  url: https://slides.hiroppy.me
  name: the present and future of JavaScript
  author: Yuta Hiroto
  description: Explain how specifications are determined and how it will be in the future.
  thumbnail: https://avatars1.githubusercontent.com/u/1725583?v=4&s=200
  siteName: slides.hiroppy.me
  repositoryUrl: https://github.com/hiroppy/fusuma
  sns:
    - twitter
    - hatena
slide:
  loop: true
  sidebar: true
  targetBlank: true
  showIndex: false
  isVertical: false
  code:
    languages:
      - javascript
    plugins:
      - line-numbers
    theme: default
extends:
  js: index.js
  css: style.css
```

</details>

### .fusumarc.js

<details>

```js
module.exports = {
  meta: {
    url: 'https://slide.hiroppy.me',
    name: 'test-test',
    author: 'hiroppy',
    description: 'test',
    thumbnail: 'url',
    siteName: 'siteName',
    sns: ['twitter', 'hatena'],
    repositoryUrl: 'https://github.com/hiroppy/fusuma'
  },
  slide: {
    loop: true,
    sidebar: true,
    targetBlank: true,
    showIndex: false,
    isVertical: false,
    code: {
      languages: ['javascript'],
      plugins: ['line-numbers'],
      theme: 'default'
    }
  },
  extends: {
    js: 'index.js',
    css: 'style.css'
  }
};
```

</details>

## Slide Syntax

See the example slide:) [Syntax Provided by Fusuma](./samples/intro/slides/04-slide.md)

## Code Syntax Highlighting

Fusuma uses [Prism.js](https://prismjs.com/).  
You can specify `languages`, `plugins`, `theme` to `.fusumrc`.
Please see [babel-plugin-prismjs](https://github.com/mAAdhaTTah/babel-plugin-prismjs) for detail.

```yml
slide:
  code:
    languages: # the default is ['javascript']
      - javascript
    plugins: # the default is []
      - line-numbers
    theme: default # the default is "default"
```

[Playground of Prism.js](https://prismjs.com/test.html#language=markup)

## Presenter Mode

1. open Sidebar(click the bottom right button(三))
2. click the PC monitor icon
3. if you use Chrome, you can choose select cast device
4. if you use a browser that does not support Presentation API, a new window will be created

![](./media/presenter-host.png)

## Live Mode

fusuma can fetch tweets from Twitter. In addition, fusuma have an api endpoint.  
If you specify a `keyword` and `authentication keys`, fetching from twitter will be enabled.  
Since comments can be sent to fusuma itself, you can use in the private case.  
Also, this mode can run with Presenter Mode.

```sh
# create .env
$ npx fusuma init -s live
# edit .env and add .env to .gitignore
$ npx fusuma live -w '#javascript' # npx fusuma live --help
# Also, you can deploy to other servers
$ open http://localhost:3000
```

![](./media/live.png)

### Post a comment

```sh
$ curl -X POST -H "Content-Type: application/json" -d '{"text":"hello:)"}' localhost:3000/api/comments
```

## API

```js
const start = require('@fusuma/task-start');
const build = require('@fusuma/task-build');
const pdf = require('@fusuma/task-pdf');
const deploy = require('@fusuma/task-ghp');
const init = require('@fusuma/task-init');
```

## Development

### Setup

```sh
$ npm run setup
```

### Link local packages

```sh
$ npx lerna add @fusuma/xxx --scope=@fusuma/yyy
```

see https://github.com/lerna/lerna/tree/master/commands/add
