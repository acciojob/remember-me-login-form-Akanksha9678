//your JS code here. If required.
let form=document.querySelector("form");
let nameBox=document.querySelector("#username").value;
let passBox=document.querySelector("#password").value;
let checkBox=document.querySelector("#checkbox");
let Submit=document.querySelector("#submit");



form.addEventListener("submit",()=>{
	let btn=document.querySelector("#existing");
	if(checkBox){
		localStorage.setItem("nameData",JSON.stringify("nameBox"));
		localStorage.setItem("passData",JSON.stringify("passBox"));
		btn.style.display="block";
		btn.addEventListener("click",()=>{
			alert(`Logged in as ${nameBox}`);
		})
	}
	else{
		alert(`Logged in as ${nameBox}`);
	}
})