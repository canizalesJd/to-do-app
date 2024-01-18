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

let projects;
let project;

const getProjects = () => {
	localStorage.getItem("projects")
		? (projects = JSON.parse(localStorage.getItem("projects")))
		: (projects = []);
};

getProjects();

const updateProjects = (projects) => {
	localStorage.setItem("projects", JSON.stringify(projects));
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
	resetModal();
});

cancelBtn.addEventListener("click", () => {
	resetModal();
});

// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
	if (event.target == taskModal) {
		resetModal();
	}
});

// Show and hide new project form
addProjectBtn.addEventListener("click", () => {
	projectFormContainer.style.display = "flex";
});

const resetModal = () => {
	// Reset modal fields
	taskTitle.value = "";
	taskPriority.value = "";
	taskDate.value = "";
	// Close modal
	taskModal.style.display = "none";
};

// New project creation form
const projectName = document.getElementById("project-name");
const projectForm = document.querySelector(".project-form");

const resetProjectForm = () => {
	projectFormContainer.style.display = "none";
	projectName.value = "";
};

const createProject = (projectName) => {
	const project = new Project(projectName.value);
	projects.push(project);
	updateProjects(projects);
	listProjects(projects);
};

projectForm.addEventListener("submit", (event) => {
	event.preventDefault();
	if (projectName.value === "") {
		return;
	}
	createProject(projectName);
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

const listTasks = (project) => {
	const tasksContainer = document.querySelector(".tasks-container");
	if (project.tasks.length > 0) {
		tasksContainer.innerHTML = "";
		project.tasks.forEach((t) => {
			const task = JSON.parse(t);
			tasksContainer.innerHTML += `
			<div class="task-card">
				<p class="task-title">${task.title} <span class="priority ${task.priority}"></p>
				<p class="task-project">${project.name}</p>
				<p class="task-date">Due: ${task.date || "No Due Date"}</p>
				<div class="task-controls">
					<img src="images/complete-icon.svg" alt="Complete icon" data-task="${
						task.title
					}" class="complete-task-btn">
					<img src="images/dots-icon.svg" alt="Options icon" data-task="${
						task.title
					}" class="task-options-btn">
				</div>
				<div class="task-options">
					<p data-option="edit">Edit</p>
					<p data-option="delete">Delete</p>
				</div>
			</div>`;
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
	const contentTitle = document.querySelector(".content-title");
	contentTitle.textContent = project.name;
	listTasks(project);
};

// Function to delete the project
const deleteProject = function (index) {
	projects.splice(index, 1);
	updateProjects(projects);
	listProjects(projects);
};

// Task creation form
const taskForm = document.querySelector(".task-form");

const createTask = (project, title, priority, date, completed = false) => {
	date === "" ? (date = "No Due Date") : date;
	const task = new Task(title, priority, date, completed);
	project.tasks.push(JSON.stringify(task));
};

taskForm.onsubmit = (event) => {
	event.preventDefault();
	if (taskTitle.value === "") {
		return;
	}
	createTask(project, taskTitle.value, taskPriority.value, taskDate.value);
	updateProjects(projects);
	listProjects(projects);
	resetModal();
	listTasks(project);
};
