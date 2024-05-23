const body = document.body;
const containerButton = document.createElement("div");
body.style.display = "flex";
body.style.alignItems = "center";
body.style.flexDirection = "column";
body.style.gap = "64px";
body.style.justifyContent = "center";
body.style.backgroundColor = "lightblue";
body.appendChild(containerButton);

const containerDiv = document.querySelector(".container");
containerDiv.style.width = "600px";
containerDiv.style.height = "600px";
containerDiv.style.display = "flex";
containerDiv.style.flexWrap = "wrap";
containerDiv.style.alignItems = "center";
containerDiv.style.border = "1px solid black";

function createGridLayout(size) {
	containerDiv.replaceChildren();
	for (let i = 0; i < size * size; i++) {
		let obj = document.createElement("div");
		obj.classList.add("grid");
		obj.style.width = 600 / size - 2 + "px";
		obj.style.height = 600 / size - 2 + "px";
		obj.style.background = "white";
		obj.style.border = "1px solid black";
		obj.addEventListener("mouseover", () => {
			obj.style.backgroundColor = "red";
		});
		containerDiv.appendChild(obj);
	}
}

createGridLayout(16);

const resetButton = document.createElement("button");
resetButton.textContent = "Reset Grid";
resetButton.addEventListener("click", function () {
	resetGrid();
});

function resetGrid() {
	const gridDivs = document.querySelectorAll(".grid");
	gridDivs.forEach((element) => {
		element.style.backgroundColor = "white";
	});
}

const gridSizeButton = document.createElement("button");
gridSizeButton.textContent = "Change Grid Size";
gridSizeButton.addEventListener("click", function () {
	const gridSize = Number(window.prompt("Enter the grid size (0-100)", "16"));
	if (gridSize > 100) {
		alert("Error, limit exceeded..");
	} else {
		createGridLayout(gridSize);
	}
});

containerButton.appendChild(resetButton);
containerButton.appendChild(gridSizeButton);
