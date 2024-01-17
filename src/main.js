import Project from "./project.js";

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
	console.log(projects);
	const projectList = document.querySelector(".projects");
	projectList.innerHTML = "";
	projects.forEach((project) => {
		console.log(project);
		projectList.innerHTML += `<li>${project.name}</li>`;
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
});

cancelProjectBtn.addEventListener("click", () => {
	resetProjectForm();
});
