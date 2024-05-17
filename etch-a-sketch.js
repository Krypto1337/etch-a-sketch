const containerDiv = document.querySelector(".container");

function createGridLayout(size) {
	for (let i = 0; i < size; i++) {
		let obj = document.createElement("div");
		obj.classList.add("grid");
		containerDiv.appendChild(obj);
	}
}

createGridLayout(16);
