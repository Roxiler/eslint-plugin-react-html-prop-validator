const DOMAttributes = [
  "children",
  "dangerouslySetInnerHTML",

  // Clipboard Events
  "onCopy",
  "onCopyCapture",
  "onCut",
  "onCutCapture",
  "onPaste",
  "onPasteCapture",

  // Composition Events
  "onCompositionEnd",
  "onCompositionEndCapture",
  "onCompositionStart",
  "onCompositionStartCapture",
  "onCompositionUpdate",
  "onCompositionUpdateCapture",

  // Focus Events
  "onFocus",
  "onFocusCapture",
  "onBlur",
  "onBlurCapture",

  // Form Events
  "onChange",
  "onChangeCapture",
  "onBeforeInput",
  "onBeforeInputCapture",
  "onInput",
  "onInputCapture",
  "onReset",
  "onResetCapture",
  "onSubmit",
  "onSubmitCapture",
  "onInvalid",
  "onInvalidCapture",

  // Image Events
  "onLoad",
  "onLoadCapture",
  "onError",
  "onErrorCapture",

  // Keyboard Events
  "onKeyDown",
  "onKeyDownCapture",
  "onKeyPress",
  "onKeyPressCapture",
  "onKeyUp",
  "onKeyUpCapture",

  // Media Events
  "onAbort",
  "onAbortCapture",
  "onCanPlay",
  "onCanPlayCapture",
  "onCanPlayThrough",
  "onCanPlayThroughCapture",
  "onDurationChange",
  "onDurationChangeCapture",
  "onEmptied",
  "onEmptiedCapture",
  "onEncrypted",
  "onEncryptedCapture",
  "onEnded",
  "onEndedCapture",
  "onLoadedData",
  "onLoadedDataCapture",
  "onLoadedMetadata",
  "onLoadedMetadataCapture",
  "onLoadStart",
  "onLoadStartCapture",
  "onPause",
  "onPauseCapture",
  "onPlay",
  "onPlayCapture",
  "onPlaying",
  "onPlayingCapture",
  "onProgress",
  "onProgressCapture",
  "onRateChange",
  "onRateChangeCapture",
  "onSeeked",
  "onSeekedCapture",
  "onSeeking",
  "onSeekingCapture",
  "onStalled",
  "onStalledCapture",
  "onSuspend",
  "onSuspendCapture",
  "onTimeUpdate",
  "onTimeUpdateCapture",
  "onVolumeChange",
  "onVolumeChangeCapture",
  "onWaiting",
  "onWaitingCapture",

  // MouseEvents
  "onAuxClick",
  "onAuxClickCapture",
  "onClick",
  "onClickCapture",
  "onContextMenu",
  "onContextMenuCapture",
  "onDoubleClick",
  "onDoubleClickCapture",
  "onDrag",
  "onDragCapture",
  "onDragEnd",
  "onDragEndCapture",
  "onDragEnter",
  "onDragEnterCapture",
  "onDragExit",
  "onDragExitCapture",
  "onDragLeave",
  "onDragLeaveCapture",
  "onDragOver",
  "onDragOverCapture",
  "onDragStart",
  "onDragStartCapture",
  "onDrop",
  "onDropCapture",
  "onMouseDown",
  "onMouseDownCapture",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseMoveCapture",
  "onMouseOut",
  "onMouseOutCapture",
  "onMouseOver",
  "onMouseOverCapture",
  "onMouseUp",
  "onMouseUpCapture",

  // Selection Events
  "onSelect",
  "onSelectCapture",

  // Touch Events
  "onTouchCancel",
  "onTouchCancelCapture",
  "onTouchEnd",
  "onTouchEndCapture",
  "onTouchMove",
  "onTouchMoveCapture",
  "onTouchStart",
  "onTouchStartCapture",

  // Pointer Events
  "onPointerDown",
  "onPointerDownCapture",
  "onPointerMove",
  "onPointerMoveCapture",
  "onPointerUp",
  "onPointerUpCapture",
  "onPointerCancel",
  "onPointerCancelCapture",
  "onPointerEnter",
  "onPointerEnterCapture",
  "onPointerLeave",
  "onPointerLeaveCapture",
  "onPointerOver",
  "onPointerOverCapture",
  "onPointerOut",
  "onPointerOutCapture",
  "onGotPointerCapture",
  "onGotPointerCaptureCapture",
  "onLostPointerCapture",
  "onLostPointerCaptureCapture",

  // UI Events
  "onScroll",
  "onScrollCapture",

  // Wheel Events
  "onWheel",
  "onWheelCapture",

  // Animation Events
  "onAnimationStart",
  "onAnimationStartCapture",
  "onAnimationEnd",
  "onAnimationEndCapture",
  "onAnimationIteration",
  "onAnimationIterationCapture",

  // Transition Events
  "onTransitionEnd",
  "onTransitionEndCapture",
];

