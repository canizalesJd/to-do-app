import Project from "./project.js";
import Task from "./task.js";
import { format, startOfWeek, endOfWeek } from "date-fns";

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
let selectedProject;
let taskEdit = false;
let taskIdToEdit;

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
	projects.forEach((project) => {
		const projectContainer = document.createElement("li");
		projectContainer.classList.add("project-container");
		projectContainer.dataset.project = project.id;
		projectContainer.textContent = project.name;

		const closeIcon = document.createElement("img");
		closeIcon.src = "images/close-icon.svg";
		closeIcon.addEventListener("click", () => {
			deleteProject(project.id);
		});

		projectContainer.appendChild(closeIcon);
		projectList.appendChild(projectContainer);
		projectList.addEventListener("click", (event) => {
			if (event.target.dataset.project) {
				const projectId = event.target.dataset.project;
				selectProject(projectId);
			}
		});
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
	taskEdit = false;
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

const generateRandomId = () => {
	return Math.random().toString(36).substring(2);
};

const markTaskCompleted = (taskId) => {
	const task = tasks.find((task) => task.id === taskId);
	if (task) {
		task.completed = !task.completed;
		updateLocalStorage(tasks, "tasks");
		const projectIdFilter = (task) => task.projectId === selectedProject.id;

		selectedProject
			? listTasks(listTasks(filterTasks(projectIdFilter)))
			: listTasks(tasks);
	}
};

projectForm.addEventListener("submit", (event) => {
	// Generating random projectId
	const projectId = generateRandomId();
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

// Function to filter tasks
const filterTasks = (filterCondition) => {
	const filteredTasks = tasks.filter(filterCondition);
	return filteredTasks;
};

const findTask = (taskId) => {
	return tasks.find((task) => task.id === taskId);
};

// Function to edit a task
const editTask = (taskId) => {
	const task = findTask(taskId);
	if (task) {
		taskTitle.value = task.title;
		taskPriority.value = task.priority;
		taskDate.value = task.date;
		taskModal.style.display = "flex";
		taskEdit = true;
		taskIdToEdit = task.id;
	}
};

const deleteTask = (taskId) => {
	tasks.splice(taskId, 1);
	updateLocalStorage(tasks, "tasks");
	const projectIdFilter = (task) => task.projectId === selectedProject.id;
	selectedProject ? listTasks(filterTasks(projectIdFilter)) : listTasks(tasks);
};

const listTasks = (tasks) => {
	const tasksContainer = document.querySelector(".tasks-container");
	if (tasks.length > 0) {
		tasksContainer.innerHTML = "";
		tasks.forEach((task) => {
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
			editOption.textContent = "Edit";
			editOption.addEventListener("click", () => {
				editTask(task.id);
			});
			taskOptions.appendChild(editOption);
			// Create the "Delete" option paragraph
			const deleteOption = document.createElement("p");
			deleteOption.textContent = "Delete";
			deleteOption.addEventListener("click", () => {
				deleteTask(task.id);
			});
			taskOptions.appendChild(deleteOption);
			taskCard.appendChild(taskOptions);
			tasksContainer.appendChild(taskCard);
			// Adding functionality to the options button
			taskOptionsBtn.addEventListener("click", () => {
				taskOptions.classList.toggle("show");
			});
			// Adding functionality to the complete task button
			completeTaskBtn.addEventListener("click", () => {
				markTaskCompleted(task.id);
			});
		});
	} else {
		tasksContainer.innerHTML = `
		<div class="task-card text-center">
			<p>No tasks to be displayed...</p>
		</div>`;
	}
};

const findProject = (projectId) => {
	return projects.find((project) => project.id === projectId);
};

const selectProject = (projectId) => {
	addTaskBtn.classList.add("show");
	selectedProject = findProject(projectId);
	contentTitle.textContent = selectedProject.name;
	const projectIdFilter = (task) => task.projectId === projectId;
	listTasks(filterTasks(projectIdFilter));
};

// Function to delete the project
const deleteProject = function (projectId) {
	// If there's tasks delete it first
	const projectIdFilter = (task) => task.projectId === projectId;
	const tasksToDelete = filterTasks(projectIdFilter);
	tasksToDelete.forEach((task) => {
		deleteTask(task.id);
	});
	// If project is selected, show home and delete it
	if (selectedProject.id === projectId) {
		selectMenuHome();
	}
	const project = findProject(projectId);
	projects.splice(projects.indexOf(project), 1);
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
	projectName === "" ? (projectName = "No Project") : selectedProject.name;
	date === "" ? (date = "No Due Date") : date;
	const task = new Task(
		projectId,
		projectName,
		title,
		priority,
		date,
		completed
	);
	tasks.push(task);
};

taskForm.onsubmit = (event) => {
	event.preventDefault();
	if (taskTitle.value === "") {
		return;
	}
	if (!taskEdit) {
		const taskId = generateRandomId();
		createTask(
			selectedProject.id,
			selectedProject.name,
			taskId,
			taskTitle.value,
			taskPriority.value,
			taskDate.value
		);
	} else {
		const task = findTask(taskIdToEdit);
		task.title = taskTitle.value;
		task.priority = taskPriority.value;
		task.date = taskDate.value;
	}
	resetTaskModal();
	updateLocalStorage(tasks, "tasks");
	const projectIdFilter = (task) => task.projectId === selectedProject.id;
	selectedProject ? listTasks(filterTasks(projectIdFilter)) : listTasks(tasks);
};

// Getting current date
const date = new Date();
// Getting current week in miliseconds
const weekStart = startOfWeek(date);
const weekEnd = endOfWeek(date);

const currentWeekDays = [];
while (weekStart <= weekEnd) {
	currentWeekDays.push(format(weekStart, "yyyy-MM-dd"));
	weekStart.setDate(weekStart.getDate() + 1);
}

// Menu controls
const menuHome = document.getElementById("menu-home");
const menuToday = document.getElementById("menu-today");
const menuWeek = document.getElementById("menu-week");

const selectMenuHome = () => {
	addTaskBtn.classList.remove("show");
	selectedProject = null;
	contentTitle.textContent = "Home";
	listTasks(tasks);
};

const selectMenuToday = () => {
	addTaskBtn.classList.remove("show");
	const today = format(date, "yyyy-MM-dd");
	selectedProject = null;
	contentTitle.textContent = "Today";
	const todayTasksFilter = (task) => task.date === today;
	listTasks(filterTasks(todayTasksFilter));
};

const selectMenuWeek = () => {
	addTaskBtn.classList.remove("show");
	selectedProject = null;
	contentTitle.textContent = "This Week";
	const weekTasksFilter = (task) => currentWeekDays.includes(task.date);
	listTasks(filterTasks(weekTasksFilter));
};

menuHome.addEventListener("click", selectMenuHome);
menuToday.addEventListener("click", selectMenuToday);
menuWeek.addEventListener("click", selectMenuWeek);
selectMenuHome();
