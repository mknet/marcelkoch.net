const sendInfoRequest = (sender) => {

// Set up our HTTP request
var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function () {

	// Process our return data
	if (xhr.status >= 200 && xhr.status < 300) {
		// What do when the request is successful
		console.log('success!', xhr);
	} else {
		// What do when the request fails
		console.log('The request failed!');
	}

	// Code that should run regardless of the request status
	console.log('Onload done');
};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('POST', 'https://svc.marcelkoch.net/mailer/');
xhr.setRequestHeader("Content-type", "application/json");

const jsonToSend = {
	"sender_address": sender,
	"message": "Ich hätte gerne Informationen zu Kommunikation"
}
xhr.send(JSON.stringify(jsonToSend));

}
export default sendInfoRequest
