const addTaskBtn = document.querySelector(".add-task-btn");
const taskModal = document.querySelector(".task-modal");
const closeModalBtn = document.querySelector(".close-modal");
const cancelBtn = document.querySelector(".cancel-btn");

const taskTitle = document.getElementById("task-title");
const taskPriority = document.getElementById("task-priority");
const taskDate = document.getElementById("task-date");

const addProjectBtn = document.querySelector(".add-project-btn");
const cancelProjectBtn = document.querySelector(".cancel-project-btn");
const projectForm = document.querySelector(".new-project-container");

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
	projectForm.style.display = "flex";
});

cancelProjectBtn.addEventListener("click", () => {
	projectForm.style.display = "none";
});

const resetModal = () => {
	// Reset modal fields
	taskTitle.value = "";
	taskPriority.value = "";
	taskDate.value = "";
	// Close modal
	taskModal.style.display = "none";
};
