import Project from "./project.js";
import Task from "./task.js";

const addTaskBtn = document.querySelector(".add-task-btn");
const taskModal = document.querySelector(".task-modal");
const closeModalBtn = document.querySelector(".close-modal");
const cancelBtn = document.querySelector(".cancel-btn");

const taskTitle = document.getElementById("task-title");
const taskPriority = document.getElementById("task-priority");
const taskDate = document.getElementById("task-date");

const addProjectBtn = document.querySelector(".add-project-btn");
const cancelProjectBtn = document.querySelector(".cancel-project-btn");
const projectFormContainer = document.querySelector(".new-project-container");

let contentTitle = document.querySelector(".content-title");

let projects;
let tasks;
let project;
let editTask = false;
let editTaskIndex;

const getProjects = () => {
	localStorage.getItem("projects")
		? (projects = JSON.parse(localStorage.getItem("projects")))
		: (projects = []);
};
getProjects();

const getTasks = () => {
	localStorage.getItem("tasks")
		? (tasks = JSON.parse(localStorage.getItem("tasks")))
		: (tasks = []);
};
getTasks();

const updateLocalStorage = (item, itemName) => {
	localStorage.setItem(itemName, JSON.stringify(item));
};

const listProjects = (projects) => {
	const projectList = document.querySelector(".projects");
	projectList.innerHTML = "";
	projects.forEach((project, index) => {
		projectList.innerHTML += `<li data-id="${index}" class="project-container">
		${project.name}
		<img src="images/close-icon.svg" alt="Options icon" data-project="${index})">
		</li>`;
	});
};
listProjects(projects);

addTaskBtn.addEventListener("click", () => {
	taskModal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
	taskModal.style.display = "none";
	resetTaskModal();
});

cancelBtn.addEventListener("click", () => {
	resetTaskModal();
});

// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
	if (event.target == taskModal) {
		resetTaskModal();
	}
});

// Show and hide new project form
addProjectBtn.addEventListener("click", () => {
	projectFormContainer.style.display = "flex";
});

const resetTaskModal = () => {
	// Reset modal fields
	taskTitle.value = "";
	taskPriority.value = "normal";
	taskDate.value = "";
	// Close modal
	taskModal.style.display = "none";
	editTask = false;
};

// New project creation form
const projectName = document.getElementById("project-name");
const projectForm = document.querySelector(".project-form");

const resetProjectForm = () => {
	projectFormContainer.style.display = "none";
	projectName.value = "";
};

const createProject = (projectId, projectName) => {
	const project = new Project(projectId, projectName.value);
	projects.push(project);
	updateLocalStorage(projects, "projects");
	listProjects(projects);
};

projectForm.addEventListener("submit", (event) => {
	// Generating random projectId
	const projectId = Math.random().toString(36).substring(2);
	event.preventDefault();
	if (projectName.value === "") {
		return;
	}
	createProject(projectId, projectName);
	resetProjectForm();
});

cancelProjectBtn.addEventListener("click", () => {
	resetProjectForm();
});

const projectList = document.querySelector(".projects");
projectList.addEventListener("click", (e) => {
	if (e.target.dataset.project) {
		deleteProject(e.target.dataset.project);
	}
	if (e.target.dataset.id) {
		selectProject(e.target.dataset.id);
	}
});

// Function to filter tasks by projectId
const filterTasks = (projectId) => {
	const filteredTasks = tasks.filter((task) => {
		const taskProject = JSON.parse(task).projectId;
		return taskProject === projectId;
	});
	return filteredTasks;
};

