// interface Props<T> {
//   children?: ReactNode | undefined;
//   key?: Key | undefined;
//   ref?: LegacyRef<T> | undefined;
// }

// interface HTMLProps<T> extends AllHTMLAttributes<T>, ClassAttributes<T> {}

// type DetailedHTMLProps<E extends HTMLAttributes<T>, T> = ClassAttributes<T> & E;

// interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}

// interface AllHTMLAttributes<T> extends HTMLAttributes<T> {
//     // Standard HTML Attributes
//     accept?: string | undefined;
//     acceptCharset?: string | undefined;
//     "accept-charset"?: string | undefined;
//     action?: string | undefined;
//     allowFullScreen?: boolean | undefined;
//     allowfullscreen?: boolean | string | undefined;
//     allowTransparency?: boolean | undefined;
//     allowtransparency?: boolean | string | undefined;
//     alt?: string | undefined;
//     as?: string | undefined;
//     async?: boolean | string | undefined;
//     autoComplete?: string | undefined;
//     autocomplete?: string | undefined;
//     autoFocus?: boolean | undefined;
//     autofocus?: boolean | string | undefined;
//     autoPlay?: boolean | undefined;
//     autoplay?: boolean | string | undefined;
//     capture?: boolean | string | undefined;
//     cellPadding?: number | string | undefined;
//     cellpadding?: number | string | undefined;
//     cellSpacing?: number | string | undefined;
//     cellspacing?: number | string | undefined;
//     charSet?: string | undefined;
//     charset?: string | undefined;
//     challenge?: string | undefined;
//     checked?: boolean | string | undefined;
//     cite?: string | undefined;
//     class?: string | undefined;
//     classID?: string | undefined;
//     classid?: string | undefined;
//     cols?: number | string | undefined;
//     colSpan?: number | undefined;
//     colspan?: number | string | undefined;
//     content?: string | undefined;
//     controls?: boolean | string | undefined;
//     coords?: string | undefined;
//     crossOrigin?: string | undefined;
//     crossorigin?: string | undefined;
//     data?: string | undefined;
//     dateTime?: string | undefined;
//     datetime?: string | undefined;
//     default?: boolean | string | undefined;
//     defer?: boolean | string | undefined;
//     disabled?: boolean | string | undefined;
//     download?: any;
//     encType?: string | undefined;
//     enctype?: string | undefined;
//     for?: string | undefined;
//     form?: string | undefined;
//     formAction?: string | undefined;
//     formaction?: string | undefined;
//     formEncType?: string | undefined;
//     formenctype?: string | undefined;
//     formMethod?: string | undefined;
//     formmethod?: string | undefined;
//     formNoValidate?: boolean | undefined;
//     formnovalidate?: boolean | string | undefined;
//     formTarget?: string | undefined;
//     formtarget?: string | undefined;
//     frameBorder?: number | string | undefined;
//     frameborder?: number | string | undefined;
//     headers?: string | undefined;
//     height?: number | string | undefined;
//     high?: number | string | undefined;
//     href?: string | undefined;
//     hrefLang?: string | undefined;
//     hreflang?: string | undefined;
//     htmlFor?: string | undefined;
//     httpEquiv?: string | undefined;
//     "http-equiv"?: string | undefined;
//     integrity?: string | undefined;
//     keyParams?: string | undefined;
//     keyparams?: string | undefined;
//     keyType?: string | undefined;
//     keytype?: string | undefined;
//     kind?: string | undefined;
//     label?: string | undefined;
//     list?: string | undefined;
//     loop?: boolean | string | undefined;
//     low?: number | string | undefined;
//     manifest?: string | undefined;
//     marginHeight?: number | undefined;
//     marginheight?: number | string | undefined;
//     marginWidth?: number | undefined;
//     marginwidth?: number | string | undefined;
//     max?: number | string | undefined;
//     maxLength?: number | undefined;
//     maxlength?: number | string | undefined;
//     media?: string | undefined;
//     mediaGroup?: string | undefined;
//     mediagroup?: string | undefined;
//     method?: string | undefined;
//     min?: number | string | undefined;
//     minLength?: number | undefined;
//     minlength?: number | string | undefined;
//     multiple?: boolean | string | undefined;
//     muted?: boolean | string | undefined;
//     name?: string | undefined;
//     nonce?: string | undefined;
//     noValidate?: boolean | undefined;
//     novalidate?: boolean | string | undefined;
//     open?: boolean | string | undefined;
//     optimum?: number | string | undefined;
//     pattern?: string | undefined;
//     placeholder?: string | undefined;
//     playsInline?: boolean | undefined;
//     playsinline?: boolean | string | undefined;
//     poster?: string | undefined;
//     preload?: string | undefined;
//     readOnly?: boolean | undefined;
//     readonly?: boolean | string | undefined;
//     rel?: string | undefined;
//     required?: boolean | string | undefined;
//     reversed?: boolean | string | undefined;
//     rows?: number | string | undefined;
//     rowSpan?: number | undefined;
//     rowspan?: number | string | undefined;
//     sandbox?: string | undefined;
//     scope?: string | undefined;
//     scoped?: boolean | string | undefined;
//     scrolling?: string | undefined;
//     seamless?: boolean | string | undefined;
//     selected?: boolean | string | undefined;
//     shape?: string | undefined;
//     size?: number | string | undefined;
//     sizes?: string | undefined;
//     span?: number | string | undefined;
//     src?: string | undefined;
//     srcDoc?: string | undefined;
//     srcdoc?: string | undefined;
//     srcLang?: string | undefined;
//     srclang?: string | undefined;
//     srcSet?: string | undefined;
//     srcset?: string | undefined;
//     start?: number | string | undefined;
//     step?: number | string | undefined;
//     summary?: string | undefined;
//     target?: string | undefined;
//     type?: string | undefined;
//     useMap?: string | undefined;
//     usemap?: string | undefined;
//     value?: string | string[] | number | undefined;
//     width?: number | string | undefined;
//     wmode?: string | undefined;
//     wrap?: string | undefined;
//   }

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
  "accept-charset",
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
  "http-equiv",
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

