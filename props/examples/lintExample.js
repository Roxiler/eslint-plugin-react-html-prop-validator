// const validDivProps = [
//   "onAuxClick",
//   "onAuxClickCapture",
//   "onClick",
//   "onClickCapture",
//   "onContextMenu",
//   "onContextMenuCapture",
//   "onDoubleClick",
//   "onDoubleClickCapture",
//   "onDrag",
//   "onDragCapture",
//   "onDragEnd",
//   "onDragEndCapture",
//   "onDragEnter",
//   "onDragEnterCapture",
//   "onDragExit",
//   "onDragExitCapture",
//   "onDragLeave",
//   "onDragLeaveCapture",
//   "onDragOver",
//   "onDragOverCapture",
//   "onDragStart",
//   "onDragStartCapture",
//   "onDrop",
//   "onDropCapture",
//   "onMouseDown",
//   "onMouseDownCapture",
//   "onMouseEnter",
//   "onMouseLeave",
//   "onMouseMove",
//   "onMouseMoveCapture",
//   "onMouseOut",
//   "onMouseOutCapture",
//   "onMouseOver",
//   "onMouseOverCapture",
//   "onMouseUp",
//   "onMouseUpCapture",

//   "onAbort",
//   "onAbortCapture",
//   "onCanPlay",
//   "onCanPlayCapture",
//   "onCanPlayThrough",
//   "onCanPlayThroughCapture",
//   "onDurationChange",
//   "onDurationChangeCapture",
//   "onEmptied",
//   "onEmptiedCapture",
//   "onEncrypted",
//   "onEncryptedCapture",
//   "onEnded",
//   "onEndedCapture",
//   "onLoadedData",
//   "onLoadedDataCapture",
//   "onLoadedMetadata",
//   "onLoadedMetadataCapture",
//   "onLoadStart",
//   "onLoadStartCapture",
//   "onPause",
//   "onPauseCapture",
//   "onPlay",
//   "onPlayCapture",
//   "onPlaying",
//   "onPlayingCapture",
//   "onProgress",
//   "onProgressCapture",
//   "onRateChange",
//   "onRateChangeCapture",
//   "onSeeked",
//   "onSeekedCapture",
//   "onSeeking",
//   "onSeekingCapture",
//   "onStalled",
//   "onStalledCapture",
//   "onSuspend",
//   "onSuspendCapture",
//   "onTimeUpdate",
//   "onTimeUpdateCapture",
//   "onVolumeChange",
//   "onVolumeChangeCapture",
//   "onWaiting",
//   "onWaitingCapture",

//   "className",
//   "class",
// ];

// module.exports = {
//   rules: {
//     "html-invalid-prop": {
//       create: function(context) {
//         return {
//           JSXElement(node) {
//             const elementName = node.openingElement.name.name;
//             if (!elementName) {
//               return;
//             }
//             const firstChar = elementName[0];

//             if (
//               firstChar !== firstChar.toLowerCase() ||
//               elementName !== "div"
//             ) {
//               return;
//             }

//             const attributes = node.openingElement.attributes;

//             attributes.forEach((attribute) => {
//               if (!attribute.name) {
//                 return;
//               }
//               if (
//                 attribute.name &&
//                 !validDivProps.includes(attribute.name.name)
//               ) {
//                 context.report(
//                   node,
//                   node.loc,
//                   "Incorrect property name is attached to div attribute"
//                 );
//               }
//             });
//           },
//         };
//       },
//     },
//   },
// };
// // JSXOpeningElement(node) {
// //     node.attributes.map((attr) => {
// //       const attrName = get(attr, "name.name");
// //       if (attrName === "style") {
// //         if (attr.value.expression.properties) {
// //           attr.value.expression.properties.map((prop) => {
// //             const pn = get(prop, "key.name");
// //             const pt = get(prop, "value.type");
// //             if (pt === "Literal" && pn !== undefined) {
// //               context.report(
// //                 node,
// //                 prop.loc,
// //                 "Inline styles are not allowed"
// //               );
// //             }
// //           });
// //         }
// //       }
// //     });
// //   },

// /**
//  ** @fileoverview Forbid "button" element without an explicit "type" attribute
//  * @author Filipp Riabchun
//  */

// //  'use strict';

