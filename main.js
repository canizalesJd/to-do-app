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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\r\n\r\n\r\nconst addTaskBtn = document.querySelector(\".add-task-btn\");\r\nconst taskModal = document.querySelector(\".task-modal\");\r\nconst closeModalBtn = document.querySelector(\".close-modal\");\r\nconst cancelBtn = document.querySelector(\".cancel-btn\");\r\n\r\nconst taskTitle = document.getElementById(\"task-title\");\r\nconst taskPriority = document.getElementById(\"task-priority\");\r\nconst taskDate = document.getElementById(\"task-date\");\r\n\r\nconst addProjectBtn = document.querySelector(\".add-project-btn\");\r\nconst cancelProjectBtn = document.querySelector(\".cancel-project-btn\");\r\nconst projectFormContainer = document.querySelector(\".new-project-container\");\r\n\r\nlet contentTitle = document.querySelector(\".content-title\");\r\n\r\nlet projects;\r\nlet project;\r\nlet editTask = false;\r\nlet editTaskIndex;\r\n\r\nconst getProjects = () => {\r\n\tlocalStorage.getItem(\"projects\")\r\n\t\t? (projects = JSON.parse(localStorage.getItem(\"projects\")))\r\n\t\t: (projects = []);\r\n};\r\n\r\ngetProjects();\r\n\r\nconst updateProjects = (projects) => {\r\n\tlocalStorage.setItem(\"projects\", JSON.stringify(projects));\r\n};\r\n\r\nconst listProjects = (projects) => {\r\n\tconst projectList = document.querySelector(\".projects\");\r\n\tprojectList.innerHTML = \"\";\r\n\tprojects.forEach((project, index) => {\r\n\t\tprojectList.innerHTML += `<li data-id=\"${index}\" class=\"project-container\">\r\n\t\t${project.name}\r\n\t\t<img src=\"images/close-icon.svg\" alt=\"Options icon\" data-project=\"${index})\">\r\n\t\t</li>`;\r\n\t});\r\n};\r\n\r\nlistProjects(projects);\r\n\r\naddTaskBtn.addEventListener(\"click\", () => {\r\n\ttaskModal.style.display = \"flex\";\r\n});\r\n\r\ncloseModalBtn.addEventListener(\"click\", () => {\r\n\ttaskModal.style.display = \"none\";\r\n\tresetModal();\r\n});\r\n\r\ncancelBtn.addEventListener(\"click\", () => {\r\n\tresetModal();\r\n});\r\n\r\n// Close modal when clicking outside of it\r\nwindow.addEventListener(\"click\", (event) => {\r\n\tif (event.target == taskModal) {\r\n\t\tresetModal();\r\n\t}\r\n});\r\n\r\n// Show and hide new project form\r\naddProjectBtn.addEventListener(\"click\", () => {\r\n\tprojectFormContainer.style.display = \"flex\";\r\n});\r\n\r\nconst resetModal = () => {\r\n\t// Reset modal fields\r\n\ttaskTitle.value = \"\";\r\n\ttaskPriority.value = \"\";\r\n\ttaskDate.value = \"\";\r\n\t// Close modal\r\n\ttaskModal.style.display = \"none\";\r\n\teditTask = false;\r\n};\r\n\r\n// New project creation form\r\nconst projectName = document.getElementById(\"project-name\");\r\nconst projectForm = document.querySelector(\".project-form\");\r\n\r\nconst resetProjectForm = () => {\r\n\tprojectFormContainer.style.display = \"none\";\r\n\tprojectName.value = \"\";\r\n};\r\n\r\nconst createProject = (projectName) => {\r\n\tconst project = new _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectName.value);\r\n\tprojects.push(project);\r\n\tupdateProjects(projects);\r\n\tlistProjects(projects);\r\n};\r\n\r\nprojectForm.addEventListener(\"submit\", (event) => {\r\n\tevent.preventDefault();\r\n\tif (projectName.value === \"\") {\r\n\t\treturn;\r\n\t}\r\n\tcreateProject(projectName);\r\n\tresetProjectForm();\r\n});\r\n\r\ncancelProjectBtn.addEventListener(\"click\", () => {\r\n\tresetProjectForm();\r\n});\r\n\r\nconst projectList = document.querySelector(\".projects\");\r\nprojectList.addEventListener(\"click\", (e) => {\r\n\tif (e.target.dataset.project) {\r\n\t\tdeleteProject(e.target.dataset.project);\r\n\t}\r\n\tif (e.target.dataset.id) {\r\n\t\tselectProject(e.target.dataset.id);\r\n\t}\r\n});\r\n\r\nconst listTasks = (tasks) => {\r\n\tconsole.log(tasks);\r\n\tconst tasksContainer = document.querySelector(\".tasks-container\");\r\n\tif (tasks.length > 0) {\r\n\t\ttasksContainer.innerHTML = \"\";\r\n\t\ttasks.forEach((t, index) => {\r\n\t\t\tconst task = JSON.parse(t);\r\n\t\t\t// Create the main container div\r\n\t\t\tconst taskCard = document.createElement(\"div\");\r\n\t\t\ttaskCard.classList.add(\"task-card\");\r\n\t\t\t// Create the task title paragraph\r\n\t\t\tconst titleParagraph = document.createElement(\"p\");\r\n\t\t\ttitleParagraph.classList.add(\"task-title\");\r\n\t\t\ttitleParagraph.innerHTML = `${task.title} <span class=\"priority ${task.priority}\"></span>`;\r\n\t\t\ttaskCard.appendChild(titleParagraph);\r\n\t\t\tconst projectParagraph = document.createElement(\"p\");\r\n\t\t\tprojectParagraph.classList.add(\"task-project\");\r\n\t\t\tprojectParagraph.textContent = task.projectName;\r\n\t\t\ttaskCard.appendChild(projectParagraph);\r\n\t\t\t// Create the task date paragraph\r\n\t\t\tconst dateParagraph = document.createElement(\"p\");\r\n\t\t\tdateParagraph.classList.add(\"task-date\");\r\n\t\t\tdateParagraph.innerHTML = `Due: ${task.date || \"No Due Date\"}`;\r\n\t\t\ttaskCard.appendChild(dateParagraph);\r\n\t\t\t// Create the task controls div\r\n\t\t\tconst taskControls = document.createElement(\"div\");\r\n\t\t\ttaskControls.classList.add(\"task-controls\");\r\n\t\t\t// Create the complete task button\r\n\t\t\tconst completeTaskBtn = document.createElement(\"img\");\r\n\t\t\tcompleteTaskBtn.src = task.completed\r\n\t\t\t\t? \"images/completed-icon.svg\"\r\n\t\t\t\t: \"images/complete-icon.svg\";\r\n\t\t\tcompleteTaskBtn.alt = \"Complete icon\";\r\n\t\t\ttaskCard.classList.add(task.completed ? \"completed\" : null);\r\n\r\n\t\t\tcompleteTaskBtn.classList.add(\"complete-task-btn\");\r\n\t\t\ttaskControls.appendChild(completeTaskBtn);\r\n\t\t\t// Create the task options button\r\n\t\t\tconst taskOptionsBtn = document.createElement(\"img\");\r\n\t\t\ttaskOptionsBtn.src = \"images/dots-icon.svg\";\r\n\t\t\ttaskOptionsBtn.alt = \"Options icon\";\r\n\r\n\t\t\ttaskOptionsBtn.classList.add(\"task-options-btn\");\r\n\t\t\ttaskControls.appendChild(taskOptionsBtn);\r\n\t\t\ttaskCard.appendChild(taskControls);\r\n\t\t\t// Create the task options div\r\n\t\t\tconst taskOptions = document.createElement(\"div\");\r\n\t\t\ttaskOptions.classList.add(\"task-options\");\r\n\t\t\t// Create the \"Edit\" option paragraph\r\n\t\t\tconst editOption = document.createElement(\"p\");\r\n\t\t\teditOption.dataset.option = \"edit\";\r\n\t\t\teditOption.textContent = \"Edit\";\r\n\t\t\ttaskOptions.appendChild(editOption);\r\n\t\t\t// Create the \"Delete\" option paragraph\r\n\t\t\tconst deleteOption = document.createElement(\"p\");\r\n\t\t\tdeleteOption.dataset.option = \"delete\";\r\n\t\t\tdeleteOption.textContent = \"Delete\";\r\n\t\t\ttaskOptions.appendChild(deleteOption);\r\n\t\t\ttaskCard.appendChild(taskOptions);\r\n\t\t\ttasksContainer.appendChild(taskCard);\r\n\t\t\t// Adding functionality to the options button\r\n\t\t\ttaskOptionsBtn.addEventListener(\"click\", () => {\r\n\t\t\t\ttaskOptions.classList.toggle(\"show\");\r\n\t\t\t});\r\n\t\t\t// Adding functionality to the complete task button\r\n\t\t\tcompleteTaskBtn.addEventListener(\"click\", () => {\r\n\t\t\t\ttask.completed = !task.completed;\r\n\t\t\t\ttasks[index] = JSON.stringify(task);\r\n\t\t\t\tupdateProjects(projects);\r\n\t\t\t\tlistProjects(projects);\r\n\t\t\t\tlistTasks(project.tasks);\r\n\t\t\t});\r\n\t\t\t// Adding functionality to options menu\r\n\t\t\ttaskOptions.addEventListener(\"click\", (e) => {\r\n\t\t\t\tif (e.target.dataset.option === \"edit\") {\r\n\t\t\t\t\ttaskModal.style.display = \"flex\";\r\n\t\t\t\t\ttaskTitle.value = task.title;\r\n\t\t\t\t\ttaskPriority.value = task.priority;\r\n\t\t\t\t\ttaskDate.value = task.date;\r\n\t\t\t\t\teditTask = true;\r\n\t\t\t\t\teditTaskIndex = index;\r\n\t\t\t\t}\r\n\t\t\t\tif (e.target.dataset.option === \"delete\") {\r\n\t\t\t\t\tproject.tasks.splice(index, 1);\r\n\t\t\t\t\tupdateProjects(projects);\r\n\t\t\t\t\tlistProjects(projects);\r\n\t\t\t\t\tlistTasks(project);\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t});\r\n\t} else {\r\n\t\ttasksContainer.innerHTML = `\r\n\t\t<div class=\"task-card text-center\">\r\n\t\t\t<p>No tasks to be displayed...</p>\r\n\t\t</div>`;\r\n\t}\r\n};\r\n\r\nconst selectProject = (index) => {\r\n\tproject = projects[index];\r\n\tcontentTitle.textContent = project.name;\r\n\tlistTasks(project.tasks);\r\n};\r\n\r\n// Function to delete the project\r\nconst deleteProject = function (index) {\r\n\tprojects.splice(index, 1);\r\n\tupdateProjects(projects);\r\n\tlistProjects(projects);\r\n};\r\n\r\n// Task creation form\r\nconst taskForm = document.querySelector(\".task-form\");\r\n\r\nconst createTask = (projectName, title, priority, date, completed = false) => {\r\n\tprojectName === \"\" ? (projectName = \"No Project\") : project.name;\r\n\tdate === \"\" ? (date = \"No Due Date\") : date;\r\n\tconst task = new _task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projectName, title, priority, date, completed);\r\n\tproject.tasks.push(JSON.stringify(task));\r\n};\r\n\r\ntaskForm.onsubmit = (event) => {\r\n\tconsole.log(project);\r\n\tevent.preventDefault();\r\n\tif (taskTitle.value === \"\") {\r\n\t\treturn;\r\n\t}\r\n\tif (!editTask) {\r\n\t\tcreateTask(\r\n\t\t\tproject.name,\r\n\t\t\ttaskTitle.value,\r\n\t\t\ttaskPriority.value,\r\n\t\t\ttaskDate.value\r\n\t\t);\r\n\t} else {\r\n\t\tconst index = editTaskIndex;\r\n\t\tconst task = JSON.parse(project.tasks[index]);\r\n\t\ttask.title = taskTitle.value;\r\n\t\ttask.priority = taskPriority.value;\r\n\t\ttask.date = taskDate.value;\r\n\t\tproject.tasks[index] = JSON.stringify(task);\r\n\t}\r\n\tupdateProjects(projects);\r\n\tlistProjects(projects);\r\n\tresetModal();\r\n\tlistTasks(project.tasks);\r\n};\r\n\r\n// Menu controls\r\nconst menuHome = document.getElementById(\"menu-home\");\r\nconst menuToday = document.getElementById(\"menu-today\");\r\nconst menuWeek = document.getElementById(\"menu-week\");\r\n\r\nmenuHome.addEventListener(\"click\", () => {\r\n\tcontentTitle.textContent = \"Home\";\r\n\tlet tasks = [];\r\n\tprojects.map((project) => {\r\n\t\ttasks = [...tasks, ...project.tasks];\r\n\t\tlistTasks(tasks);\r\n\t});\r\n});\r\n\n\n//# sourceURL=webpack://to-do-app/./src/main.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\r\n\tconstructor(projectName, title, priority, date, completed) {\r\n\t\tthis.projectName = projectName;\r\n\t\tthis.title = title;\r\n\t\tthis.priority = priority;\r\n\t\tthis.date = date;\r\n\t\tthis.completed = completed;\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\r\n\n\n//# sourceURL=webpack://to-do-app/./src/task.js?");

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