const ariaWidgetProps = [
  "aria-autocomplete",
  "aria-checked",
  "aria-expanded",
  "aria-haspopup",
  "aria-level",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-placeholder",
  "aria-pressed",
  "aria-readonly",
  "aria-required",
  "aria-selected",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
];

const ariaLiveRegionProps = [
  "aria-atomic",
  "aria-busy",
  "aria-live",
  "aria-relevant",
];

const ariaDndProps = ["aria-dropeffect", "aria-grabbed"];

const ariaRalation = [
  "aria-activedescendant",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-describedby",
  "aria-errormessage",
  "aria-flowto",
  "aria-labelledby",
  "aria-owns",
  "aria-posinset",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-setsize",
];

const ariaBaseProps = [
  "aria-current",
  "aria-description",
  "aria-details",
  "aria-disabled",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-roledescription",
];

const AriaAttributes = [
  ...ariaBaseProps,
  ...ariaDndProps,
  ...ariaLiveRegionProps,
  ...ariaRalation,
  ...ariaWidgetProps,
];

const ReactAttributes = ["children", "key", "ref"];

const HTMLAttributes = [
  ...ReactAttributes,
  ...DOMAttributes,
  ...AriaAttributes,
  // React-specific Attributes
  "defaultChecked",
  "defaultValue",
  "suppressContentEditableWarning",
  "suppressHydrationWarning",

  // Standard HTML Attributes
  "accessKey",
  "className",
  "class",
  "contentEditable",
  "contextMenu",
  "dir",
  "draggable",
  "hidden",
  "id",
  "lang",
  "placeholder",
  "slot",
  "spellCheck",
  "style",
  "tabIndex",
  "title",
  "translate",

  // Unknown
  "radioGroup",

  // WAI-ARIA
  "role",

  // RDFa Attributes
  "about",
  "datatype",
  "inlist",
  "prefix",
  "property",
  "resource",
  "typeof",
  "vocab",

  // Non-standard Attributes
  "autoCapitalize",
  "autoCorrect",
  "autoSave",
  "color",
  "itemProp",
  "itemScope",
  "itemType",
  "itemID",
  "itemRef",
  "results",
  "security",
  "unselectable",

  "inputMode",

  "is",
];

const AnchorHTMLAttributes = [
  ...HTMLAttributes,
  "download",
  "href",
  "hrefLang",
  "media",
  "ping",
  "rel",
  "target",
  "type",
  "referrerPolicy",
];

const AreaHTMLAttributes = [
  ...HTMLAttributes,
  "alt",
  "coords",
  "download",
  "href",
  "hrefLang",
  "media",
  "rel",
  "shape",
  "target",
];

const BaseHTMLAttributes = [...HTMLAttributes, "href", "target"];

const BlockquoteHTMLAttributes = [...HTMLAttributes, "cite"];

const ButtonHTMLAttributes = [
  ...HTMLAttributes,
  "autoFocus",

  "disabled",
  "form",
  "formAction",

  "formEncType",

  "formMethod",

  "formNoValidate",

  "formTarget",

  "name",
  "type",
  "value",
];

const CanvasHTMLAttributes = [...HTMLAttributes, "height", "width"];

const ColHTMLAttributes = [...HTMLAttributes, "span", "width"];

const ColgroupHTMLAttributes = [...HTMLAttributes, "span"];

const DataHTMLAttributes = [...HTMLAttributes, "value"];

const DetailsHTMLAttributes = [...HTMLAttributes, "open"];

const DelHTMLAttributes = [...HTMLAttributes, "cite", "dateTime"];

const DialogHTMLAttributes = [...HTMLAttributes, "open"];

const EmbedHTMLAttributes = [
  ...HTMLAttributes,
  "height",
  "src",
  "type",
  "width",
];

const FieldsetHTMLAttributes = [...HTMLAttributes, "disabled", "form", "name"];
const FormHTMLAttributes = [
  ...HTMLAttributes,
  "acceptCharset",
  "action",
  "autoComplete",
  "autocomplete",
  "encType",
  "enctype",
  "method",
  "name",
  "noValidate",
  "novalidate",
  "target",
];

const HtmlHTMLAttributes = [...HTMLAttributes, "manifest"];

