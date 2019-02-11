/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block_js__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_js__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__sidebar_js__);\n// Include stylesheet\n\n\n// Import Gutenberg Boilerplate Block\n\n\n// Import Gutenberg Boilerplate Sidebar\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz84NzQ5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEluY2x1ZGUgc3R5bGVzaGVldFxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbi8vIEltcG9ydCBHdXRlbmJlcmcgQm9pbGVycGxhdGUgQmxvY2tcbmltcG9ydCBcIi4vYmxvY2suanNcIjtcblxuLy8gSW1wb3J0IEd1dGVuYmVyZyBCb2lsZXJwbGF0ZSBTaWRlYmFyXG5pbXBvcnQgXCIuL3NpZGViYXIuanNcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzP2FjZDgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/**\n * Internal block libraries\n */\nconst { __ } = wp.i18n;\n\nconst { registerBlockType } = wp.blocks;\n\nconst {\n\tRichText,\n\tInspectorControls,\n\tBlockControls\n} = wp.editor;\n\nconst {\n\tPanelBody,\n\tTextareaControl,\n\tTextControl,\n\tDashicon,\n\tToolbar,\n\tButton,\n\tTooltip\n} = wp.components;\n\n/**\n * Register block\n */\n/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType(\"slide-form/block\", {\n\t// Block Title\n\ttitle: __(\"Slide Form\"),\n\t// Block Description\n\tdescription: __(\"Embedding form.\"),\n\t// Block Category\n\tcategory: \"common\",\n\t// Block Icon\n\ticon: \"feedback\",\n\t// Block Keywords\n\tkeywords: [__(\"form\"), __(\"slide\"), __(\"request\")],\n\tattributes: {\n\t\ttitle: {\n\t\t\ttype: \"string\"\n\t\t}\n\t},\n\t// Defining the edit interface\n\tedit: props => {\n\t\tconst onChangeTitle = value => {\n\t\t\tprops.setAttributes({ title: value });\n\t\t};\n\n\t\treturn React.createElement(\n\t\t\t\"div\",\n\t\t\t{ className: props.className },\n\t\t\tReact.createElement(RichText, {\n\t\t\t\tformat: \"string\",\n\t\t\t\tformattingControls: [],\n\t\t\t\tplaceholder: __(\"Form title\"),\n\t\t\t\tonChange: onChangeTitle,\n\t\t\t\tvalue: props.attributes.title\n\t\t\t})\n\t\t);\n\t},\n\t// Defining the front-end interface\n\tsave: props => {\n\t\tconsole.log(props);\n\t\treturn React.createElement(\n\t\t\t\"h1\",\n\t\t\t{ className: \"display-4\" },\n\t\t\t__(props.attributes.title)\n\t\t);\n\t}\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay5qcz8zNTI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSW50ZXJuYWwgYmxvY2sgbGlicmFyaWVzXG4gKi9cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRSaWNoVGV4dCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHNcbn0gPSB3cC5lZGl0b3I7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRUZXh0YXJlYUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHREYXNoaWNvbixcblx0VG9vbGJhcixcblx0QnV0dG9uLFxuXHRUb29sdGlwXG59ID0gd3AuY29tcG9uZW50cztcblxuLyoqXG4gKiBSZWdpc3RlciBibG9ja1xuICovXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckJsb2NrVHlwZShcInNsaWRlLWZvcm0vYmxvY2tcIiwge1xuXHQvLyBCbG9jayBUaXRsZVxuXHR0aXRsZTogX18oXCJTbGlkZSBGb3JtXCIpLFxuXHQvLyBCbG9jayBEZXNjcmlwdGlvblxuXHRkZXNjcmlwdGlvbjogX18oXCJFbWJlZGRpbmcgZm9ybS5cIiksXG5cdC8vIEJsb2NrIENhdGVnb3J5XG5cdGNhdGVnb3J5OiBcImNvbW1vblwiLFxuXHQvLyBCbG9jayBJY29uXG5cdGljb246IFwiZmVlZGJhY2tcIixcblx0Ly8gQmxvY2sgS2V5d29yZHNcblx0a2V5d29yZHM6IFtfXyhcImZvcm1cIiksIF9fKFwic2xpZGVcIiksIF9fKFwicmVxdWVzdFwiKV0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogXCJzdHJpbmdcIlxuXHRcdH1cblx0fSxcblx0Ly8gRGVmaW5pbmcgdGhlIGVkaXQgaW50ZXJmYWNlXG5cdGVkaXQ6IHByb3BzID0+IHtcblx0XHRjb25zdCBvbkNoYW5nZVRpdGxlID0gdmFsdWUgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7IHRpdGxlOiB2YWx1ZSB9KTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcImRpdlwiLFxuXHRcdFx0eyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB9LFxuXHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuXHRcdFx0XHRmb3JtYXQ6IFwic3RyaW5nXCIsXG5cdFx0XHRcdGZvcm1hdHRpbmdDb250cm9sczogW10sXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiBfXyhcIkZvcm0gdGl0bGVcIiksXG5cdFx0XHRcdG9uQ2hhbmdlOiBvbkNoYW5nZVRpdGxlLFxuXHRcdFx0XHR2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy50aXRsZVxuXHRcdFx0fSlcblx0XHQpO1xuXHR9LFxuXHQvLyBEZWZpbmluZyB0aGUgZnJvbnQtZW5kIGludGVyZmFjZVxuXHRzYXZlOiBwcm9wcyA9PiB7XG5cdFx0Y29uc29sZS5sb2cocHJvcHMpO1xuXHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XCJoMVwiLFxuXHRcdFx0eyBjbGFzc05hbWU6IFwiZGlzcGxheS00XCIgfSxcblx0XHRcdF9fKHByb3BzLmF0dHJpYnV0ZXMudGl0bGUpXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("/**\n * Internal block libraries\n */\nconst { __ } = wp.i18n;\n\nconst { Fragment } = wp.element;\n\nconst {\n\tPluginSidebar,\n\tPluginSidebarMoreMenuItem\n} = wp.editPost;\n\nconst { registerPlugin } = wp.plugins;\n\nconst Component = () => React.createElement(\n\tFragment,\n\tnull,\n\tReact.createElement(\n\t\tPluginSidebarMoreMenuItem,\n\t\t{\n\t\t\ttarget: \"slide-form-sidebar\"\n\t\t},\n\t\t__(\"Gutenberg Boilerplate\")\n\t),\n\tReact.createElement(\n\t\tPluginSidebar,\n\t\t{\n\t\t\tname: \"slide-form-sidebar\",\n\t\t\ttitle: __(\"Gutenberg Boilerplate\")\n\t\t},\n\t\tReact.createElement(\n\t\t\t\"h2\",\n\t\t\tnull,\n\t\t\t__(\"Hello World!\")\n\t\t)\n\t)\n);\n\nregisterPlugin(\"slide-form\", {\n\ticon: \"admin-site\",\n\trender: Component\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zaWRlYmFyLmpzPzI1ZDUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJbnRlcm5hbCBibG9jayBsaWJyYXJpZXNcbiAqL1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgeyBGcmFnbWVudCB9ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRQbHVnaW5TaWRlYmFyLFxuXHRQbHVnaW5TaWRlYmFyTW9yZU1lbnVJdGVtXG59ID0gd3AuZWRpdFBvc3Q7XG5cbmNvbnN0IHsgcmVnaXN0ZXJQbHVnaW4gfSA9IHdwLnBsdWdpbnM7XG5cbmNvbnN0IENvbXBvbmVudCA9ICgpID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdEZyYWdtZW50LFxuXHRudWxsLFxuXHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFBsdWdpblNpZGViYXJNb3JlTWVudUl0ZW0sXG5cdFx0e1xuXHRcdFx0dGFyZ2V0OiBcInNsaWRlLWZvcm0tc2lkZWJhclwiXG5cdFx0fSxcblx0XHRfXyhcIkd1dGVuYmVyZyBCb2lsZXJwbGF0ZVwiKVxuXHQpLFxuXHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFBsdWdpblNpZGViYXIsXG5cdFx0e1xuXHRcdFx0bmFtZTogXCJzbGlkZS1mb3JtLXNpZGViYXJcIixcblx0XHRcdHRpdGxlOiBfXyhcIkd1dGVuYmVyZyBCb2lsZXJwbGF0ZVwiKVxuXHRcdH0sXG5cdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFwiaDJcIixcblx0XHRcdG51bGwsXG5cdFx0XHRfXyhcIkhlbGxvIFdvcmxkIVwiKVxuXHRcdClcblx0KVxuKTtcblxucmVnaXN0ZXJQbHVnaW4oXCJzbGlkZS1mb3JtXCIsIHtcblx0aWNvbjogXCJhZG1pbi1zaXRlXCIsXG5cdHJlbmRlcjogQ29tcG9uZW50XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaWRlYmFyLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);