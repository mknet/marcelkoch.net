const form = document.querySelector("form");
const submitter = document.querySelector("button[value=Abschicken]");
const formData = new FormData(form, submitter);

const req = new XMLHttpRequest();
req.open("POST", "/contact-request");
req.send(formData);