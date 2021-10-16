# Contributing

## Prerequisites

Make sure the following are installed on the system:

- git

- Node.js

- npm or yarn

## Installing dependency

```js
npm i
```

> **NOTE** since npm version 7 it tries to install all peer dependencies. So for normal npm i behaviour please do `npm i --legacy-peer-deps` if you are using npm v7 or greater 

### Starting the development server

```
npm run dev
```

or

```
npm run watch // if you want to enable hmr for mdx blog posts
```

### Raising pr

- Fork the repo

- Clone the repo from your forked repo

- Make your serperate branch for the changes like `mansi/adding-contributing-file`.
  - The general convention of branch naming is `<yourname>/<change-title>`.

- Raise the pr against original repo

- Assign the pr to reviewer

- Wait for reviewer to merge your PR.
