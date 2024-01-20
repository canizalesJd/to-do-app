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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\r\n\r\n\r\nconst addTaskBtn = document.querySelector(\".add-task-btn\");\r\nconst taskModal = document.querySelector(\".task-modal\");\r\nconst closeModalBtn = document.querySelector(\".close-modal\");\r\nconst cancelBtn = document.querySelector(\".cancel-btn\");\r\n\r\nconst taskTitle = document.getElementById(\"task-title\");\r\nconst taskPriority = document.getElementById(\"task-priority\");\r\nconst taskDate = document.getElementById(\"task-date\");\r\n\r\nconst addProjectBtn = document.querySelector(\".add-project-btn\");\r\nconst cancelProjectBtn = document.querySelector(\".cancel-project-btn\");\r\nconst projectFormContainer = document.querySelector(\".new-project-container\");\r\n\r\nlet contentTitle = document.querySelector(\".content-title\");\r\n\r\nlet projects;\r\nlet tasks;\r\nlet project;\r\nlet taskEdit = false;\r\nlet taskIdToEdit;\r\n\r\nconst getProjects = () => {\r\n\tlocalStorage.getItem(\"projects\")\r\n\t\t? (projects = JSON.parse(localStorage.getItem(\"projects\")))\r\n\t\t: (projects = []);\r\n};\r\ngetProjects();\r\n\r\nconst getTasks = () => {\r\n\tlocalStorage.getItem(\"tasks\")\r\n\t\t? (tasks = JSON.parse(localStorage.getItem(\"tasks\")))\r\n\t\t: (tasks = []);\r\n};\r\ngetTasks();\r\n\r\nconst updateLocalStorage = (item, itemName) => {\r\n\tlocalStorage.setItem(itemName, JSON.stringify(item));\r\n};\r\n\r\nconst listProjects = (projects) => {\r\n\tconst projectList = document.querySelector(\".projects\");\r\n\tprojectList.innerHTML = \"\";\r\n\tprojects.forEach((project) => {\r\n\t\tconst projectContainer = document.createElement(\"li\");\r\n\t\tprojectContainer.classList.add(\"project-container\");\r\n\t\tprojectContainer.addEventListener(\"click\", () => {\r\n\t\t\tselectProject(project.id);\r\n\t\t});\r\n\r\n\t\tconst projectName = document.createElement(\"p\");\r\n\t\tprojectName.textContent = project.name;\r\n\t\tprojectContainer.appendChild(projectName);\r\n\r\n\t\tconst closeIcon = document.createElement(\"img\");\r\n\t\tcloseIcon.src = \"images/close-icon.svg\";\r\n\r\n\t\tcloseIcon.addEventListener(\"click\", () => {\r\n\t\t\tdeleteProject(project.id);\r\n\t\t});\r\n\t\tprojectContainer.appendChild(closeIcon);\r\n\t\tprojectList.appendChild(projectContainer);\r\n\t});\r\n};\r\nlistProjects(projects);\r\n\r\naddTaskBtn.addEventListener(\"click\", () => {\r\n\ttaskModal.style.display = \"flex\";\r\n});\r\n\r\ncloseModalBtn.addEventListener(\"click\", () => {\r\n\ttaskModal.style.display = \"none\";\r\n\tresetTaskModal();\r\n});\r\n\r\ncancelBtn.addEventListener(\"click\", () => {\r\n\tresetTaskModal();\r\n});\r\n\r\n// Close modal when clicking outside of it\r\nwindow.addEventListener(\"click\", (event) => {\r\n\tif (event.target == taskModal) {\r\n\t\tresetTaskModal();\r\n\t}\r\n});\r\n\r\n// Show and hide new project form\r\naddProjectBtn.addEventListener(\"click\", () => {\r\n\tprojectFormContainer.style.display = \"flex\";\r\n});\r\n\r\nconst resetTaskModal = () => {\r\n\t// Reset modal fields\r\n\ttaskTitle.value = \"\";\r\n\ttaskPriority.value = \"normal\";\r\n\ttaskDate.value = \"\";\r\n\t// Close modal\r\n\ttaskModal.style.display = \"none\";\r\n\ttaskEdit = false;\r\n};\r\n\r\n// New project creation form\r\nconst projectName = document.getElementById(\"project-name\");\r\nconst projectForm = document.querySelector(\".project-form\");\r\n\r\nconst resetProjectForm = () => {\r\n\tprojectFormContainer.style.display = \"none\";\r\n\tprojectName.value = \"\";\r\n};\r\n\r\nconst createProject = (projectId, projectName) => {\r\n\tconst project = new _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectId, projectName.value);\r\n\tprojects.push(project);\r\n\tupdateLocalStorage(projects, \"projects\");\r\n\tlistProjects(projects);\r\n};\r\n\r\nconst generateRandomId = () => {\r\n\treturn Math.random().toString(36).substring(2);\r\n};\r\n\r\nconst markTaskCompleted = (taskId) => {\r\n\tconst task = tasks.find((task) => task.id === taskId);\r\n\tif (task) {\r\n\t\ttask.completed = !task.completed;\r\n\t\tupdateLocalStorage(tasks, \"tasks\");\r\n\t\tproject ? listTasks(filterProjectTasks(project.id)) : listTasks(tasks);\r\n\t}\r\n};\r\n\r\nprojectForm.addEventListener(\"submit\", (event) => {\r\n\t// Generating random projectId\r\n\tconst projectId = generateRandomId();\r\n\tevent.preventDefault();\r\n\tif (projectName.value === \"\") {\r\n\t\treturn;\r\n\t}\r\n\tcreateProject(projectId, projectName);\r\n\tresetProjectForm();\r\n});\r\n\r\ncancelProjectBtn.addEventListener(\"click\", () => {\r\n\tresetProjectForm();\r\n});\r\n\r\n// Function to filter tasks by projectId\r\nconst filterProjectTasks = (projectId) => {\r\n\tconst filteredTasks = tasks.filter((task) => {\r\n\t\tconst taskProject = task.projectId;\r\n\t\treturn taskProject === projectId;\r\n\t});\r\n\treturn filteredTasks;\r\n};\r\n\r\nconst findTask = (taskId) => {\r\n\treturn tasks.find((task) => task.id === taskId);\r\n};\r\n\r\n// Function to edit a task\r\nconst editTask = (taskId) => {\r\n\tconst task = findTask(taskId);\r\n\tif (task) {\r\n\t\ttaskTitle.value = task.title;\r\n\t\ttaskPriority.value = task.priority;\r\n\t\ttaskDate.value = task.date;\r\n\t\ttaskModal.style.display = \"flex\";\r\n\t\ttaskEdit = true;\r\n\t\ttaskIdToEdit = task.id;\r\n\t}\r\n};\r\n\r\nconst deleteTask = (taskId) => {\r\n\ttasks.splice(taskId, 1);\r\n\tupdateLocalStorage(tasks, \"tasks\");\r\n\tproject ? listTasks(filterProjectTasks(project.id)) : listTasks(tasks);\r\n};\r\n\r\nconst listTasks = (tasks) => {\r\n\tconst tasksContainer = document.querySelector(\".tasks-container\");\r\n\tif (tasks.length > 0) {\r\n\t\ttasksContainer.innerHTML = \"\";\r\n\t\ttasks.forEach((task, index) => {\r\n\t\t\t// Create the main container div\r\n\t\t\tconst taskCard = document.createElement(\"div\");\r\n\t\t\ttaskCard.classList.add(\"task-card\");\r\n\t\t\t// Create the task title paragraph\r\n\t\t\tconst titleParagraph = document.createElement(\"p\");\r\n\t\t\ttitleParagraph.classList.add(\"task-title\");\r\n\t\t\ttitleParagraph.innerHTML = `${task.title} <span class=\"priority ${task.priority}\"></span>`;\r\n\t\t\ttaskCard.appendChild(titleParagraph);\r\n\t\t\tconst projectParagraph = document.createElement(\"p\");\r\n\t\t\tprojectParagraph.classList.add(\"task-project\");\r\n\t\t\tprojectParagraph.textContent = task.projectName;\r\n\t\t\ttaskCard.appendChild(projectParagraph);\r\n\t\t\t// Create the task date paragraph\r\n\t\t\tconst dateParagraph = document.createElement(\"p\");\r\n\t\t\tdateParagraph.classList.add(\"task-date\");\r\n\t\t\tdateParagraph.innerHTML = `Due: ${task.date || \"No Due Date\"}`;\r\n\t\t\ttaskCard.appendChild(dateParagraph);\r\n\t\t\t// Create the task controls div\r\n\t\t\tconst taskControls = document.createElement(\"div\");\r\n\t\t\ttaskControls.classList.add(\"task-controls\");\r\n\t\t\t// Create the complete task button\r\n\t\t\tconst completeTaskBtn = document.createElement(\"img\");\r\n\t\t\tcompleteTaskBtn.src = task.completed\r\n\t\t\t\t? \"images/completed-icon.svg\"\r\n\t\t\t\t: \"images/complete-icon.svg\";\r\n\t\t\tcompleteTaskBtn.alt = \"Complete icon\";\r\n\t\t\ttaskCard.classList.add(task.completed ? \"completed\" : null);\r\n\r\n\t\t\tcompleteTaskBtn.classList.add(\"complete-task-btn\");\r\n\t\t\ttaskControls.appendChild(completeTaskBtn);\r\n\t\t\t// Create the task options button\r\n\t\t\tconst taskOptionsBtn = document.createElement(\"img\");\r\n\t\t\ttaskOptionsBtn.src = \"images/dots-icon.svg\";\r\n\t\t\ttaskOptionsBtn.alt = \"Options icon\";\r\n\r\n\t\t\ttaskOptionsBtn.classList.add(\"task-options-btn\");\r\n\t\t\ttaskControls.appendChild(taskOptionsBtn);\r\n\t\t\ttaskCard.appendChild(taskControls);\r\n\t\t\t// Create the task options div\r\n\t\t\tconst taskOptions = document.createElement(\"div\");\r\n\t\t\ttaskOptions.classList.add(\"task-options\");\r\n\t\t\t// Create the \"Edit\" option paragraph\r\n\t\t\tconst editOption = document.createElement(\"p\");\r\n\t\t\teditOption.textContent = \"Edit\";\r\n\t\t\teditOption.addEventListener(\"click\", () => {\r\n\t\t\t\teditTask(task.id);\r\n\t\t\t});\r\n\t\t\ttaskOptions.appendChild(editOption);\r\n\t\t\t// Create the \"Delete\" option paragraph\r\n\t\t\tconst deleteOption = document.createElement(\"p\");\r\n\t\t\tdeleteOption.textContent = \"Delete\";\r\n\t\t\tdeleteOption.addEventListener(\"click\", () => {\r\n\t\t\t\tdeleteTask(task.id);\r\n\t\t\t});\r\n\t\t\ttaskOptions.appendChild(deleteOption);\r\n\t\t\ttaskCard.appendChild(taskOptions);\r\n\t\t\ttasksContainer.appendChild(taskCard);\r\n\t\t\t// Adding functionality to the options button\r\n\t\t\ttaskOptionsBtn.addEventListener(\"click\", () => {\r\n\t\t\t\ttaskOptions.classList.toggle(\"show\");\r\n\t\t\t});\r\n\t\t\t// Adding functionality to the complete task button\r\n\t\t\tcompleteTaskBtn.addEventListener(\"click\", () => {\r\n\t\t\t\tmarkTaskCompleted(task.id);\r\n\t\t\t});\r\n\t\t});\r\n\t} else {\r\n\t\ttasksContainer.innerHTML = `\r\n\t\t<div class=\"task-card text-center\">\r\n\t\t\t<p>No tasks to be displayed...</p>\r\n\t\t</div>`;\r\n\t}\r\n};\r\n\r\nconst findProject = (projectId) => {\r\n\treturn projects.find((project) => project.id === projectId);\r\n};\r\n\r\nconst selectProject = (projectId) => {\r\n\tproject = findProject(projectId);\r\n\tcontentTitle.textContent = project.name;\r\n\tlistTasks(filterProjectTasks(project.id));\r\n};\r\n\r\n// Function to delete the project\r\nconst deleteProject = function (projectId) {\r\n\t// If there's tasks delete it first\r\n\tconst tasksToDelete = filterProjectTasks(projectId);\r\n\ttasksToDelete.forEach((task) => {\r\n\t\tdeleteTask(task.id);\r\n\t});\r\n\t// Delete the project\r\n\tconst project = findProject(projectId);\r\n\tprojects.splice(projects.indexOf(project), 1);\r\n\tupdateLocalStorage(projects, \"projects\");\r\n\tlistProjects(projects);\r\n};\r\n\r\n// Task creation form\r\nconst taskForm = document.querySelector(\".task-form\");\r\n\r\nconst createTask = (\r\n\tprojectId,\r\n\tprojectName,\r\n\ttitle,\r\n\tpriority,\r\n\tdate,\r\n\tcompleted = false\r\n) => {\r\n\tprojectName === \"\" ? (projectName = \"No Project\") : project.name;\r\n\tdate === \"\" ? (date = \"No Due Date\") : date;\r\n\tconst task = new _task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n\t\tprojectId,\r\n\t\tprojectName,\r\n\t\ttitle,\r\n\t\tpriority,\r\n\t\tdate,\r\n\t\tcompleted\r\n\t);\r\n\ttasks.push(task);\r\n};\r\n\r\ntaskForm.onsubmit = (event) => {\r\n\tevent.preventDefault();\r\n\tif (taskTitle.value === \"\") {\r\n\t\treturn;\r\n\t}\r\n\tif (!taskEdit) {\r\n\t\tconst taskId = generateRandomId();\r\n\t\tcreateTask(\r\n\t\t\tproject.id,\r\n\t\t\tproject.name,\r\n\t\t\ttaskId,\r\n\t\t\ttaskTitle.value,\r\n\t\t\ttaskPriority.value,\r\n\t\t\ttaskDate.value\r\n\t\t);\r\n\t} else {\r\n\t\tconst task = findTask(taskIdToEdit);\r\n\t\ttask.title = taskTitle.value;\r\n\t\ttask.priority = taskPriority.value;\r\n\t\ttask.date = taskDate.value;\r\n\t}\r\n\tresetTaskModal();\r\n\tupdateLocalStorage(tasks, \"tasks\");\r\n\tproject ? listTasks(filterProjectTasks(project.id)) : listTasks(tasks);\r\n};\r\n\r\n// Menu controls\r\nconst menuHome = document.getElementById(\"menu-home\");\r\nconst menuToday = document.getElementById(\"menu-today\");\r\nconst menuWeek = document.getElementById(\"menu-week\");\r\n\r\nconst selectMenuHome = () => {\r\n\tproject = null;\r\n\tcontentTitle.textContent = \"Home\";\r\n\tlistTasks(tasks);\r\n};\r\n\r\nmenuHome.addEventListener(\"click\", selectMenuHome);\r\nselectMenuHome();\r\n\n\n//# sourceURL=webpack://to-do-app/./src/main.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\r\n\tconstructor(id, name) {\r\n\t\tthis.id = id;\r\n\t\tthis.name = name;\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\r\n\n\n//# sourceURL=webpack://to-do-app/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\r\n\tconstructor(projectId, projectName, id, title, priority, date, completed) {\r\n\t\tthis.projectId = projectId;\r\n\t\tthis.projectName = projectName;\r\n\t\tthis.id = id;\r\n\t\tthis.title = title;\r\n\t\tthis.priority = priority;\r\n\t\tthis.date = date;\r\n\t\tthis.completed = completed;\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\r\n\n\n//# sourceURL=webpack://to-do-app/./src/task.js?");

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