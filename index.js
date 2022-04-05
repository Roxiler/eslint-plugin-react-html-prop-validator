const { props } = require("./props");

module.exports = {
  rules: {
    "html-no-invalid-prop": {
      create: function(context) {
        return {
          JSXElement(node) {
            const elementName = node.openingElement.name.name;
            if (!elementName) {
              return;
            }

            const completedHtmlTags = Object.keys(props);

            if (!completedHtmlTags.includes(elementName)) {
              return;
            }

            const attributes = node.openingElement.attributes;

            attributes.forEach((attribute) => {
              if (!attribute.name) {
                return;
              }
              if (
                attribute.name &&
                attribute.name.name &&
                !props[elementName].includes(attribute.name.name)
              ) {
                const propName = attribute.name.name;

                let matchingProp = "";

                matchingProp = props[elementName].find(
                  (prop) => prop.toLowerCase() === propName.toLowerCase()
                );

                if (matchingProp) {
                  context.report({
                    node,
                    loc: attribute.name.loc,
                    data: {
                      value: propName,
                      node: elementName,
                      matchingProp,
                    },
                    message:
                      '"{{node}}" tag does not support "{{value}}" property, Try using "{{matchingProp}}" instead',
                  });

                  return;
                }

                context.report({
                  node,
                  loc: attribute.name.loc,
                  data: {
                    value: attribute.name.name,
                    node: elementName,
                  },
                  message:
                    '"{{node}}" tag does not support "{{value}}" property',
                });
              }
            });
          },
        };
      },
    },
  },
};
