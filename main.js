btn.onclick = () => {
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4) {
			if (xhr.status >= 200 && xhr.status <= 300) {

				console.log("success");
				const obj = JSON.parse(xhr.responseText);
				console.log(obj.note.to);

			} else if (xhr.status >= 4000) {

				console.log("failed");

			}
		}
	};
	xhr.open("GET", "/xxx");
	xhr.send();
};

