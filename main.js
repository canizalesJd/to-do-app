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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\r\n\r\n\r\nconst addTaskBtn = document.querySelector(\".add-task-btn\");\r\nconst taskModal = document.querySelector(\".task-modal\");\r\nconst closeModalBtn = document.querySelector(\".close-modal\");\r\nconst cancelBtn = document.querySelector(\".cancel-btn\");\r\n\r\nconst taskTitle = document.getElementById(\"task-title\");\r\nconst taskPriority = document.getElementById(\"task-priority\");\r\nconst taskDate = document.getElementById(\"task-date\");\r\n\r\nconst addProjectBtn = document.querySelector(\".add-project-btn\");\r\nconst cancelProjectBtn = document.querySelector(\".cancel-project-btn\");\r\nconst projectFormContainer = document.querySelector(\".new-project-container\");\r\n\r\nlet projects;\r\nlet project;\r\n\r\nconst getProjects = () => {\r\n\tlocalStorage.getItem(\"projects\")\r\n\t\t? (projects = JSON.parse(localStorage.getItem(\"projects\")))\r\n\t\t: (projects = []);\r\n};\r\n\r\ngetProjects();\r\n\r\nconst updateProjects = (projects) => {\r\n\tlocalStorage.setItem(\"projects\", JSON.stringify(projects));\r\n};\r\n\r\nconst listProjects = (projects) => {\r\n\tconst projectList = document.querySelector(\".projects\");\r\n\tprojectList.innerHTML = \"\";\r\n\tprojects.forEach((project, index) => {\r\n\t\tprojectList.innerHTML += `<li data-id=\"${index}\" class=\"project-container\">\r\n\t\t${project.name}\r\n\t\t<img src=\"images/close-icon.svg\" alt=\"Options icon\" data-project=\"${index})\">\r\n\t\t</li>`;\r\n\t});\r\n};\r\n\r\nlistProjects(projects);\r\n\r\naddTaskBtn.addEventListener(\"click\", () => {\r\n\ttaskModal.style.display = \"flex\";\r\n});\r\n\r\ncloseModalBtn.addEventListener(\"click\", () => {\r\n\ttaskModal.style.display = \"none\";\r\n\tresetModal();\r\n});\r\n\r\ncancelBtn.addEventListener(\"click\", () => {\r\n\tresetModal();\r\n});\r\n\r\n// Close modal when clicking outside of it\r\nwindow.addEventListener(\"click\", (event) => {\r\n\tif (event.target == taskModal) {\r\n\t\tresetModal();\r\n\t}\r\n});\r\n\r\n// Show and hide new project form\r\naddProjectBtn.addEventListener(\"click\", () => {\r\n\tprojectFormContainer.style.display = \"flex\";\r\n});\r\n\r\nconst resetModal = () => {\r\n\t// Reset modal fields\r\n\ttaskTitle.value = \"\";\r\n\ttaskPriority.value = \"\";\r\n\ttaskDate.value = \"\";\r\n\t// Close modal\r\n\ttaskModal.style.display = \"none\";\r\n};\r\n\r\n// New project creation form\r\nconst projectName = document.getElementById(\"project-name\");\r\nconst projectForm = document.querySelector(\".project-form\");\r\n\r\nconst resetProjectForm = () => {\r\n\tprojectFormContainer.style.display = \"none\";\r\n\tprojectName.value = \"\";\r\n};\r\n\r\nconst createProject = (projectName) => {\r\n\tconst project = new _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectName.value);\r\n\tprojects.push(project);\r\n\tupdateProjects(projects);\r\n\tlistProjects(projects);\r\n};\r\n\r\nprojectForm.addEventListener(\"submit\", (event) => {\r\n\tevent.preventDefault();\r\n\tif (projectName.value === \"\") {\r\n\t\treturn;\r\n\t}\r\n\tcreateProject(projectName);\r\n\tresetProjectForm();\r\n});\r\n\r\ncancelProjectBtn.addEventListener(\"click\", () => {\r\n\tresetProjectForm();\r\n});\r\n\r\nconst projectList = document.querySelector(\".projects\");\r\nprojectList.addEventListener(\"click\", (e) => {\r\n\tif (e.target.dataset.project) {\r\n\t\tdeleteProject(e.target.dataset.project);\r\n\t}\r\n\tif (e.target.dataset.id) {\r\n\t\tselectProject(e.target.dataset.id);\r\n\t}\r\n});\r\n\r\nconst listTasks = (project) => {\r\n\tconsole.log(project);\r\n\tconst tasksContainer = document.querySelector(\".tasks-container\");\r\n\tif (project.tasks.length > 0) {\r\n\t\ttasksContainer.innerHTML = \"\";\r\n\t\tproject.tasks.forEach((t) => {\r\n\t\t\tconst task = JSON.parse(t);\r\n\t\t\ttasksContainer.innerHTML += `\r\n\t\t\t<div class=\"task-card\">\r\n\t\t\t\t<p class=\"task-title\">${task.title}</p>\r\n\t\t\t\t<p class=\"task-project\">${project.name}</p>\r\n\t\t\t\t<p class=\"task-date\">Due: ${task.date}</p>\r\n\t\t\t</div>`;\r\n\t\t});\r\n\t} else {\r\n\t\ttasksContainer.innerHTML = `\r\n\t\t<div class=\"task-card text-center\">\r\n\t\t\t<p>No tasks to be displayed...</p>\r\n\t\t</div>`;\r\n\t}\r\n};\r\n\r\nconst selectProject = (index) => {\r\n\tproject = projects[index];\r\n\tconst contentTitle = document.querySelector(\".content-title\");\r\n\tcontentTitle.textContent = project.name;\r\n\tlistTasks(project);\r\n};\r\n\r\n// Function to delete the project\r\nconst deleteProject = function (index) {\r\n\tprojects.splice(index, 1);\r\n\tupdateProjects(projects);\r\n\tlistProjects(projects);\r\n};\r\n\r\n// Task creation form\r\nconst taskForm = document.querySelector(\".task-form\");\r\n\r\nconst createTask = (project, title, priority, date = \"No due date\") => {\r\n\tconst task = {\r\n\t\ttitle: title,\r\n\t\tpriority: priority,\r\n\t\tdate: date,\r\n\t};\r\n\tproject.tasks.push(JSON.stringify(task));\r\n};\r\n\r\ntaskForm.onsubmit = (event) => {\r\n\tevent.preventDefault();\r\n\tif (taskTitle.value === \"\") {\r\n\t\treturn;\r\n\t}\r\n\tcreateTask(project, taskTitle.value, taskPriority.value, taskDate.value);\r\n\tconsole.log(projects);\r\n\tupdateProjects(projects);\r\n\tlistProjects(projects);\r\n\tresetModal();\r\n\tlistTasks(project);\r\n};\r\n\n\n//# sourceURL=webpack://to-do-app/./src/main.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\r\n\tconstructor(name) {\r\n\t\tthis.name = name;\r\n\t\tthis.tasks = [];\r\n\t}\r\n\taddTask(task) {\r\n\t\tthis.tasks.push(task);\r\n\t}\r\n\tremoveTask(task) {\r\n\t\tthis.tasks.splice(this.tasks.indexOf(task), 1);\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\r\n\n\n//# sourceURL=webpack://to-do-app/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\r\n\tconstructor(title, priority, date) {\r\n\t\tthis.title = title;\r\n\t\tthis.priority = priority;\r\n\t\tthis.date = date;\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\r\n\n\n//# sourceURL=webpack://to-do-app/./src/task.js?");

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