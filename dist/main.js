/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

eval("const addTaskBtn = document.querySelector(\".add-task-btn\");\r\nconst taskModal = document.querySelector(\".task-modal\");\r\nconst closeModalBtn = document.querySelector(\".close-modal\");\r\nconst cancelBtn = document.querySelector(\".cancel-btn\");\r\n\r\nconst taskTitle = document.getElementById(\"task-title\");\r\nconst taskPriority = document.getElementById(\"task-priority\");\r\nconst taskDate = document.getElementById(\"task-date\");\r\n\r\naddTaskBtn.addEventListener(\"click\", () => {\r\n\ttaskModal.style.display = \"flex\";\r\n});\r\n\r\ncloseModalBtn.addEventListener(\"click\", () => {\r\n\ttaskModal.style.display = \"none\";\r\n\tresetModal();\r\n});\r\n\r\ncancelBtn.addEventListener(\"click\", () => {\r\n\tresetModal();\r\n});\r\n\r\n// Close modal when clicking outside of it\r\nwindow.addEventListener(\"click\", (event) => {\r\n\tif (event.target == taskModal) {\r\n\t\tresetModal();\r\n\t}\r\n});\r\n\r\nconst resetModal = () => {\r\n\t// Reset modal fields\r\n\ttaskTitle.value = \"\";\r\n\ttaskPriority.value = \"\";\r\n\ttaskDate.value = \"\";\r\n\t// Close modal\r\n\ttaskModal.style.display = \"none\";\r\n};\r\n\n\n//# sourceURL=webpack://to-do-app/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"]();
/******/ 	
/******/ })()
;