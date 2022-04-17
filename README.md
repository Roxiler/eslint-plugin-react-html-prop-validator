# eslint-plugin-react-html-prop-validator

## ESLint plugin to avoid invalid props passed to HTML elements

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `npm i eslint-plugin-react-html-prop-validator`:

```
$ npm install eslint-plugin-react-html-prop-validator --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `npm i eslint-plugin-react-html-prop-validator` globally.

## Usage

Add `react-html-prop-validator` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["react-html-prop-validator"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "react-html-prop-validator/html-no-invalid-prop": 2
  }
}
```

You can change rule from 2 to 1 which is warning or you can disable with zero.

## Rule Details

This rule aims to dissallow invalid html and svg elements in react app.

Examples for **incorrect** code for this rule:

```jsx
class Component extends React.Component {
  render() {
    <div onClik={() => console.log("hello")}>Hello world!!</div>;
  }
}
class Component extends React.Component {
  render() {
    <h12 classNamess="">Hello world!!</h12>;
  }
}
class Component extends React.Component {
  render() {
    <button tYpe="">Hello world!!</button>;
  }
}
```

Examples for **correct** code for this rule:

```jsx
class Component extends React.Component {
  render() {
    <div onClick={() => console.log("hello")}>Hello world!!</div>;
  }
}
class Component extends React.Component {
  render() {
    <h12 classNames="">Hello world!!</h12>;
  }
}
class Component extends React.Component {
  render() {
    <button type="">Hello world!!</button>;
  }
}
```

# Next.js users can follow **[official documentation](https://nextjs.org/docs/basic-features/eslint)** on how to configure custom eslint plugins
