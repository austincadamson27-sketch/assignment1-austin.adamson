document.addEventListener("DOMContentLoaded", function () {
  const themeButton = document.getElementById("theme-toggle");

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "Switch to Light Mode";
  }

  themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      themeButton.textContent = "Switch to Light Mode";
      localStorage.setItem("theme", "dark");
    } else {
      themeButton.textContent = "Switch to Dark Mode";
      localStorage.setItem("theme", "light");
    }
  });
});
