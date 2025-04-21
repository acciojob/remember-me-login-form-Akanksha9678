//your JS code here. If required.
let form=document.querySelector("form");
let nameBox=document.querySelector("#username").value;
let passBox=document.querySelector("#password").value;
let checkBox=document.querySelector("#checkbox");
let Submit=document.querySelector("#submit");



form.addEventListener("submit",(e)=>{
	e.preventDefault();
	let btn=document.querySelector("#existing");
	if(checkBox){
		window.localStorage.setItem("nameData",JSON.stringify(nameBox));
		window.localStorage.setItem("passData",JSON.stringify(passBox));
		btn.style.display="block";
		btn.addEventListener("click",()=>{
			window.localStorage.getItem("nameData");
			Uname=JSON.parse("nameData");
			alert(`Logged in as ${Uname}`);
		})
	}
	else{
		alert(`Logged in as ${nameBox}`);
	}
})