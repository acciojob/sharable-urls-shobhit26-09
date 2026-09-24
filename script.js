document.getElementById("button").addEventListener("click", function () {
	var name = document.getElementById("name").value;
	var year = document.getElementById("year").value;
	var base = "https://localhost:8080/";
	var params = [];
	if (name) {
		params.push("name=" + encodeURIComponent(name));
	}
	if (year) {
		params.push("year=" + encodeURIComponent(year));
	}
	var finalUrl = base + (params.length ? "?" + params.join("&") : "");
	document.getElementById("url").innerText = finalUrl;
});
