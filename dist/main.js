/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\r\n\r\nconst addTaskBtn = document.querySelector(\".add-task-btn\");\r\nconst taskModal = document.querySelector(\".task-modal\");\r\nconst closeModalBtn = document.querySelector(\".close-modal\");\r\nconst cancelBtn = document.querySelector(\".cancel-btn\");\r\n\r\nconst taskTitle = document.getElementById(\"task-title\");\r\nconst taskPriority = document.getElementById(\"task-priority\");\r\nconst taskDate = document.getElementById(\"task-date\");\r\n\r\nconst addProjectBtn = document.querySelector(\".add-project-btn\");\r\nconst cancelProjectBtn = document.querySelector(\".cancel-project-btn\");\r\nconst projectFormContainer = document.querySelector(\".new-project-container\");\r\n\r\nlet projects;\r\nconst getProjects = () => {\r\n\tlocalStorage.getItem(\"projects\")\r\n\t\t? (projects = JSON.parse(localStorage.getItem(\"projects\")))\r\n\t\t: (projects = []);\r\n};\r\ngetProjects();\r\n\r\nconst updateProjects = (projects) => {\r\n\tlocalStorage.setItem(\"projects\", JSON.stringify(projects));\r\n};\r\n\r\nconst listProjects = (projects) => {\r\n\tconst projectList = document.querySelector(\".projects\");\r\n\tprojectList.innerHTML = \"\";\r\n\tprojects.forEach((project, index) => {\r\n\t\tprojectList.innerHTML += `<li>\r\n\t\t<div class=\"project-container\">${project.name}\r\n\t\t<img src=\"images/close-icon.svg\" alt=\"Options icon\" data-project=\"${index})\">\r\n\t\t</div>\r\n\t\t</li>`;\r\n\t});\r\n};\r\n\r\nlistProjects(projects);\r\n\r\naddTaskBtn.addEventListener(\"click\", () => {\r\n\ttaskModal.style.display = \"flex\";\r\n});\r\n\r\ncloseModalBtn.addEventListener(\"click\", () => {\r\n\ttaskModal.style.display = \"none\";\r\n\tresetModal();\r\n});\r\n\r\ncancelBtn.addEventListener(\"click\", () => {\r\n\tresetModal();\r\n});\r\n\r\n// Close modal when clicking outside of it\r\nwindow.addEventListener(\"click\", (event) => {\r\n\tif (event.target == taskModal) {\r\n\t\tresetModal();\r\n\t}\r\n});\r\n\r\n// Show and hide new project form\r\naddProjectBtn.addEventListener(\"click\", () => {\r\n\tprojectFormContainer.style.display = \"flex\";\r\n});\r\n\r\nconst resetModal = () => {\r\n\t// Reset modal fields\r\n\ttaskTitle.value = \"\";\r\n\ttaskPriority.value = \"\";\r\n\ttaskDate.value = \"\";\r\n\t// Close modal\r\n\ttaskModal.style.display = \"none\";\r\n};\r\n\r\n// New project creation form\r\nconst projectName = document.getElementById(\"project-name\");\r\nconst projectForm = document.querySelector(\".project-form\");\r\n\r\nconst resetProjectForm = () => {\r\n\tprojectFormContainer.style.display = \"none\";\r\n\tprojectName.value = \"\";\r\n};\r\n\r\nconst createProject = (projectName) => {\r\n\tconst project = new _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectName.value);\r\n\tprojects.push(project);\r\n\tupdateProjects(projects);\r\n\tlistProjects(projects);\r\n};\r\n\r\nprojectForm.addEventListener(\"submit\", (event) => {\r\n\tevent.preventDefault();\r\n\tif (projectName.value === \"\") {\r\n\t\treturn;\r\n\t}\r\n\tcreateProject(projectName);\r\n\tresetProjectForm();\r\n});\r\n\r\ncancelProjectBtn.addEventListener(\"click\", () => {\r\n\tresetProjectForm();\r\n});\r\n\r\nconst projectList = document.querySelector(\".projects\");\r\nprojectList.addEventListener(\"click\", (e) => {\r\n\tif (e.target.dataset.project) {\r\n\t\tdeleteProject(e.target.dataset.project);\r\n\t}\r\n});\r\n\r\n// Function to delete the project\r\nconst deleteProject = function (index) {\r\n\tprojects.splice(index, 1);\r\n\tupdateProjects(projects);\r\n\tlistProjects(projects);\r\n};\r\n\n\n//# sourceURL=webpack://to-do-app/./src/main.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\r\n\tconstructor(projectName) {\r\n\t\tthis.name = projectName;\r\n\t\tthis.tasks = [];\r\n\t}\r\n\taddTask(task) {\r\n\t\tthis.tasks.push(task);\r\n\t}\r\n\tremoveTask(task) {\r\n\t\tthis.tasks.splice(this.tasks.indexOf(task), 1);\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\r\n\n\n//# sourceURL=webpack://to-do-app/./src/project.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;