const button = document.getElementById("checkBtn");
const gradeBtn = document.getElementById("gradeResult");

button.addEventListener("click", () => {
  const score = Number(document.getElementById("scoreInput").value);

  if (isNaN(score) || score < 0 || score > 100) {
    gradeBtn.style.display = "block";
    gradeBtn.style.background = "#fee2e2";
    gradeBtn.innerHTML = "<h2> Please enter a valid score between 100.</h2>";
    return;
  }

  let grade, message, bgColor, emoji;

  if (score >= 90) {
    grade = "A";
    message = "what a outstanding result";
    bgColor = "#dcfce7";
    emoji = "";
  } else if (score >= 75) {
    grade = "B";
    message = "Great work! keep it up !";
    bgColor = "#d1fae5";
    emoji = "";
  } else if (score >= 60) {
    grade = "C";
    message = "DEcent effort. A bit more practice will help.";
    bgColor = "#fef9c3";
    emoji = "";
  } else if (score >= 50) {
    grade = "D";
    message = "You passed, but there is room to grow";
    bgColor = "#fed7aa";
    emoji = "";
  } else {
    grade = "F";
    message = "Do not give up.Let us try again!";
    bgColor = "#fee2e2";
    emoji = "";
  }

  // Display the result card
  gradeBtn.style.display = "block";
  gradeBtn.style.background = `${bgColor}`;
  gradeBtn.innerHTML = `<h2>${emoji} Grade : ${grade}</h2>';
    <p>Score: <strong>${score}/ 100   </strong> </p>
    <p>${message} </p>`;
});

const menu = document.getElementById("menu-icon");
const navBar = document.getElementById("nav-btn");
const links = document.querySelectorAll("a");

menu.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
for (let a in links) {
  links.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
};