// //  const getProp = require('jsx-ast-utils/getProp');
// //  const getLiteralPropValue = require('jsx-ast-utils/getLiteralPropValue');
// //  const docsUrl = require('../util/docsUrl');
// //  const isCreateElement = require('../util/isCreateElement');
// //  const report = require('../util/report');

// //  // ------------------------------------------------------------------------------
// //  // Rule Definition
// //  // ------------------------------------------------------------------------------

// //  const optionDefaults = {
// //    button: true,
// //    submit: true,
// //    reset: true
// //  };

// //  const messages = {
// //    missingType: 'Missing an explicit type attribute for button',
// //    complexType:
// //      'The button type attribute must be specified by a static string or a trivial ternary expression',
// //    invalidValue: '"{{value}}" is an invalid value for button type attribute',
// //    forbiddenValue: '"{{value}}" is an invalid value for button type attribute'
// //  };

// //  module.exports = {
// //    meta: {
// //      docs: {
// //        description:
// //          'Forbid "button" element without an explicit "type" attribute',
// //        category: 'Possible Errors',
// //        recommended: false,
// //        url: docsUrl('button-has-type')
// //      },

// //      messages,

// //      schema: [
// //        {
// //          type: 'object',
// //          properties: {
// //            button: {
// //              default: optionDefaults.button,
// //              type: 'boolean'
// //            },
// //            submit: {
// //              default: optionDefaults.submit,
// //              type: 'boolean'
// //            },
// //            reset: {
// //              default: optionDefaults.reset,
// //              type: 'boolean'
// //            }
// //          },
// //          additionalProperties: false
// //        }
// //      ]
// //    },

// //    create(context) {
// //      const configuration = Object.assign({}, optionDefaults, context.options[0]);

// //      function reportMissing(node) {
// //        report(context, messages.missingType, 'missingType', {
// //          node
// //        });
// //      }

// //      function reportComplex(node) {
// //        report(context, messages.complexType, 'complexType', {
// //          node
// //        });
// //      }

// //      function checkValue(node, value) {
// //        if (!(value in configuration)) {
// //          report(context, messages.invalidValue, 'invalidValue', {
// //            node,
// //            data: {
// //              value
// //            }
// //          });
// //        } else if (!configuration[value]) {
// //          report(context, messages.forbiddenValue, 'forbiddenValue', {
// //            node,
// //            data: {
// //              value
// //            }
// //          });
// //        }
// //      }

// //      function checkExpression(node, expression) {
// //        switch (expression.type) {
// //          case 'Literal':
// //            checkValue(node, expression.value);
// //            return;
// //          case 'TemplateLiteral':
// //            if (expression.expressions.length === 0) {
// //              checkValue(node, expression.quasis[0].value.raw);
// //            } else {
// //              reportComplex(expression);
// //            }
// //            return;
// //          case 'ConditionalExpression':
// //            checkExpression(node, expression.consequent);
// //            checkExpression(node, expression.alternate);
// //            return;
// //          default:
// //            reportComplex(expression);
// //        }
// //      }

// //      return {
// //        JSXElement(node) {
// //          if (node.openingElement.name.name !== 'button') {
// //            return;
// //          }

// //          const typeProp = getProp(node.openingElement.attributes, 'type');

// //          if (!typeProp) {
// //            reportMissing(node);
// //            return;
// //          }

// //          if (typeProp.value.type === 'JSXExpressionContainer') {
// //            checkExpression(node, typeProp.value.expression);
// //            return;
// //          }

// //          const propValue = getLiteralPropValue(typeProp);
// //          checkValue(node, propValue);
// //        },
// //        CallExpression(node) {
// //          if (!isCreateElement(node, context) || node.arguments.length < 1) {
// //            return;
// //          }

// //          if (
// //            node.arguments[0].type !== 'Literal' ||
// //            node.arguments[0].value !== 'button'
// //          ) {
// //            return;
// //          }

// //          if (
// //            !node.arguments[1] ||
// //            node.arguments[1].type !== 'ObjectExpression'
// //          ) {
// //            reportMissing(node);
// //            return;
// //          }

// //          const props = node.arguments[1].properties;
// //          const typeProp = props.find(
// //            prop => prop.key && prop.key.name === 'type'
// //          );

// //          if (!typeProp) {
// //            reportMissing(node);
// //            return;
// //          }

// //          checkExpression(node, typeProp.value);
// //        }
// //      };
// //    }
// //  };
