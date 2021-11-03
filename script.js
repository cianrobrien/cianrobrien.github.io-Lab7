function message(){
	var userName=document.getElementById("text");
	var userEmail=document.getElementById("email");
	alert(var userName +" , thank you for your details. We will be in touch via" +userEmail  +" shortly.");
	document.getElementById("form").style.display = "none";
	event.preventDefault();
}