const listTasks = (tasks) => {
	const tasksContainer = document.querySelector(".tasks-container");
	if (tasks.length > 0) {
		tasksContainer.innerHTML = "";
		tasks.forEach((t, index) => {
			const task = JSON.parse(t);
			// Create the main container div
			const taskCard = document.createElement("div");
			taskCard.classList.add("task-card");
			// Create the task title paragraph
			const titleParagraph = document.createElement("p");
			titleParagraph.classList.add("task-title");
			titleParagraph.innerHTML = `${task.title} <span class="priority ${task.priority}"></span>`;
			taskCard.appendChild(titleParagraph);
			const projectParagraph = document.createElement("p");
			projectParagraph.classList.add("task-project");
			projectParagraph.textContent = task.projectName;
			taskCard.appendChild(projectParagraph);
			// Create the task date paragraph
			const dateParagraph = document.createElement("p");
			dateParagraph.classList.add("task-date");
			dateParagraph.innerHTML = `Due: ${task.date || "No Due Date"}`;
			taskCard.appendChild(dateParagraph);
			// Create the task controls div
			const taskControls = document.createElement("div");
			taskControls.classList.add("task-controls");
			// Create the complete task button
			const completeTaskBtn = document.createElement("img");
			completeTaskBtn.src = task.completed
				? "images/completed-icon.svg"
				: "images/complete-icon.svg";
			completeTaskBtn.alt = "Complete icon";
			taskCard.classList.add(task.completed ? "completed" : null);

			completeTaskBtn.classList.add("complete-task-btn");
			taskControls.appendChild(completeTaskBtn);
			// Create the task options button
			const taskOptionsBtn = document.createElement("img");
			taskOptionsBtn.src = "images/dots-icon.svg";
			taskOptionsBtn.alt = "Options icon";

			taskOptionsBtn.classList.add("task-options-btn");
			taskControls.appendChild(taskOptionsBtn);
			taskCard.appendChild(taskControls);
			// Create the task options div
			const taskOptions = document.createElement("div");
			taskOptions.classList.add("task-options");
			// Create the "Edit" option paragraph
			const editOption = document.createElement("p");
			editOption.dataset.option = "edit";
			editOption.textContent = "Edit";
			taskOptions.appendChild(editOption);
			// Create the "Delete" option paragraph
			const deleteOption = document.createElement("p");
			deleteOption.dataset.option = "delete";
			deleteOption.textContent = "Delete";
			taskOptions.appendChild(deleteOption);
			taskCard.appendChild(taskOptions);
			tasksContainer.appendChild(taskCard);
			// Adding functionality to the options button
			taskOptionsBtn.addEventListener("click", () => {
				taskOptions.classList.toggle("show");
			});
			// Adding functionality to the complete task button
			completeTaskBtn.addEventListener("click", () => {
				task.completed = !task.completed;
				tasks[index] = JSON.stringify(task);
				updateLocalStorage(projects, "projects");
				listProjects(projects);
				listTasks(project.tasks);
			});
			// Adding functionality to options menu
			taskOptions.addEventListener("click", (e) => {
				if (e.target.dataset.option === "edit") {
					taskModal.style.display = "flex";
					taskTitle.value = task.title;
					taskPriority.value = task.priority;
					taskDate.value = task.date;
					editTask = true;
					editTaskIndex = index;
				}
				if (e.target.dataset.option === "delete") {
					project.tasks.splice(index, 1);
					updateLocalStorage(projects, "projects");
					listProjects(projects);
					listTasks(project);
				}
			});
		});
	} else {
		tasksContainer.innerHTML = `
		<div class="task-card text-center">
			<p>No tasks to be displayed...</p>
		</div>`;
	}
};

const selectProject = (index) => {
	project = projects[index];
	contentTitle.textContent = project.name;
	listTasks(filterTasks(project.id));
};

// Function to delete the project
const deleteProject = function (index) {
	projects.splice(index, 1);
	updateLocalStorage(projects, "projects");
	listProjects(projects);
};

// Task creation form
const taskForm = document.querySelector(".task-form");

const createTask = (
	projectId,
	projectName,
	title,
	priority,
	date,
	completed = false
) => {
	projectName === "" ? (projectName = "No Project") : project.name;
	date === "" ? (date = "No Due Date") : date;
	const task = new Task(
		projectId,
		projectName,
		title,
		priority,
		date,
		completed
	);
	tasks.push(JSON.stringify(task));
};

taskForm.onsubmit = (event) => {
	event.preventDefault();
	if (taskTitle.value === "") {
		return;
	}
	if (!editTask) {
		createTask(
			project.id,
			project.name,
			taskTitle.value,
			taskPriority.value,
			taskDate.value
		);
	} else {
		const index = editTaskIndex;
		const task = JSON.parse(project.tasks[index]);
		task.title = taskTitle.value;
		task.priority = taskPriority.value;
		task.date = taskDate.value;
		project.tasks[index] = JSON.stringify(task);
	}
	resetTaskModal();
	updateLocalStorage(tasks, "tasks");
	listTasks(filterTasks(project.id));
};

// Menu controls
const menuHome = document.getElementById("menu-home");
const menuToday = document.getElementById("menu-today");
const menuWeek = document.getElementById("menu-week");

menuHome.addEventListener("click", () => {
	contentTitle.textContent = "Home";
	// List all tasks
	listTasks(tasks);
});
