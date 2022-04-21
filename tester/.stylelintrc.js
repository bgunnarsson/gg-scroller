module.exports = {
  extends: "stylelint-config-primer",
  plugins: [
    "stylelint-order",
  ],
  "ignoreFiles": "**/*.tsx",
  rules: {
    "color-named": ["never", { ignore: ["inside-function"] }],
    "max-empty-lines": 5,
    //"rule-empty-line-before": "always",
    "selector-max-type": [4, {
      "ignoreTypes": ["svg", "path"],
    }],
    "selector-max-compound-selectors": 6,
    "selector-max-specificity": "0,6,0",
    "max-nesting-depth": [2, {
      "ignore": ["pseudo-classes", "blockless-at-rules"],
      "ignoreAtRules": ["svg", "path"],
    }],
    "media-feature-name-blacklist": ["min-width"],
    "number-leading-zero": null,
    "plugin/no-unsupported-browser-features": null,
    "selector-class-pattern": null,
    "selector-no-qualifying-type": null,
    "string-quotes": "double",
    "at-rule-blacklist": null,
    "no-missing-end-of-source-newline": null,
    "primer/selector-no-utility": null,
    "order/properties-order": [
      [
        {
          order: "flexible",
          properties: [
            "content",
          ],
        },

        {
          order: "flexible",
          properties: [
            "display",

            "flex",
            "flex-grow",
            "flex-shrink",
            "flex-basis",
            "flex-direction",
            "flex-wrap",
            "flex-flow",
            "align-content",
            "align-items",
            "align-self",
            "justify-content",
            "order",

            "grid",
            "grid-area",
            "grid-auto-columns",
            "grid-auto-flow",
            "grid-auto-rows",
            "grid-column",
            "grid-column-end",
            "grid-column-gap",
            "grid-column-start",
            "grid-gap",
            "grid-row",
            "grid-row-end",
            "grid-row-gap",
            "grid-row-start",
            "grid-template",
            "grid-template-areas",
            "grid-template-columns",
            "grid-template-rows",
          ],
        },

        {
          order: "flexible",
          properties: [
            "position",
            "top",
            "right",
            "bottom",
            "left",
            "z-index",
          ],
        },

        {
          order: "flexible",
          properties: [
            "transform",
            "transform-box",
            "transform-origin",
            "transform-style",

            "perspective",
            "perspective-origin",

            "object-fit",
          ],
        },

        {
          order: "flexible",
          properties: [
            "width",
            "max-width",
            "min-width",
            "height",
            "max-height",
            "min-height",
          ],
        },

        {
          order: "flexible",
          properties: [
            "margin",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "padding",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",

            "overflow",
            "overflow-x",
            "overflow-y",

            "float",
            "clear",
          ],
        },

        {
          order: "flexible",
          properties: [
            "background",
            "background-attachment",
            "background-blend-mode",
            "background-clip",
            "background-color",
            "background-image",
            "background-origin",
            "background-position",
            "background-position-x",
            "background-position-y",
            "background-repeat",
            "background-repeat-x",
            "background-repeat-y",
            "background-size",

            "border",
            "border-top",
            "border-right",
            "border-bottom",
            "border-left",

            "border-color",
            "border-top-color",
            "border-right-color",
            "border-bottom-color",
            "border-left-color",

            "border-radius",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-bottom-right-radius",
            "border-bottom-left-radius",

            "border-image",
            "border-style",
            "border-width",
            "box-shadow",

            "color",
            "mix-blend-mode",
            "opacity",

            "outline",
            "outline-offset",
            "outline-style",
            "outline-width",

            "visibility",

            "filter",
            "fill",
            "stroke",
          ],
        },

        {
          order: "flexible",
          properties: [
            "font",
            "font-display",
            "font-family",
            "font-feature-settings",
            "font-kerning",
            "font-size",
            "font-stretch",
            "font-style",
            "font-variant-caps",
            "font-variant-east-asian",
            "font-variant-ligatures",
            "font-variant-numeric",
            "font-variant",
            "font-variation-settings",
            "font-weight",
            "-webkit-font-size-delta",
            "-webkit-font-smoothing",

            "letter-spacing",

            "line-break",
            "line-height",

            "speak",

            "text-align",
            "text-align-last",
            "text-combine-upright",
            "text-decoration",
            "text-decoration-color",
            "text-decoration-line",
            "text-decoration-skip",
            "text-decoration-style",
            "text-indent",
            "text-orientation",
            "text-overflow",
            "text-rendering",
            "text-size-adjust",
            "text-shadow",
            "text-transform",
            "text-underline-position",

            "vertical-align",
            "white-space",

            "word-break",
            "word-spacing",
            "word-wrap",
          ],
        },

        {
          order: "flexible",
          properties: [
            "cursor",
            "user-select",
            "pointer-events",
          ],
        },

        {
          order: "flexible",
          properties: [
            "transition",
            "transition-delay",
            "transition-duration",
            "transition-property",
            "transition-timing-function",

            "will-change",
          ],
        },
      ],

      { unspecified: "bottom" },
    ],
  },
};