// this list is "complete" in that it contains every SVG attribute
// that React supports, but the types can be improved.
// Full list here: https://facebook.github.io/react/docs/dom-elements.html
//
// The three broad type categories are (in order of restrictiveness):
//   - "number | string"
//   - "string"
//   - union of string literals
// interface SVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
//   // Attributes which also defined in HTMLAttributes
//   // See comment in SVGDOMPropertyConfig.js
//   "className",
//   "class",
//   "color",
//   "height",
//   "id",
//   "lang",
//   max?: number | string | undefined;
//   media?: string | undefined;
//   method?: string | undefined;
//   min?: number | string | undefined;
//   name?: string | undefined;
//   style?: CSSProperties | undefined;
//   target?: string | undefined;
//   type?: string | undefined;
//   width?: number | string | undefined;

//   // Other HTML properties supported by SVG elements in browsers
//   role?: string | undefined;
//   tabIndex?: number | undefined;
//   tabindex?: number | string | undefined;
//   crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
//   crossorigin?: "anonymous" | "use-credentials" | "" | undefined;

//   // SVG Specific attributes
//   accentHeight?: number | string | undefined;
//   "accent-height"?: number | string | undefined;
//   accumulate?: "none" | "sum" | undefined;
//   additive?: "replace" | "sum" | undefined;
//   alignmentBaseline?:
//     | "auto"
//     | "baseline"
//     | "before-edge"
//     | "text-before-edge"
//     | "middle"
//     | "central"
//     | "after-edge"
//     | "text-after-edge"
//     | "ideographic"
//     | "alphabetic"
//     | "hanging"
//     | "mathematical"
//     | "inherit"
//     | undefined;
//   "alignment-baseline"?:
//     | "auto"
//     | "baseline"
//     | "before-edge"
//     | "text-before-edge"
//     | "middle"
//     | "central"
//     | "after-edge"
//     | "text-after-edge"
//     | "ideographic"
//     | "alphabetic"
//     | "hanging"
//     | "mathematical"
//     | "inherit"
//     | undefined;
//   allowReorder?: "no" | "yes" | undefined;
//   alphabetic?: number | string | undefined;
//   amplitude?: number | string | undefined;
//   arabicForm?: "initial" | "medial" | "terminal" | "isolated" | undefined;
//   "arabic-form"?: "initial" | "medial" | "terminal" | "isolated" | undefined;
//   ascent?: number | string | undefined;
//   attributeName?: string | undefined;
//   attributeType?: string | undefined;
//   autoReverse?: Booleanish | undefined;
//   azimuth?: number | string | undefined;
//   baseFrequency?: number | string | undefined;
//   baselineShift?: number | string | undefined;
//   "baseline-shift"?: number | string | undefined;
//   baseProfile?: number | string | undefined;
//   bbox?: number | string | undefined;
//   begin?: number | string | undefined;
//   bias?: number | string | undefined;
//   by?: number | string | undefined;
//   calcMode?: number | string | undefined;
//   capHeight?: number | string | undefined;
//   "cap-height"?: number | string | undefined;
//   clip?: number | string | undefined;
//   clipPath?: string | undefined;
//   "clip-path"?: string | undefined;
//   clipPathUnits?: number | string | undefined;
//   clipRule?: number | string | undefined;
//   "clip-rule"?: number | string | undefined;
//   colorInterpolation?: number | string | undefined;
//   "color-interpolation"?: number | string | undefined;
//   colorInterpolationFilters?:
//     | "auto"
//     | "sRGB"
//     | "linearRGB"
//     | "inherit"
//     | undefined;
//   "color-interpolation-filters"?:
//     | "auto"
//     | "sRGB"
//     | "linearRGB"
//     | "inherit"
//     | undefined;
//   colorProfile?: number | string | undefined;
//   "color-profile"?: number | string | undefined;
//   colorRendering?: number | string | undefined;
//   "color-rendering"?: number | string | undefined;
//   contentScriptType?: number | string | undefined;
//   contentStyleType?: number | string | undefined;
//   cursor?: number | string | undefined;
//   cx?: number | string | undefined;
//   cy?: number | string | undefined;
//   d?: string | undefined;
//   decelerate?: number | string | undefined;
//   descent?: number | string | undefined;
//   diffuseConstant?: number | string | undefined;
//   direction?: number | string | undefined;
//   display?: number | string | undefined;
//   divisor?: number | string | undefined;
//   dominantBaseline?: number | string | undefined;
//   "dominant-baseline"?: number | string | undefined;
//   dur?: number | string | undefined;
//   dx?: number | string | undefined;
//   dy?: number | string | undefined;
//   edgeMode?: number | string | undefined;
//   elevation?: number | string | undefined;
//   enableBackground?: number | string | undefined;
//   "enable-background"?: number | string | undefined;
//   end?: number | string | undefined;
//   exponent?: number | string | undefined;
//   externalResourcesRequired?: Booleanish | undefined;
//   fill?: string | undefined;
//   fillOpacity?: number | string | undefined;
//   "fill-opacity"?: number | string | undefined;
//   fillRule?: "nonzero" | "evenodd" | "inherit" | undefined;
//   "fill-rule"?: "nonzero" | "evenodd" | "inherit" | undefined;
//   filter?: string | undefined;
//   filterRes?: number | string | undefined;
//   filterUnits?: number | string | undefined;
//   floodColor?: number | string | undefined;
//   "flood-color"?: number | string | undefined;
//   floodOpacity?: number | string | undefined;
//   "flood-opacity"?: number | string | undefined;
//   focusable?: Booleanish | "auto" | undefined;
//   fontFamily?: string | undefined;
//   "font-family"?: string | undefined;
//   fontSize?: number | string | undefined;
//   "font-size"?: number | string | undefined;
//   fontSizeAdjust?: number | string | undefined;
//   "font-size-adjust"?: number | string | undefined;
//   fontStretch?: number | string | undefined;
//   "font-stretch"?: number | string | undefined;
//   fontStyle?: number | string | undefined;
//   "font-style"?: number | string | undefined;
//   fontVariant?: number | string | undefined;
//   "font-variant"?: number | string | undefined;
//   fontWeight?: number | string | undefined;
//   "font-weight"?: number | string | undefined;
//   format?: number | string | undefined;
//   from?: number | string | undefined;
//   fx?: number | string | undefined;
//   fy?: number | string | undefined;
//   g1?: number | string | undefined;
//   g2?: number | string | undefined;
//   glyphName?: number | string | undefined;
//   "glyph-name"?: number | string | undefined;
//   glyphOrientationHorizontal?: number | string | undefined;
//   "glyph-orientation-horizontal"?: number | string | undefined;
//   glyphOrientationVertical?: number | string | undefined;
//   "glyph-orientation-vertical"?: number | string | undefined;
//   glyphRef?: number | string | undefined;
//   gradientTransform?: string | undefined;
//   gradientUnits?: string | undefined;
//   hanging?: number | string | undefined;
//   horizAdvX?: number | string | undefined;
//   "horiz-adv-x"?: number | string | undefined;
//   horizOriginX?: number | string | undefined;
//   "horiz-origin-x"?: number | string | undefined;
//   href?: string | undefined;
//   ideographic?: number | string | undefined;
//   imageRendering?: number | string | undefined;
//   "image-rendering"?: number | string | undefined;
//   in2?: number | string | undefined;
//   in?: string | undefined;
//   intercept?: number | string | undefined;
//   k1?: number | string | undefined;
//   k2?: number | string | undefined;
//   k3?: number | string | undefined;
//   k4?: number | string | undefined;
//   k?: number | string | undefined;
//   kernelMatrix?: number | string | undefined;
//   kernelUnitLength?: number | string | undefined;
//   kerning?: number | string | undefined;
//   keyPoints?: number | string | undefined;
//   keySplines?: number | string | undefined;
//   keyTimes?: number | string | undefined;
//   lengthAdjust?: number | string | undefined;
//   letterSpacing?: number | string | undefined;
//   "letter-spacing"?: number | string | undefined;
//   lightingColor?: number | string | undefined;
//   "lighting-color"?: number | string | undefined;
//   limitingConeAngle?: number | string | undefined;
//   local?: number | string | undefined;
//   markerEnd?: string | undefined;
//   "marker-end"?: string | undefined;
//   markerHeight?: number | string | undefined;
//   markerMid?: string | undefined;
//   "marker-mid"?: string | undefined;
//   markerStart?: string | undefined;
//   "marker-start"?: string | undefined;
//   markerUnits?: number | string | undefined;
//   markerWidth?: number | string | undefined;
//   mask?: string | undefined;
//   maskContentUnits?: number | string | undefined;
//   maskUnits?: number | string | undefined;
//   mathematical?: number | string | undefined;
//   mode?: number | string | undefined;
//   numOctaves?: number | string | undefined;
//   offset?: number | string | undefined;
//   opacity?: number | string | undefined;
//   operator?: number | string | undefined;
//   order?: number | string | undefined;
//   orient?: number | string | undefined;
//   orientation?: number | string | undefined;
//   origin?: number | string | undefined;
//   overflow?: number | string | undefined;
//   overlinePosition?: number | string | undefined;
//   "overline-position"?: number | string | undefined;
//   overlineThickness?: number | string | undefined;
//   "overline-thickness"?: number | string | undefined;
//   paintOrder?: number | string | undefined;
//   "paint-order"?: number | string | undefined;
//   panose1?: number | string | undefined;
//   "panose-1"?: number | string | undefined;
//   path?: string | undefined;
//   pathLength?: number | string | undefined;
//   patternContentUnits?: string | undefined;
//   patternTransform?: number | string | undefined;
//   patternUnits?: string | undefined;
//   pointerEvents?: number | string | undefined;
//   "pointer-events"?: number | string | undefined;
//   points?: string | undefined;
//   pointsAtX?: number | string | undefined;
//   pointsAtY?: number | string | undefined;
//   pointsAtZ?: number | string | undefined;
//   preserveAlpha?: Booleanish | undefined;
//   preserveAspectRatio?: string | undefined;
//   primitiveUnits?: number | string | undefined;
//   r?: number | string | undefined;
//   radius?: number | string | undefined;
//   refX?: number | string | undefined;
//   refY?: number | string | undefined;
//   renderingIntent?: number | string | undefined;
//   "rendering-intent"?: number | string | undefined;
//   repeatCount?: number | string | undefined;
//   repeatDur?: number | string | undefined;
//   requiredExtensions?: number | string | undefined;
//   requiredFeatures?: number | string | undefined;
//   restart?: number | string | undefined;
//   result?: string | undefined;
//   rotate?: number | string | undefined;
//   rx?: number | string | undefined;
//   ry?: number | string | undefined;
//   scale?: number | string | undefined;
//   seed?: number | string | undefined;
//   shapeRendering?: number | string | undefined;
//   "shape-rendering"?: number | string | undefined;
//   slope?: number | string | undefined;
//   spacing?: number | string | undefined;
//   specularConstant?: number | string | undefined;
//   specularExponent?: number | string | undefined;
//   speed?: number | string | undefined;
//   spreadMethod?: string | undefined;
//   startOffset?: number | string | undefined;
//   stdDeviation?: number | string | undefined;
//   stemh?: number | string | undefined;
//   stemv?: number | string | undefined;
//   stitchTiles?: number | string | undefined;
//   stopColor?: string | undefined;
//   "stop-color"?: string | undefined;
//   stopOpacity?: number | string | undefined;
//   "stop-opacity"?: number | string | undefined;
//   strikethroughPosition?: number | string | undefined;
//   "strikethrough-position"?: number | string | undefined;
//   strikethroughThickness?: number | string | undefined;
//   "strikethrough-thickness"?: number | string | undefined;
//   string?: number | string | undefined;
//   stroke?: string | undefined;
//   strokeDasharray?: string | number | undefined;
//   "stroke-dasharray"?: string | number | undefined;
//   strokeDashoffset?: string | number | undefined;
//   "stroke-dashoffset"?: string | number | undefined;
//   strokeLinecap?: "butt" | "round" | "square" | "inherit" | undefined;
//   "stroke-linecap"?: "butt" | "round" | "square" | "inherit" | undefined;
//   strokeLinejoin?: "miter" | "round" | "bevel" | "inherit" | undefined;
//   "stroke-linejoin"?: "miter" | "round" | "bevel" | "inherit" | undefined;
//   strokeMiterlimit?: number | string | undefined;
//   "stroke-miterlimit"?: number | string | undefined;
//   strokeOpacity?: number | string | undefined;
//   "stroke-opacity"?: number | string | undefined;
//   strokeWidth?: number | string | undefined;
//   "stroke-width"?: number | string | undefined;
//   surfaceScale?: number | string | undefined;
//   systemLanguage?: number | string | undefined;
//   tableValues?: number | string | undefined;
//   targetX?: number | string | undefined;
//   targetY?: number | string | undefined;
//   textAnchor?: string | undefined;
//   "text-anchor"?: string | undefined;
//   textDecoration?: number | string | undefined;
//   "text-decoration"?: number | string | undefined;
//   textLength?: number | string | undefined;
//   textRendering?: number | string | undefined;
//   "text-rendering"?: number | string | undefined;
//   to?: number | string | undefined;
//   transform?: string | undefined;
//   u1?: number | string | undefined;
//   u2?: number | string | undefined;
//   underlinePosition?: number | string | undefined;
//   "underline-position"?: number | string | undefined;
//   underlineThickness?: number | string | undefined;
//   "underline-thickness"?: number | string | undefined;
//   unicode?: number | string | undefined;
//   unicodeBidi?: number | string | undefined;
//   "unicode-bidi"?: number | string | undefined;
//   unicodeRange?: number | string | undefined;
//   "unicode-range"?: number | string | undefined;
//   unitsPerEm?: number | string | undefined;
//   "units-per-em"?: number | string | undefined;
//   vAlphabetic?: number | string | undefined;
//   "v-alphabetic"?: number | string | undefined;
//   values?: string | undefined;
//   vectorEffect?: number | string | undefined;
//   "vector-effect"?: number | string | undefined;
//   version?: string | undefined;
//   vertAdvY?: number | string | undefined;
//   "vert-adv-y"?: number | string | undefined;
//   vertOriginX?: number | string | undefined;
//   "vert-origin-x"?: number | string | undefined;
//   vertOriginY?: number | string | undefined;
//   "vert-origin-y"?: number | string | undefined;
//   vHanging?: number | string | undefined;
//   "v-hanging"?: number | string | undefined;
//   vIdeographic?: number | string | undefined;
//   "v-ideographic"?: number | string | undefined;
//   viewBox?: string | undefined;
//   viewTarget?: number | string | undefined;
//   visibility?: number | string | undefined;
//   vMathematical?: number | string | undefined;
//   "v-mathematical"?: number | string | undefined;
//   widths?: number | string | undefined;
//   wordSpacing?: number | string | undefined;
//   "word-spacing"?: number | string | undefined;
//   writingMode?: number | string | undefined;
//   "writing-mode"?: number | string | undefined;
//   x1?: number | string | undefined;
//   x2?: number | string | undefined;
//   x?: number | string | undefined;
//   xChannelSelector?: string | undefined;
//   xHeight?: number | string | undefined;
//   "x-height"?: number | string | undefined;
//   xlinkActuate?: string | undefined;
//   "xlink:actuate"?: string | undefined;
//   xlinkArcrole?: string | undefined;
//   "xlink:arcrole"?: string | undefined;
//   xlinkHref?: string | undefined;
//   "xlink:href"?: string | undefined;
//   xlinkRole?: string | undefined;
//   "xlink:role"?: string | undefined;
//   xlinkShow?: string | undefined;
//   "xlink:show"?: string | undefined;
//   xlinkTitle?: string | undefined;
//   "xlink:title"?: string | undefined;
//   xlinkType?: string | undefined;
//   "xlink:type"?: string | undefined;
//   xmlBase?: string | undefined;
//   "xml:base"?: string | undefined;
//   xmlLang?: string | undefined;
//   "xml:lang"?: string | undefined;
//   xmlns?: string | undefined;
//   xmlnsXlink?: string | undefined;
//   "xmlns:xlink"?: string | undefined;
//   xmlSpace?: string | undefined;
//   "xml:space"?: string | undefined;
//   y1?: number | string | undefined;
//   y2?: number | string | undefined;
//   y?: number | string | undefined;
//   yChannelSelector?: string | undefined;
//   z?: number | string | undefined;
//   zoomAndPan?: string | undefined;
// }

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
