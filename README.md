# DI_PACKAGE_MANAGERS_DEMO

### Common global installations:
Assuming node is installed on your machine, first install the npm packages of all the tools we use globally so that they can be accessed from the command line:

```sh
$ npm install bower -g
$ npm install yarn -g
$ npm install gulp -g
$ npm install webpack -g
```

*******************************************************************
### Steps for bower:

- Run the below command to create a folder bower_components at the root with all dependencies:
```sh
$ bower install
```
- Uncomment the line #20 of index.html & open it in browser.

*******************************************************************

### Steps for gulp:

- Uncomment lines #13-19 in src/addition.js & src/subtraction.js files.
- Execute the gulp task named 'minifyMyTask' with the below command:

```sh
$ gulp minifyMyTask
```
- Uncomment line #14 in index.html & open it in browser.

*******************************************************************
### Steps for webpack:

-- Uncomment lines #3-9 in src/addition.js & src/subtraction.js files.
- Run a webpack build with below command:

```sh
$ webpack
```

- Uncomment line #17 in index.html & open it in browser.

*******************************************************************

### Further deep dives:

| Topic | Link |
| ------ | ------ |
| NPM package.json contents explained | https://docs.npmjs.com/files/package.json |
| A palyground for nodejs | https://npm.runkit.com/topojson |
| Why NPM over bower | https://gofore.com/stop-using-bower/ |
| NPM5 taking over yarn | https://www.youtube.com/watch?v=Pq05bTlTDPM |
| Semantic versioning in detail | https://docs.npmjs.com/getting-started/semantic-versioning |
| Understanding modules in ES6 | https://www.sitepoint.com/understanding-es6-modules/ |
| Starting with webpack | https://webpack.js.org/guides/getting-started/ |
| webpack alternative | https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783 |
