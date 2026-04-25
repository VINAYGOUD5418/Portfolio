// future animations
console.log("Portfolio Loaded");
function showProject(project) {
  const dashboard = document.getElementById("dashboard");

  if (project === "bus") {
    document.getElementById("projectTitle").innerText = "Real-Time College Bus Tracking System";
    document.getElementById("projectImage").src = "images/bus.png";
    document.getElementById("projectDesc").innerText =
      "Designed and developed a web application for Real-Time bus tracking using html, css, javascript, firebase. ESP8266 and a GPS module to continuously capture and transmit bus location data. Integrated OpenStreetMap for map visualization by Students and admin.";
    document.getElementById("githubLink").href =
      "https://github.com/VINAYGOUD5418/bus-tracking-system";
  }

  if (project === "portfolio") {
    document.getElementById("projectTitle").innerText = "Portfolio Website";
    document.getElementById("projectImage").src = "images/portfolio.jpg";
    document.getElementById("projectDesc").innerText =
      "A responsive personal portfolio built using HTML, CSS, JS.";
    document.getElementById("githubLink").href =
      "https://github.com/yourusername/portfolio";
  }

  dashboard.style.display = "block";
}

function closeDashboard() {
  document.getElementById("dashboard").style.display = "none";
}