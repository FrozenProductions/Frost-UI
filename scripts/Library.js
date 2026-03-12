!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.FrostMenu=r():t.FrostMenu=r()}(this,()=>(()=>{"use strict";var t={490(t,r,e){e.d(r,{A:()=>d});var n=e(354),o=e.n(n),a=e(314),s=e.n(a),i=e(869),A=e(742),c=e(568),l=s()(o());l.i(i.A),l.i(A.A),l.i(c.A),l.push([t.id,`
`,"",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);let d=l},896(t,r,e){e.d(r,{A:()=>i});var n=e(354),o=e.n(n),a=e(314),s=e.n(a)()(o());s.push([t.id,`@keyframes menuSlideIn {
    from {
        opacity: 0;
        transform: translateY(-20px) scale(0.95);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

@keyframes menuSlideOut {
    from {
        opacity: 1;
        transform: translateY(0) scale(1);
    }

    to {
        opacity: 0;
        transform: translateY(20px) scale(0.95);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideIn {
    from {
        transform: translateY(-10px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

@keyframes buttonRipple {
    0% {
        width: 0;
        height: 0;
        opacity: 0.6;
    }

    100% {
        width: 500px;
        height: 500px;
        opacity: 0;
    }
}

@keyframes pageValueSlideIn {
    from {
        opacity: 0;
        transform: translateY(4px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pageValueSlideOut {
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-4px);
    }
}

@keyframes radioScale {
    0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
}

@keyframes radioRipple {
    0% {
        box-shadow: 0 0 0 0 rgba(114, 137, 218, 0.3);
    }

    100% {
        box-shadow: 0 0 0 20px rgba(114, 137, 218, 0);
    }
}

@keyframes frost-glow {
    0% {
        outline-color: var(--frost-accent-color);
        outline-offset: -1px;
    }
    50% {
        outline-color: var(--frost-accent-color);
        outline-offset: 3px;
    }
    100% {
        outline-color: var(--frost-accent-color);
        outline-offset: -1px;
    }
}

@keyframes shake {
    0%,
    100% {
        transform: translateX(0);
    }
    20%,
    60% {
        transform: translateX(-4px);
    }
    40%,
    80% {
        transform: translateX(4px);
    }
}

@keyframes switchRipple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

@keyframes toastSlideIn {
    from {
        opacity: 0;
        transform: translateX(100%);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes toastSlideOut {
    from {
        opacity: 1;
        transform: translateX(0);
    }

    to {
        opacity: 0;
        transform: translateX(100%);
    }
}
`,"",{version:3,sources:["webpack://./src/styles/base/animations.css"],names:[],mappings:"AAAA;IACI;QACI,UAAU;QACV,wCAAwC;IAC5C;;IAEA;QACI,UAAU;QACV,iCAAiC;IACrC;AACJ;;AAEA;IACI;QACI,UAAU;QACV,iCAAiC;IACrC;;IAEA;QACI,UAAU;QACV,uCAAuC;IAC3C;AACJ;;AAEA;IACI;QACI,UAAU;IACd;IACA;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,4BAA4B;QAC5B,UAAU;IACd;IACA;QACI,wBAAwB;QACxB,UAAU;IACd;AACJ;;AAEA;IACI;QACI,mBAAmB;QACnB,UAAU;IACd;AACJ;;AAEA;IACI;QACI,QAAQ;QACR,SAAS;QACT,YAAY;IAChB;;IAEA;QACI,YAAY;QACZ,aAAa;QACb,UAAU;IACd;AACJ;;AAEA;IACI;QACI,UAAU;QACV,0BAA0B;IAC9B;IACA;QACI,UAAU;QACV,wBAAwB;IAC5B;AACJ;;AAEA;IACI;QACI,UAAU;QACV,wBAAwB;IAC5B;IACA;QACI,UAAU;QACV,2BAA2B;IAC/B;AACJ;;AAEA;IACI;QACI,yCAAyC;QACzC,UAAU;IACd;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,yCAAyC;QACzC,UAAU;IACd;AACJ;;AAEA;IACI;QACI,4CAA4C;IAChD;;IAEA;QACI,6CAA6C;IACjD;AACJ;;AAEA;IACI;QACI,wCAAwC;QACxC,oBAAoB;IACxB;IACA;QACI,wCAAwC;QACxC,mBAAmB;IACvB;IACA;QACI,wCAAwC;QACxC,oBAAoB;IACxB;AACJ;;AAEA;IACI;;QAEI,wBAAwB;IAC5B;IACA;;QAEI,2BAA2B;IAC/B;IACA;;QAEI,0BAA0B;IAC9B;AACJ;;AAEA;IACI;QACI,mBAAmB;QACnB,UAAU;IACd;AACJ;;AAEA;IACI;QACI,UAAU;QACV,2BAA2B;IAC/B;;IAEA;QACI,UAAU;QACV,wBAAwB;IAC5B;AACJ;;AAEA;IACI;QACI,UAAU;QACV,wBAAwB;IAC5B;;IAEA;QACI,UAAU;QACV,2BAA2B;IAC/B;AACJ",sourcesContent:["@keyframes menuSlideIn {\n    from {\n        opacity: 0;\n        transform: translateY(-20px) scale(0.95);\n    }\n\n    to {\n        opacity: 1;\n        transform: translateY(0) scale(1);\n    }\n}\n\n@keyframes menuSlideOut {\n    from {\n        opacity: 1;\n        transform: translateY(0) scale(1);\n    }\n\n    to {\n        opacity: 0;\n        transform: translateY(20px) scale(0.95);\n    }\n}\n\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n@keyframes slideIn {\n    from {\n        transform: translateY(-10px);\n        opacity: 0;\n    }\n    to {\n        transform: translateY(0);\n        opacity: 1;\n    }\n}\n\n@keyframes ripple {\n    to {\n        transform: scale(4);\n        opacity: 0;\n    }\n}\n\n@keyframes buttonRipple {\n    0% {\n        width: 0;\n        height: 0;\n        opacity: 0.6;\n    }\n\n    100% {\n        width: 500px;\n        height: 500px;\n        opacity: 0;\n    }\n}\n\n@keyframes pageValueSlideIn {\n    from {\n        opacity: 0;\n        transform: translateY(4px);\n    }\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n@keyframes pageValueSlideOut {\n    from {\n        opacity: 1;\n        transform: translateY(0);\n    }\n    to {\n        opacity: 0;\n        transform: translateY(-4px);\n    }\n}\n\n@keyframes radioScale {\n    0% {\n        transform: translate(-50%, -50%) scale(0);\n        opacity: 0;\n    }\n\n    50% {\n        opacity: 0.5;\n    }\n\n    100% {\n        transform: translate(-50%, -50%) scale(1);\n        opacity: 1;\n    }\n}\n\n@keyframes radioRipple {\n    0% {\n        box-shadow: 0 0 0 0 rgba(114, 137, 218, 0.3);\n    }\n\n    100% {\n        box-shadow: 0 0 0 20px rgba(114, 137, 218, 0);\n    }\n}\n\n@keyframes frost-glow {\n    0% {\n        outline-color: var(--frost-accent-color);\n        outline-offset: -1px;\n    }\n    50% {\n        outline-color: var(--frost-accent-color);\n        outline-offset: 3px;\n    }\n    100% {\n        outline-color: var(--frost-accent-color);\n        outline-offset: -1px;\n    }\n}\n\n@keyframes shake {\n    0%,\n    100% {\n        transform: translateX(0);\n    }\n    20%,\n    60% {\n        transform: translateX(-4px);\n    }\n    40%,\n    80% {\n        transform: translateX(4px);\n    }\n}\n\n@keyframes switchRipple {\n    to {\n        transform: scale(4);\n        opacity: 0;\n    }\n}\n\n@keyframes toastSlideIn {\n    from {\n        opacity: 0;\n        transform: translateX(100%);\n    }\n\n    to {\n        opacity: 1;\n        transform: translateX(0);\n    }\n}\n\n@keyframes toastSlideOut {\n    from {\n        opacity: 1;\n        transform: translateX(0);\n    }\n\n    to {\n        opacity: 0;\n        transform: translateX(100%);\n    }\n}\n"],sourceRoot:""}]);let i=s},869(t,r,e){e.d(r,{A:()=>p});var n=e(354),o=e.n(n),a=e(314),s=e.n(a),i=e(896),A=e(172),c=e(836),l=e(98),d=s()(o());d.i(i.A),d.i(A.A),d.i(c.A),d.i(l.A),d.push([t.id,`
`,"",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);let p=d},172(t,r,e){e.d(r,{A:()=>i});var n=e(354),o=e.n(n),a=e(314),s=e.n(a)()(o());s.push([t.id,`.frost-menu {
    position: fixed !important;
    background: linear-gradient(145deg, var(--frost-bg-primary), var(--frost-bg-primary)) !important;
    border: 1px solid var(--frost-border-color) !important;
    border-radius: 12px !important;
    min-width: 280px !important;
    max-width: 280px !important;
    color: var(--frost-text-primary) !important;
    font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, sans-serif !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    z-index: 999999 !important;
    user-select: none !important;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4) !important;
    backdrop-filter: blur(10px) !important;
    cursor: default !important;
}

.frost-menu * {
    font-family: inherit !important;
    font-weight: 600 !important;
    font-size: 12px !important;
    text-transform: uppercase !important;
    letter-spacing: 0.01em !important;
}

.frost-menu .frost-category-header,
.frost-menu .frost-toggle,
.frost-menu .frost-slider input[type="range"],
.frost-menu .frost-radio-option,
.frost-menu .frost-select-value,
.frost-menu .frost-color-preview,
.frost-menu .frost-page-arrow {
    cursor: pointer !important;
}

.frost-header {
    background: var(--frost-bg-secondary);
    padding: 16px 20px;
    cursor: move !important;
    border-bottom: 1px solid var(--frost-border-color);
    border-radius: 12px 12px 0 0;
    font-weight: 600 !important;
    font-size: 14px !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase !important;
    letter-spacing: 0.01em !important;
    color: var(--frost-text-primary);
}

.frost-content {
    padding: 16px;
    max-height: 70vh;
    overflow-y: auto;
    position: relative;
    scrollbar-width: thin;
}

.frost-menu.show {
    animation: menuSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.frost-menu.hide {
    animation: menuSlideOut 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
`,"",{version:3,sources:["webpack://./src/styles/base/menu.css"],names:[],mappings:"AAAA;IACI,0BAA0B;IAC1B,gGAAgG;IAChG,sDAAsD;IACtD,8BAA8B;IAC9B,2BAA2B;IAC3B,2BAA2B;IAC3B,2CAA2C;IAC3C;sDACkD;IAClD,8CAA8C;IAC9C,6CAA6C;IAC7C,0BAA0B;IAC1B,4BAA4B;IAC5B,oDAAoD;IACpD,sCAAsC;IACtC,0BAA0B;AAC9B;;AAEA;IACI,+BAA+B;IAC/B,2BAA2B;IAC3B,0BAA0B;IAC1B,oCAAoC;IACpC,iCAAiC;AACrC;;AAEA;;;;;;;IAOI,0BAA0B;AAC9B;;AAEA;IACI,qCAAqC;IACrC,kBAAkB;IAClB,uBAAuB;IACvB,kDAAkD;IAClD,4BAA4B;IAC5B,2BAA2B;IAC3B,0BAA0B;IAC1B,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,oCAAoC;IACpC,iCAAiC;IACjC,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,iEAAiE;AACrE;;AAEA;IACI,kEAAkE;AACtE",sourcesContent:['.frost-menu {\n    position: fixed !important;\n    background: linear-gradient(145deg, var(--frost-bg-primary), var(--frost-bg-primary)) !important;\n    border: 1px solid var(--frost-border-color) !important;\n    border-radius: 12px !important;\n    min-width: 280px !important;\n    max-width: 280px !important;\n    color: var(--frost-text-primary) !important;\n    font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n        "Helvetica Neue", Arial, sans-serif !important;\n    -webkit-font-smoothing: antialiased !important;\n    -moz-osx-font-smoothing: grayscale !important;\n    z-index: 999999 !important;\n    user-select: none !important;\n    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4) !important;\n    backdrop-filter: blur(10px) !important;\n    cursor: default !important;\n}\n\n.frost-menu * {\n    font-family: inherit !important;\n    font-weight: 600 !important;\n    font-size: 12px !important;\n    text-transform: uppercase !important;\n    letter-spacing: 0.01em !important;\n}\n\n.frost-menu .frost-category-header,\n.frost-menu .frost-toggle,\n.frost-menu .frost-slider input[type="range"],\n.frost-menu .frost-radio-option,\n.frost-menu .frost-select-value,\n.frost-menu .frost-color-preview,\n.frost-menu .frost-page-arrow {\n    cursor: pointer !important;\n}\n\n.frost-header {\n    background: var(--frost-bg-secondary);\n    padding: 16px 20px;\n    cursor: move !important;\n    border-bottom: 1px solid var(--frost-border-color);\n    border-radius: 12px 12px 0 0;\n    font-weight: 600 !important;\n    font-size: 14px !important;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    text-transform: uppercase !important;\n    letter-spacing: 0.01em !important;\n    color: var(--frost-text-primary);\n}\n\n.frost-content {\n    padding: 16px;\n    max-height: 70vh;\n    overflow-y: auto;\n    position: relative;\n    scrollbar-width: thin;\n}\n\n.frost-menu.show {\n    animation: menuSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n\n.frost-menu.hide {\n    animation: menuSlideOut 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n'],sourceRoot:""}]);let i=s},836(t,r,e){e.d(r,{A:()=>i});var n=e(354),o=e.n(n),a=e(314),s=e.n(a)()(o());s.push([t.id,`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    height: 100%;
    width: 100%;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
        "Open Sans", "Helvetica Neue", sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

button,
input,
select,
textarea {
    font: inherit;
    color: inherit;
}

a {
    color: inherit;
    text-decoration: none;
}
`,"",{version:3,sources:["webpack://./src/styles/base/reset.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;;IAEI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI;iDAC6C;IAC7C,gBAAgB;IAChB,mCAAmC;IACnC,kCAAkC;AACtC;;AAEA;;;;IAII,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,qBAAqB;AACzB",sourcesContent:['* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml,\nbody {\n    height: 100%;\n    width: 100%;\n}\n\nbody {\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,\n        "Open Sans", "Helvetica Neue", sans-serif;\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n    font: inherit;\n    color: inherit;\n}\n\na {\n    color: inherit;\n    text-decoration: none;\n}\n'],sourceRoot:""}]);let i=s},98(t,r,e){e.d(r,{A:()=>i});var n=e(354),o=e.n(n),a=e(314),s=e.n(a)()(o());s.push([t.id,`:root {
    --frost-bg-primary: rgba(25, 25, 35, 0.95);
    --frost-bg-secondary: rgba(30, 30, 40, 0.6);
    --frost-bg-tertiary: rgba(40, 40, 50, 0.4);
    --frost-border-color: rgba(255, 255, 255, 0.1);
    --frost-text-primary: rgba(255, 255, 255, 0.9);
    --frost-text-secondary: rgba(255, 255, 255, 0.7);
    --frost-accent-color: #7289da;
    --frost-accent-hover: #5b6eaf;
    --frost-shadow-color: rgba(0, 0, 0, 0.2);
    --frost-ripple-color: rgba(255, 255, 255, 0.7);
}
`,"",{version:3,sources:["webpack://./src/styles/base/variables.css"],names:[],mappings:"AAAA;IACI,0CAA0C;IAC1C,2CAA2C;IAC3C,0CAA0C;IAC1C,8CAA8C;IAC9C,8CAA8C;IAC9C,gDAAgD;IAChD,6BAA6B;IAC7B,6BAA6B;IAC7B,wCAAwC;IACxC,8CAA8C;AAClD",sourcesContent:[":root {\n    --frost-bg-primary: rgba(25, 25, 35, 0.95);\n    --frost-bg-secondary: rgba(30, 30, 40, 0.6);\n    --frost-bg-tertiary: rgba(40, 40, 50, 0.4);\n    --frost-border-color: rgba(255, 255, 255, 0.1);\n    --frost-text-primary: rgba(255, 255, 255, 0.9);\n    --frost-text-secondary: rgba(255, 255, 255, 0.7);\n    --frost-accent-color: #7289da;\n    --frost-accent-hover: #5b6eaf;\n    --frost-shadow-color: rgba(0, 0, 0, 0.2);\n    --frost-ripple-color: rgba(255, 255, 255, 0.7);\n}\n"],sourceRoot:""}]);let i=s},512(t,r,e){e.d(r,{A:()=>i});var n=e(354),o=e.n(n),a=e(314),s=e.n(a)()(o());s.push([t.id,`.frost-button-container {
    margin: 4px 0;
    padding: 8px 10px;
    border-radius: 6px;
    transition: all 0.2s ease;
}

.frost-button {
    position: relative;
    width: 100%;
    padding: 10px 16px;
    background: var(--frost-bg-tertiary);
    border: 1px solid var(--frost-border-color);
    border-radius: 6px;
    color: var(--frost-text-primary);
    font-size: 12px !important;
    font-weight: 600 !important;
    text-transform: uppercase;
    letter-spacing: 0.02em !important;
    cursor: pointer;
    transition: all 0.2s ease;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.frost-button:hover {
    background: var(--frost-bg-secondary);
    transform: translateX(4px);
    border-color: var(--frost-accent-color);
}

.frost-button:active {
    transform: translateX(4px) translateY(1px);
}

.frost-button.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    border-color: rgba(255, 255, 255, 0.05);
}

.frost-button-ripple {
    position: absolute;
    border-radius: 50%;
    background: var(--frost-ripple-color);
    transform: translate(-50%, -50%);
    pointer-events: none;
    animation: buttonRipple 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.frost-button.primary {
    background: linear-gradient(135deg, var(--frost-accent-color), var(--frost-accent-hover));
    border-color: var(--frost-accent-color);
}

.frost-button.primary:hover {
    background: linear-gradient(135deg, var(--frost-accent-color), var(--frost-accent-hover));
    box-shadow: 0 4px 12px var(--frost-shadow-color);
}

.frost-button.primary .frost-button-ripple {
    background: rgba(255, 255, 255, 0.4);
}

.frost-button.destructive {
    background: linear-gradient(135deg, rgba(240, 71, 71, 0.8), rgba(200, 50, 50, 0.8));
    border-color: rgba(240, 71, 71, 0.5);
}

.frost-button.destructive:hover {
    background: linear-gradient(135deg, rgba(240, 71, 71, 0.9), rgba(200, 50, 50, 0.9));
    box-shadow: 0 4px 12px rgba(240, 71, 71, 0.2);
}
`,"",{version:3,sources:["webpack://./src/styles/components/button.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,kBAAkB;IAClB,oCAAoC;IACpC,2CAA2C;IAC3C,kBAAkB;IAClB,gCAAgC;IAChC,0BAA0B;IAC1B,2BAA2B;IAC3B,yBAAyB;IACzB,iCAAiC;IACjC,eAAe;IACf,yBAAyB;IACzB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,qCAAqC;IACrC,0BAA0B;IAC1B,uCAAuC;AAC3C;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,uCAAuC;AAC3C;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,qCAAqC;IACrC,gCAAgC;IAChC,oBAAoB;IACpB,yDAAyD;AAC7D;;AAEA;IACI,yFAAyF;IACzF,uCAAuC;AAC3C;;AAEA;IACI,yFAAyF;IACzF,gDAAgD;AACpD;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,mFAAmF;IACnF,oCAAoC;AACxC;;AAEA;IACI,mFAAmF;IACnF,6CAA6C;AACjD",sourcesContent:[".frost-button-container {\n    margin: 4px 0;\n    padding: 8px 10px;\n    border-radius: 6px;\n    transition: all 0.2s ease;\n}\n\n.frost-button {\n    position: relative;\n    width: 100%;\n    padding: 10px 16px;\n    background: var(--frost-bg-tertiary);\n    border: 1px solid var(--frost-border-color);\n    border-radius: 6px;\n    color: var(--frost-text-primary);\n    font-size: 12px !important;\n    font-weight: 600 !important;\n    text-transform: uppercase;\n    letter-spacing: 0.02em !important;\n    cursor: pointer;\n    transition: all 0.2s ease;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.frost-button:hover {\n    background: var(--frost-bg-secondary);\n    transform: translateX(4px);\n    border-color: var(--frost-accent-color);\n}\n\n.frost-button:active {\n    transform: translateX(4px) translateY(1px);\n}\n\n.frost-button.disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n    transform: none;\n    border-color: rgba(255, 255, 255, 0.05);\n}\n\n.frost-button-ripple {\n    position: absolute;\n    border-radius: 50%;\n    background: var(--frost-ripple-color);\n    transform: translate(-50%, -50%);\n    pointer-events: none;\n    animation: buttonRipple 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.frost-button.primary {\n    background: linear-gradient(135deg, var(--frost-accent-color), var(--frost-accent-hover));\n    border-color: var(--frost-accent-color);\n}\n\n.frost-button.primary:hover {\n    background: linear-gradient(135deg, var(--frost-accent-color), var(--frost-accent-hover));\n    box-shadow: 0 4px 12px var(--frost-shadow-color);\n}\n\n.frost-button.primary .frost-button-ripple {\n    background: rgba(255, 255, 255, 0.4);\n}\n\n.frost-button.destructive {\n    background: linear-gradient(135deg, rgba(240, 71, 71, 0.8), rgba(200, 50, 50, 0.8));\n    border-color: rgba(240, 71, 71, 0.5);\n}\n\n.frost-button.destructive:hover {\n    background: linear-gradient(135deg, rgba(240, 71, 71, 0.9), rgba(200, 50, 50, 0.9));\n    box-shadow: 0 4px 12px rgba(240, 71, 71, 0.2);\n}\n"],sourceRoot:""}]);let i=s},308(t,r,e){e.d(r,{A:()=>i});var n=e(354),o=e.n(n),a=e(314),s=e.n(a)()(o());s.push([t.id,`.frost-category {
    margin-bottom: 8px;
    background: var(--frost-bg-secondary);
    border-radius: 8px;
    border: 1px solid var(--frost-border-color);
    overflow: hidden;
}

.frost-category-header {
    padding: 8px 12px;
    background: var(--frost-bg-tertiary);
    cursor: pointer;
    font-weight: 600 !important;
    font-size: 12px !important;
    transition: all 0.2s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase !important;
    letter-spacing: 0.02em !important;
    color: var(--frost-text-primary);
}

.frost-category-header:hover {
    background: var(--frost-bg-secondary);
    padding-left: 20px;
}

.frost-category-content {
    visibility: hidden;
    padding: 0;
    opacity: 0;
    max-height: 0;
    transform: translateY(-10px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
}

.frost-category-content.open {
    visibility: visible;
    opacity: 1;
    padding: 8px;
    max-height: 1000px;
    transform: translateY(0);
}
`,"",{version:3,sources:["webpack://./src/styles/components/categories.css"],names:[],mappings:"AAAA;IACI,kBAAkB;IAClB,qCAAqC;IACrC,kBAAkB;IAClB,2CAA2C;IAC3C,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,oCAAoC;IACpC,eAAe;IACf,2BAA2B;IAC3B,0BAA0B;IAC1B,yBAAyB;IACzB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,oCAAoC;IACpC,iCAAiC;IACjC,gCAAgC;AACpC;;AAEA;IACI,qCAAqC;IACrC,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,UAAU;IACV,aAAa;IACb,4BAA4B;IAC5B,iDAAiD;IACjD,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,wBAAwB;AAC5B",sourcesContent:[".frost-category {\n    margin-bottom: 8px;\n    background: var(--frost-bg-secondary);\n    border-radius: 8px;\n    border: 1px solid var(--frost-border-color);\n    overflow: hidden;\n}\n\n.frost-category-header {\n    padding: 8px 12px;\n    background: var(--frost-bg-tertiary);\n    cursor: pointer;\n    font-weight: 600 !important;\n    font-size: 12px !important;\n    transition: all 0.2s ease;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    text-transform: uppercase !important;\n    letter-spacing: 0.02em !important;\n    color: var(--frost-text-primary);\n}\n\n.frost-category-header:hover {\n    background: var(--frost-bg-secondary);\n    padding-left: 20px;\n}\n\n.frost-category-content {\n    visibility: hidden;\n    padding: 0;\n    opacity: 0;\n    max-height: 0;\n    transform: translateY(-10px);\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    overflow: hidden;\n}\n\n.frost-category-content.open {\n    visibility: visible;\n    opacity: 1;\n    padding: 8px;\n    max-height: 1000px;\n    transform: translateY(0);\n}\n"],sourceRoot:""}]);let i=s},694(t,r,e){e.d(r,{A:()=>i});var n=e(354),o=e.n(n),a=e(314),s=e.n(a)()(o());s.push([t.id,`.frost-chart {
    background: var(--frost-bg-tertiary);
    border: 1px solid var(--frost-border-color);
    border-radius: 6px;
    padding: 8px 10px;
    margin: 4px 0;
    transition: all 0.2s ease;
}

.frost-chart:hover {
    background: var(--frost-bg-secondary);
    transform: translateX(4px);
    border-color: var(--frost-accent-color);
}

.frost-chart-title {
    display: block;
    color: var(--frost-text-primary);
    font-weight: 600;
    font-size: 12px !important;
    padding: 4px 8px;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.01em !important;
}

.frost-chart canvas {
    width: 100%;
    height: auto;
    border-radius: 4px;
}

.frost-chart-tooltip {
    position: fixed;
    background: var(--frost-bg-tertiary);
    border: 1px solid var(--frost-border-color);
    border-radius: 4px;
    padding: 8px;
    pointer-events: none;
    z-index: 1000001;
    box-shadow: 0 2px 8px var(--frost-shadow-color);
    font-size: 12px;
    transform: translate(10px, -50%);
    opacity: 0;
    transition: opacity 0.1s ease;
}

.frost-chart-tooltip.show {
    opacity: 1;
}

.frost-chart-tooltip-row {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    white-space: nowrap;
    color: var(--frost-text-primary);
}

.frost-chart-tooltip-row span {
    font-weight: 500;
}
`,"",{version:3,sources:["webpack://./src/styles/components/chart.css"],names:[],mappings:"AAAA;IACI,oCAAoC;IACpC,2CAA2C;IAC3C,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,qCAAqC;IACrC,0BAA0B;IAC1B,uCAAuC;AAC3C;;AAEA;IACI,cAAc;IACd,gCAAgC;IAChC,gBAAgB;IAChB,0BAA0B;IAC1B,gBAAgB;IAChB,kBAAkB;IAClB,yBAAyB;IACzB,iCAAiC;AACrC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,oCAAoC;IACpC,2CAA2C;IAC3C,kBAAkB;IAClB,YAAY;IACZ,oBAAoB;IACpB,gBAAgB;IAChB,+CAA+C;IAC/C,eAAe;IACf,gCAAgC;IAChC,UAAU;IACV,6BAA6B;AACjC;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,mBAAmB;IACnB,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;AACpB",sourcesContent:[".frost-chart {\n    background: var(--frost-bg-tertiary);\n    border: 1px solid var(--frost-border-color);\n    border-radius: 6px;\n    padding: 8px 10px;\n    margin: 4px 0;\n    transition: all 0.2s ease;\n}\n\n.frost-chart:hover {\n    background: var(--frost-bg-secondary);\n    transform: translateX(4px);\n    border-color: var(--frost-accent-color);\n}\n\n.frost-chart-title {\n    display: block;\n    color: var(--frost-text-primary);\n    font-weight: 600;\n    font-size: 12px !important;\n    padding: 4px 8px;\n    margin-bottom: 8px;\n    text-transform: uppercase;\n    letter-spacing: 0.01em !important;\n}\n\n.frost-chart canvas {\n    width: 100%;\n    height: auto;\n    border-radius: 4px;\n}\n\n.frost-chart-tooltip {\n    position: fixed;\n    background: var(--frost-bg-tertiary);\n    border: 1px solid var(--frost-border-color);\n    border-radius: 4px;\n    padding: 8px;\n    pointer-events: none;\n    z-index: 1000001;\n    box-shadow: 0 2px 8px var(--frost-shadow-color);\n    font-size: 12px;\n    transform: translate(10px, -50%);\n    opacity: 0;\n    transition: opacity 0.1s ease;\n}\n\n.frost-chart-tooltip.show {\n    opacity: 1;\n}\n\n.frost-chart-tooltip-row {\n    display: flex;\n    justify-content: space-between;\n    gap: 12px;\n    white-space: nowrap;\n    color: var(--frost-text-primary);\n}\n\n.frost-chart-tooltip-row span {\n    font-weight: 500;\n}\n"],sourceRoot:""}]);let i=s},339(t,r,e){e.d(r,{A:()=>i});var n=e(354),o=e.n(n),a=e(314),s=e.n(a)()(o());s.push([t.id,`.frost-color-input {
    display: flex;
    align-items: center;
    margin: 4px 0;
    padding: 8px 10px;
    border-radius: 6px;
    transition: all 0.2s ease;
    background: var(--frost-bg-tertiary);
    border: 1px solid var(--frost-border-color);
    cursor: pointer;
    justify-content: space-between;
}

.frost-color-input:hover {
    background: var(--frost-bg-secondary);
    transform: translateX(4px);
    border-color: var(--frost-accent-color);
}

.frost-color-left {
    display: flex;
    align-items: center;
}

.frost-color-left span {
    font-size: 12px !important;
    font-weight: 600 !important;
    color: var(--frost-text-primary);
    text-transform: uppercase;
    letter-spacing: 0.01em !important;
}

.frost-color-preview {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    border: 2px solid var(--frost-border-color);
    transition: all 0.2s ease;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.frost-color-preview:hover {
    transform: scale(1.05);
    border-color: var(--frost-accent-color);
}

.frost-color-preview:active {
    transform: scale(0.95);
}

.frost-color-picker {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    cursor: pointer;
}

.frost-color-formats {
    display: flex;
    gap: 8px;
    margin-top: 8px;
}

.frost-color-format {
    background: var(--frost-bg-secondary);
    border: 1px solid var(--frost-border-color);
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 11px;
    cursor: pointer;
    transition: all 0.2s ease;
    color: var(--frost-text-secondary);
}

.frost-color-format:hover {
    background: var(--frost-bg-tertiary);
    color: var(--frost-text-primary);
}

.frost-color-format.active {
    background: var(--frost-bg-secondary);
    border-color: var(--frost-accent-color);
    color: var(--frost-text-primary);
}
`,"",{version:3,sources:["webpack://./src/styles/components/color.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,oCAAoC;IACpC,2CAA2C;IAC3C,eAAe;IACf,8BAA8B;AAClC;;AAEA;IACI,qCAAqC;IACrC,0BAA0B;IAC1B,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,0BAA0B;IAC1B,2BAA2B;IAC3B,gCAAgC;IAChC,yBAAyB;IACzB,iCAAiC;AACrC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,2CAA2C;IAC3C,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,uCAAuC;AAC3C;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,MAAM;IACN,OAAO;IACP,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,eAAe;AACnB;;AAEA;IACI,qCAAqC;IACrC,2CAA2C;IAC3C,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,eAAe;IACf,yBAAyB;IACzB,kCAAkC;AACtC;;AAEA;IACI,oCAAoC;IACpC,gCAAgC;AACpC;;AAEA;IACI,qCAAqC;IACrC,uCAAuC;IACvC,gCAAgC;AACpC",sourcesContent:[".frost-color-input {\n    display: flex;\n    align-items: center;\n    margin: 4px 0;\n    padding: 8px 10px;\n    border-radius: 6px;\n    transition: all 0.2s ease;\n    background: var(--frost-bg-tertiary);\n    border: 1px solid var(--frost-border-color);\n    cursor: pointer;\n    justify-content: space-between;\n}\n\n.frost-color-input:hover {\n    background: var(--frost-bg-secondary);\n    transform: translateX(4px);\n    border-color: var(--frost-accent-color);\n}\n\n.frost-color-left {\n    display: flex;\n    align-items: center;\n}\n\n.frost-color-left span {\n    font-size: 12px !important;\n    font-weight: 600 !important;\n    color: var(--frost-text-primary);\n    text-transform: uppercase;\n    letter-spacing: 0.01em !important;\n}\n\n.frost-color-preview {\n    width: 24px;\n    height: 24px;\n    border-radius: 4px;\n    border: 2px solid var(--frost-border-color);\n    transition: all 0.2s ease;\n    position: relative;\n    overflow: hidden;\n    cursor: pointer;\n}\n\n.frost-color-preview:hover {\n    transform: scale(1.05);\n    border-color: var(--frost-accent-color);\n}\n\n.frost-color-preview:active {\n    transform: scale(0.95);\n}\n\n.frost-color-picker {\n    opacity: 0;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    cursor: pointer;\n}\n\n.frost-color-formats {\n    display: flex;\n    gap: 8px;\n    margin-top: 8px;\n}\n\n.frost-color-format {\n    background: var(--frost-bg-secondary);\n    border: 1px solid var(--frost-border-color);\n    border-radius: 4px;\n    padding: 4px 8px;\n    font-size: 11px;\n    cursor: pointer;\n    transition: all 0.2s ease;\n    color: var(--frost-text-secondary);\n}\n\n.frost-color-format:hover {\n    background: var(--frost-bg-tertiary);\n    color: var(--frost-text-primary);\n}\n\n.frost-color-format.active {\n    background: var(--frost-bg-secondary);\n    border-color: var(--frost-accent-color);\n    color: var(--frost-text-primary);\n}\n"],sourceRoot:""}]);let i=s},358(t,r,e){e.d(r,{A:()=>i});var n=e(354),o=e.n(n),a=e(314),s=e.n(a)()(o());s.push([t.id,`.frost-dual-slider {
    background: var(--frost-bg-tertiary);
    border: 1px solid var(--frost-border-color);
    border-radius: 6px;
    padding: 8px 10px;
    margin: 4px 0;
    transition: all 0.2s ease;
}

.frost-dual-slider:hover {
    background: var(--frost-bg-secondary);
    transform: translateX(4px);
    border-color: var(--frost-accent-color);
}

.frost-dual-slider span {
    font-size: 12px !important;
    font-weight: 600 !important;
    color: var(--frost-text-primary);
    margin-bottom: 8px;
    display: block;
    text-transform: uppercase;
    letter-spacing: 0.01em !important;
}

.frost-dual-slider-controls {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
}

.frost-dual-slider-container {
    position: relative;
    height: 6px;
    flex: 1;
    margin: 0 4px;
    background: var(--frost-border-color);
    border-radius: 3px;
    display: flex;
    align-items: center;
}

.frost-dual-slider-range {
    position: absolute;
    height: 100%;
    background: var(--frost-accent-color);
    border-radius: 3px;
    pointer-events: none;
}

.frost-dual-slider input[type="range"] {
    -webkit-appearance: none;
    position: absolute;
    width: calc(100% + 12px);
    height: 6px;
    background: transparent;
    outline: none;
    pointer-events: none;
    margin-left: -6px;
    display: block;
    padding: 0;
    border: 0;
}

.frost-dual-slider input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 12px;
    width: 12px;
    background: var(--frost-accent-color);
    border-radius: 50%;
    cursor: pointer;
    pointer-events: auto;
    transition: transform 0.2s ease;
    transform: scale(1);
    box-shadow: 0 2px 4px var(--frost-shadow-color);
    border: 0;
}

.frost-dual-slider input[type="range"]::-webkit-slider-thumb:hover {
    transform: scale(1.2);
    background: var(--frost-accent-hover);
}

.frost-dual-slider input[type="range"]::-webkit-slider-thumb:active {
    transform: scale(0.95);
}

.frost-dual-slider input[type="range"]::-moz-range-thumb {
    height: 12px;
    width: 12px;
    background: var(--frost-accent-color);
    border-radius: 50%;
    cursor: pointer;
    pointer-events: auto;
    transition: transform 0.2s ease;
    transform: scale(1);
    box-shadow: 0 2px 4px var(--frost-shadow-color);
    border: 0;
}

.frost-dual-slider input[type="range"]::-moz-range-thumb:hover {
    transform: scale(1.2);
    background: var(--frost-accent-hover);
}

.frost-dual-slider input[type="range"]::-moz-range-thumb:active {
    transform: scale(0.95);
}

.frost-dual-slider-value {
    background: var(--frost-bg-secondary);
    border: 1px solid var(--frost-border-color);
    color: var(--frost-text-primary);
    padding: 2px 4px;
    border-radius: 4px;
    font-size: 11px !important;
    font-weight: 500 !important;
    width: 36px;
    min-width: 36px;
    text-align: center;
}

.frost-dual-slider-value:focus {
    background: var(--frost-bg-tertiary);
    border-color: var(--frost-accent-color);
    outline: none;
}

.frost-dual-slider-value.invalid {
    animation: shake 0.4s ease-in-out;
    background: rgba(240, 71, 71, 0.2);
    border-color: rgba(240, 71, 71, 0.5);
    color: #ff4444;
}
`,"",{version:3,sources:["webpack://./src/styles/components/dual-slider.css"],names:[],mappings:"AAAA;IACI,oCAAoC;IACpC,2CAA2C;IAC3C,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,qCAAqC;IACrC,0BAA0B;IAC1B,uCAAuC;AAC3C;;AAEA;IACI,0BAA0B;IAC1B,2BAA2B;IAC3B,gCAAgC;IAChC,kBAAkB;IAClB,cAAc;IACd,yBAAyB;IACzB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,OAAO;IACP,aAAa;IACb,qCAAqC;IACrC,kBAAkB;IAClB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,qCAAqC;IACrC,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;IAClB,wBAAwB;IACxB,WAAW;IACX,uBAAuB;IACvB,aAAa;IACb,oBAAoB;IACpB,iBAAiB;IACjB,cAAc;IACd,UAAU;IACV,SAAS;AACb;;AAEA;IACI,wBAAwB;IACxB,YAAY;IACZ,WAAW;IACX,qCAAqC;IACrC,kBAAkB;IAClB,eAAe;IACf,oBAAoB;IACpB,+BAA+B;IAC/B,mBAAmB;IACnB,+CAA+C;IAC/C,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,qCAAqC;AACzC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,qCAAqC;IACrC,kBAAkB;IAClB,eAAe;IACf,oBAAoB;IACpB,+BAA+B;IAC/B,mBAAmB;IACnB,+CAA+C;IAC/C,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,qCAAqC;AACzC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qCAAqC;IACrC,2CAA2C;IAC3C,gCAAgC;IAChC,gBAAgB;IAChB,kBAAkB;IAClB,0BAA0B;IAC1B,2BAA2B;IAC3B,WAAW;IACX,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;IACpC,uCAAuC;IACvC,aAAa;AACjB;;AAEA;IACI,iCAAiC;IACjC,kCAAkC;IAClC,oCAAoC;IACpC,cAAc;AAClB",sourcesContent:['.frost-dual-slider {\n    background: var(--frost-bg-tertiary);\n    border: 1px solid var(--frost-border-color);\n    border-radius: 6px;\n    padding: 8px 10px;\n    margin: 4px 0;\n    transition: all 0.2s ease;\n}\n\n.frost-dual-slider:hover {\n    background: var(--frost-bg-secondary);\n    transform: translateX(4px);\n    border-color: var(--frost-accent-color);\n}\n\n.frost-dual-slider span {\n    font-size: 12px !important;\n    font-weight: 600 !important;\n    color: var(--frost-text-primary);\n    margin-bottom: 8px;\n    display: block;\n    text-transform: uppercase;\n    letter-spacing: 0.01em !important;\n}\n\n.frost-dual-slider-controls {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    margin-top: 8px;\n}\n\n.frost-dual-slider-container {\n    position: relative;\n    height: 6px;\n    flex: 1;\n    margin: 0 4px;\n    background: var(--frost-border-color);\n    border-radius: 3px;\n    display: flex;\n    align-items: center;\n}\n\n.frost-dual-slider-range {\n    position: absolute;\n    height: 100%;\n    background: var(--frost-accent-color);\n    border-radius: 3px;\n    pointer-events: none;\n}\n\n.frost-dual-slider input[type="range"] {\n    -webkit-appearance: none;\n    position: absolute;\n    width: calc(100% + 12px);\n    height: 6px;\n    background: transparent;\n    outline: none;\n    pointer-events: none;\n    margin-left: -6px;\n    display: block;\n    padding: 0;\n    border: 0;\n}\n\n.frost-dual-slider input[type="range"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: 12px;\n    width: 12px;\n    background: var(--frost-accent-color);\n    border-radius: 50%;\n    cursor: pointer;\n    pointer-events: auto;\n    transition: transform 0.2s ease;\n    transform: scale(1);\n    box-shadow: 0 2px 4px var(--frost-shadow-color);\n    border: 0;\n}\n\n.frost-dual-slider input[type="range"]::-webkit-slider-thumb:hover {\n    transform: scale(1.2);\n    background: var(--frost-accent-hover);\n}\n\n.frost-dual-slider input[type="range"]::-webkit-slider-thumb:active {\n    transform: scale(0.95);\n}\n\n.frost-dual-slider input[type="range"]::-moz-range-thumb {\n    height: 12px;\n    width: 12px;\n    background: var(--frost-accent-color);\n    border-radius: 50%;\n    cursor: pointer;\n    pointer-events: auto;\n    transition: transform 0.2s ease;\n    transform: scale(1);\n    box-shadow: 0 2px 4px var(--frost-shadow-color);\n    border: 0;\n}\n\n.frost-dual-slider input[type="range"]::-moz-range-thumb:hover {\n    transform: scale(1.2);\n    background: var(--frost-accent-hover);\n}\n\n.frost-dual-slider input[type="range"]::-moz-range-thumb:active {\n    transform: scale(0.95);\n}\n\n.frost-dual-slider-value {\n    background: var(--frost-bg-secondary);\n    border: 1px solid var(--frost-border-color);\n    color: var(--frost-text-primary);\n    padding: 2px 4px;\n    border-radius: 4px;\n    font-size: 11px !important;\n    font-weight: 500 !important;\n    width: 36px;\n    min-width: 36px;\n    text-align: center;\n}\n\n.frost-dual-slider-value:focus {\n    background: var(--frost-bg-tertiary);\n    border-color: var(--frost-accent-color);\n    outline: none;\n}\n\n.frost-dual-slider-value.invalid {\n    animation: shake 0.4s ease-in-out;\n    background: rgba(240, 71, 71, 0.2);\n    border-color: rgba(240, 71, 71, 0.5);\n    color: #ff4444;\n}\n'],sourceRoot:""}]);let i=s},824(t,r,e){e.d(r,{A:()=>i});var n=e(354),o=e.n(n),a=e(314),s=e.n(a)()(o());s.push([t.id,`.frost-grid-selector {
    background: var(--frost-bg-tertiary);
    border: 1px solid var(--frost-border-color);
    border-radius: 8px;
    padding: 12px;
    margin: 4px 0;
}

.frost-grid-label {
    font-size: 12px !important;
    font-weight: 600 !important;
    color: var(--frost-text-primary);
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.02em !important;
}

.frost-grid-container {
    display: grid;
    gap: 8px;
    width: 100%;
}

.frost-grid-item {
    background: var(--frost-bg-secondary);
    border: 1px solid var(--frost-border-color);
    border-radius: 6px;
    padding: 12px;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.frost-grid-item:hover {
    background: var(--frost-bg-tertiary);
    transform: translateY(-2px);
    border-color: var(--frost-accent-color);
}

.frost-grid-item.selected {
    background: color-mix(in srgb, var(--frost-accent-color) 15%, transparent);
    border-color: var(--frost-accent-color);
}

.frost-grid-icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--frost-text-primary);
}

.frost-grid-item-label {
    font-size: 11px !important;
    font-weight: 450 !important;
    color: var(--frost-text-primary);
    text-align: center;
}
`,"",{version:3,sources:["webpack://./src/styles/components/grid-selector.css"],names:[],mappings:"AAAA;IACI,oCAAoC;IACpC,2CAA2C;IAC3C,kBAAkB;IAClB,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,0BAA0B;IAC1B,2BAA2B;IAC3B,gCAAgC;IAChC,mBAAmB;IACnB,yBAAyB;IACzB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,WAAW;AACf;;AAEA;IACI,qCAAqC;IACrC,2CAA2C;IAC3C,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,oCAAoC;IACpC,2BAA2B;IAC3B,uCAAuC;AAC3C;;AAEA;IACI,0EAA0E;IAC1E,uCAAuC;AAC3C;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,gCAAgC;AACpC;;AAEA;IACI,0BAA0B;IAC1B,2BAA2B;IAC3B,gCAAgC;IAChC,kBAAkB;AACtB",sourcesContent:[".frost-grid-selector {\n    background: var(--frost-bg-tertiary);\n    border: 1px solid var(--frost-border-color);\n    border-radius: 8px;\n    padding: 12px;\n    margin: 4px 0;\n}\n\n.frost-grid-label {\n    font-size: 12px !important;\n    font-weight: 600 !important;\n    color: var(--frost-text-primary);\n    margin-bottom: 12px;\n    text-transform: uppercase;\n    letter-spacing: 0.02em !important;\n}\n\n.frost-grid-container {\n    display: grid;\n    gap: 8px;\n    width: 100%;\n}\n\n.frost-grid-item {\n    background: var(--frost-bg-secondary);\n    border: 1px solid var(--frost-border-color);\n    border-radius: 6px;\n    padding: 12px;\n    cursor: pointer;\n    transition: all 0.2s ease;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 8px;\n}\n\n.frost-grid-item:hover {\n    background: var(--frost-bg-tertiary);\n    transform: translateY(-2px);\n    border-color: var(--frost-accent-color);\n}\n\n.frost-grid-item.selected {\n    background: color-mix(in srgb, var(--frost-accent-color) 15%, transparent);\n    border-color: var(--frost-accent-color);\n}\n\n.frost-grid-icon {\n    width: 24px;\n    height: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: var(--frost-text-primary);\n}\n\n.frost-grid-item-label {\n    font-size: 11px !important;\n    font-weight: 450 !important;\n    color: var(--frost-text-primary);\n    text-align: center;\n}\n"],sourceRoot:""}]);let i=s},742(t,r,e){e.d(r,{A:()=>w});var n=e(354),o=e.n(n),a=e(314),s=e.n(a),i=e(512),A=e(308),c=e(694),l=e(339),d=e(358),p=e(824),f=e(718),C=e(12),u=e(137),m=e(395),g=e(999),h=e(472),b=e(596),v=e(767),I=e(200),y=e(315),B=e(468),x=s()(o());x.i(i.A),x.i(A.A),x.i(c.A),x.i(l.A),x.i(d.A),x.i(p.A),x.i(f.A),x.i(C.A),x.i(u.A),x.i(m.A),x.i(g.A),x.i(h.A),x.i(b.A),x.i(v.A),x.i(I.A),x.i(y.A),x.i(B.A),x.push([t.id,`
`,"",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);let w=x},718(t,r,e){e.d(r,{A:()=>i});var n=e(354),o=e.n(n),a=e(314),s=e.n(a)()(o());s.push([t.id,`.frost-keybind {
    background: var(--frost-bg-secondary);
    border: 1px solid var(--frost-border-color);
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 80px;
    transition: all 0.2s ease;
}

.frost-keybind:hover {
    background: var(--frost-bg-tertiary);
    border-color: var(--frost-accent-color);
}

.frost-keybind.binding {
    background: var(--frost-bg-secondary);
    border-color: var(--frost-accent-color);
}

.frost-keybind-display {
    font-size: 12px;
    font-weight: 500;
    color: var(--frost-text-primary);
}

.frost-keybind-clear {
    background: none;
    border: none;
    color: var(--frost-text-secondary);
    cursor: pointer;
    padding: 0 0 0 8px;
    font-size: 14px;
    line-height: 1;
}

.frost-keybind-clear:hover {
    color: var(--frost-text-primary);
}
`,"",{version:3,sources:["webpack://./src/styles/components/keybind.css"],names:[],mappings:"AAAA;IACI,qCAAqC;IACrC,2CAA2C;IAC3C,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,oCAAoC;IACpC,uCAAuC;AAC3C;;AAEA;IACI,qCAAqC;IACrC,uCAAuC;AAC3C;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,kCAAkC;IAClC,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,gCAAgC;AACpC",sourcesContent:[".frost-keybind {\n    background: var(--frost-bg-secondary);\n    border: 1px solid var(--frost-border-color);\n    border-radius: 4px;\n    padding: 4px 8px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    min-width: 80px;\n    transition: all 0.2s ease;\n}\n\n.frost-keybind:hover {\n    background: var(--frost-bg-tertiary);\n    border-color: var(--frost-accent-color);\n}\n\n.frost-keybind.binding {\n    background: var(--frost-bg-secondary);\n    border-color: var(--frost-accent-color);\n}\n\n.frost-keybind-display {\n    font-size: 12px;\n    font-weight: 500;\n    color: var(--frost-text-primary);\n}\n\n.frost-keybind-clear {\n    background: none;\n    border: none;\n    color: var(--frost-text-secondary);\n    cursor: pointer;\n    padding: 0 0 0 8px;\n    font-size: 14px;\n    line-height: 1;\n}\n\n.frost-keybind-clear:hover {\n    color: var(--frost-text-primary);\n}\n"],sourceRoot:""}]);let i=s},12(t,r,e){e.d(r,{A:()=>i});var n=e(354),o=e.n(n),a=e(314),s=e.n(a)()(o());s.push([t.id,`.frost-multi-select-container {
    background: var(--frost-bg-tertiary);
    border: 1px solid var(--frost-border-color);
    border-radius: 8px;
    padding: 12px;
    margin: 4px 0;
}

.frost-multi-select-label {
    display: block;
    margin-bottom: 8px;
    font-size: 12px !important;
    font-weight: 600 !important;
    color: var(--frost-text-primary);
    text-transform: uppercase;
    letter-spacing: 0.02em !important;
}

.frost-multi-select {
    position: relative;
}

.frost-multi-select-value {
    background: var(--frost-bg-secondary);
    border: 1px solid var(--frost-border-color);
    border-radius: 4px;
    padding: 8px 12px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 12px;
    color: var(--frost-text-primary);
}

.frost-multi-select-value:hover {
    background: var(--frost-bg-tertiary);
    border-color: var(--frost-accent-color);
}

.frost-multi-select-dropdown {
    position: fixed;
    min-width: 200px;
    background: var(--frost-bg-primary);
    border: 1px solid var(--frost-border-color);
    border-radius: 6px;
    margin-top: 4px;
    opacity: 0;
    transform: translateY(-10px);
    visibility: hidden;
    z-index: 1000000;
    box-shadow: 0 4px 12px var(--frost-shadow-color);
    max-height: 300px;
    overflow-y: auto;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.frost-multi-select-dropdown.show {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
}

.frost-multi-select-item {
    display: flex;
    align-items: center;
    padding: 8px;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.2s ease;
    color: white;
}

.frost-multi-select-item:hover {
    background: rgba(114, 137, 218, 0.1);
}

.frost-multi-select-checkbox {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    margin-right: 8px;
    position: relative;
}

.frost-multi-select-item.selected .frost-multi-select-checkbox {
    background: var(--frost-accent-color);
    border-color: var(--frost-accent-color);
}

.frost-multi-select-item.selected .frost-multi-select-checkbox:after {
    display: none;
}

.frost-multi-select-item span {
    color: var(--frost-text-primary);
    font-weight: 450 !important;
    font-size: 12px !important;
}
`,"",{version:3,sources:["webpack://./src/styles/components/multi-select.css"],names:[],mappings:"AAAA;IACI,oCAAoC;IACpC,2CAA2C;IAC3C,kBAAkB;IAClB,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,0BAA0B;IAC1B,2BAA2B;IAC3B,gCAAgC;IAChC,yBAAyB;IACzB,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,qCAAqC;IACrC,2CAA2C;IAC3C,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,yBAAyB;IACzB,eAAe;IACf,gCAAgC;AACpC;;AAEA;IACI,oCAAoC;IACpC,uCAAuC;AAC3C;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,mCAAmC;IACnC,2CAA2C;IAC3C,kBAAkB;IAClB,eAAe;IACf,UAAU;IACV,4BAA4B;IAC5B,kBAAkB;IAClB,gBAAgB;IAChB,gDAAgD;IAChD,iBAAiB;IACjB,gBAAgB;IAChB,iDAAiD;AACrD;;AAEA;IACI,UAAU;IACV,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,0CAA0C;IAC1C,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,qCAAqC;IACrC,uCAAuC;AAC3C;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gCAAgC;IAChC,2BAA2B;IAC3B,0BAA0B;AAC9B",sourcesContent:[".frost-multi-select-container {\n    background: var(--frost-bg-tertiary);\n    border: 1px solid var(--frost-border-color);\n    border-radius: 8px;\n    padding: 12px;\n    margin: 4px 0;\n}\n\n.frost-multi-select-label {\n    display: block;\n    margin-bottom: 8px;\n    font-size: 12px !important;\n    font-weight: 600 !important;\n    color: var(--frost-text-primary);\n    text-transform: uppercase;\n    letter-spacing: 0.02em !important;\n}\n\n.frost-multi-select {\n    position: relative;\n}\n\n.frost-multi-select-value {\n    background: var(--frost-bg-secondary);\n    border: 1px solid var(--frost-border-color);\n    border-radius: 4px;\n    padding: 8px 12px;\n    cursor: pointer;\n    transition: all 0.2s ease;\n    font-size: 12px;\n    color: var(--frost-text-primary);\n}\n\n.frost-multi-select-value:hover {\n    background: var(--frost-bg-tertiary);\n    border-color: var(--frost-accent-color);\n}\n\n.frost-multi-select-dropdown {\n    position: fixed;\n    min-width: 200px;\n    background: var(--frost-bg-primary);\n    border: 1px solid var(--frost-border-color);\n    border-radius: 6px;\n    margin-top: 4px;\n    opacity: 0;\n    transform: translateY(-10px);\n    visibility: hidden;\n    z-index: 1000000;\n    box-shadow: 0 4px 12px var(--frost-shadow-color);\n    max-height: 300px;\n    overflow-y: auto;\n    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.frost-multi-select-dropdown.show {\n    opacity: 1;\n    transform: translateY(0);\n    visibility: visible;\n}\n\n.frost-multi-select-item {\n    display: flex;\n    align-items: center;\n    padding: 8px;\n    cursor: pointer;\n    border-radius: 4px;\n    transition: all 0.2s ease;\n    color: white;\n}\n\n.frost-multi-select-item:hover {\n    background: rgba(114, 137, 218, 0.1);\n}\n\n.frost-multi-select-checkbox {\n    width: 16px;\n    height: 16px;\n    border: 2px solid rgba(255, 255, 255, 0.2);\n    border-radius: 3px;\n    margin-right: 8px;\n    position: relative;\n}\n\n.frost-multi-select-item.selected .frost-multi-select-checkbox {\n    background: var(--frost-accent-color);\n    border-color: var(--frost-accent-color);\n}\n\n.frost-multi-select-item.selected .frost-multi-select-checkbox:after {\n    display: none;\n}\n\n.frost-multi-select-item span {\n    color: var(--frost-text-primary);\n    font-weight: 450 !important;\n    font-size: 12px !important;\n}\n"],sourceRoot:""}]);let i=s},137(t,r,e){e.d(r,{A:()=>i});var n=e(354),o=e.n(n),a=e(314),s=e.n(a)()(o());s.push([t.id,`.frost-order-list {
    background: var(--frost-bg-tertiary);
    border: 1px solid var(--frost-border-color);
    border-radius: 6px;
    margin: 4px 0;
    padding: 8px 10px;
    transition: all 0.2s ease;
}

.frost-order-list:hover {
    background: var(--frost-bg-secondary);
    transform: translateX(4px);
    border-color: var(--frost-accent-color);
}

.frost-order-label {
    font-size: 12px !important;
    font-weight: 600 !important;
    color: var(--frost-text-primary);
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 0.01em !important;
}

.frost-order-items {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 4px 0;
    position: relative;
}

.frost-order-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: var(--frost-bg-secondary);
    border: 1px solid var(--frost-border-color);
    border-radius: 4px;
    transition: transform 0.2s ease-in-out, background-color 0.2s ease, border-color 0.2s ease,
        box-shadow 0.2s ease;
    position: relative;
    z-index: 1;
    will-change: transform;
    transform: translateY(0);
    font-size: 12px !important;
}

.frost-order-item:hover {
    background: var(--frost-bg-tertiary);
    transform: translateX(2px);
    border-color: var(--frost-accent-color);
}

.frost-order-item.dragging {
    opacity: 1;
    cursor: grabbing;
    background: var(--frost-bg-secondary);
    border-color: var(--frost-accent-color);
    box-shadow: 0 8px 24px var(--frost-shadow-color);
    z-index: 2;
    transform: scale(1.02);
    transition: none;
}

.frost-order-handle {
    color: var(--frost-text-secondary);
    cursor: grab;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border-radius: 4px;
    transition: all 0.2s ease;
}

.frost-order-handle:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--frost-text-primary);
}

.frost-order-item.dragging .frost-order-handle {
    cursor: grabbing;
    color: var(--frost-accent-color);
}

.frost-order-item span {
    color: var(--frost-text-primary);
    font-size: 12px !important;
    font-weight: 450 !important;
    flex: 1;
}

.frost-order-controls {
    display: flex;
    gap: 4px;
    opacity: 0;
    transition: opacity 0.2s ease;
}

.frost-order-item:hover .frost-order-controls {
    opacity: 1;
}

.frost-order-move-up,
.frost-order-move-down {
    background: none;
    border: none;
    color: var(--frost-text-secondary);
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    transition: all 0.15s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    font-size: 14px;
    position: relative;
    overflow: hidden;
}

.frost-order-move-up:hover,
.frost-order-move-down:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--frost-accent-color);
    transform: scale(1.1);
}

.frost-order-move-up:active,
.frost-order-move-down:active {
    transform: scale(0.9);
    background: rgba(255, 255, 255, 0.15);
}

.frost-order-move-up::after,
.frost-order-move-down::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: var(--frost-accent-color);
    opacity: 0;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.2s ease, opacity 0.2s ease;
}

.frost-order-move-up:active::after,
.frost-order-move-down:active::after {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0.1;
}
`,"",{version:3,sources:["webpack://./src/styles/components/order-list.css"],names:[],mappings:"AAAA;IACI,oCAAoC;IACpC,2CAA2C;IAC3C,kBAAkB;IAClB,aAAa;IACb,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,qCAAqC;IACrC,0BAA0B;IAC1B,uCAAuC;AAC3C;;AAEA;IACI,0BAA0B;IAC1B,2BAA2B;IAC3B,gCAAgC;IAChC,kBAAkB;IAClB,yBAAyB;IACzB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,iBAAiB;IACjB,qCAAqC;IACrC,2CAA2C;IAC3C,kBAAkB;IAClB;4BACwB;IACxB,kBAAkB;IAClB,UAAU;IACV,sBAAsB;IACtB,wBAAwB;IACxB,0BAA0B;AAC9B;;AAEA;IACI,oCAAoC;IACpC,0BAA0B;IAC1B,uCAAuC;AAC3C;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,qCAAqC;IACrC,uCAAuC;IACvC,gDAAgD;IAChD,UAAU;IACV,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,kCAAkC;IAClC,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,oCAAoC;IACpC,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA;IACI,gCAAgC;IAChC,0BAA0B;IAC1B,2BAA2B;IAC3B,OAAO;AACX;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,UAAU;IACV,6BAA6B;AACjC;;AAEA;IACI,UAAU;AACd;;AAEA;;IAEI,gBAAgB;IAChB,YAAY;IACZ,kCAAkC;IAClC,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,0BAA0B;IAC1B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;;IAEI,oCAAoC;IACpC,gCAAgC;IAChC,qBAAqB;AACzB;;AAEA;;IAEI,qBAAqB;IACrB,qCAAqC;AACzC;;AAEA;;IAEI,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,WAAW;IACX,YAAY;IACZ,qCAAqC;IACrC,UAAU;IACV,kBAAkB;IAClB,yCAAyC;IACzC,kDAAkD;AACtD;;AAEA;;IAEI,yCAAyC;IACzC,YAAY;AAChB",sourcesContent:['.frost-order-list {\n    background: var(--frost-bg-tertiary);\n    border: 1px solid var(--frost-border-color);\n    border-radius: 6px;\n    margin: 4px 0;\n    padding: 8px 10px;\n    transition: all 0.2s ease;\n}\n\n.frost-order-list:hover {\n    background: var(--frost-bg-secondary);\n    transform: translateX(4px);\n    border-color: var(--frost-accent-color);\n}\n\n.frost-order-label {\n    font-size: 12px !important;\n    font-weight: 600 !important;\n    color: var(--frost-text-primary);\n    margin-bottom: 5px;\n    text-transform: uppercase;\n    letter-spacing: 0.01em !important;\n}\n\n.frost-order-items {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    padding: 4px 0;\n    position: relative;\n}\n\n.frost-order-item {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 8px 12px;\n    background: var(--frost-bg-secondary);\n    border: 1px solid var(--frost-border-color);\n    border-radius: 4px;\n    transition: transform 0.2s ease-in-out, background-color 0.2s ease, border-color 0.2s ease,\n        box-shadow 0.2s ease;\n    position: relative;\n    z-index: 1;\n    will-change: transform;\n    transform: translateY(0);\n    font-size: 12px !important;\n}\n\n.frost-order-item:hover {\n    background: var(--frost-bg-tertiary);\n    transform: translateX(2px);\n    border-color: var(--frost-accent-color);\n}\n\n.frost-order-item.dragging {\n    opacity: 1;\n    cursor: grabbing;\n    background: var(--frost-bg-secondary);\n    border-color: var(--frost-accent-color);\n    box-shadow: 0 8px 24px var(--frost-shadow-color);\n    z-index: 2;\n    transform: scale(1.02);\n    transition: none;\n}\n\n.frost-order-handle {\n    color: var(--frost-text-secondary);\n    cursor: grab;\n    user-select: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 4px;\n    border-radius: 4px;\n    transition: all 0.2s ease;\n}\n\n.frost-order-handle:hover {\n    background: rgba(255, 255, 255, 0.1);\n    color: var(--frost-text-primary);\n}\n\n.frost-order-item.dragging .frost-order-handle {\n    cursor: grabbing;\n    color: var(--frost-accent-color);\n}\n\n.frost-order-item span {\n    color: var(--frost-text-primary);\n    font-size: 12px !important;\n    font-weight: 450 !important;\n    flex: 1;\n}\n\n.frost-order-controls {\n    display: flex;\n    gap: 4px;\n    opacity: 0;\n    transition: opacity 0.2s ease;\n}\n\n.frost-order-item:hover .frost-order-controls {\n    opacity: 1;\n}\n\n.frost-order-move-up,\n.frost-order-move-down {\n    background: none;\n    border: none;\n    color: var(--frost-text-secondary);\n    cursor: pointer;\n    padding: 4px;\n    border-radius: 4px;\n    transition: all 0.15s ease;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 24px;\n    height: 24px;\n    font-size: 14px;\n    position: relative;\n    overflow: hidden;\n}\n\n.frost-order-move-up:hover,\n.frost-order-move-down:hover {\n    background: rgba(255, 255, 255, 0.1);\n    color: var(--frost-accent-color);\n    transform: scale(1.1);\n}\n\n.frost-order-move-up:active,\n.frost-order-move-down:active {\n    transform: scale(0.9);\n    background: rgba(255, 255, 255, 0.15);\n}\n\n.frost-order-move-up::after,\n.frost-order-move-down::after {\n    content: "";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 100%;\n    height: 100%;\n    background: var(--frost-accent-color);\n    opacity: 0;\n    border-radius: 50%;\n    transform: translate(-50%, -50%) scale(0);\n    transition: transform 0.2s ease, opacity 0.2s ease;\n}\n\n.frost-order-move-up:active::after,\n.frost-order-move-down:active::after {\n    transform: translate(-50%, -50%) scale(2);\n    opacity: 0.1;\n}\n'],sourceRoot:""}]);let i=s},395(t,r,e){e.d(r,{A:()=>i});var n=e(354),o=e.n(n),a=e(314),s=e.n(a)()(o());s.push([t.id,`.frost-page-selector {
    background: var(--frost-bg-tertiary);
    border: 1px solid var(--frost-border-color);
    border-radius: 6px;
    margin: 4px 0;
    padding: 8px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.2s ease;
}

.frost-page-selector:hover {
    background: var(--frost-bg-secondary);
    transform: translateX(4px);
    border-color: var(--frost-accent-color);
}

.frost-page-label {
    font-size: 12px !important;
    font-weight: 600 !important;
    opacity: 0.9;
    text-transform: uppercase;
    letter-spacing: 0.01em !important;
    color: var(--frost-text-primary);
}

.frost-page-controls {
    display: flex;
    align-items: center;
    background: var(--frost-bg-secondary);
    border: 1px solid var(--frost-border-color);
    border-radius: 4px;
    padding: 2px 6px;
}

.frost-page-arrow {
    color: var(--frost-text-primary);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease;
    opacity: 0.6;
    height: 20px;
    width: 20px;
    padding: 0;
}

.frost-page-arrow:hover {
    opacity: 1;
    color: var(--frost-accent-color);
    transform: scale(1.1);
}

.frost-page-value {
    min-width: 50px;
    text-align: center;
    font-size: 11px !important;
    color: var(--frost-text-primary);
    font-weight: 500 !important;
    padding: 0 6px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.frost-page-value.switching-out {
    animation: pageValueSlideOut 0.15s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.frost-page-value.switching-in {
    animation: pageValueSlideIn 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
`,"",{version:3,sources:["webpack://./src/styles/components/page-selector.css"],names:[],mappings:"AAAA;IACI,oCAAoC;IACpC,2CAA2C;IAC3C,kBAAkB;IAClB,aAAa;IACb,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,yBAAyB;AAC7B;;AAEA;IACI,qCAAqC;IACrC,0BAA0B;IAC1B,uCAAuC;AAC3C;;AAEA;IACI,0BAA0B;IAC1B,2BAA2B;IAC3B,YAAY;IACZ,yBAAyB;IACzB,iCAAiC;IACjC,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qCAAqC;IACrC,2CAA2C;IAC3C,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,gCAAgC;IAChC,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,UAAU;AACd;;AAEA;IACI,UAAU;IACV,gCAAgC;IAChC,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,0BAA0B;IAC1B,gCAAgC;IAChC,2BAA2B;IAC3B,cAAc;IACd,iDAAiD;AACrD;;AAEA;IACI,wEAAwE;AAC5E;;AAEA;IACI,sEAAsE;AAC1E",sourcesContent:[".frost-page-selector {\n    background: var(--frost-bg-tertiary);\n    border: 1px solid var(--frost-border-color);\n    border-radius: 6px;\n    margin: 4px 0;\n    padding: 8px 10px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    transition: all 0.2s ease;\n}\n\n.frost-page-selector:hover {\n    background: var(--frost-bg-secondary);\n    transform: translateX(4px);\n    border-color: var(--frost-accent-color);\n}\n\n.frost-page-label {\n    font-size: 12px !important;\n    font-weight: 600 !important;\n    opacity: 0.9;\n    text-transform: uppercase;\n    letter-spacing: 0.01em !important;\n    color: var(--frost-text-primary);\n}\n\n.frost-page-controls {\n    display: flex;\n    align-items: center;\n    background: var(--frost-bg-secondary);\n    border: 1px solid var(--frost-border-color);\n    border-radius: 4px;\n    padding: 2px 6px;\n}\n\n.frost-page-arrow {\n    color: var(--frost-text-primary);\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease;\n    opacity: 0.6;\n    height: 20px;\n    width: 20px;\n    padding: 0;\n}\n\n.frost-page-arrow:hover {\n    opacity: 1;\n    color: var(--frost-accent-color);\n    transform: scale(1.1);\n}\n\n.frost-page-value {\n    min-width: 50px;\n    text-align: center;\n    font-size: 11px !important;\n    color: var(--frost-text-primary);\n    font-weight: 500 !important;\n    padding: 0 6px;\n    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.frost-page-value.switching-out {\n    animation: pageValueSlideOut 0.15s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n\n.frost-page-value.switching-in {\n    animation: pageValueSlideIn 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n"],sourceRoot:""}]);let i=s},999(t,r,e){e.d(r,{A:()=>i});var n=e(354),o=e.n(n),a=e(314),s=e.n(a)()(o());s.push([t.id,`.frost-radio-group {
    background: var(--frost-bg-tertiary);
    border: 1px solid var(--frost-border-color);
    border-radius: 8px;
    padding: 12px;
    margin: 4px 0;
}

.frost-radio-label {
    font-size: 12px !important;
    font-weight: 600 !important;
    color: var(--frost-text-primary);
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.02em !important;
}

.frost-radio-options {
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}

.frost-radio-option {
    position: relative;
    background: var(--frost-bg-secondary);
    border: 1px solid var(--frost-border-color);
    border-radius: 6px;
    padding: 10px 12px;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--frost-text-secondary);
    overflow: hidden;
}

.frost-radio-option:hover {
    background: var(--frost-bg-tertiary);
    transform: translateX(4px);
    border-color: var(--frost-accent-color);
}

.frost-radio-option:active {
    transform: translateY(1px);
}

.frost-radio-icon {
    width: 18px;
    height: 18px;
    border: 2px solid var(--frost-border-color);
    border-radius: 50%;
    position: relative;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.frost-radio-ripple {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    pointer-events: none;
}

.frost-radio-option.active {
    background: var(--frost-bg-secondary);
    border-color: var(--frost-accent-color);
}

.frost-radio-option.active .frost-radio-icon {
    border-color: var(--frost-accent-color);
    background: var(--frost-accent-color);
}

.frost-radio-option.active .frost-radio-icon::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background: var(--frost-text-primary);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    animation: radioScale 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.frost-radio-text {
    font-size: 12px !important;
    font-weight: 450 !important;
    flex: 1;
    color: var(--frost-text-primary);
}
`,"",{version:3,sources:["webpack://./src/styles/components/radio.css"],names:[],mappings:"AAAA;IACI,oCAAoC;IACpC,2CAA2C;IAC3C,kBAAkB;IAClB,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,0BAA0B;IAC1B,2BAA2B;IAC3B,gCAAgC;IAChC,mBAAmB;IACnB,yBAAyB;IACzB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,2DAA2D;AAC/D;;AAEA;IACI,kBAAkB;IAClB,qCAAqC;IACrC,2CAA2C;IAC3C,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,kCAAkC;IAClC,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;IACpC,0BAA0B;IAC1B,uCAAuC;AAC3C;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,2CAA2C;IAC3C,kBAAkB;IAClB,kBAAkB;IAClB,iDAAiD;AACrD;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,qCAAqC;IACrC,uCAAuC;AAC3C;;AAEA;IACI,uCAAuC;IACvC,qCAAqC;AACzC;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,qCAAqC;IACrC,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,yCAAyC;IACzC,kEAAkE;AACtE;;AAEA;IACI,0BAA0B;IAC1B,2BAA2B;IAC3B,OAAO;IACP,gCAAgC;AACpC",sourcesContent:['.frost-radio-group {\n    background: var(--frost-bg-tertiary);\n    border: 1px solid var(--frost-border-color);\n    border-radius: 8px;\n    padding: 12px;\n    margin: 4px 0;\n}\n\n.frost-radio-label {\n    font-size: 12px !important;\n    font-weight: 600 !important;\n    color: var(--frost-text-primary);\n    margin-bottom: 12px;\n    text-transform: uppercase;\n    letter-spacing: 0.02em !important;\n}\n\n.frost-radio-options {\n    display: grid;\n    gap: 8px;\n    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n}\n\n.frost-radio-option {\n    position: relative;\n    background: var(--frost-bg-secondary);\n    border: 1px solid var(--frost-border-color);\n    border-radius: 6px;\n    padding: 10px 12px;\n    cursor: pointer;\n    transition: all 0.2s ease;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    color: var(--frost-text-secondary);\n    overflow: hidden;\n}\n\n.frost-radio-option:hover {\n    background: var(--frost-bg-tertiary);\n    transform: translateX(4px);\n    border-color: var(--frost-accent-color);\n}\n\n.frost-radio-option:active {\n    transform: translateY(1px);\n}\n\n.frost-radio-icon {\n    width: 18px;\n    height: 18px;\n    border: 2px solid var(--frost-border-color);\n    border-radius: 50%;\n    position: relative;\n    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.frost-radio-ripple {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    pointer-events: none;\n}\n\n.frost-radio-option.active {\n    background: var(--frost-bg-secondary);\n    border-color: var(--frost-accent-color);\n}\n\n.frost-radio-option.active .frost-radio-icon {\n    border-color: var(--frost-accent-color);\n    background: var(--frost-accent-color);\n}\n\n.frost-radio-option.active .frost-radio-icon::after {\n    content: "";\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    background: var(--frost-text-primary);\n    border-radius: 50%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(1);\n    animation: radioScale 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.frost-radio-text {\n    font-size: 12px !important;\n    font-weight: 450 !important;\n    flex: 1;\n    color: var(--frost-text-primary);\n}\n'],sourceRoot:""}]);let i=s},472(t,r,e){e.d(r,{A:()=>i});var n=e(354),o=e.n(n),a=e(314),s=e.n(a)()(o());s.push([t.id,`.frost-search-container {
    position: fixed;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    width: min(600px, 90vw);
    background: var(--frost-bg-primary);
    border-radius: 16px;
    box-shadow: 0 8px 32px var(--frost-shadow-color), 0 2px 8px rgba(0, 0, 0, 0.2);
    z-index: 999999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid var(--frost-border-color);
    transform-origin: top;
    transform: translateX(-50%) scale(0.98);
    overflow: hidden;
}

.frost-search-container.visible {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) scale(1);
}

.frost-search-input-wrapper {
    position: relative;
    padding: 20px;
    border-bottom: 1px solid var(--frost-border-color);
    display: flex;
    align-items: center;
    gap: 16px;
    background: var(--frost-bg-primary);
}

.frost-search-input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 16px;
    background: transparent;
    color: var(--frost-text-primary);
    padding: 0;
    margin: 0;
    line-height: 1.4;
}

.frost-search-shortcut {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 10px;
    border-radius: 6px;
    background: var(--frost-bg-secondary);
    color: var(--frost-text-secondary);
    font-size: 12px;
    user-select: none;
    white-space: nowrap;
    opacity: 0.8;
    transition: opacity 0.2s ease;
}

.frost-search-container:not(:focus-within) .frost-search-shortcut {
    opacity: 0.6;
}

.frost-search-input::placeholder {
    color: var(--frost-text-secondary);
    opacity: 0.7;
}

.frost-search-results {
    max-height: min(400px, 60vh);
    overflow-y: auto;
    padding: 6px 0;
    background: var(--frost-bg-primary);
    opacity: 1;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
}

.frost-search-results[style*="display: none"] {
    opacity: 0;
    max-height: 0;
    padding: 0;
}

.frost-search-result {
    padding: 12px 20px;
    cursor: pointer;
    color: var(--frost-text-primary);
    transition: all 0.15s ease;
    display: flex;
    align-items: center;
    gap: 16px;
    position: relative;
    margin: 0 6px;
    border-radius: 8px;
}

.frost-search-result > div {
    display: flex;
    align-items: center;
    flex: 1;
}

.frost-search-result .item-name {
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
}

.frost-search-result:hover {
    background-color: var(--frost-bg-secondary);
}

.frost-search-result.selected {
    background-color: var(--frost-bg-secondary);
}

.frost-search-result .menu-indicator {
    color: var(--frost-text-secondary);
    opacity: 0.7;
    font-weight: normal;
    margin-left: 4px;
    white-space: nowrap;
}

.frost-search-result .highlight {
    color: var(--frost-accent-color);
    font-weight: 600;
    display: inline;
    position: relative;
}

.frost-search-result .type-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 24px;
    height: 24px;
    color: var(--frost-text-secondary);
    opacity: 0.8;
}

.frost-search-result .type-indicator svg {
    width: 16px;
    height: 16px;
}

.frost-search-empty {
    padding: 24px 20px;
    text-align: center;
    color: var(--frost-text-secondary);
    font-size: 0.9em;
    opacity: 0.8;
}

.frost-search-results::-webkit-scrollbar {
    width: 6px;
}

.frost-search-results::-webkit-scrollbar-track {
    background: transparent;
    margin: 6px 0;
}

.frost-search-results::-webkit-scrollbar-thumb {
    background: var(--frost-border-color);
    border-radius: 3px;
}

.frost-search-results::-webkit-scrollbar-thumb:hover {
    background: var(--frost-text-secondary);
}

.frost-search-highlight {
    background-color: var(--frost-bg-secondary) !important;
    outline: 2px solid var(--frost-accent-color) !important;
    outline-offset: -1px;
    border-radius: 4px;
    position: relative;
    z-index: 1;
}

.frost-search-highlight:focus {
    outline: 2px solid var(--frost-accent-color) !important;
    outline-offset: 0;
    background-color: var(--frost-bg-tertiary) !important;
}

.frost-search-selected {
    animation: frost-glow 2s cubic-bezier(0.4, 0, 0.2, 1);
    outline: 2px solid var(--frost-accent-color);
    outline-offset: -1px;
    border-radius: 4px;
    position: relative;
    z-index: 1;
    background-color: var(--frost-bg-secondary) !important;
}
`,"",{version:3,sources:["webpack://./src/styles/components/search.css"],names:[],mappings:"AAAA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,2BAA2B;IAC3B,uBAAuB;IACvB,mCAAmC;IACnC,mBAAmB;IACnB,8EAA8E;IAC9E,eAAe;IACf,UAAU;IACV,kBAAkB;IAClB,iDAAiD;IACjD,2CAA2C;IAC3C,qBAAqB;IACrB,uCAAuC;IACvC,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,kDAAkD;IAClD,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,mCAAmC;AACvC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,gCAAgC;IAChC,UAAU;IACV,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,iBAAiB;IACjB,kBAAkB;IAClB,qCAAqC;IACrC,kCAAkC;IAClC,eAAe;IACf,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,4BAA4B;IAC5B,gBAAgB;IAChB,cAAc;IACd,mCAAmC;IACnC,UAAU;IACV,iDAAiD;IACjD,+BAA+B;IAC/B,gCAAgC;AACpC;;AAEA;IACI,UAAU;IACV,aAAa;IACb,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,gCAAgC;IAChC,0BAA0B;IAC1B,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,OAAO;AACX;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;IACpB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,kCAAkC;IAClC,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,YAAY;IACZ,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,kCAAkC;IAClC,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,qCAAqC;IACrC,kBAAkB;AACtB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,sDAAsD;IACtD,uDAAuD;IACvD,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,uDAAuD;IACvD,iBAAiB;IACjB,qDAAqD;AACzD;;AAEA;IACI,qDAAqD;IACrD,4CAA4C;IAC5C,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;IAClB,UAAU;IACV,sDAAsD;AAC1D",sourcesContent:['.frost-search-container {\n    position: fixed;\n    top: 15%;\n    left: 50%;\n    transform: translateX(-50%);\n    width: min(600px, 90vw);\n    background: var(--frost-bg-primary);\n    border-radius: 16px;\n    box-shadow: 0 8px 32px var(--frost-shadow-color), 0 2px 8px rgba(0, 0, 0, 0.2);\n    z-index: 999999;\n    opacity: 0;\n    visibility: hidden;\n    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n    border: 1px solid var(--frost-border-color);\n    transform-origin: top;\n    transform: translateX(-50%) scale(0.98);\n    overflow: hidden;\n}\n\n.frost-search-container.visible {\n    opacity: 1;\n    visibility: visible;\n    transform: translateX(-50%) scale(1);\n}\n\n.frost-search-input-wrapper {\n    position: relative;\n    padding: 20px;\n    border-bottom: 1px solid var(--frost-border-color);\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    background: var(--frost-bg-primary);\n}\n\n.frost-search-input {\n    width: 100%;\n    border: none;\n    outline: none;\n    font-size: 16px;\n    background: transparent;\n    color: var(--frost-text-primary);\n    padding: 0;\n    margin: 0;\n    line-height: 1.4;\n}\n\n.frost-search-shortcut {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    padding: 4px 10px;\n    border-radius: 6px;\n    background: var(--frost-bg-secondary);\n    color: var(--frost-text-secondary);\n    font-size: 12px;\n    user-select: none;\n    white-space: nowrap;\n    opacity: 0.8;\n    transition: opacity 0.2s ease;\n}\n\n.frost-search-container:not(:focus-within) .frost-search-shortcut {\n    opacity: 0.6;\n}\n\n.frost-search-input::placeholder {\n    color: var(--frost-text-secondary);\n    opacity: 0.7;\n}\n\n.frost-search-results {\n    max-height: min(400px, 60vh);\n    overflow-y: auto;\n    padding: 6px 0;\n    background: var(--frost-bg-primary);\n    opacity: 1;\n    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n    border-bottom-left-radius: 16px;\n    border-bottom-right-radius: 16px;\n}\n\n.frost-search-results[style*="display: none"] {\n    opacity: 0;\n    max-height: 0;\n    padding: 0;\n}\n\n.frost-search-result {\n    padding: 12px 20px;\n    cursor: pointer;\n    color: var(--frost-text-primary);\n    transition: all 0.15s ease;\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    position: relative;\n    margin: 0 6px;\n    border-radius: 8px;\n}\n\n.frost-search-result > div {\n    display: flex;\n    align-items: center;\n    flex: 1;\n}\n\n.frost-search-result .item-name {\n    font-weight: 500;\n    display: inline-flex;\n    align-items: center;\n    white-space: nowrap;\n}\n\n.frost-search-result:hover {\n    background-color: var(--frost-bg-secondary);\n}\n\n.frost-search-result.selected {\n    background-color: var(--frost-bg-secondary);\n}\n\n.frost-search-result .menu-indicator {\n    color: var(--frost-text-secondary);\n    opacity: 0.7;\n    font-weight: normal;\n    margin-left: 4px;\n    white-space: nowrap;\n}\n\n.frost-search-result .highlight {\n    color: var(--frost-accent-color);\n    font-weight: 600;\n    display: inline;\n    position: relative;\n}\n\n.frost-search-result .type-indicator {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-width: 24px;\n    height: 24px;\n    color: var(--frost-text-secondary);\n    opacity: 0.8;\n}\n\n.frost-search-result .type-indicator svg {\n    width: 16px;\n    height: 16px;\n}\n\n.frost-search-empty {\n    padding: 24px 20px;\n    text-align: center;\n    color: var(--frost-text-secondary);\n    font-size: 0.9em;\n    opacity: 0.8;\n}\n\n.frost-search-results::-webkit-scrollbar {\n    width: 6px;\n}\n\n.frost-search-results::-webkit-scrollbar-track {\n    background: transparent;\n    margin: 6px 0;\n}\n\n.frost-search-results::-webkit-scrollbar-thumb {\n    background: var(--frost-border-color);\n    border-radius: 3px;\n}\n\n.frost-search-results::-webkit-scrollbar-thumb:hover {\n    background: var(--frost-text-secondary);\n}\n\n.frost-search-highlight {\n    background-color: var(--frost-bg-secondary) !important;\n    outline: 2px solid var(--frost-accent-color) !important;\n    outline-offset: -1px;\n    border-radius: 4px;\n    position: relative;\n    z-index: 1;\n}\n\n.frost-search-highlight:focus {\n    outline: 2px solid var(--frost-accent-color) !important;\n    outline-offset: 0;\n    background-color: var(--frost-bg-tertiary) !important;\n}\n\n.frost-search-selected {\n    animation: frost-glow 2s cubic-bezier(0.4, 0, 0.2, 1);\n    outline: 2px solid var(--frost-accent-color);\n    outline-offset: -1px;\n    border-radius: 4px;\n    position: relative;\n    z-index: 1;\n    background-color: var(--frost-bg-secondary) !important;\n}\n'],sourceRoot:""}]);let i=s},596(t,r,e){e.d(r,{A:()=>i});var n=e(354),o=e.n(n),a=e(314),s=e.n(a)()(o());s.push([t.id,`.frost-select-container {
    position: relative;
    margin: 4px 0;
    padding: 8px 10px;
    border-radius: 6px;
    background: var(--frost-bg-tertiary);
    border: 1px solid var(--frost-border-color);
}

.frost-select-label {
    display: block;
    margin-bottom: 8px;
    font-size: 12px !important;
    font-weight: 600 !important;
    color: var(--frost-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.02em !important;
}

.frost-select {
    position: relative;
    width: 100%;
    cursor: pointer;
}

.frost-select-value {
    background: var(--frost-bg-secondary);
    border: 1px solid var(--frost-border-color);
    border-radius: 4px;
    padding: 8px 12px;
    transition: all 0.2s ease;
    color: var(--frost-text-primary);
}

.frost-select-value:hover {
    background: var(--frost-bg-tertiary);
    transform: translateX(4px);
    border-color: var(--frost-accent-color);
}

.frost-select-dropdown {
    position: fixed;
    min-width: 200px;
    background: var(--frost-bg-primary);
    border: 1px solid var(--frost-border-color);
    border-radius: 6px;
    margin-top: 4px;
    opacity: 0;
    transform: translateY(-10px);
    visibility: hidden;
    z-index: 1000000;
    box-shadow: 0 4px 12px var(--frost-shadow-color);
    max-height: 300px;
    overflow-y: auto;
    color-scheme: inherit;
    padding: 4px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.frost-select-dropdown.show {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
}

.frost-select-option {
    padding: 8px 12px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 12px !important;
    font-weight: 450 !important;
    color: var(--frost-text-primary);
    border-radius: 4px;
}

.frost-select-option:hover {
    background: color-mix(in srgb, var(--frost-accent-color) 15%, transparent);
}

.frost-select-dropdown::-webkit-scrollbar {
    width: 6px;
}

.frost-select-dropdown::-webkit-scrollbar-track {
    background: var(--frost-bg-secondary);
}

.frost-select-dropdown::-webkit-scrollbar-thumb {
    background: var(--frost-accent-color);
    border-radius: 3px;
}
`,"",{version:3,sources:["webpack://./src/styles/components/select.css"],names:[],mappings:"AAAA;IACI,kBAAkB;IAClB,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,oCAAoC;IACpC,2CAA2C;AAC/C;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,0BAA0B;IAC1B,2BAA2B;IAC3B,kCAAkC;IAClC,yBAAyB;IACzB,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,qCAAqC;IACrC,2CAA2C;IAC3C,kBAAkB;IAClB,iBAAiB;IACjB,yBAAyB;IACzB,gCAAgC;AACpC;;AAEA;IACI,oCAAoC;IACpC,0BAA0B;IAC1B,uCAAuC;AAC3C;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,mCAAmC;IACnC,2CAA2C;IAC3C,kBAAkB;IAClB,eAAe;IACf,UAAU;IACV,4BAA4B;IAC5B,kBAAkB;IAClB,gBAAgB;IAChB,gDAAgD;IAChD,iBAAiB;IACjB,gBAAgB;IAChB,qBAAqB;IACrB,YAAY;IACZ,iDAAiD;AACrD;;AAEA;IACI,UAAU;IACV,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,yBAAyB;IACzB,0BAA0B;IAC1B,2BAA2B;IAC3B,gCAAgC;IAChC,kBAAkB;AACtB;;AAEA;IACI,0EAA0E;AAC9E;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,qCAAqC;IACrC,kBAAkB;AACtB",sourcesContent:[".frost-select-container {\n    position: relative;\n    margin: 4px 0;\n    padding: 8px 10px;\n    border-radius: 6px;\n    background: var(--frost-bg-tertiary);\n    border: 1px solid var(--frost-border-color);\n}\n\n.frost-select-label {\n    display: block;\n    margin-bottom: 8px;\n    font-size: 12px !important;\n    font-weight: 600 !important;\n    color: var(--frost-text-secondary);\n    text-transform: uppercase;\n    letter-spacing: 0.02em !important;\n}\n\n.frost-select {\n    position: relative;\n    width: 100%;\n    cursor: pointer;\n}\n\n.frost-select-value {\n    background: var(--frost-bg-secondary);\n    border: 1px solid var(--frost-border-color);\n    border-radius: 4px;\n    padding: 8px 12px;\n    transition: all 0.2s ease;\n    color: var(--frost-text-primary);\n}\n\n.frost-select-value:hover {\n    background: var(--frost-bg-tertiary);\n    transform: translateX(4px);\n    border-color: var(--frost-accent-color);\n}\n\n.frost-select-dropdown {\n    position: fixed;\n    min-width: 200px;\n    background: var(--frost-bg-primary);\n    border: 1px solid var(--frost-border-color);\n    border-radius: 6px;\n    margin-top: 4px;\n    opacity: 0;\n    transform: translateY(-10px);\n    visibility: hidden;\n    z-index: 1000000;\n    box-shadow: 0 4px 12px var(--frost-shadow-color);\n    max-height: 300px;\n    overflow-y: auto;\n    color-scheme: inherit;\n    padding: 4px;\n    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.frost-select-dropdown.show {\n    opacity: 1;\n    transform: translateY(0);\n    visibility: visible;\n}\n\n.frost-select-option {\n    padding: 8px 12px;\n    cursor: pointer;\n    transition: all 0.2s ease;\n    font-size: 12px !important;\n    font-weight: 450 !important;\n    color: var(--frost-text-primary);\n    border-radius: 4px;\n}\n\n.frost-select-option:hover {\n    background: color-mix(in srgb, var(--frost-accent-color) 15%, transparent);\n}\n\n.frost-select-dropdown::-webkit-scrollbar {\n    width: 6px;\n}\n\n.frost-select-dropdown::-webkit-scrollbar-track {\n    background: var(--frost-bg-secondary);\n}\n\n.frost-select-dropdown::-webkit-scrollbar-thumb {\n    background: var(--frost-accent-color);\n    border-radius: 3px;\n}\n"],sourceRoot:""}]);let i=s},767(t,r,e){e.d(r,{A:()=>i});var n=e(354),o=e.n(n),a=e(314),s=e.n(a)()(o());s.push([t.id,`.frost-slider {
    background: var(--frost-bg-tertiary);
    border: 1px solid var(--frost-border-color);
    border-radius: 6px;
    padding: 8px 10px;
    margin: 4px 0;
    transition: all 0.2s ease;
}

.frost-slider:hover {
    background: var(--frost-bg-secondary);
    transform: translateX(4px);
    border-color: var(--frost-accent-color);
}

.frost-slider span {
    font-size: 12px !important;
    font-weight: 600 !important;
    color: var(--frost-text-primary);
    margin-bottom: 8px;
    display: block;
    text-transform: uppercase;
    letter-spacing: 0.01em !important;
}

.frost-slider-controls {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 8px;
}

.frost-slider input[type="range"] {
    -webkit-appearance: none;
    height: 6px;
    flex: 1;
    background: linear-gradient(
        to right,
        var(--frost-accent-color) 0%,
        var(--frost-accent-color) var(--slider-value, 50%),
        var(--frost-border-color) var(--slider-value, 50%),
        var(--frost-border-color) 100%
    );
    border-radius: 3px;
    outline: none;
    cursor: pointer;
}

.frost-slider input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 12px;
    width: 12px;
    background: var(--frost-accent-color);
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s ease;
    transform: scale(1);
    box-shadow: 0 2px 4px var(--frost-shadow-color);
}

.frost-slider input[type="range"]::-webkit-slider-thumb:hover {
    transform: scale(1.2);
    background: var(--frost-accent-hover);
}

.frost-slider input[type="range"]::-webkit-slider-thumb:active {
    transform: scale(0.95);
}

.frost-slider-value {
    background: var(--frost-bg-secondary);
    border: 1px solid var(--frost-border-color);
    color: var(--frost-text-primary);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 11px !important;
    font-weight: 500 !important;
    min-width: 40px;
    text-align: center;
}

.frost-slider-value:focus {
    background: var(--frost-bg-tertiary);
    border-color: var(--frost-accent-color);
    outline: none;
}

.frost-slider-value.invalid {
    animation: shake 0.4s ease-in-out;
    background: rgba(240, 71, 71, 0.2);
    border-color: rgba(240, 71, 71, 0.5);
    color: #ff4444;
}
`,"",{version:3,sources:["webpack://./src/styles/components/slider.css"],names:[],mappings:"AAAA;IACI,oCAAoC;IACpC,2CAA2C;IAC3C,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,qCAAqC;IACrC,0BAA0B;IAC1B,uCAAuC;AAC3C;;AAEA;IACI,0BAA0B;IAC1B,2BAA2B;IAC3B,gCAAgC;IAChC,kBAAkB;IAClB,cAAc;IACd,yBAAyB;IACzB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,wBAAwB;IACxB,WAAW;IACX,OAAO;IACP;;;;;;KAMC;IACD,kBAAkB;IAClB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,wBAAwB;IACxB,YAAY;IACZ,WAAW;IACX,qCAAqC;IACrC,kBAAkB;IAClB,eAAe;IACf,+BAA+B;IAC/B,mBAAmB;IACnB,+CAA+C;AACnD;;AAEA;IACI,qBAAqB;IACrB,qCAAqC;AACzC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qCAAqC;IACrC,2CAA2C;IAC3C,gCAAgC;IAChC,gBAAgB;IAChB,kBAAkB;IAClB,0BAA0B;IAC1B,2BAA2B;IAC3B,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;IACpC,uCAAuC;IACvC,aAAa;AACjB;;AAEA;IACI,iCAAiC;IACjC,kCAAkC;IAClC,oCAAoC;IACpC,cAAc;AAClB",sourcesContent:['.frost-slider {\n    background: var(--frost-bg-tertiary);\n    border: 1px solid var(--frost-border-color);\n    border-radius: 6px;\n    padding: 8px 10px;\n    margin: 4px 0;\n    transition: all 0.2s ease;\n}\n\n.frost-slider:hover {\n    background: var(--frost-bg-secondary);\n    transform: translateX(4px);\n    border-color: var(--frost-accent-color);\n}\n\n.frost-slider span {\n    font-size: 12px !important;\n    font-weight: 600 !important;\n    color: var(--frost-text-primary);\n    margin-bottom: 8px;\n    display: block;\n    text-transform: uppercase;\n    letter-spacing: 0.01em !important;\n}\n\n.frost-slider-controls {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    margin-top: 8px;\n}\n\n.frost-slider input[type="range"] {\n    -webkit-appearance: none;\n    height: 6px;\n    flex: 1;\n    background: linear-gradient(\n        to right,\n        var(--frost-accent-color) 0%,\n        var(--frost-accent-color) var(--slider-value, 50%),\n        var(--frost-border-color) var(--slider-value, 50%),\n        var(--frost-border-color) 100%\n    );\n    border-radius: 3px;\n    outline: none;\n    cursor: pointer;\n}\n\n.frost-slider input[type="range"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: 12px;\n    width: 12px;\n    background: var(--frost-accent-color);\n    border-radius: 50%;\n    cursor: pointer;\n    transition: transform 0.2s ease;\n    transform: scale(1);\n    box-shadow: 0 2px 4px var(--frost-shadow-color);\n}\n\n.frost-slider input[type="range"]::-webkit-slider-thumb:hover {\n    transform: scale(1.2);\n    background: var(--frost-accent-hover);\n}\n\n.frost-slider input[type="range"]::-webkit-slider-thumb:active {\n    transform: scale(0.95);\n}\n\n.frost-slider-value {\n    background: var(--frost-bg-secondary);\n    border: 1px solid var(--frost-border-color);\n    color: var(--frost-text-primary);\n    padding: 4px 8px;\n    border-radius: 4px;\n    font-size: 11px !important;\n    font-weight: 500 !important;\n    min-width: 40px;\n    text-align: center;\n}\n\n.frost-slider-value:focus {\n    background: var(--frost-bg-tertiary);\n    border-color: var(--frost-accent-color);\n    outline: none;\n}\n\n.frost-slider-value.invalid {\n    animation: shake 0.4s ease-in-out;\n    background: rgba(240, 71, 71, 0.2);\n    border-color: rgba(240, 71, 71, 0.5);\n    color: #ff4444;\n}\n'],sourceRoot:""}]);let i=s},200(t,r,e){e.d(r,{A:()=>i});var n=e(354),o=e.n(n),a=e(314),s=e.n(a)()(o());s.push([t.id,`.frost-switch-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 4px 0;
    padding: 8px 10px;
    border-radius: 6px;
    background: var(--frost-bg-tertiary);
    border: 1px solid var(--frost-border-color);
    transition: all 0.2s ease;
}

.frost-switch-container:hover {
    background: var(--frost-bg-secondary);
    transform: translateX(4px);
    border-color: var(--frost-accent-color);
}

.frost-switch-label {
    font-size: 12px !important;
    font-weight: 600 !important;
    color: var(--frost-text-primary);
    text-transform: uppercase;
    letter-spacing: 0.02em !important;
}

.frost-switch-track {
    position: relative;
    width: 44px;
    height: 24px;
    background: var(--frost-bg-secondary);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid var(--frost-border-color);
}

.frost-switch-track.active {
    background: linear-gradient(135deg, var(--frost-accent-color), var(--frost-accent-hover));
    border-color: var(--frost-accent-color);
}

.frost-switch-container .frost-switch-thumb {
    position: absolute;
    top: 50%;
    left: 2px;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    background: white;
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.frost-switch-container .frost-switch-track.active .frost-switch-thumb {
    transform: translate(22px, -50%);
}

.frost-switch-container.slim .frost-switch-track {
    height: 16px;
}

.frost-switch-container.slim .frost-switch-thumb {
    width: 12px;
    height: 12px;
}

.frost-switch-container.slim .frost-switch-track.active .frost-switch-thumb {
    transform: translate(28px, -50%);
}

.frost-switch-container.pill .frost-switch-track {
    border-radius: 4px;
    height: 20px;
}

.frost-switch-container.pill .frost-switch-thumb {
    border-radius: 2px;
    width: 14px;
    height: 16px;
}

.frost-switch-container.pill .frost-switch-track.active .frost-switch-thumb {
    transform: translate(26px, -50%);
}

.frost-switch-container .frost-switch-track:active .frost-switch-thumb {
    transform: translateY(-50%) scale(0.9);
}

.frost-switch-container .frost-switch-track.active:active .frost-switch-thumb {
    transform: translate(22px, -50%) scale(0.9);
}

.frost-switch-container.slim .frost-switch-track.active:active .frost-switch-thumb {
    transform: translate(28px, -50%) scale(0.9);
}

.frost-switch-container.pill .frost-switch-track.active:active .frost-switch-thumb {
    transform: translate(26px, -50%) scale(0.9);
}

.frost-switch-ripple {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    border-radius: inherit;
    pointer-events: none;
}

.frost-switch-ripple .ripple {
    position: absolute;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    transform: scale(0);
    animation: switchRipple 0.6s linear;
    pointer-events: none;
}

.frost-switch-track:hover .frost-switch-thumb {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}
`,"",{version:3,sources:["webpack://./src/styles/components/switch.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,oCAAoC;IACpC,2CAA2C;IAC3C,yBAAyB;AAC7B;;AAEA;IACI,qCAAqC;IACrC,0BAA0B;IAC1B,uCAAuC;AAC3C;;AAEA;IACI,0BAA0B;IAC1B,2BAA2B;IAC3B,gCAAgC;IAChC,yBAAyB;IACzB,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,qCAAqC;IACrC,mBAAmB;IACnB,eAAe;IACf,iDAAiD;IACjD,2CAA2C;AAC/C;;AAEA;IACI,yFAAyF;IACzF,uCAAuC;AAC3C;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,2BAA2B;IAC3B,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,iDAAiD;IACjD,wCAAwC;AAC5C;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,gBAAgB;IAChB,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,oCAAoC;IACpC,kBAAkB;IAClB,mBAAmB;IACnB,mCAAmC;IACnC,oBAAoB;AACxB;;AAEA;IACI,wCAAwC;AAC5C",sourcesContent:[".frost-switch-container {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin: 4px 0;\n    padding: 8px 10px;\n    border-radius: 6px;\n    background: var(--frost-bg-tertiary);\n    border: 1px solid var(--frost-border-color);\n    transition: all 0.2s ease;\n}\n\n.frost-switch-container:hover {\n    background: var(--frost-bg-secondary);\n    transform: translateX(4px);\n    border-color: var(--frost-accent-color);\n}\n\n.frost-switch-label {\n    font-size: 12px !important;\n    font-weight: 600 !important;\n    color: var(--frost-text-primary);\n    text-transform: uppercase;\n    letter-spacing: 0.02em !important;\n}\n\n.frost-switch-track {\n    position: relative;\n    width: 44px;\n    height: 24px;\n    background: var(--frost-bg-secondary);\n    border-radius: 12px;\n    cursor: pointer;\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    border: 1px solid var(--frost-border-color);\n}\n\n.frost-switch-track.active {\n    background: linear-gradient(135deg, var(--frost-accent-color), var(--frost-accent-hover));\n    border-color: var(--frost-accent-color);\n}\n\n.frost-switch-container .frost-switch-thumb {\n    position: absolute;\n    top: 50%;\n    left: 2px;\n    transform: translateY(-50%);\n    width: 18px;\n    height: 18px;\n    background: white;\n    border-radius: 50%;\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n\n.frost-switch-container .frost-switch-track.active .frost-switch-thumb {\n    transform: translate(22px, -50%);\n}\n\n.frost-switch-container.slim .frost-switch-track {\n    height: 16px;\n}\n\n.frost-switch-container.slim .frost-switch-thumb {\n    width: 12px;\n    height: 12px;\n}\n\n.frost-switch-container.slim .frost-switch-track.active .frost-switch-thumb {\n    transform: translate(28px, -50%);\n}\n\n.frost-switch-container.pill .frost-switch-track {\n    border-radius: 4px;\n    height: 20px;\n}\n\n.frost-switch-container.pill .frost-switch-thumb {\n    border-radius: 2px;\n    width: 14px;\n    height: 16px;\n}\n\n.frost-switch-container.pill .frost-switch-track.active .frost-switch-thumb {\n    transform: translate(26px, -50%);\n}\n\n.frost-switch-container .frost-switch-track:active .frost-switch-thumb {\n    transform: translateY(-50%) scale(0.9);\n}\n\n.frost-switch-container .frost-switch-track.active:active .frost-switch-thumb {\n    transform: translate(22px, -50%) scale(0.9);\n}\n\n.frost-switch-container.slim .frost-switch-track.active:active .frost-switch-thumb {\n    transform: translate(28px, -50%) scale(0.9);\n}\n\n.frost-switch-container.pill .frost-switch-track.active:active .frost-switch-thumb {\n    transform: translate(26px, -50%) scale(0.9);\n}\n\n.frost-switch-ripple {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    overflow: hidden;\n    border-radius: inherit;\n    pointer-events: none;\n}\n\n.frost-switch-ripple .ripple {\n    position: absolute;\n    background: rgba(255, 255, 255, 0.7);\n    border-radius: 50%;\n    transform: scale(0);\n    animation: switchRipple 0.6s linear;\n    pointer-events: none;\n}\n\n.frost-switch-track:hover .frost-switch-thumb {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n}\n"],sourceRoot:""}]);let i=s},315(t,r,e){e.d(r,{A:()=>i});var n=e(354),o=e.n(n),a=e(314),s=e.n(a)()(o());s.push([t.id,`.frost-toast-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000000;
    display: flex;
    flex-direction: column;
    gap: 10px;
    pointer-events: none;
}

.frost-toast {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    background: var(--frost-bg-primary);
    border: 1px solid var(--frost-border-color);
    border-radius: 8px;
    color: #fff;
    font-size: 14px;
    box-shadow: 0 4px 12px var(--frost-shadow-color);
    backdrop-filter: blur(10px);
    pointer-events: all;
    animation: toastSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    min-width: 300px;
    max-width: 400px;
    width: max-content;
    margin-left: auto;
}

.frost-toast.hide {
    animation: toastSlideOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.frost-toast-icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 2px 8px var(--frost-shadow-color);
}

.frost-toast-icon svg {
    width: 16px;
    height: 16px;
}

.frost-toast.success .frost-toast-icon {
    background: rgba(46, 204, 113, 0.2);
    color: #2ecc71;
    box-shadow: 0 2px 8px rgba(46, 204, 113, 0.2);
}

.frost-toast.error .frost-toast-icon {
    background: rgba(231, 76, 60, 0.2);
    color: #e74c3c;
    box-shadow: 0 2px 8px rgba(231, 76, 60, 0.2);
}

.frost-toast.warning .frost-toast-icon {
    background: rgba(241, 196, 15, 0.2);
    color: #f1c40f;
    box-shadow: 0 2px 8px rgba(241, 196, 15, 0.2);
}

.frost-toast.info .frost-toast-icon {
    background: rgba(52, 152, 219, 0.2);
    color: #3498db;
    box-shadow: 0 2px 8px rgba(52, 152, 219, 0.2);
}

.frost-toast.undefined .frost-toast-icon {
    background: rgba(138, 138, 138, 0.2);
    color: #787878;
    box-shadow: 0 2px 8px rgba(138, 138, 138, 0.2);
}

.frost-toast-message {
    flex-grow: 1;
    font-weight: 500;
    word-wrap: break-word;
    overflow-wrap: break-word;
    min-width: 0;
}

.frost-toast-close {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    padding: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: all 0.2s ease;
}

.frost-toast-close svg {
    width: 16px;
    height: 16px;
}

.frost-toast-close:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
}

.frost-toast-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex-grow: 1;
    min-width: 0;
}

.frost-toast.action .frost-toast-content {
    flex-direction: row;
    align-items: center;
    gap: 12px;
}

.frost-toast-action {
    background: none;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    color: #fff;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    text-transform: uppercase;
    white-space: nowrap;
}

.frost-toast-action:hover {
    background: rgba(255, 255, 255, 0.1);
}

.frost-toast-action.primary {
    background: #7289da;
    border-color: #7289da;
}

.frost-toast-action.primary:hover {
    background: #5b6eaf;
}

.frost-toast-action.destructive {
    background: #e74c3c;
    border-color: #e74c3c;
}

.frost-toast-action.destructive:hover {
    background: #c0392b;
}
`,"",{version:3,sources:["webpack://./src/styles/components/toast.css"],names:[],mappings:"AAAA;IACI,eAAe;IACf,SAAS;IACT,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,mCAAmC;IACnC,2CAA2C;IAC3C,kBAAkB;IAClB,WAAW;IACX,eAAe;IACf,gDAAgD;IAChD,2BAA2B;IAC3B,mBAAmB;IACnB,yDAAyD;IACzD,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,mEAAmE;AACvE;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,+CAA+C;AACnD;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,mCAAmC;IACnC,cAAc;IACd,6CAA6C;AACjD;;AAEA;IACI,kCAAkC;IAClC,cAAc;IACd,4CAA4C;AAChD;;AAEA;IACI,mCAAmC;IACnC,cAAc;IACd,6CAA6C;AACjD;;AAEA;IACI,mCAAmC;IACnC,cAAc;IACd,6CAA6C;AACjD;;AAEA;IACI,oCAAoC;IACpC,cAAc;IACd,8CAA8C;AAClD;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,qBAAqB;IACrB,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,+BAA+B;IAC/B,eAAe;IACf,UAAU;IACV,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,oCAAoC;IACpC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,0CAA0C;IAC1C,kBAAkB;IAClB,WAAW;IACX,iBAAiB;IACjB,eAAe;IACf,gBAAgB;IAChB,eAAe;IACf,yBAAyB;IACzB,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;AACvB",sourcesContent:[".frost-toast-container {\n    position: fixed;\n    top: 20px;\n    right: 20px;\n    z-index: 1000000;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    pointer-events: none;\n}\n\n.frost-toast {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 12px 16px;\n    background: var(--frost-bg-primary);\n    border: 1px solid var(--frost-border-color);\n    border-radius: 8px;\n    color: #fff;\n    font-size: 14px;\n    box-shadow: 0 4px 12px var(--frost-shadow-color);\n    backdrop-filter: blur(10px);\n    pointer-events: all;\n    animation: toastSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    min-width: 300px;\n    max-width: 400px;\n    width: max-content;\n    margin-left: auto;\n}\n\n.frost-toast.hide {\n    animation: toastSlideOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n\n.frost-toast-icon {\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    box-shadow: 0 2px 8px var(--frost-shadow-color);\n}\n\n.frost-toast-icon svg {\n    width: 16px;\n    height: 16px;\n}\n\n.frost-toast.success .frost-toast-icon {\n    background: rgba(46, 204, 113, 0.2);\n    color: #2ecc71;\n    box-shadow: 0 2px 8px rgba(46, 204, 113, 0.2);\n}\n\n.frost-toast.error .frost-toast-icon {\n    background: rgba(231, 76, 60, 0.2);\n    color: #e74c3c;\n    box-shadow: 0 2px 8px rgba(231, 76, 60, 0.2);\n}\n\n.frost-toast.warning .frost-toast-icon {\n    background: rgba(241, 196, 15, 0.2);\n    color: #f1c40f;\n    box-shadow: 0 2px 8px rgba(241, 196, 15, 0.2);\n}\n\n.frost-toast.info .frost-toast-icon {\n    background: rgba(52, 152, 219, 0.2);\n    color: #3498db;\n    box-shadow: 0 2px 8px rgba(52, 152, 219, 0.2);\n}\n\n.frost-toast.undefined .frost-toast-icon {\n    background: rgba(138, 138, 138, 0.2);\n    color: #787878;\n    box-shadow: 0 2px 8px rgba(138, 138, 138, 0.2);\n}\n\n.frost-toast-message {\n    flex-grow: 1;\n    font-weight: 500;\n    word-wrap: break-word;\n    overflow-wrap: break-word;\n    min-width: 0;\n}\n\n.frost-toast-close {\n    background: none;\n    border: none;\n    color: rgba(255, 255, 255, 0.6);\n    cursor: pointer;\n    padding: 0;\n    width: 24px;\n    height: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 4px;\n    transition: all 0.2s ease;\n}\n\n.frost-toast-close svg {\n    width: 16px;\n    height: 16px;\n}\n\n.frost-toast-close:hover {\n    background: rgba(255, 255, 255, 0.1);\n    color: white;\n}\n\n.frost-toast-content {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    flex-grow: 1;\n    min-width: 0;\n}\n\n.frost-toast.action .frost-toast-content {\n    flex-direction: row;\n    align-items: center;\n    gap: 12px;\n}\n\n.frost-toast-action {\n    background: none;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    border-radius: 4px;\n    color: #fff;\n    padding: 6px 12px;\n    font-size: 12px;\n    font-weight: 600;\n    cursor: pointer;\n    transition: all 0.2s ease;\n    text-transform: uppercase;\n    white-space: nowrap;\n}\n\n.frost-toast-action:hover {\n    background: rgba(255, 255, 255, 0.1);\n}\n\n.frost-toast-action.primary {\n    background: #7289da;\n    border-color: #7289da;\n}\n\n.frost-toast-action.primary:hover {\n    background: #5b6eaf;\n}\n\n.frost-toast-action.destructive {\n    background: #e74c3c;\n    border-color: #e74c3c;\n}\n\n.frost-toast-action.destructive:hover {\n    background: #c0392b;\n}\n"],sourceRoot:""}]);let i=s},468(t,r,e){e.d(r,{A:()=>i});var n=e(354),o=e.n(n),a=e(314),s=e.n(a)()(o());s.push([t.id,`.frost-toggle {
    display: flex;
    align-items: center;
    margin: 4px 0;
    padding: 8px 10px;
    border-radius: 6px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background: var(--frost-bg-tertiary);
    border: 1px solid var(--frost-border-color);
    cursor: pointer;
    justify-content: space-between;
    color: var(--frost-text-primary);
    position: relative;
    overflow: hidden;
}

.frost-toggle::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, var(--frost-accent-color), var(--frost-accent-hover));
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.frost-toggle:hover {
    background: var(--frost-bg-secondary);
    border-color: var(--frost-accent-color);
}

.frost-toggle.active {
    border-color: var(--frost-accent-color);
}

.frost-toggle.active::before {
    opacity: 1;
}

.frost-toggle > * {
    position: relative;
    z-index: 1;
}

.frost-toggle-switch {
    position: relative;
    width: 44px;
    height: 22px;
    background: var(--frost-bg-secondary);
    border-radius: 11px;
    margin-right: 12px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid var(--frost-border-color);
    overflow: hidden;
}

.frost-toggle-switch.active {
    background: linear-gradient(135deg, var(--frost-accent-color), var(--frost-accent-hover));
    border-color: var(--frost-accent-color);
}

.frost-toggle-switch::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--frost-accent-color);
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.frost-toggle-switch:hover::before {
    opacity: 0.1;
}

.frost-toggle-switch::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.frost-toggle-switch:hover::after {
    transform: scale(1.1);
}

.frost-toggle-switch.active:hover::after {
    transform: scale(1.1);
}

.frost-toggle-switch:active::after {
    transform: scale(0.9);
}

.frost-toggle-switch.active:active::after {
    transform: scale(0.9);
}

.frost-toggle-key {
    font-size: 12px;
    padding: 4px 8px;
    background: rgba(30, 30, 40, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.frost-toggle-key:hover {
    background: rgba(40, 40, 50, 0.6);
    border-color: rgba(255, 255, 255, 0.2);
}

.frost-toggle-key.binding {
    background: rgba(114, 137, 218, 0.3);
    border-color: #7289da;
}
`,"",{version:3,sources:["webpack://./src/styles/components/toggle.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,iDAAiD;IACjD,oCAAoC;IACpC,2CAA2C;IAC3C,eAAe;IACf,8BAA8B;IAC9B,gCAAgC;IAChC,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,yFAAyF;IACzF,UAAU;IACV,qDAAqD;AACzD;;AAEA;IACI,qCAAqC;IACrC,uCAAuC;AAC3C;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,qCAAqC;IACrC,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,iDAAiD;IACjD,2CAA2C;IAC3C,gBAAgB;AACpB;;AAEA;IACI,yFAAyF;IACzF,uCAAuC;AAC3C;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,qCAAqC;IACrC,UAAU;IACV,qDAAqD;AACzD;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,iDAAiD;IACjD,wCAAwC;IACxC,UAAU;AACd;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,iCAAiC;IACjC,0CAA0C;IAC1C,kBAAkB;IAClB,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,iCAAiC;IACjC,sCAAsC;AAC1C;;AAEA;IACI,oCAAoC;IACpC,qBAAqB;AACzB",sourcesContent:['.frost-toggle {\n    display: flex;\n    align-items: center;\n    margin: 4px 0;\n    padding: 8px 10px;\n    border-radius: 6px;\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    background: var(--frost-bg-tertiary);\n    border: 1px solid var(--frost-border-color);\n    cursor: pointer;\n    justify-content: space-between;\n    color: var(--frost-text-primary);\n    position: relative;\n    overflow: hidden;\n}\n\n.frost-toggle::before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: linear-gradient(135deg, var(--frost-accent-color), var(--frost-accent-hover));\n    opacity: 0;\n    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.frost-toggle:hover {\n    background: var(--frost-bg-secondary);\n    border-color: var(--frost-accent-color);\n}\n\n.frost-toggle.active {\n    border-color: var(--frost-accent-color);\n}\n\n.frost-toggle.active::before {\n    opacity: 1;\n}\n\n.frost-toggle > * {\n    position: relative;\n    z-index: 1;\n}\n\n.frost-toggle-switch {\n    position: relative;\n    width: 44px;\n    height: 22px;\n    background: var(--frost-bg-secondary);\n    border-radius: 11px;\n    margin-right: 12px;\n    cursor: pointer;\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    border: 1px solid var(--frost-border-color);\n    overflow: hidden;\n}\n\n.frost-toggle-switch.active {\n    background: linear-gradient(135deg, var(--frost-accent-color), var(--frost-accent-hover));\n    border-color: var(--frost-accent-color);\n}\n\n.frost-toggle-switch::before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: var(--frost-accent-color);\n    opacity: 0;\n    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.frost-toggle-switch:hover::before {\n    opacity: 0.1;\n}\n\n.frost-toggle-switch::after {\n    content: "";\n    position: absolute;\n    top: 2px;\n    left: 2px;\n    width: 16px;\n    height: 16px;\n    background: white;\n    border-radius: 50%;\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n    z-index: 1;\n}\n\n.frost-toggle-switch:hover::after {\n    transform: scale(1.1);\n}\n\n.frost-toggle-switch.active:hover::after {\n    transform: scale(1.1);\n}\n\n.frost-toggle-switch:active::after {\n    transform: scale(0.9);\n}\n\n.frost-toggle-switch.active:active::after {\n    transform: scale(0.9);\n}\n\n.frost-toggle-key {\n    font-size: 12px;\n    padding: 4px 8px;\n    background: rgba(30, 30, 40, 0.6);\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    border-radius: 4px;\n    cursor: pointer;\n    transition: all 0.2s ease;\n}\n\n.frost-toggle-key:hover {\n    background: rgba(40, 40, 50, 0.6);\n    border-color: rgba(255, 255, 255, 0.2);\n}\n\n.frost-toggle-key.binding {\n    background: rgba(114, 137, 218, 0.3);\n    border-color: #7289da;\n}\n'],sourceRoot:""}]);let i=s},662(t,r,e){e.d(r,{A:()=>i});var n=e(354),o=e.n(n),a=e(314),s=e.n(a)()(o());s.push([t.id,`.frost-theme-dark {
    --frost-bg-primary: rgba(25, 25, 35, 0.95);
    --frost-bg-secondary: rgba(30, 30, 40, 0.6);
    --frost-bg-tertiary: rgba(40, 40, 50, 0.4);
    --frost-border-color: rgba(255, 255, 255, 0.1);
    --frost-text-primary: rgba(255, 255, 255, 0.9);
    --frost-text-secondary: rgba(255, 255, 255, 0.7);
    --frost-accent-color: #7289da;
    --frost-accent-hover: #5b6eaf;
    --frost-shadow-color: rgba(0, 0, 0, 0.2);
    --frost-ripple-color: rgba(255, 255, 255, 0.7);
}
`,"",{version:3,sources:["webpack://./src/styles/themes/dark.css"],names:[],mappings:"AAAA;IACI,0CAA0C;IAC1C,2CAA2C;IAC3C,0CAA0C;IAC1C,8CAA8C;IAC9C,8CAA8C;IAC9C,gDAAgD;IAChD,6BAA6B;IAC7B,6BAA6B;IAC7B,wCAAwC;IACxC,8CAA8C;AAClD",sourcesContent:[".frost-theme-dark {\n    --frost-bg-primary: rgba(25, 25, 35, 0.95);\n    --frost-bg-secondary: rgba(30, 30, 40, 0.6);\n    --frost-bg-tertiary: rgba(40, 40, 50, 0.4);\n    --frost-border-color: rgba(255, 255, 255, 0.1);\n    --frost-text-primary: rgba(255, 255, 255, 0.9);\n    --frost-text-secondary: rgba(255, 255, 255, 0.7);\n    --frost-accent-color: #7289da;\n    --frost-accent-hover: #5b6eaf;\n    --frost-shadow-color: rgba(0, 0, 0, 0.2);\n    --frost-ripple-color: rgba(255, 255, 255, 0.7);\n}\n"],sourceRoot:""}]);let i=s},568(t,r,e){e.d(r,{A:()=>d});var n=e(354),o=e.n(n),a=e(314),s=e.n(a),i=e(662),A=e(234),c=e(693),l=s()(o());l.i(i.A),l.i(A.A),l.i(c.A),l.push([t.id,`
`,"",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);let d=l},234(t,r,e){e.d(r,{A:()=>i});var n=e(354),o=e.n(n),a=e(314),s=e.n(a)()(o());s.push([t.id,`.frost-theme-midnight {
    --frost-bg-primary: rgba(20, 20, 30, 0.95);
    --frost-bg-secondary: rgba(25, 25, 35, 0.6);
    --frost-bg-tertiary: rgba(30, 30, 40, 0.4);
    --frost-border-color: rgba(255, 255, 255, 0.05);
    --frost-text-primary: rgba(255, 255, 255, 0.9);
    --frost-text-secondary: rgba(255, 255, 255, 0.7);
    --frost-accent-color: #9b59b6;
    --frost-accent-hover: #8e44ad;
    --frost-shadow-color: rgba(0, 0, 0, 0.3);
    --frost-ripple-color: rgba(255, 255, 255, 0.7);
}
`,"",{version:3,sources:["webpack://./src/styles/themes/midnight.css"],names:[],mappings:"AAAA;IACI,0CAA0C;IAC1C,2CAA2C;IAC3C,0CAA0C;IAC1C,+CAA+C;IAC/C,8CAA8C;IAC9C,gDAAgD;IAChD,6BAA6B;IAC7B,6BAA6B;IAC7B,wCAAwC;IACxC,8CAA8C;AAClD",sourcesContent:[".frost-theme-midnight {\n    --frost-bg-primary: rgba(20, 20, 30, 0.95);\n    --frost-bg-secondary: rgba(25, 25, 35, 0.6);\n    --frost-bg-tertiary: rgba(30, 30, 40, 0.4);\n    --frost-border-color: rgba(255, 255, 255, 0.05);\n    --frost-text-primary: rgba(255, 255, 255, 0.9);\n    --frost-text-secondary: rgba(255, 255, 255, 0.7);\n    --frost-accent-color: #9b59b6;\n    --frost-accent-hover: #8e44ad;\n    --frost-shadow-color: rgba(0, 0, 0, 0.3);\n    --frost-ripple-color: rgba(255, 255, 255, 0.7);\n}\n"],sourceRoot:""}]);let i=s},693(t,r,e){e.d(r,{A:()=>i});var n=e(354),o=e.n(n),a=e(314),s=e.n(a)()(o());s.push([t.id,`.frost-theme-nord {
    --frost-bg-primary: rgba(46, 52, 64, 0.95);
    --frost-bg-secondary: rgba(59, 66, 82, 0.6);
    --frost-bg-tertiary: rgba(67, 76, 94, 0.4);
    --frost-border-color: rgba(236, 239, 244, 0.1);
    --frost-text-primary: rgba(236, 239, 244, 0.9);
    --frost-text-secondary: rgba(229, 233, 240, 0.7);
    --frost-accent-color: #88c0d0;
    --frost-accent-hover: #81a1c1;
    --frost-shadow-color: rgba(0, 0, 0, 0.2);
    --frost-ripple-color: rgba(236, 239, 244, 0.7);
}
`,"",{version:3,sources:["webpack://./src/styles/themes/nord.css"],names:[],mappings:"AAAA;IACI,0CAA0C;IAC1C,2CAA2C;IAC3C,0CAA0C;IAC1C,8CAA8C;IAC9C,8CAA8C;IAC9C,gDAAgD;IAChD,6BAA6B;IAC7B,6BAA6B;IAC7B,wCAAwC;IACxC,8CAA8C;AAClD",sourcesContent:[".frost-theme-nord {\n    --frost-bg-primary: rgba(46, 52, 64, 0.95);\n    --frost-bg-secondary: rgba(59, 66, 82, 0.6);\n    --frost-bg-tertiary: rgba(67, 76, 94, 0.4);\n    --frost-border-color: rgba(236, 239, 244, 0.1);\n    --frost-text-primary: rgba(236, 239, 244, 0.9);\n    --frost-text-secondary: rgba(229, 233, 240, 0.7);\n    --frost-accent-color: #88c0d0;\n    --frost-accent-hover: #81a1c1;\n    --frost-shadow-color: rgba(0, 0, 0, 0.2);\n    --frost-ripple-color: rgba(236, 239, 244, 0.7);\n}\n"],sourceRoot:""}]);let i=s},314(t){t.exports=function(t){var r=[];return r.toString=function(){return this.map(function(r){var e="",n=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),n&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=t(r),n&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e}).join("")},r.i=function(t,e,n,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(n)for(var i=0;i<this.length;i++){var A=this[i][0];null!=A&&(s[A]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);n&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]&&(l[1]="@media ".concat(l[2]," {").concat(l[1],"}")),l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},354(t){t.exports=function(t){var r=t[1],e=t[3];if(!e)return r;if("function"==typeof btoa){var n=btoa(unescape(encodeURIComponent(JSON.stringify(e))));return[r].concat(["/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n)," */")]).join("\n")}return[r].join("\n")}},72(t){var r=[];function e(t){for(var e=-1,n=0;n<r.length;n++)if(r[n].identifier===t){e=n;break}return e}function n(t,n){for(var o={},a=[],s=0;s<t.length;s++){var i=t[s],A=n.base?i[0]+n.base:i[0],c=o[A]||0,l="".concat(A," ").concat(c);o[A]=c+1;var d=e(l),p={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==d)r[d].references++,r[d].updater(p);else{var f=function(t,r){var e=r.domAPI(r);return e.update(t),function(r){r?(r.css!==t.css||r.media!==t.media||r.sourceMap!==t.sourceMap||r.supports!==t.supports||r.layer!==t.layer)&&e.update(t=r):e.remove()}}(p,n);n.byIndex=s,r.splice(s,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}t.exports=function(t,o){var a=n(t=t||[],o=o||{});return function(t){t=t||[];for(var s=0;s<a.length;s++){var i=e(a[s]);r[i].references--}for(var A=n(t,o),c=0;c<a.length;c++){var l=e(a[c]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=A}}},659(t){var r={};t.exports=function(t,e){var n=function(t){if(void 0===r[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}r[t]=e}return r[t]}(t);if(!n)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}},540(t){t.exports=function(t){var r=document.createElement("style");return t.setAttributes(r,t.attributes),t.insert(r,t.options),r}},56(t,r,e){t.exports=function(t){var r=e.nc;r&&t.setAttribute("nonce",r)}},825(t){t.exports=function(t){if("u"<typeof document)return{update:function(){},remove:function(){}};var r=t.insertStyleElement(t);return{update:function(e){var n,o,a;n="",e.supports&&(n+="@supports (".concat(e.supports,") {")),e.media&&(n+="@media ".concat(e.media," {")),(o=void 0!==e.layer)&&(n+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),n+=e.css,o&&(n+="}"),e.media&&(n+="}"),e.supports&&(n+="}"),(a=e.sourceMap)&&"u">typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,r,t.options)},remove:function(){var t;null===(t=r).parentNode||t.parentNode.removeChild(t)}}}},113(t){t.exports=function(t,r){if(r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={id:n,exports:{}};return t[n](a,a.exports,e),a.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),e.nc=void 0;var n={};return(()=>{function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}e.d(n,{default:()=>W});let r={success:'<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48"><title>c check</title><g fill="#82e053" class="nc-icon-wrapper"><path fill="#82e053" d="M24,1C11.3,1,1,11.3,1,24s10.3,23,23,23s23-10.3,23-23S36.7,1,24,1z M36.7,16.7l-16,16 C20.5,32.9,20.3,33,20,33s-0.5-0.1-0.7-0.3l-8-8c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l7.3,7.3l15.3-15.3c0.4-0.4,1-0.4,1.4,0 S37.1,16.3,36.7,16.7z"></path></g></svg>',error:'<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48"><title>c remove</title><g fill="#db3737" class="nc-icon-wrapper"><path fill="#db3737" d="M24,1C11.3,1,1,11.3,1,24s10.3,23,23,23s23-10.3,23-23S36.7,1,24,1z M32.7,31.3c0.4,0.4,0.4,1,0,1.4 C32.5,32.9,32.3,33,32,33s-0.5-0.1-0.7-0.3L24,25.4l-7.3,7.3C16.5,32.9,16.3,33,16,33s-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4 l7.3-7.3l-7.3-7.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l7.3,7.3l7.3-7.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L25.4,24L32.7,31.3z"></path></g></svg>',warning:'<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48"><title>c warning</title><g fill="#faeb19" class="nc-icon-wrapper"><path d="M24,1C11.297,1,1,11.297,1,24s10.297,23,23,23,23-10.297,23-23S36.703,1,24,1Zm-2,10c0-.552,.448-1,1-1h2c.552,0,1,.448,1,1V29c0,.552-.448,1-1,1h-2c-.552,0-1-.448-1-1V11Zm2,28c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5,2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5Z" fill="#faeb19"></path></g></svg>',info:'<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48"><title>c info</title><g fill="#7289da" class="nc-icon-wrapper"><path d="M24,1C11.297,1,1,11.297,1,24s10.297,23,23,23,23-10.297,23-23S36.703,1,24,1Zm2,36c0,.552-.448,1-1,1h-2c-.552,0-1-.448-1-1V19c0-.552,.448-1,1-1h2c.552,0,1,.448,1,1v18Zm-2-23c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5,2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5Z" fill="#7289da"></path></g></svg>',close:'<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16"><title>close</title><g class="nc-icon-wrapper"><line x1="12" y1="12" x2="4" y2="4" fill="none" stroke="#F7F7F7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5"></line><line x1="12" y1="4" x2="4" y2="12" fill="none" stroke="#F7F7F7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5"></line></g></svg>\n',down_arrow:'<svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 12 12"><title>chevron down</title><g fill="#ffffff" class="nc-icon-wrapper"><polyline points="1.75 4.25 6 8.5 10.25 4.25" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></polyline></g></svg>',up_arrow:'<svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 12 12"><title>chevron up</title><g fill="#ffffff" class="nc-icon-wrapper"><polyline points="10.25 7.75 6 3.5 1.75 7.75" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></polyline></g></svg>',order_list:'<svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 12 12" preserveAspectRatio="xMidYMid meet"><title>menu</title><g fill="#ffffff" class="nc-icon-wrapper" transform="translate(0,1.5)"><path fill="#ffffff" stroke-width="0" data-color="color-2" d="M0.5 4.5h11v1h-11z"></path><path stroke-width="0" fill="#ffffff" d="M0.5 1h11v1h-11z"></path><path stroke-width="0" fill="#ffffff" d="M0.5 8h11v1h-11z"></path></g></svg>',page_left:'<svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 12 12"><title>left arrow 3</title><g fill="#ffffff" class="nc-icon-wrapper"><path d="M8.47 12.05a0.38 0.38 0 0 0 0.54 0l0.38-0.38a0.38 0.38 0 0 0 0-0.54l-5.05-5.05 5.05-5.05a0.38 0.38 0 0 0 0-0.54l-0.38-0.38a0.38 0.38 0 0 0-0.54 0l-5.7 5.7a0.38 0.38 0 0 0 0 0.54z" fill="#ffffff"></path></g></svg>',page_right:'<svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 12 12"><title>right arrow 3</title><g fill="#ffffff" class="nc-icon-wrapper"><path d="M2.77 11.67l0.38 0.38a0.38 0.38 0 0 0 0.54 0l5.7-5.7a0.38 0.38 0 0 0 0-0.54l-5.7-5.7a0.38 0.38 0 0 0-0.54 0l-0.38 0.38a0.38 0.38 0 0 0 0 0.54l5.05 5.05-5.05 5.05a0.38 0.38 0 0 0 0 0.54z" fill="#ffffff"></path></g></svg>',category:'<svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 12 12"><title>book</title><g stroke-linejoin="miter" fill="#ffffff" stroke-linecap="butt" class="nc-icon-wrapper"><path fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="2" data-color="color-2" d="M6 3v7.5"></path><path d="M8.75 1.5c-1.5 0-2.75 0.65-2.75 1.5 0-0.85-1.25-1.5-2.75-1.5s-2.75 0.65-2.75 1.5v7.5c0-0.85 1.25-1.5 2.75-1.5s2.75 0.65 2.75 1.5c0-0.85 1.25-1.5 2.75-1.5s2.75 0.65 2.75 1.5v-7.5c0-0.85-1.25-1.5-2.75-1.5z" fill="none" stroke="#ffffff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path></g></svg>',item:'<svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 12 12"><title>bookmark</title><g stroke-linejoin="miter" fill="#ffffff" stroke-linecap="butt" class="nc-icon-wrapper"><path d="M10 11l-4-2.5-4 2.5v-9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9z" fill="none" stroke="#ffffff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path></g></svg>'};function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function a(t,r,e,n,o,a,s){try{var i=t[a](s),A=i.value}catch(t){e(t);return}i.done?r(A):Promise.resolve(A).then(n,o)}function s(t){return function(){var r=this,e=arguments;return new Promise(function(n,o){var s=t.apply(r,e);function i(t){a(s,n,o,i,A,"next",t)}function A(t){a(s,n,o,i,A,"throw",t)}i(void 0)})}}function i(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e,n,o=null==t?null:"u">typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var a=[],s=!0,i=!1;try{for(o=o.call(t);!(s=(e=o.next()).done)&&(a.push(e.value),!r||a.length!==r);s=!0);}catch(t){i=!0,n=t}finally{try{s||null==o.return||o.return()}finally{if(i)throw n}}return a}}(t,r)||c(t,r)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("u">typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||c(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,r){if(t){if("string"==typeof t)return o(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if("Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,r)}}function l(t,r){var e,n,o,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},s=Object.create(("function"==typeof Iterator?Iterator:Object).prototype),i=Object.defineProperty;return i(s,"next",{value:A(0)}),i(s,"throw",{value:A(1)}),i(s,"return",{value:A(2)}),"function"==typeof Symbol&&i(s,Symbol.iterator,{value:function(){return this}}),s;function A(i){return function(A){var c=[i,A];if(e)throw TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(a=0)),a;)try{if(e=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,n=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=r.call(t,a)}catch(t){c=[6,t],n=0}finally{e=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}}function d(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function p(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function f(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function C(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function u(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e,n,o=null==t?null:"u">typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var a=[],s=!0,i=!1;try{for(o=o.call(t);!(s=(e=o.next()).done)&&(a.push(e.value),!r||a.length!==r);s=!0);}catch(t){i=!0,n=t}finally{try{s||null==o.return||o.return()}finally{if(i)throw n}}return a}}(t,r)||function(t,r){if(t){if("string"==typeof t)return f(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if("Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(t,r)}}(t,r)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=function(){var t;function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"k";if(!(this instanceof e))throw TypeError("Cannot call a class as a function");if(C(this,"container",document.createElement("div")),C(this,"searchWrapper",document.createElement("div")),C(this,"searchInput",document.createElement("input")),C(this,"shortcutHint",document.createElement("div")),C(this,"resultsContainer",document.createElement("div")),C(this,"isVisible",!1),C(this,"menus",new Map),C(this,"searchResults",[]),C(this,"selectedIndex",-1),C(this,"activeElements",new Set),C(this,"currentTheme","dark"),C(this,"keybind","k"),this.keybind=r.toLowerCase(),null!=y&&"u">typeof Symbol&&y[Symbol.hasInstance]?!!y[Symbol.hasInstance](t):t instanceof y)this.menus.set("Default",t),this.setTheme(this.getThemeFromMenu(t));else{var n=!0,o=!1,a=void 0;try{for(var s,i=Object.entries(t)[Symbol.iterator]();!(n=(s=i.next()).done);n=!0){var A=u(s.value,2),c=A[0],l=A[1];this.menus.set(c,l)}}catch(t){o=!0,a=t}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}var d=Object.values(t)[0];d&&this.setTheme(this.getThemeFromMenu(d))}this.createSearchUI(),this.setupEventListeners(),window.frostManager&&window.frostManager.setSearch(this)}return t=[{key:"setKeybind",value:function(t){this.keybind=t.toLowerCase(),this.updateShortcutHint()}},{key:"getKeybind",value:function(){return this.keybind}},{key:"updateShortcutHint",value:function(){var t=navigator.platform.toUpperCase().indexOf("MAC")>=0,r=1===this.keybind.length?this.keybind.toUpperCase():this.keybind;this.shortcutHint.textContent="".concat(t?"⌘":"Ctrl","+").concat(r)}},{key:"getThemeFromMenu",value:function(t){var r=Array.from(t.getContainer().classList).find(function(t){return t.startsWith("frost-theme-")});return r?r.replace("frost-theme-",""):"dark"}},{key:"setTheme",value:function(t){var r=Array.from(this.container.classList).filter(function(t){return t.startsWith("frost-theme-")}),e=!0,n=!1,o=void 0;try{for(var a,s=r[Symbol.iterator]();!(e=(a=s.next()).done);e=!0){var i=a.value;this.container.classList.remove(i)}}catch(t){n=!0,o=t}finally{try{e||null==s.return||s.return()}finally{if(n)throw o}}"dark"!==t&&this.container.classList.add("frost-theme-".concat(t)),this.currentTheme=t}},{key:"getTheme",value:function(){return this.currentTheme}},{key:"createSearchUI",value:function(){this.container.className="frost-search-container","dark"!==this.currentTheme&&this.container.classList.add("frost-theme-".concat(this.currentTheme)),this.searchWrapper.className="frost-search-input-wrapper",this.searchInput.type="text",this.searchInput.className="frost-search-input",this.searchInput.placeholder="Search menu...",this.shortcutHint.className="frost-search-shortcut",this.updateShortcutHint(),this.resultsContainer.className="frost-search-results",this.searchWrapper.appendChild(this.searchInput),this.searchWrapper.appendChild(this.shortcutHint),this.container.appendChild(this.searchWrapper),this.container.appendChild(this.resultsContainer),document.body.appendChild(this.container)}},{key:"setupEventListeners",value:function(){var t=this;document.addEventListener("keydown",function(r){if((r.metaKey||r.ctrlKey)&&r.key.toLowerCase()===t.keybind&&(r.preventDefault(),t.toggle()),t.isVisible)switch(r.key){case"Escape":t.hide();break;case"ArrowDown":r.preventDefault(),t.selectNext();break;case"ArrowUp":r.preventDefault(),t.selectPrevious();break;case"Enter":r.preventDefault(),t.selectCurrent()}}),this.searchInput.addEventListener("input",function(){t.performSearch()}),document.addEventListener("click",function(r){t.isVisible&&!t.container.contains(r.target)&&t.hide()})}},{key:"selectNext",value:function(){0!==this.searchResults.length&&(this.selectedIndex=(this.selectedIndex+1)%this.searchResults.length,this.updateSelection())}},{key:"selectPrevious",value:function(){0!==this.searchResults.length&&(this.selectedIndex=(this.selectedIndex-1+this.searchResults.length)%this.searchResults.length,this.updateSelection())}},{key:"updateSelection",value:function(){var t=this;this.searchResults.forEach(function(r,e){e===t.selectedIndex?(r.classList.add("selected"),r.scrollIntoView({block:"nearest"})):r.classList.remove("selected")})}},{key:"selectCurrent",value:function(){this.selectedIndex>=0&&this.selectedIndex<this.searchResults.length&&this.searchResults[this.selectedIndex].click()}},{key:"performSearch",value:function(){var t=this.searchInput.value.toLowerCase();if(this.clearResults(),this.clearHighlights(),!t.trim()){this.resultsContainer.style.display="none";return}this.resultsContainer.style.display="block";var r=this.searchMenuItems(t);this.displayResults(r,t)}},{key:"clearHighlights",value:function(){var t=!0,r=!1,e=void 0;try{for(var n,o=this.activeElements[Symbol.iterator]();!(t=(n=o.next()).done);t=!0)n.value.classList.remove("frost-search-highlight")}catch(t){r=!0,e=t}finally{try{t||null==o.return||o.return()}finally{if(r)throw e}}this.activeElements.clear()}},{key:"openCategory",value:function(t){var r=t.element.querySelector(".frost-category-content");if(r&&!r.classList.contains("open")){var e=t.element.querySelector(".frost-category-header");e&&e.click()}}},{key:"searchMenuItems",value:function(t){var r=[],e=t.toLowerCase(),n=!0,o=!1,a=void 0;try{for(var s,i=this.menus[Symbol.iterator]();!(n=(s=i.next()).done);n=!0){var A=u(s.value,2),c=A[0],l=A[1],d=l.getCategories(),p=!0,f=!1,C=void 0;try{for(var m,g=d[Symbol.iterator]();!(p=(m=g.next()).done);p=!0){var h=u(m.value,2),b=h[0],v=h[1];b.toLowerCase().includes(e)&&(r.push({text:b,path:[],element:v.element,type:"category",category:v,menu:l,menuName:c}),v.element.classList.add("frost-search-highlight"),this.activeElements.add(v.element));var I=v.items,y=!0,B=!1,x=void 0;try{for(var w,k=I[Symbol.iterator]();!(y=(w=k.next()).done);y=!0){var E=u(w.value,2),S=E[0],z=E[1];S.toLowerCase().includes(e)&&(r.push({text:S,path:[b],element:z,type:"item",category:v,menu:l,menuName:c}),z.classList.add("frost-search-highlight"),this.activeElements.add(z))}}catch(t){B=!0,x=t}finally{try{y||null==k.return||k.return()}finally{if(B)throw x}}}}catch(t){f=!0,C=t}finally{try{p||null==g.return||g.return()}finally{if(f)throw C}}}}catch(t){o=!0,a=t}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}},{key:"highlightText",value:function(t,r){var e=t.toLowerCase(),n=r.toLowerCase(),o=e.indexOf(n);if(-1===o)return t;var a=t.slice(0,o),s=t.slice(o,o+r.length),i=t.slice(o+r.length);return"".concat(a,'<span class="highlight">').concat(s,"</span>").concat(i)}},{key:"addGlowEffect",value:function(t){t.classList.add("frost-search-selected"),setTimeout(function(){t.classList.remove("frost-search-selected")},2e3)}},{key:"displayResults",value:function(t,e){var n=this;this.clearResults(),this.selectedIndex=-1;var o=this.resultsContainer.querySelector(".frost-search-empty");if(o&&o.remove(),e.trim()){if(0===t.length){var a=document.createElement("div");a.className="frost-search-empty",a.textContent="No results found",this.resultsContainer.appendChild(a);return}var s=!0,i=!1,A=void 0;try{for(var c,l,d=t[Symbol.iterator]();!(s=(l=d.next()).done);s=!0)c=this,function(){var t=l.value,o=document.createElement("div");o.className="frost-search-result";var a=document.createElement("span");a.className="type-indicator",a.innerHTML="category"===t.type?r.category:r.item;var s=document.createElement("div");s.style.flex="1";var i=document.createElement("div");if(i.className="item-name",i.innerHTML=c.highlightText(t.text,e),"category"===t.type){var A=document.createElement("span");A.className="menu-indicator",A.textContent=" - ".concat(t.menuName),i.appendChild(A)}s.appendChild(i),o.appendChild(a),o.appendChild(s),o.addEventListener("click",function(){n.hide(),t.menu.isMenuOpen()||t.menu.toggle(),"category"===t.type&&t.category?(n.openCategory(t.category),n.addGlowEffect(t.category.element)):"item"===t.type&&t.category&&(n.openCategory(t.category),setTimeout(function(){var r=t.menu.getContainer();r&&r.scrollTo({top:t.element.offsetTop-r.offsetHeight/2,behavior:"smooth"}),t.element.scrollIntoView({behavior:"smooth",block:"center"}),t.element.focus(),n.addGlowEffect(t.element)},150))}),c.resultsContainer.appendChild(o),c.searchResults.push(o)}()}catch(t){i=!0,A=t}finally{try{s||null==d.return||d.return()}finally{if(i)throw A}}this.searchResults.length>0&&(this.selectedIndex=0,this.updateSelection())}}},{key:"clearResults",value:function(){var t=!0,r=!1,e=void 0;try{for(var n,o=this.searchResults[Symbol.iterator]();!(t=(n=o.next()).done);t=!0)n.value.remove()}catch(t){r=!0,e=t}finally{try{t||null==o.return||o.return()}finally{if(r)throw e}}this.searchResults=[],this.selectedIndex=-1}},{key:"show",value:function(){var t=this;this.isVisible=!0,this.container.classList.add("visible"),this.resultsContainer.style.display="none",setTimeout(function(){t.searchInput.focus()},50)}},{key:"hide",value:function(){this.isVisible=!1,this.container.classList.remove("visible"),this.searchInput.value="",this.clearResults(),this.clearHighlights()}},{key:"toggle",value:function(){this.isVisible?this.hide():this.show()}}],function(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(e.prototype,t),e}();function g(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function h(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{},n=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.forEach(function(r){var n;n=e[r],r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n})}return t}function b(t,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(t){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r.push.apply(r,e)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t}function v(t){return function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("u">typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t){if(t){if("string"==typeof t)return g(t,void 0);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}let y=function(){var e;function n(t,r){var e=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{x:100,y:100},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ShiftRight";if(!(this instanceof n))throw TypeError("Cannot call a class as a function");I(this,"id",void 0),I(this,"title",void 0),I(this,"position",void 0),I(this,"toggleKey",void 0),I(this,"isOpen",void 0),I(this,"categories",void 0),I(this,"isDragging",void 0),I(this,"dragOffset",void 0),I(this,"container",void 0),this.id=t,this.title=r,this.position=o,this.toggleKey=a,this.isOpen=!1,this.categories=new Map,this.isDragging=!1,this.dragOffset={x:0,y:0},this.createMainContainer(),this.setupEventListeners(),document.addEventListener("keydown",function(t){t.code===e.toggleKey&&!t.repeat&&(document.querySelector(".frost-keybind.binding")||(t.preventDefault(),t.stopPropagation(),e.toggle()))},!0)}return e=[{key:"createMainContainer",value:function(){this.container=document.createElement("div"),this.container.className="frost-menu",this.container.style.display="none";var t=document.createElement("div");t.className="frost-header",t.textContent=this.title;var r=document.createElement("div");r.className="frost-content",this.container.appendChild(t),this.container.appendChild(r),document.body.appendChild(this.container),this.updatePosition()}},{key:"setupEventListeners",value:function(){var t=this,r=this.container.querySelector(".frost-header");r&&(r.addEventListener("mousedown",function(r){t.isDragging=!0,t.dragOffset.x=r.clientX-t.position.x,t.dragOffset.y=r.clientY-t.position.y}),document.addEventListener("mousemove",function(r){t.isDragging&&(t.position.x=r.clientX-t.dragOffset.x,t.position.y=r.clientY-t.dragOffset.y,t.updatePosition())}),document.addEventListener("mouseup",function(){t.isDragging=!1}))}},{key:"isMenuOpen",value:function(){return this.isOpen}},{key:"setToggleKey",value:function(t){this.toggleKey=t}},{key:"getToggleKey",value:function(){return this.toggleKey}},{key:"getTitle",value:function(){return this.title}},{key:"toggle",value:function(){var t=this;this.isOpen=!this.isOpen,this.isOpen?(this.container.style.display="block",this.container.classList.remove("hide"),this.container.classList.add("show")):(this.container.classList.remove("show"),this.container.classList.add("hide"),setTimeout(function(){t.container.style.display="none"},200))}},{key:"updatePosition",value:function(){this.container.style.left="".concat(this.position.x,"px"),this.container.style.top="".concat(this.position.y,"px")}},{key:"addCategory",value:function(t){if(!this.categories.has(t)){var r,e,n,o,a=((r=document.createElement("div")).className="frost-category",(e=document.createElement("div")).className="frost-category-header",(n=document.createElement("span")).className="frost-category-title",n.textContent=t,(o=document.createElement("div")).className="frost-category-content",e.addEventListener("click",function(){o.classList.toggle("open")}),e.appendChild(n),r.appendChild(e),r.appendChild(o),{element:r,items:new Map}),s=this.container.querySelector(".frost-content");s&&(s.appendChild(a.element),this.categories.set(t,a))}return this}},{key:"addToggle",value:function(t,r,e,n){var o,a,s,i,A,c,l,d,f,C,u,m,g,h=this.categories.get(t);if(!h)return this;var b=(o=this.id,(a=document.createElement("div")).className="frost-toggle",s=!1,(i=document.createElement("div")).className="frost-toggle-left",(A=document.createElement("span")).textContent=r,i.appendChild(A),(c=document.createElement("div")).className="frost-toggle-right",a.toggleState=function(){s=!s,a.classList.toggle("active",s);var t,r=(null==(t=g.querySelector(".frost-keybind-display"))?void 0:t.textContent)||"";e&&e(s,r)},l=function(e){window.frostManager.updateKeybind(o,t,r,e||"")},(d=document.createElement("div")).className="frost-keybind",(f=document.createElement("span")).className="frost-keybind-display",f.textContent=n||"None",(C=document.createElement("button")).className="frost-keybind-clear",C.textContent="\xd7",C.style.display=n?"block":"none",d.appendChild(f),d.appendChild(C),u=!1,m=function(t){var r=(null==(s=window.frostManager)?void 0:s.getMenus())||new Map,e=!0,n=!1,a=void 0;try{for(var s,i,A,c=r[Symbol.iterator]();!(e=(A=c.next()).done);e=!0){var l,d=(l=A.value,function(t){if(Array.isArray(t))return t}(l)||function(t){var r,e,n=null==t?null:"u">typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),2!==o.length);a=!0);}catch(t){s=!0,e=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw e}}return o}}(l)||function(t){if(t){if("string"==typeof t)return p(t,2);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(t,2)}}(l)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),f=d[0],C=d[1];if(f!==o&&C.getToggleKey()===t)return!0}}catch(t){n=!0,a=t}finally{try{e||null==c.return||c.return()}finally{if(n)throw a}}return null!=(i=window.frostManager)&&!!i.hasKeybind(t)},d.addEventListener("click",function(t){if(t.target===C){f.textContent="None",C.style.display="none",l&&l(null);return}u||(u=!0,f.textContent="Press key...",d.classList.add("binding"))}),document.addEventListener("keydown",function(t){if(u){if(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),t.ctrlKey||t.metaKey||t.altKey||t.shiftKey){f.textContent=n||"None",C.style.display=n?"block":"none",u=!1,d.classList.remove("binding");return}var r=t.code;m(r)?(f.textContent=n||"None",C.style.display=n?"block":"none"):(f.textContent=r,C.style.display="block",l&&l(r)),u=!1,d.classList.remove("binding")}},!0),d.getValue=function(){return"None"===f.textContent?null:f.textContent},d.setValue=function(t){f.textContent=t||"None",C.style.display=t?"block":"none",l&&l(t)},g=d,setTimeout(function(){n&&window.frostManager.updateKeybind(o,t,r,n)},0),c.appendChild(g),a.appendChild(i),a.appendChild(c),a.addEventListener("click",function(t){var r=t.target;(r===a||r===i||r===A)&&a.toggleState()}),a.getValue=function(){return s},a.setValue=function(t){s=t,a.classList.toggle("active",s)},a),v=h.element.querySelector(".frost-category-content");return v&&(v.appendChild(b),h.items.set(r,b)),this}},{key:"addSwitch",value:function(t,r){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"default",a=this.categories.get(t);if(!a)return this;var s=function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"default",o=document.createElement("div");o.className="frost-switch-container ".concat(n);var a=document.createElement("div");a.className="frost-switch-left";var s=document.createElement("span");s.className="frost-switch-label",s.textContent=t,a.appendChild(s);var i=document.createElement("div");i.className="frost-switch-right";var A=document.createElement("div");A.className="frost-switch-track",r&&A.classList.add("active");var c=document.createElement("div");c.className="frost-switch-thumb";var l=r;return A.appendChild(c),i.appendChild(A),o.appendChild(a),o.appendChild(i),o.addEventListener("click",function(){l=!l,A.classList.toggle("active",l),e&&e(l)}),o.getValue=function(){return l},o.setValue=function(t){l=t,A.classList.toggle("active",l),e&&e(l)},o}(r,e,n,o),i=a.element.querySelector(".frost-category-content");return i&&(i.appendChild(s),a.items.set(r,s)),this}},{key:"addSlider",value:function(t,r,e,n,o,a,s){var i,A,c,l,d,p,f,C,u,m,g,h,b,v,I=this.categories.get(t);if(!I)return this;var y=(A=(i={name:r,min:e,max:n,defaultValue:o,step:"number"==typeof a?a:1,callback:"function"==typeof a?a:s}).name,c=i.min,l=i.max,d=i.defaultValue,p=i.step,f=i.callback,(C=document.createElement("div")).className="frost-slider",(u=document.createElement("span")).textContent=A,(m=document.createElement("div")).className="frost-slider-controls",(g=document.createElement("input")).type="range",g.min=c.toString(),g.max=l.toString(),g.value=d.toString(),g.step=(void 0===p?1:p).toString(),h=(d-c)/(l-c)*100,g.style.setProperty("--slider-value","".concat(h,"%")),(b=document.createElement("input")).type="text",b.className="frost-slider-value",b.value=d.toString(),v=function(t){var r=Math.min(Math.max(t,c),l);g.value=r.toString(),b.value=r.toString();var e=(r-c)/(l-c)*100;g.style.setProperty("--slider-value","".concat(e,"%")),f&&f(r)},g.addEventListener("input",function(){v(Number.parseFloat(g.value))}),b.addEventListener("change",function(){var t=Number.parseFloat(b.value);if(Number.isNaN(t)){b.classList.add("invalid"),setTimeout(function(){return b.classList.remove("invalid")},400),b.value=g.value;return}v(t)}),b.addEventListener("focus",function(){return b.select()}),m.appendChild(g),m.appendChild(b),C.appendChild(u),C.appendChild(m),C.getValue=function(){return Number.parseFloat(g.value)},C.setValue=function(t){return v(t)},C),B=I.element.querySelector(".frost-category-content");return B&&(B.appendChild(y),I.items.set(r,y)),this}},{key:"addRadioGroup",value:function(t,r,e,n,o){var a=this.categories.get(t);if(!a)return this;var s=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,o=document.createElement("div");o.className="frost-radio-group";var a=document.createElement("div");a.className="frost-radio-label",a.textContent=t;var s=document.createElement("div");s.className="frost-radio-options";var i=Array.isArray(r)?r:[r],A=e||i[0],c=!0,l=!1,d=void 0;try{for(var p,f=i[Symbol.iterator]();!(c=(p=f.next()).done);c=!0)!function(){var t=p.value,r=document.createElement("button");r.className="frost-radio-option",t===A&&r.classList.add("active");var e=document.createElement("div");e.className="frost-radio-icon";var o=document.createElement("div");o.className="frost-radio-ripple";var a=document.createElement("span");a.className="frost-radio-text",a.textContent=t,e.appendChild(o),r.appendChild(e),r.appendChild(a),r.addEventListener("click",function(){if(A!==t){var e=!0,a=!1,i=void 0;try{for(var c,l=s.querySelectorAll(".frost-radio-option")[Symbol.iterator]();!(e=(c=l.next()).done);e=!0)c.value.classList.remove("active")}catch(t){a=!0,i=t}finally{try{e||null==l.return||l.return()}finally{if(a)throw i}}r.classList.add("active"),A=t,o.style.animation="none",requestAnimationFrame(function(){o.style.animation="radioRipple 0.4s ease-out"}),n&&n(t)}}),s.appendChild(r)}()}catch(t){l=!0,d=t}finally{try{c||null==f.return||f.return()}finally{if(l)throw d}}return o.appendChild(a),o.appendChild(s),o.getValue=function(){return A},o.setValue=function(t){if(i.includes(t)){A=t;var r=!0,e=!1,o=void 0;try{for(var a,c=s.querySelectorAll(".frost-radio-option")[Symbol.iterator]();!(r=(a=c.next()).done);r=!0){var l,d=a.value;d.classList.remove("active"),(null==(l=d.querySelector(".frost-radio-text"))?void 0:l.textContent)===t&&d.classList.add("active")}}catch(t){e=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(e)throw o}}n&&n(t)}},o}(r,e,n,o),i=a.element.querySelector(".frost-category-content");return i&&(i.appendChild(s),a.items.set(r,s)),this}},{key:"addSelect",value:function(t,r,e,n,o){var a=this.categories.get(t);if(!a)return this;var s=function(t,r,e,n){var o=document.createElement("div");o.className="frost-select-container";var a=document.createElement("span");a.className="frost-select-label",a.textContent=t;var s=document.createElement("div");s.className="frost-select";var i=document.createElement("div");i.className="frost-select-value",i.textContent=e;var A=document.createElement("div");A.className="frost-select-dropdown";var c=document.querySelector(".frost-menu"),l=c?Array.from(c.classList).find(function(t){return t.startsWith("frost-theme-")}):null;l&&A.classList.add(l);var p=Array.isArray(r)?r:[r],f=!0,C=!1,u=void 0;try{for(var m,g=p[Symbol.iterator]();!(f=(m=g.next()).done);f=!0)!function(){var t=m.value,r=document.createElement("div");r.className="frost-select-option",r.textContent=t,r.addEventListener("click",function(){i.textContent=t,A.classList.remove("show"),n&&n(t)}),A.appendChild(r)}()}catch(t){C=!0,u=t}finally{try{f||null==g.return||g.return()}finally{if(C)throw u}}s.appendChild(i),document.body.appendChild(A);var h=function(){var t=s.getBoundingClientRect();A.style.left="".concat(t.left,"px"),A.style.top="".concat(t.bottom+4,"px"),A.style.width="".concat(t.width,"px")};s.addEventListener("click",function(t){t.target.closest(".frost-select-dropdown")||(h(),A.classList.toggle("show"))}),document.addEventListener("click",function(t){t.target.closest(".frost-select")||A.classList.remove("show")}),window.addEventListener("resize",function(){A.classList.contains("show")&&h()}),document.addEventListener("scroll",function(t){var r,e=t.target;A.classList.contains("show")&&((null!=(r=HTMLElement)&&"u">typeof Symbol&&r[Symbol.hasInstance]?!!r[Symbol.hasInstance](e):e instanceof r)&&e.contains(o)||e===document.documentElement)&&h()},!0),o.appendChild(a),o.appendChild(s),o.getValue=function(){return i.textContent||e},o.setValue=function(t){p.includes(t)&&(i.textContent=t,n&&n(t))};var b=new MutationObserver(function(t){var r=!0,e=!1,n=void 0;try{for(var o,a=t[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){var s=o.value;if("attributes"===s.type&&"class"===s.attributeName&&c){var i,l,p=Array.from(c.classList).find(function(t){return t.startsWith("frost-theme-")});(l=A.classList).remove.apply(l,(i=Array.from(A.classList).filter(function(t){return t.startsWith("frost-theme-")}),function(t){if(Array.isArray(t))return d(t)}(i)||function(t){if("u">typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(i)||function(t){if(t){if("string"==typeof t)return d(t,void 0);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(t,void 0)}}(i)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),p&&A.classList.add(p)}}}catch(t){e=!0,n=t}finally{try{r||null==a.return||a.return()}finally{if(e)throw n}}});return c&&b.observe(c,{attributes:!0}),o}(r,e,n,o),i=a.element.querySelector(".frost-category-content");return i&&(i.appendChild(s),a.items.set(r,s)),this}},{key:"addColorInput",value:function(t,r,e,n){var o,a,s,i,A,c=this.categories.get(t);if(!c)return this;var l=((o=document.createElement("div")).className="frost-color-input",(a=document.createElement("div")).className="frost-color-left",(s=document.createElement("span")).textContent=r,(i=document.createElement("div")).className="frost-color-preview",i.style.backgroundColor=e,(A=document.createElement("input")).type="color",A.className="frost-color-picker",A.value=e,i.addEventListener("click",function(t){t.stopPropagation(),A.click()}),A.addEventListener("input",function(t){var r=t.target.value;i.style.backgroundColor=r,n&&n(r)}),i.appendChild(A),a.appendChild(s),o.appendChild(a),o.appendChild(i),o.getValue=function(){return A.value},o.setValue=function(t){/^#[0-9A-F]{6}$/i.test(t)&&(A.value=t,i.style.backgroundColor=t,n&&n(t))},o),d=c.element.querySelector(".frost-category-content");return d&&(d.appendChild(l),c.items.set(r,l)),this}},{key:"addMultiSelect",value:function(r,e,n,o,a){var s=this.categories.get(r);if(!s)return this;var i=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3?arguments[3]:void 0,a=document.createElement("div");a.className="frost-multi-select-container";var s=document.createElement("div");s.className="frost-multi-select-label",s.textContent=r;var i=document.createElement("div");i.className="frost-multi-select";var A=document.createElement("div");A.className="frost-multi-select-value";var c=document.createElement("div");c.className="frost-multi-select-dropdown";var l=document.querySelector(".frost-menu"),d=l?Array.from(l.classList).find(function(t){return t.startsWith("frost-theme-")}):null;d&&c.classList.add(d);var p=new Set(n),f=function(){0===p.size?A.textContent="None":A.textContent=Array.from(p).join(", ")},C=function(){var t=i.getBoundingClientRect();c.style.left="".concat(t.left,"px"),c.style.top="".concat(t.bottom+4,"px"),c.style.width="".concat(t.width,"px")},u=!0,m=!1,g=void 0;try{for(var h,b=e[Symbol.iterator]();!(u=(h=b.next()).done);u=!0)!function(){var t=h.value,r=document.createElement("div");r.className="frost-multi-select-item",p.has(t)&&r.classList.add("selected");var e=document.createElement("div");e.className="frost-multi-select-checkbox";var n=document.createElement("span");n.textContent=t,r.appendChild(e),r.appendChild(n),c.appendChild(r),r.addEventListener("click",function(e){e.stopPropagation(),p.has(t)?(p.delete(t),r.classList.remove("selected")):(p.add(t),r.classList.add("selected")),f(),o&&o(Array.from(p))})}()}catch(t){m=!0,g=t}finally{try{u||null==b.return||b.return()}finally{if(m)throw g}}i.addEventListener("click",function(t){t.target.closest(".frost-multi-select-dropdown")||(C(),c.classList.toggle("show"))}),document.addEventListener("click",function(t){t.target.closest(".frost-multi-select")||c.classList.remove("show")}),window.addEventListener("resize",function(){c.classList.contains("show")&&C()}),document.addEventListener("scroll",function(t){var r,e=t.target;c.classList.contains("show")&&((null!=(r=HTMLElement)&&"u">typeof Symbol&&r[Symbol.hasInstance]?!!r[Symbol.hasInstance](e):e instanceof r)&&e.contains(a)||e===document.documentElement)&&C()},!0),f(),i.appendChild(A),document.body.appendChild(c),a.appendChild(s),a.appendChild(i),a.getValue=function(){return Array.from(p)},a.setValue=function(t){p.clear();var r=!0,e=!1,n=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var i=a.value;p.add(i)}}catch(t){e=!0,n=t}finally{try{r||null==s.return||s.return()}finally{if(e)throw n}}f();var A=!0,l=!1,d=void 0;try{for(var C,u=c.querySelectorAll(".frost-multi-select-item")[Symbol.iterator]();!(A=(C=u.next()).done);A=!0){var m,g=C.value,h=null==(m=g.querySelector("span"))?void 0:m.textContent;h&&g.classList.toggle("selected",p.has(h))}}catch(t){l=!0,d=t}finally{try{A||null==u.return||u.return()}finally{if(l)throw d}}o&&o(Array.from(p))};var v=new MutationObserver(function(r){var e=!0,n=!1,o=void 0;try{for(var a,s=r[Symbol.iterator]();!(e=(a=s.next()).done);e=!0){var i=a.value;if("attributes"===i.type&&"class"===i.attributeName&&l){var A,d,p=Array.from(l.classList).find(function(t){return t.startsWith("frost-theme-")});(d=c.classList).remove.apply(d,(A=Array.from(c.classList).filter(function(t){return t.startsWith("frost-theme-")}),function(r){if(Array.isArray(r))return t(r)}(A)||function(t){if("u">typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(A)||function(r){if(r){if("string"==typeof r)return t(r,void 0);var e=Object.prototype.toString.call(r).slice(8,-1);if("Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return t(r,void 0)}}(A)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),p&&c.classList.add(p)}}}catch(t){n=!0,o=t}finally{try{e||null==s.return||s.return()}finally{if(n)throw o}}});return l&&v.observe(l,{attributes:!0}),a}(e,n,o,a),A=s.element.querySelector(".frost-category-content");return A&&(A.appendChild(i),s.items.set(e,i)),this}},{key:"addPageSelector",value:function(t,e,n,o,a){var s=this.categories.get(t);if(!s)return this;var i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3?arguments[3]:void 0,a=document.createElement("div");a.className="frost-page-selector";var s=document.createElement("div");s.className="frost-page-label",s.textContent=t;var i=document.createElement("div");i.className="frost-page-controls";var A=document.createElement("div");A.className="frost-page-arrow",A.innerHTML=r.page_left;var c=document.createElement("div");c.className="frost-page-value";var l=document.createElement("div");l.className="frost-page-arrow",l.innerHTML=r.page_right;var d=n,p=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];c.classList.add("switching-out"),setTimeout(function(){c.textContent=e[d],c.classList.remove("switching-out"),c.classList.add("switching-in"),A.style.opacity=0===d?"0.2":"0.6",l.style.opacity=d===e.length-1?"0.2":"0.6",setTimeout(function(){c.classList.remove("switching-in")},200),t&&o&&o(e[d],d)},150)};return p(!1),a.addEventListener("mouseenter",function(){A.style.opacity=d>0?"0.8":"0.2",l.style.opacity=d<e.length-1?"0.8":"0.2"}),a.addEventListener("mouseleave",function(){A.style.opacity=0===d?"0.2":"0.6",l.style.opacity=d===e.length-1?"0.2":"0.6"}),A.addEventListener("click",function(){d>0&&(d--,p(!0))}),l.addEventListener("click",function(){d<e.length-1&&(d++,p(!0))}),i.appendChild(A),i.appendChild(c),i.appendChild(l),a.appendChild(s),a.appendChild(i),a.getValue=function(){return d},a.setValue=function(t){t>=0&&t<e.length&&(d=t,p(!0))},a}(e,n,o,a),A=s.element.querySelector(".frost-category-content");return A&&(A.appendChild(i),s.items.set(e,i)),this}},{key:"addButton",value:function(t,r,e){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"default",o=this.categories.get(t);if(!o)return this;var a=function(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default",n=document.createElement("div");n.className="frost-button-container";var o=document.createElement("button");o.className="frost-button ".concat(e),o.textContent=t;var a=!0;return o.addEventListener("click",function(t){if(a){var e=o.getBoundingClientRect(),n=document.createElement("div");n.className="frost-button-ripple",n.style.left="".concat(t.clientX-e.left,"px"),n.style.top="".concat(t.clientY-e.top,"px"),o.appendChild(n),n.addEventListener("animationend",function(){n.remove()}),r&&r()}}),n.appendChild(o),n.setEnabled=function(t){a=t,o.classList.toggle("disabled",!a)},n.isEnabled=function(){return a},n}(r,e,n),s=o.element.querySelector(".frost-category-content");return s&&(s.appendChild(a),o.items.set(r,a)),this}},{key:"addOrderList",value:function(t,e,n,o){var a=this.categories.get(t);if(!a)return this;var c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,o=document.createElement("div");o.className="frost-order-list";var a=document.createElement("div");a.className="frost-order-label",a.textContent=t;var c=document.createElement("div");c.className="frost-order-items";var d=A(e),p=null,f=0,C=0,u=-1,m=!1,g=function(t,r,e){var n=t.offsetHeight+8;return t.style.transition="transform 0.2s ease-in-out",r.style.transition="transform 0.2s ease-in-out",t.style.transform=e?"translateY(-".concat(n,"px)"):"translateY(".concat(n,"px)"),r.style.transform=e?"translateY(".concat(n,"px)"):"translateY(-".concat(n,"px)"),new Promise(function(t){setTimeout(function(){t()},200)})},h=function(t,e){var n=document.createElement("div");n.className="frost-order-item";var o=document.createElement("div");o.className="frost-order-handle",o.innerHTML=r.order_list;var a=document.createElement("span");a.className="frost-order-content",a.textContent=t;var h=document.createElement("button");h.className="frost-order-move-up",h.innerHTML=r.up_arrow,h.onclick=function(t){return s(function(){var r,n;return l(this,function(o){switch(o.label){case 0:if(t.stopPropagation(),!(e>0&&!m))return[3,2];return m=!0,[4,g((r=A(c.querySelectorAll(".frost-order-item")))[e],r[e-1],!0)];case 1:o.sent(),n=d[e],d[e]=d[e-1],d[e-1]=n,b(),m=!1,o.label=2;case 2:return[2]}})})()};var v=document.createElement("button");v.className="frost-order-move-down",v.innerHTML=r.down_arrow,v.onclick=function(t){return s(function(){var r,n;return l(this,function(o){switch(o.label){case 0:if(t.stopPropagation(),!(e<d.length-1&&!m))return[3,2];return m=!0,[4,g((r=A(c.querySelectorAll(".frost-order-item")))[e],r[e+1],!1)];case 1:o.sent(),n=d[e],d[e]=d[e+1],d[e+1]=n,b(),m=!1,o.label=2;case 2:return[2]}})})()};var I=document.createElement("div");return I.className="frost-order-controls",I.appendChild(h),I.appendChild(v),n.appendChild(o),n.appendChild(a),n.appendChild(I),o.addEventListener("mousedown",function(t){if(!m){t.preventDefault(),p=n,f=t.clientY,C=n.offsetHeight,u=e,n.classList.add("dragging");var r=A(c.querySelectorAll(".frost-order-item")),o=!0,a=!1,s=void 0;try{for(var l,d=r.entries()[Symbol.iterator]();!(o=(l=d.next()).done);o=!0){var g=i(l.value,2),h=g[0],b=g[1];b.style.transition="transform 0.15s ease-in-out",b.style.transform="translateY(0)",b.setAttribute("data-index",h.toString())}}catch(t){a=!0,s=t}finally{try{o||null==d.return||d.return()}finally{if(a)throw s}}}}),n},b=function(){c.innerHTML="",d.forEach(function(t,r){c.appendChild(h(t,r))}),n&&n(d)};document.addEventListener("mousemove",function(t){if(p&&C){var r=t.clientY-f,e=A(c.querySelectorAll(".frost-order-item")),n=u+Math.round(r/C);p.style.transform="translateY(".concat(r,"px)"),p.style.transition="none";var o=!0,a=!1,s=void 0;try{for(var i,l=e[Symbol.iterator]();!(o=(i=l.next()).done);o=!0){var d=i.value;if(d!==p){var m=Number.parseInt(d.getAttribute("data-index")||"0"),g=v(m,u,n);d.style.transform="translateY(".concat(g*C,"px)")}}}catch(t){a=!0,s=t}finally{try{o||null==l.return||l.return()}finally{if(a)throw s}}}});var v=function(t,r,e){if(e>=r){if(t>r&&t<=e)return -1}else if(t<r&&t>=e)return 1;return 0};return document.addEventListener("mouseup",function(){if(p){var t=A(c.querySelectorAll(".frost-order-item")),r=Number.parseFloat(p.style.transform.replace("translateY(","").replace("px)",""))||0,e=Math.min(Math.max(0,u+Math.round(r/C)),t.length-1);if(e!==u){var n=i(d.splice(u,1),1)[0];d.splice(e,0,n),b()}else{var o=!0,a=!1,s=void 0;try{for(var l,f=t[Symbol.iterator]();!(o=(l=f.next()).done);o=!0){var m=l.value;m.style.transform="translateY(0)",m.style.transition="transform 0.15s ease-in-out"}}catch(t){a=!0,s=t}finally{try{o||null==f.return||f.return()}finally{if(a)throw s}}}p.classList.remove("dragging"),p=null,C=0,u=-1}}),o.appendChild(a),o.appendChild(c),b(),o.getValue=function(){return d},o.setValue=function(t){d=A(t),b()},o}(e,n,o),d=a.element.querySelector(".frost-category-content");return d&&(d.appendChild(c),a.items.set(e,c)),this}},{key:"addDualSlider",value:function(t,r,e,n,o,a,s,i){var A,c,l,d,p,f,C,u,m,g,h,b,v,I,y,B,x,w,k,E,S,z=this.categories.get(t);if(!z)return this;var Y=(c=(A={name:r,min:e,max:n,defaultStart:o,defaultEnd:a,step:"number"==typeof s?s:1,callback:"function"==typeof s?s:i}).name,l=A.min,d=A.max,p=A.defaultStart,f=A.defaultEnd,u=void 0===(C=A.step)?1:C,m=A.callback,(g=document.createElement("div")).className="frost-dual-slider",(h=document.createElement("span")).textContent=c,(b=document.createElement("div")).className="frost-dual-slider-controls",(v=document.createElement("div")).className="frost-dual-slider-container",(I=document.createElement("div")).className="frost-dual-slider-track",(y=document.createElement("div")).className="frost-dual-slider-range",(B=document.createElement("input")).type="range",B.min=l.toString(),B.max=d.toString(),B.value=p.toString(),B.step=u.toString(),B.className="frost-dual-slider-start",(x=document.createElement("input")).type="range",x.min=l.toString(),x.max=d.toString(),x.value=f.toString(),x.step=u.toString(),x.className="frost-dual-slider-end",(w=document.createElement("input")).type="text",w.className="frost-dual-slider-value",w.value=p.toString(),(k=document.createElement("input")).type="text",k.className="frost-dual-slider-value",k.value=f.toString(),E=function(){var t=Number(B.value),r=Number(x.value),e=(t-l)/(d-l)*100,n=(r-l)/(d-l)*100;y.style.left="".concat(e,"%"),y.style.width="".concat(n-e,"%")},S=function(t,r){var e=Math.min(Math.max(t,l),r),n=Math.min(Math.max(r,t),d);B.value=e.toString(),x.value=n.toString(),w.value=e.toString(),k.value=n.toString(),E(),m&&m({start:e,end:n})},B.addEventListener("input",function(){S(Number(B.value),Number(x.value))}),x.addEventListener("input",function(){S(Number(B.value),Number(x.value))}),w.addEventListener("change",function(){var t=Number.parseFloat(w.value);if(Number.isNaN(t)){w.classList.add("invalid"),setTimeout(function(){return w.classList.remove("invalid")},400),w.value=B.value;return}S(t,Number(x.value))}),k.addEventListener("change",function(){var t=Number.parseFloat(k.value);if(Number.isNaN(t)){k.classList.add("invalid"),setTimeout(function(){return k.classList.remove("invalid")},400),k.value=x.value;return}S(Number(B.value),t)}),w.addEventListener("focus",function(){return w.select()}),k.addEventListener("focus",function(){return k.select()}),v.appendChild(I),v.appendChild(y),v.appendChild(B),v.appendChild(x),b.appendChild(v),b.appendChild(w),b.appendChild(k),g.appendChild(h),g.appendChild(b),E(),g.getValue=function(){return{start:Number(B.value),end:Number(x.value)}},g.setValue=function(t){S(t.start,t.end)},g),q=z.element.querySelector(".frost-category-content");return q&&(q.appendChild(Y),z.items.set(r,Y)),this}},{key:"addChart",value:function(t,r,e){var n,o,a=this.categories.get(t);if(!a)return this;var s=function(t){var r,e=t.name,n=t.width,o=void 0===n?260:n,a=t.height,s=void 0===a?150:a,i=t.maxDataPoints,A=void 0===i?100:i,c=t.series,l=t.minY,d=void 0===l?void 0:l,p=t.maxY,f=void 0===p?void 0:p;c=c.map(function(t){var r;return b(h({},t),{data:(null==(r=t.data)?void 0:r.length)===A?t.data:Array(A).fill(0)})});var C=document.createElement("div");C.className="frost-chart";var u=document.createElement("span");u.className="frost-chart-title",u.textContent=e;var m=document.createElement("canvas");m.width=o,m.height=s;var g=m.getContext("2d");if(!g)return C;g.lineCap="round",g.lineJoin="round";var I=document.createElement("div");I.className="frost-chart-tooltip",document.body.appendChild(I);var y=-1,B=c.map(function(t){return b(h({},t),{data:Array(A).fill(0)})});function x(){if(g){g.clearRect(0,0,o,s);var t=o-40,r=s-40,e=null!=d?d:(u=Math).min.apply(u,v(B.flatMap(function(t){return t.data}))),n=null!=f?f:(m=Math).max.apply(m,v(B.flatMap(function(t){return t.data}))),a=n-e;e-=.1*a,n+=.1*a,g.strokeStyle="rgba(255, 255, 255, 0.1)",g.lineWidth=1;for(var i=0;i<=4;i++){var c=20+r*i/4;g.beginPath(),g.moveTo(20,c),g.lineTo(o-20,c),g.stroke()}var l=!0,p=!1,C=void 0;try{for(var u,m,h,b=B[Symbol.iterator]();!(l=(h=b.next()).done);l=!0){var I=h.value;g.strokeStyle=I.color,g.lineWidth=2,g.beginPath();for(var x=0;x<I.data.length;x++){var w=I.data[x],k=20+x*t/(A-1),E=20+r-(w-e)/(n-e)*r;0===x?g.moveTo(k,E):g.lineTo(k,E)}if(g.stroke(),y>=0){var S=20+y*t/(A-1),z=20+r-(I.data[y]-e)/(n-e)*r;g.fillStyle=I.color,g.beginPath(),g.arc(S,z,4,0,2*Math.PI),g.fill()}}}catch(t){p=!0,C=t}finally{try{l||null==b.return||b.return()}finally{if(p)throw C}}}}function w(t){for(var e=!1,n=0;n<B.length;n++)!function(r){var n=B[r],o=t[r].data;n.data=n.data.map(function(t,r){var n=o[r]-t;return Math.abs(n)>.001?(e=!0,t+.15*n):o[r]})}(n);if(e)x(),r=requestAnimationFrame(function(){return w(t)});else{for(var o=0;o<B.length;o++)B[o].data=v(t[o].data);x()}}return m.addEventListener("mousemove",function(t){var r=m.getBoundingClientRect(),e=m.width/r.width,n=(t.clientX-r.left)*e,a=o-40,s=n-20;s>=-10&&s<=a+10?(y=Math.min(Math.max(Math.round(Math.max(0,Math.min(s,a))/a*(A-1)),0),A-1),I.style.display="block",I.style.left="".concat(t.pageX,"px"),I.style.top="".concat(t.pageY,"px"),I.classList.add("show"),I.innerHTML=B.map(function(t){var r;return'\n                    <div class="frost-chart-tooltip-row">\n                        <span style="color: '.concat(t.color,'">').concat(t.label,":</span>\n                        <span>").concat((null==(r=t.data[y])?void 0:r.toFixed(2))||"N/A","</span>\n                    </div>\n                ")}).join("")):(y=-1,I.classList.remove("show")),x()}),m.addEventListener("mouseleave",function(){y=-1,I.classList.remove("show"),x()}),C.addDataPoint=function(t,e){if(t>=0&&t<c.length){var n=v(c[t].data.slice(1)).concat([e]);c[t].data=n,cancelAnimationFrame(r),w(c)}},C.clearData=function(){var t=!0,r=!1,e=void 0;try{for(var n,o=c[Symbol.iterator]();!(t=(n=o.next()).done);t=!0)n.value.data=Array(A).fill(0)}catch(t){r=!0,e=t}finally{try{t||null==o.return||o.return()}finally{if(r)throw e}}w(c)},C.getValue=function(){return c.reduce(function(t,r){return t[r.label]=r.data,t},{})},C.appendChild(u),C.appendChild(m),x(),C}((n=function(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{},n=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.forEach(function(r){I(t,r,e[r])})}return t}({},e),o=o={name:r},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):(function(t){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r.push.apply(r,e)}return r})(Object(o)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(o,t))}),n)),i=a.element.querySelector(".frost-category-content");return i&&(i.appendChild(s),a.items.set(r,s)),this}},{key:"addGridSelector",value:function(t,r,e){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:3,s=this.categories.get(t);if(!s)return this;var i=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3?arguments[3]:void 0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:3,a=document.createElement("div");a.className="frost-grid-selector";var s=document.createElement("div");s.className="frost-grid-label",s.textContent=t;var i=document.createElement("div");i.className="frost-grid-container",i.style.gridTemplateColumns="repeat(".concat(o,", 1fr)");var A=new Set(e),c=function(){n&&n(Array.from(A))},l=!0,d=!1,p=void 0;try{for(var f,C=r[Symbol.iterator]();!(l=(f=C.next()).done);l=!0)!function(){var t=f.value,r=document.createElement("div");if(r.className="frost-grid-item",A.has(t.id)&&r.classList.add("selected"),t.icon){var e=document.createElement("div");e.className="frost-grid-icon",e.innerHTML=t.icon,r.appendChild(e)}var n=document.createElement("span");n.className="frost-grid-item-label",n.textContent=t.label,r.appendChild(n),r.addEventListener("click",function(){A.has(t.id)?(A.delete(t.id),r.classList.remove("selected")):(A.add(t.id),r.classList.add("selected")),c()}),i.appendChild(r)}()}catch(t){d=!0,p=t}finally{try{l||null==C.return||C.return()}finally{if(d)throw p}}return a.appendChild(s),a.appendChild(i),a.getValue=function(){return Array.from(A)},a.setValue=function(t){A.clear();var e=!0,n=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(e=(a=s.next()).done);e=!0){var l=a.value;A.add(l)}}catch(t){n=!0,o=t}finally{try{e||null==s.return||s.return()}finally{if(n)throw o}}i.querySelectorAll(".frost-grid-item").forEach(function(t,e){t.classList.toggle("selected",A.has(r[e].id))}),c()},a}(r,e,n,o,a),A=s.element.querySelector(".frost-category-content");return A&&(A.appendChild(i),s.items.set(r,i)),this}},{key:"getCategories",value:function(){return this.categories}},{key:"setTheme",value:function(t){if(!this.container)return this;var r=Array.from(this.container.classList).filter(function(t){return t.startsWith("frost-theme-")}),e=!0,n=!1,o=void 0;try{for(var a,s=r[Symbol.iterator]();!(e=(a=s.next()).done);e=!0){var i=a.value;this.container.classList.remove(i)}}catch(t){n=!0,o=t}finally{try{e||null==s.return||s.return()}finally{if(n)throw o}}return"dark"!==t&&this.container.classList.add("frost-theme-".concat(t)),this}},{key:"getContainer",value:function(){return this.container}}],function(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(n.prototype,e),n}();function B(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function x(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var w=new(function(){var t;function e(){var t=this;if(!(this instanceof e))throw TypeError("Cannot call a class as a function");x(this,"menus",void 0),x(this,"keybinds",void 0),x(this,"globalKeybinds",void 0),x(this,"toastContainer",null),x(this,"search",null),this.menus=new Map,this.keybinds=new Map,this.globalKeybinds=new Map,window.addEventListener("keydown",function(r){if((null==(e=document.activeElement)?void 0:e.tagName)!=="INPUT"&&!r.ctrlKey&&!r.metaKey&&!r.altKey&&!r.shiftKey&&!document.querySelector(".frost-keybind.binding")){var e,n=t.globalKeybinds.get(r.code);n&&(r.preventDefault(),r.stopPropagation(),n())}},!0)}return t=[{key:"addMenu",value:function(t,r,e){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ShiftRight",o=new y(t,r,e,n);return this.menus.set(t,o),o}},{key:"updateMenuToggleKey",value:function(t,r){var e=this.menus.get(t);e&&e.setToggleKey(r)}},{key:"updateKeybind",value:function(t,r,e,n){var o=this.menus.get(t);if(o){var a=o.getCategories().get(r);if(a){var s=a.items.get(e);if(s&&"toggleState"in s){var i="".concat(t,"-").concat(r,"-").concat(e),A=this.keybinds.get(i);A&&(this.globalKeybinds.delete(A),this.keybinds.delete(i)),n&&"None"!==n&&(this.keybinds.set(i,n),this.globalKeybinds.set(n,s.toggleState.bind(s)))}}}}},{key:"initToastContainer",value:function(){this.toastContainer||(this.toastContainer=document.createElement("div"),this.toastContainer.className="frost-toast-container",document.body.appendChild(this.toastContainer))}},{key:"showToast",value:function(t){this.initToastContainer();var e,n=function(t){var e,n=document.createElement("div"),o=["success","error","info","warning"].includes(t.type||"")&&t.type||"info";n.className="frost-toast ".concat(o," ").concat(t.variant||"default");var a=document.createElement("span");a.className="frost-toast-icon",a.innerHTML=r[o];var s=document.createElement("div");s.className="frost-toast-content";var i=document.createElement("span");if(i.className="frost-toast-message",i.textContent=t.message,s.appendChild(i),"action"===t.variant&&t.action){var A=document.createElement("button");A.className="frost-toast-action ".concat(t.action.type||""),A.textContent=t.action.text,A.onclick=function(r){var e;r.stopPropagation(),null==(e=t.action)||e.onClick(),l()},s.appendChild(A)}var c=document.createElement("button");c.className="frost-toast-close",c.innerHTML=r.close,n.appendChild(a),n.appendChild(s),n.appendChild(c);var l=function(){n.classList.add("hide"),clearTimeout(e),setTimeout(function(){n.remove()},300)};return n.close=l,c.addEventListener("click",l),0!==t.duration&&(e=window.setTimeout(l,t.duration||3e3),n.addEventListener("mouseenter",function(){clearTimeout(e)}),n.addEventListener("mouseleave",function(){e=window.setTimeout(l,1e3)})),n}("string"==typeof t?{message:t}:t);null==(e=this.toastContainer)||e.appendChild(n)}},{key:"getMenus",value:function(){return this.menus}},{key:"getSearch",value:function(){return this.search}},{key:"setSearch",value:function(t){this.search=t}},{key:"hasKeybind",value:function(t){return this.globalKeybinds.has(t)}},{key:"tryBindKey",value:function(t,r){var e=!0,n=!1,o=void 0;try{for(var a,s=this.menus[Symbol.iterator]();!(e=(a=s.next()).done);e=!0){var i,A=(i=a.value,function(t){if(Array.isArray(t))return t}(i)||function(t){var r,e,n=null==t?null:"u">typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),2!==o.length);a=!0);}catch(t){s=!0,e=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw e}}return o}}(i)||function(t){if(t){if("string"==typeof t)return B(t,2);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return B(t,2)}}(i)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=A[0],l=A[1];if(c!==t&&l.getToggleKey()===r)return this.showToast({message:'Key "'.concat(r,'" is already used to toggle menu "').concat(l.getTitle(),'"'),type:"error",duration:3e3}),!1}}catch(t){n=!0,o=t}finally{try{e||null==s.return||s.return()}finally{if(n)throw o}}return!this.globalKeybinds.has(r)||(this.showToast({message:'Key "'.concat(r,'" is already bound to another action'),type:"error",duration:3e3}),!1)}}],function(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(e.prototype,t),e}()),k=e(72),E=e.n(k),S=e(825),z=e.n(S),Y=e(659),q=e.n(Y),L=e(56),j=e.n(L),D=e(540),N=e.n(D),U=e(113),O=e.n(U),M=e(490),T={};T.styleTagTransform=O(),T.setAttributes=j(),T.insert=q().bind(null,"head"),T.domAPI=z(),T.insertStyleElement=N(),E()(M.A,T),M.A&&M.A.locals&&M.A.locals,window.FrostUI=y,window.frostManager=w,window.FrostSearch=m;let W=y})(),n=n.default})());
//# sourceMappingURL=Library.js.map