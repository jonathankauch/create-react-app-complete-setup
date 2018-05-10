# create-react-app-complete-setup

This is a full setup for create-react-app with `redux` and `react-router` and a custom eslint config.
There are some SCSS utilities as well

## 1 - Install create-react-app

```
yarn add global create-react-app
create-react-app [your project]
cd [your project]
```

## 2 - Add SCSS

```
yarn add node-sass-chokidar npm-run-all
```

Add to `package.json`

```
"scripts": {
  "build-css": "node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/",
  "watch-css": "npm run build-css && node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/ --watch --recursive",
  "start-js": "react-scripts start",
  "start": "npm-run-all -p watch-css start-js",
  "build": "npm run build-css && react-scripts build",
  "test": "react-scripts test --env=jsdom"
}
```

Rename `App.css` to `App.scss`

Add to `.gitignore`

```
src/**/*.css
```

## 3 - Add eslint and eslint-config-airbnb

Install all relevant `eslint-config` packages listed in: 
```
npm info "eslint-config-airbnb@latest" peerDependencies
```

You can run this as well:
```
(
  export PKG=eslint-config-airbnb;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev "$PKG@latest"
)
```

Create `.eslintrc.js`

```
module.exports = {
    "extends": "airbnb",

    "parser": "babel-eslint",
    "globals": {
      "window": true,
      "document": true
    },
    // rules
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "semi": ["error", "never"],
        "quotes": ["error", "single"],
        "eol-last": ["off"],
        "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],

        // jsx-a11y rules
        "jsx-a11y/anchor-is-valid": ["off"],
        "jsx-a11y/click-events-have-key-events": ["off"],
        "jsx-a11y/no-noninteractive-element-interactions": ["off"],
        "jsx-a11y/no-static-element-interactions": ["off"],
    },
};
```

Create `.eslintignore` and add:
```
src/registerServiceWorker.js
src/App.test.js
```


## 4 - Add redux, react-redux react-router-dom react-router-redux@next redux-thunk 

```
yarn add redux react-redux react-router-dom react-router-redux@next redux-thunk
```
