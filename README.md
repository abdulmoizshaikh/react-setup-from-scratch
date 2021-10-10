# react-setup-from-scratch

## Setup react with webpack and babel

[https://medium.com/age-of-awareness/setup-react-with-webpack-and-babel-5114a14a47e9]

### webpack and babel basic setup complete and we have tried run dev server and made build which is in dist folder which I am pushing right now for learning

## Issues

## When try to use .css in react its gives me this error

ERROR in ./src/styles.css 1:0

Module parse failed: Unexpected token (1:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders

> .container {
> | background-color: aqua;
> | /_ backgroundimage: backImage; _/

## When try to use image in react its gives me this error

Compiled with problems:X

ERROR in ./src/images/sea.jpg 1:0

Module parse failed: Unexpected character '�' (1:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
(Source code omitted for this binary file)

### for fix above 2 issues of css and images support I have to do these below steps

#### Extra useful configs

```

Babel config for CSS files

npm install style-loader --save-dev
npm install --save-dev css-loader

module.export = {
  ...
  "module": {
    "rules": [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      ....
    },
    ...
  },
  ...
}
Babel config for images

npm i -D file-loader

module.export = {
  ...
  "module": {
    "rules": [
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
      ....
    },
    ...
  },
  ...
}
Babel config for SVG as react component
module.export = {
  ...
  "module": {
    "rules": [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      ....
    },
    ...
  },
  ...
}
```

## DEMO

[https://github.com/abdulmoizshaikh/react-setup-from-scratch]
