//your JS code here. If required.
let btn = document.getElementById("enterBtn")

btn.addEventListener('click',()=>{
	let p = document.getElementById("status");
	p.innerHTML = "";
	let h = document.getElementsByTagName("h1")[0];
	h.innerHTML = "Entered Metaverse"
})