const addTaskBtn = document.querySelector(".add-task-btn");
const taskModal = document.querySelector(".task-modal");
const closeModalBtn = document.querySelector(".close-modal");
const cancelBtn = document.querySelector(".cancel-btn");

const taskTitle = document.getElementById("task-title");
const taskPriority = document.getElementById("task-priority");
const taskDate = document.getElementById("task-date");

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

const resetModal = () => {
	// Reset modal fields
	taskTitle.value = "";
	taskPriority.value = "";
	taskDate.value = "";
	// Close modal
	taskModal.style.display = "none";
};
