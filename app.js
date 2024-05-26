// Sidebar popup(in smaller screens)
const sidebar = document.querySelector("aside");
const hambuergerIcon = document.querySelector(".hamburger-icon");
const overlay = document.querySelector(".overlay");

hambuergerIcon.addEventListener("click", () => {
	sidebar.classList.add("active");
	overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
	sidebar.classList.remove("active");
	overlay.classList.remove("active");
});
