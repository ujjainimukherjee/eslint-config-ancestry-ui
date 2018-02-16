module.exports = {
    rules: {
		"arrow-parens": ["error", "as-needed"],
		"brace-style": ["error", "1tbs"],
		"class-methods-use-this": "off",
		"comma-dangle": ["error", "never"],
		"consistent-return": "off",
		"curly": ["error", "all"],
		"no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
		"indent": ["error", "tab", { "SwitchCase": 1 }],
		"import/extensions": ["error", "always", { "js": "never", "packages": "never" }],
		"max-len": "off",
		"no-bitwise": "off",
		"no-console": ["error"],
		"no-continue": "off",
		"no-extra-parens": ["error", "all", {
			"nestedBinaryExpressions": false
		}],
		"no-mixed-operators": ["error", {
			"groups": [
				["+", "-", "*", "/", "%", "**"],
				["&", "|", "^", "~", "<<", ">>", ">>>"],
				["==", "!=", "===", "!==", ">", ">=", "<", "<="],
				["&&", "||"],
				["in", "instanceof"]
			],
			"allowSamePrecedence": true
		}],
		"no-param-reassign": ["error", { "props": false }],
		"no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
		"no-prototype-builtins": "off",
		"no-restricted-syntax": ["error", "DebuggerStatement", "LabeledStatement", "WithStatement"],
		"no-tabs": "off",
		"no-underscore-dangle": "off",
		"no-unused-expressions": 0,
		"chai-friendly/no-unused-expressions": 2,
		"no-unused-vars": ["error", {
			"vars": "local",
			"args": "after-used",
			"varsIgnorePattern": "^ui$"
		}],
		"spaced-comment": ["error", "always", { "exceptions": ["*"] }]
	}
}