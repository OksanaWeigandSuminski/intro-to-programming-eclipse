var today = new Date();
// console.log(today.getFullYear());
var thisYear = today.getFullYear();
var footer = document.querySelector("footer");
var copyright = document.createElement("p");
copyright.innerHTML = "&copy; " + thisYear + " Oksana Weigand-Suminski";
footer.appendChild(copyright);

var skills = [
	"Information Graphics",
	"Adobe Creative Cloud",
	"Web Design",
	"Programming",
];
var skillsSection = document.getElementById("skills");
var skillsList = skillsSection.querySelector("ul");
for (var i = 0; i < skills.length; i++) {
	var skill = document.createElement("li");
	skill.innerHTML = skills[i];
	skillsList.appendChild(skill);
}
// var tools = [
// 	"HTML",
// 	"CSS",
// 	"JS",
// 	"SQL",
// 	"Ruby on Rails",
// 	"Git",
// 	"GitHub",
// 	"Adobe Creative Cloud",
// 	"Cinema 4D"
// ];
var toolsSection = document.getElementById("tools");
var toolsList = toolsSection.querySelector("ul");
for (var i = 0; i < tools.length; i++) {
	var tool = document.createElement("li");
	tool.innerHTML = tools[i];
	toolsList.appendChild(tool);
}
var messageForm = document.querySelector("form");
messageForm.addEventListener("submit", (event) => {
	var name = event.target.name.value;
	console.log(name);
	var email = event.target.email.value;
	console.log(email);
	var message = event.target.message.value;
	console.log(message);
	event.preventDefault();

	var messageSection = document.getElementById("messages");
	var messageList = messageSection.querySelector("ul");
	var newMessage = document.createElement("li");
	newMessage.innerHTML = `<a href="mailto:${event.target.email.value}">${event.target.name.value}</a> <span> wrote: ${event.target.message.value} </span>`;
	messageList.appendChild(newMessage);

	var removeButton = document.createElement("button");
	removeButton.innerHTML = "Remove";
	removeButton.className = "remove";
	removeButton.type = "button";
	newMessage.appendChild(removeButton);

	messageList.addEventListener("click", (event) => {
		if (event.target.type == "button") {
			let li = event.target.parentNode;
			let ul = li.parentNode;
			ul.removeChild(li);
		}
	});

	document.querySelector("form").reset();
});

// AJAX
// var githubRequest = new XMLHttpRequest();
// githubRequest.addEventListener("load", function(event) {
// 		var repositories = JSON.parse(githubRequest.response);
// 		console.log(repositories);
// 		var projectSection = document.getElementById("projects");
// 		var projectList = projectSection.querySelector("ul");
// 		for (var i = 0; i<repositories.length; i++){
// 			var project = document.createElement("li");
// 			project.innerHTML = repositories[i].name
// 			projectList.appendChild(project);
// 		}
// });
// githubRequest.open('GET','https://api.github.com/users/OksanaWeigandSuminski/repos');
// githubRequest.send();

//Fetch API
function fetchAPI() {
	fetch("https://api.github.com/users/OksanaWeigandSuminski/repos")
		.then((response) => response.json())
		.then((data) => githubRequest(data));
}
function githubRequest(repositories) {
	console.log(repositories);
	var projectSection = document.getElementById("projects");
	var projectList = projectSection.querySelector("ul");
	for (var i = 0; i < repositories.length; i++) {
		var project = document.createElement("li");
		project.innerHTML = repositories[i].name;
		projectList.appendChild(project);
	}
}
fetchAPI();

// Smooth scrolling for browsers that don't support CSS smooth scrolling
if (
	window.getComputedStyle(document.documentElement).scrollBehavior !== "smooth"
) {
	document.querySelectorAll('a[href^="#"]').forEach((internalLink) => {
		const targetElement = document.querySelector(
			internalLink.getAttribute("href")
		);
		if (targetElement) {
			internalLink.addEventListener("click", (e) => {
				targetElement.scrollIntoView({
					behavior: "smooth",
				});
				e.preventDefault();
			});
		}
	});
}
