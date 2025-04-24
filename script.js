const sectionButtons = document.querySelectorAll(".sidebar button");
const sections = document.querySelectorAll(".section");

sectionButtons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-section");

    sections.forEach(section => {
      section.style.display = (section.id === target) ? "block" : "none";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  sections.forEach(section => {
    section.style.display = (section.id === "home") ? "block" : "none";
  });
});

const images = document.querySelectorAll(".Projects img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");
const logo = document.querySelector(".sidebar-logo");

logo.addEventListener("click",() => {
  sidebar.classList.toggle("expanded");
});

sectionButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (sidebar.classList.contains("expanded")) {
      sidebar.classList.remove("expanded");
    }
  })
})

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});