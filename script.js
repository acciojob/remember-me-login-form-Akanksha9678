//your JS code here. If required.
let form=document.querySelector("form");
let Submit=document.querySelector("#submit");
let existingBtn = document.querySelector("#existing");

window.addEventListener("DOMContentLoaded", () => {
			if (localStorage.getItem("nameData") && localStorage.getItem("passData")) {
				existingBtn.style.display = "block";
			}
		});


form.addEventListener("submit",(e)=>{
	e.preventDefault();
	let checkBox=document.querySelector("#checkbox").checked;
	let nameBox=document.querySelector("#username").value;
    let passBox=document.querySelector("#password").value;   

	if(checkBox){
		window.localStorage.setItem("nameData",nameBox);
		window.localStorage.setItem("passData",passBox);
	}
	else{
		localStorage.removeItem("nameData");
		localStorage.removeItem("passData");
	}
	alert(`Logged in as ${nameBox}`);

	if (checkBox) {
				existingBtn.style.display = "block";
			}
});
existingBtn.addEventListener("click", () => {
			let savedName = localStorage.getItem("nameData");
			if (savedName) {
				alert(`Logged in as ${savedName}`);
			}
});
