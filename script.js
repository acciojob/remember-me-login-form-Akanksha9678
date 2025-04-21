//your JS code here. If required.
let form=document.querySeletor("form");
let nameBox=document.querySeletor("#username").value;
let passBox=document.querySeletor("#password").value;
let checkBox=document.querySeletor("#checkbox");
let Submit=document.querySeletor("#submit");



form.addEventListener("submit",()=>{
	let btn=document.querySeletor("#existing");
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