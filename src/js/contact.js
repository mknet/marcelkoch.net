const sendInfoRequest = (submitter) => {

	const form = document.querySelector("form");
	const formData = new FormData(form, submitter);
	
	const req = new XMLHttpRequest();
	
	req.addEventListener("progress", updateProgress);
	req.addEventListener("load", transferComplete);
	req.addEventListener("error", transferFailed);
	req.addEventListener("abort", transferFailed);

	function updateProgress(evt) {
		submitter.classList.add("progress");
		submitter.value = "Wird verschickt ..."
	}
	
	
	function transferComplete(evt) {

		if (req.status >= 200 && req.status < 300) {
			// What do when the request is successful
			console.log('success!', req);

			submitter.classList.add("success");
			submitter.classList.remove("progress");
			submitter.value = "Erfolgreich verschickt."
            submitter.disabled = true
		} else {
			// What do when the request fails
			console.log('The request failed!');

			submitter.classList.add("error");
			submitter.classList.remove("progress");
			submitter.value = "Fehler! Bitte noch mal!"

			setTimeout(() => {
				submitter.classList.remove("error");
				submitter.value = "Noch mal abschicken"
			}, 3000)
		}

		// Code that should run regardless of the request status
		console.log('Onload done');
	}
	
	
	function transferFailed(evt) {
		submitter.classList.add("error");
		submitter.value = "Fehler! Bitte noch mal."
	}

req.open("POST", "/contact-request");
req.send(formData);

}
export default sendInfoRequest
