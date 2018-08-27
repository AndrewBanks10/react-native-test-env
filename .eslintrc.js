module.exports = {
	"parser": "babel-eslint",
	"plugins": [
		"react",
		"babel"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
      },
    "sourceType": "module"
  },

  "extends": [
		"standard", 
		"standard-react"
	],
	"env": {
		"browser": true,
		"node": true,
		"mocha": true
	},
	"rules": {
		"react/prop-types": 0,
		"react/jsx-boolean-value": 0
	}
}