const IframeHTMLAttributes = [
  ...HTMLAttributes,
  "allow",
  "allowFullScreen",

  "allowTransparency",

  "frameBorder",

  "height",
  "marginHeight",

  "marginWidth",

  "name",
  "referrerPolicy",

  "sandbox",
  "scrolling",
  "seamless",
  "src",
  "srcDoc",

  "width",
];

const ImgHTMLAttributes = [
  ...HTMLAttributes,
  "alt",
  "crossOrigin",
  "decoding",
  "height",
  "loading",
  "referrerPolicy",
  "sizes",
  "src",
  "srcSet",
  "useMap",
  "width",
];

const InsHTMLAttributes = [...HTMLAttributes, "cite", "dateTime"];

const InputHTMLAttributes = [
  ...HTMLAttributes,
  "accept",
  "alt",
  "autoComplete",

  "autoFocus",

  "capture",
  "checked",
  "crossOrigin",

  "disabled",
  "form",
  "formAction",

  "formEncType",

  "formMethod",

  "formNoValidate",

  "formTarget",

  "height",
  "list",
  "max",
  "maxLength",

  "min",
  "minLength",

  "multiple",
  "name",
  "pattern",
  "placeholder",
  "readOnly",

  "required",
  "size",
  "src",
  "step",
  "type",
  "value",
  "width",

  "onChange",
];

const KeygenHTMLAttributes = [
  ...HTMLAttributes,
  "autoFocus",

  "challenge",
  "disabled",
  "form",
  "keyType",

  "keyParams",

  "name",
];

const LabelHTMLAttributes = [...HTMLAttributes, "form", "htmlFor", "for"];

const LiHTMLAttributes = [...HTMLAttributes, "value"];

const LinkHTMLAttributes = [
  ...HTMLAttributes,
  "as",
  "crossOrigin",

  "href",
  "hrefLang",

  "integrity",
  "media",
  "rel",
  "sizes",
  "type",
  "charSet",
];

const MapHTMLAttributes = [...HTMLAttributes, "name"];

const MenuHTMLAttributes = [...HTMLAttributes, "type"];

const MediaHTMLAttributes = [
  ...HTMLAttributes,
  "autoPlay",

  "controls",
  "controlsList",

  "crossOrigin",

  "loop",
  "mediaGroup",

  "muted",
  "playsInline",

  "preload",
  "src",
];

const AudioHTMLAttributes = [...MediaHTMLAttributes];

const MetaHTMLAttributes = [
  ...HTMLAttributes,
  "charSet",
  "content",
  "httpEquiv",
  "name",
];

const MeterHTMLAttributes = [
  ...HTMLAttributes,
  "form",
  "high",
  "low",
  "max",
  "min",
  "optimum",
  "value",
];

const QuoteHTMLAttributes = [...HTMLAttributes, "cite"];

const ObjectHTMLAttributes = [
  ...HTMLAttributes,
  "classID",
  "data",
  "form",
  "height",
  "name",
  "type",
  "useMap",
  "width",
  "wmode",
];

const OlHTMLAttributes = [...HTMLAttributes, "reversed", "start", "type"];

const OptgroupHTMLAttributes = [...HTMLAttributes, "disabled", "label"];

const OptionHTMLAttributes = [
  ...HTMLAttributes,
  "disabled",
  "label",
  "selected",
  "value",
];

const OutputHTMLAttributes = [
  ...HTMLAttributes,
  "form",
  "htmlFor",
  "for",
  "name",
];

const ParamHTMLAttributes = [...HTMLAttributes, "name", "value"];

const ProgressHTMLAttributes = [...HTMLAttributes, "max", "value"];

const SlotHTMLAttributes = [...HTMLAttributes, "name"];

const ScriptHTMLAttributes = [
  ...HTMLAttributes,
  "async",
  "charSet",
  "crossOrigin",
  "defer",
  "integrity",
  "noModule",
  "nonce",
  "src",
  "type",
];

const SelectHTMLAttributes = [
  ...HTMLAttributes,
  "autoComplete",

  "autoFocus",

  "disabled",
  "form",
  "multiple",
  "name",
  "required",
  "size",
  "value",
  "onChange",
];

const SourceHTMLAttributes = [
  ...HTMLAttributes,
  "height",
  "media",
  "sizes",
  "src",
  "srcSet",
  "srcset",
  "type",
  "width",
];

const StyleHTMLAttributes = [
  ...HTMLAttributes,
  "media",
  "nonce",
  "scoped",
  "type",
];

const TableHTMLAttributes = [
  ...HTMLAttributes,
  "cellPadding",
  "cellSpacing",
  "summary",
];

