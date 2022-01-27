"use strict";
(self["webpackChunk_reactor_ui"] = self["webpackChunk_reactor_ui"] || []).push([[267],{

/***/ 7267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "App": () => (/* binding */ App)
});

// EXTERNAL MODULE: ../../node_modules/@carbon/charts-react/index.js
var charts_react = __webpack_require__(419);
// EXTERNAL MODULE: ../../node_modules/@carbon/charts/interfaces/index.js + 1 modules
var interfaces = __webpack_require__(8675);
// EXTERNAL MODULE: ../../node_modules/@emotion/css/dist/emotion-css.esm.js + 15 modules
var emotion_css_esm = __webpack_require__(2876);
// EXTERNAL MODULE: ../../node_modules/carbon-components-react/es/components/UIShell/Header.js
var Header = __webpack_require__(3342);
// EXTERNAL MODULE: ../../node_modules/carbon-components-react/es/components/UIShell/Switcher.js
var Switcher = __webpack_require__(1917);
// EXTERNAL MODULE: ../../node_modules/carbon-components-react/es/components/UIShell/SwitcherItem.js + 1 modules
var SwitcherItem = __webpack_require__(2974);
// EXTERNAL MODULE: ../../node_modules/carbon-components-react/es/components/UIShell/SwitcherDivider.js
var SwitcherDivider = __webpack_require__(2830);
// EXTERNAL MODULE: ../../node_modules/carbon-components-react/es/components/Tile/index.js + 5 modules
var Tile = __webpack_require__(9095);
// EXTERNAL MODULE: ../../node_modules/carbon-components-react/es/components/Modal/index.js + 18 modules
var Modal = __webpack_require__(5275);
// EXTERNAL MODULE: ../../node_modules/fast-simplex-noise/lib/mod.js
var mod = __webpack_require__(4864);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(2784);
;// CONCATENATED MODULE: ./src/utils.ts
function range(start, end) {
    return Array.from({ length: end - start }, (_, k) => k + start);
}

;// CONCATENATED MODULE: ./src/components/App.tsx







const appStyle = (0,emotion_css_esm/* css */.iv)({
    display: "flex",
    alignItems: "flex-start",
    paddingTop: "3rem",
    "& .body": {
        height: "calc(100vh - 3rem)",
        flex: 1,
        overflowY: "auto",
        "& .dashboard": {
            display: "grid",
            gridGap: "1rem",
            gridTemplateColumns: "1fr 1fr 1fr",
            padding: "1rem"
        }
    },
    "& .chart": {
        overflow: "hidden"
    }
});
const groups = ["A367", "P374", "Q323"];
const App = () => {
    const [now, setNow] = (0,react.useState)(Date.now());
    (0,react.useEffect)(() => {
        const interval = setInterval(() => setNow(Date.now()), 250);
        return () => clearInterval(interval);
    });
    return (react.createElement("div", { className: appStyle },
        react.createElement(Header/* default */.Z, null,
            react.createElement(Logo, null)),
        react.createElement("div", { className: "body" },
            react.createElement("div", { className: "dashboard" },
                react.createElement(DummyTemperatureChart, { title: "Temperature 1", now: now }),
                react.createElement(DummyTemperatureChart, { title: "Temperature 2", now: now }),
                react.createElement(DummyTemperatureChart, { title: "Temperature 3", now: now }),
                react.createElement(DummyTemperatureChart, { title: "Temperature 4", now: now }),
                react.createElement(DummyTemperatureChart, { title: "Temperature 5", now: now }),
                react.createElement(DummyTemperatureChart, { title: "Temperature 6", now: now }),
                react.createElement(DummyTemperatureChart, { title: "Temperature 7", now: now }))),
        react.createElement(Switcher/* default */.Z, null,
            react.createElement(SwitcherItem/* default */.Z, { isSelected: true }, "Link 1"),
            react.createElement(SwitcherDivider/* default */.Z, null),
            react.createElement(SwitcherItem/* default */.Z, null, "Link 2"),
            react.createElement(SwitcherItem/* default */.Z, null, "Link 3"),
            react.createElement(SwitcherItem/* default */.Z, null, "Link 4"),
            react.createElement(SwitcherItem/* default */.Z, null, "Link 5"),
            react.createElement(SwitcherDivider/* default */.Z, null),
            react.createElement(SwitcherItem/* default */.Z, null, "Link 6")),
        react.createElement(TestModal, null)));
};
const DummyTemperatureChart = ({ title, now }) => {
    const noise = (0,react.useMemo)(() => (0,mod/* makeNoise2D */.DA)(), []);
    const temperature = (group, time) => noise(group, time / 60 / 1000) * 10 + 25;
    return (react.createElement(DummyChart, { title: title, now: now, min: 10, max: 40, value: temperature }));
};
const DummyChart = ({ title, now, min, max, value }) => (react.createElement(Tile/* Tile */.n9, { className: "chart" },
    react.createElement(charts_react.LineChart, { data: groups.flatMap((group, i) => range(0, 60).map(second => {
            const time = now - second * 1000;
            return {
                group,
                time,
                value: value(i, time)
            };
        })), options: {
            title,
            timeScale: {
                addSpaceOnEdges: 0
            },
            axes: {
                bottom: {
                    domain: [now - 60 * 1000, now + 10 * 1000],
                    mapsTo: "time",
                    scaleType: interfaces.ScaleTypes.TIME,
                    ticks: {
                        number: 2,
                        rotation: interfaces.TickRotations.NEVER
                    }
                },
                left: {
                    domain: [min, max],
                    mapsTo: "value"
                }
            },
            curve: "curveMonotoneX",
            height: "300px",
            toolbar: { enabled: false },
            tooltip: { enabled: false },
            points: { radius: 0, enabled: false },
            legend: { alignment: interfaces.Alignments.CENTER, clickable: false }
        } })));
const logoStyle = (0,emotion_css_esm/* css */.iv)({
    fontSize: "1.25rem",
    fontFamily: "Inter",
    display: "flex",
    padding: "0 1rem",
    alignItems: "center",
    fontWeight: "bold",
    "& svg": {
        marginRight: "0.5rem"
    }
});
const Logo = () => (react.createElement("div", { className: logoStyle },
    react.createElement("svg", { width: "24", height: "24", viewBox: "0 0 32 32" },
        react.createElement("path", { d: "M26,22a3.6069,3.6069,0,0,0-2,.6L19.4143,18,18,19.4141,22.6,24a4.1755,4.1755,0,0,0-.4,1H9.8583A3.5525,3.5525,0,0,0,9.4,24L24,9.4a3.6069,3.6069,0,0,0,2,.6,4,4,0,1,0-3.8569-5H9.9A4.0785,4.0785,0,0,0,6,2a4,4,0,0,0,0,8,3.6066,3.6066,0,0,0,2-.6L12.5858,14,14,12.5859,9.4,8a4.175,4.175,0,0,0,.4-1H22.1418A3.5553,3.5553,0,0,0,22.6,8L8,22.6A3.6066,3.6066,0,0,0,6,22a4,4,0,1,0,3.8569,5H22.1A4.0118,4.0118,0,1,0,26,22ZM26,4a2,2,0,1,1-2,2A2.0058,2.0058,0,0,1,26,4ZM6,8A2,2,0,1,1,8,6,2.0058,2.0058,0,0,1,6,8ZM6,28a2,2,0,1,1,2-2A2.0058,2.0058,0,0,1,6,28Zm20,0a2,2,0,1,1,2-2A2.0058,2.0058,0,0,1,26,28Z", fill: "white" })),
    "LogoType"));
const TestModal = () => {
    const [open, setOpen] = (0,react.useState)(false);
    const onRequestClose = (0,react.useCallback)(() => setOpen(false), []);
    (0,react.useEffect)(() => {
        const timeout = setTimeout(() => setOpen(true), 500);
        return () => clearTimeout(timeout);
    }, []);
    return (react.createElement(Modal/* default */.Z, { open: open, size: "xs", primaryButtonText: "OK", onRequestClose: onRequestClose, onRequestSubmit: onRequestClose }, "This is a test modal"));
};


/***/ })

}]);
//# sourceMappingURL=267.6db467e0.js.map