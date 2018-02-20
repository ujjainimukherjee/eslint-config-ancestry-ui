module.exports = {
	"parser": "babel-eslint",
   
    "rules": {
       "arrow-parens": ["error", "as-needed"],
       "class-methods-use-this": "off",
       "curly": ["error", "all"], // OPTIONAL, MULTI/NEST ??? https://eslint.org/docs/rules/curly
       "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
        "max-len": "off",
        "no-continue": "off",
	"no-console": "off",    
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
    "no-prototype-builtins": "off",
    "no-restricted-syntax": ["error", "DebuggerStatement", "LabeledStatement", "WithStatement"],
    "no-tabs": "off",
    "no-underscore-dangle": "off",
      "no-unused-vars": ["error", {
        "vars": "local", // WHY? 
        "args": "after-used", // DEFUALT
        "varsIgnorePattern": "^ui$" // WHEN NEEDED
    }],
	   // "no-unused-expressions": "error", need to work with chai friendly

	    
	    
	    
	 
    "spaced-comment": ["error", "always", { "exceptions": ["*"] }] // ?? OPTIONAL
   
     }
}
