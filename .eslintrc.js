module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "env": {
    "browser": true
  },
  "extends": [
    "airbnb"
  ],
  "plugins": [
    "vue"
  ],
  "settings": {
    "import/resolver": {
      alias: [
        ['common', '../src/common'],
        ['features', '../src/features'],
      ]
    }
  },
  "rules": {
    "linebreak-style": [0],
    "no-param-reassign": [0],
    "no-console": [0],
    "no-undef": [0]
  }
}