const TextareaHTMLAttributes = [
  ...HTMLAttributes,
  "autoComplete",

  "autoFocus",

  "cols",
  "dirName",

  "disabled",
  "form",
  "maxLength",

  "minLength",

  "name",
  "placeholder",
  "readOnly",

  "required",
  "rows",
  "value",
  "wrap",

  "onChange",
];

const TdHTMLAttributes = [
  ...HTMLAttributes,
  "align",
  "colSpan",

  "headers",
  "rowSpan",

  "scope",
  "abbr",
  "valign",
];

const ThHTMLAttributes = [
  ...HTMLAttributes,
  "align",
  "colSpan",

  "headers",
  "rowSpan",

  "scope",
  "abbr",
];

const TimeHTMLAttributes = [...HTMLAttributes, "dateTime"];

const TrackHTMLAttributes = [
  ...HTMLAttributes,
  "default",
  "kind",
  "label",
  "src",
  "srcLang",
];

const VideoHTMLAttributes = [
  ...HTMLAttributes,
  "height",
  "playsInline",
  "poster",
  "width",
  "disablePictureInPicture",
];

const SVGAttributes = [
  ...DOMAttributes,
  ...AriaAttributes,
  ...ReactAttributes,

  "className",
  "class",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  "target",
  "type",
  "width",
  "role",
  "tabIndex",
  "crossOrigin",

  "accentHeight",

  "accumulate",
  "additive",
  "alignmentBaselin",

  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",

  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",

  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",

  "clip",
  "clipPath",

  "clipPathUnits",
  "clipRule",

  "colorInterpolation",
  "colorInterpolationFilter",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "path",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "points",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "scale",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewBox",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlink:actuate",
  "xlinkArcrole",
  "xlink:arcrole",
  "xlinkHref",
  "xlink:href",
  "xlinkRole",
  "xlink:role",
  "xlinkShow",
  "xlink:show",
  "xlinkTitle",
  "xlink:title",
  "xlinkType",
  "xlink:type",
  "xmlBase",
  "xml:base",
  "xmlLang",
  "xml:lang",
  "xmlns",
  "xmlnsXlink",
  "xmlns:xlink",
  "xmlSpace",
  "xml:space",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
];

<svg  ></svg>

const WebViewHTMLAttributes = [
  ...HTMLAttributes,
  "allowFullScreen",
  "allowfullscreen",
  "allowpopups",
  "autoFocus",
  "autofocus",
  "autosize",
  "blinkfeatures",
  "disableblinkfeatures",
  "disableguestresize",
  "disablewebsecurity",
  "guestinstance",
  "httpreferrer",
  "nodeintegration",
  "partition",
  "plugins",
  "preload",
  "src",
  "useragent",
  "webpreferences",
];

module.exports = {
  HTMLAttributes,
  AnchorHTMLAttributes,
  AreaHTMLAttributes,
  BaseHTMLAttributes,
  BlockquoteHTMLAttributes,
  ButtonHTMLAttributes,
  CanvasHTMLAttributes,
  ColHTMLAttributes,
  ColgroupHTMLAttributes,
  DataHTMLAttributes,
  DetailsHTMLAttributes,
  DelHTMLAttributes,
  DialogHTMLAttributes,
  EmbedHTMLAttributes,
  FieldsetHTMLAttributes,
  FormHTMLAttributes,
  HtmlHTMLAttributes,
  IframeHTMLAttributes,
  ImgHTMLAttributes,
  InsHTMLAttributes,
  InputHTMLAttributes,
  KeygenHTMLAttributes,
  LabelHTMLAttributes,
  LiHTMLAttributes,
  LinkHTMLAttributes,
  MapHTMLAttributes,
  MenuHTMLAttributes,
  MediaHTMLAttributes,
  AudioHTMLAttributes,
  MetaHTMLAttributes,
  MeterHTMLAttributes,
  QuoteHTMLAttributes,
  ObjectHTMLAttributes,
  OlHTMLAttributes,
  OptgroupHTMLAttributes,
  OptionHTMLAttributes,
  OutputHTMLAttributes,
  ParamHTMLAttributes,
  ProgressHTMLAttributes,
  SlotHTMLAttributes,
  ScriptHTMLAttributes,
  SVGAttributes,
  SelectHTMLAttributes,
  SourceHTMLAttributes,
  StyleHTMLAttributes,
  TableHTMLAttributes,
  TextareaHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
  TimeHTMLAttributes,
  TrackHTMLAttributes,
  VideoHTMLAttributes,
  WebViewHTMLAttributes,
};
