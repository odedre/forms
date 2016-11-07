console.log('dsdsd');
// var change = function() {
// 	if (document.getElementById('t1').innerHTML === "Welcome to our Book Store") {
// 		document.getElementById('t1').innerHTML = "Read More Books";
// 	} 
// 	else if (document.getElementById('t1').innerHTML === "Read More Books") {
// 		document.getElementById('t1').innerHTML = "Welcome to our Book Store";
// 	}
// };
// var createBtn = function() {
// 	var btn = document.createElement('button');
// 	document.getElementById('innerdiv').appendChild(btn);
// 	btn.appendChild(document.createTextNode("Kuckoo"));
// };
// document.getElementById('t1').onclick = change;
// document.getElementById('outerdiv').style.backgroundColor = "aqua";
// document.getElementById('innerdiv').onclick = createBtn;
//----------------------------


var validation = function() {
	if(document.getElementById('pass').value !== document.getElementById('re-pass').value) {
		document.getElementById('msg').style.backgroundColor = "red";
		document.getElementById('msg').innerHTML = "password must be the same!";
	}
	else if(document.getElementById('pass').value.length < 6){
		document.getElementById('msg').innerHTML = "password must be 6 charachters or longer"; 
		document.getElementById('msg').style.backgroundColor = "red";
	} 

	else if(document.getElementById('country').value !== "Israel" && document.getElementById('country').value !== "USA") {
		document.getElementById('msg').innerHTML = "only israel and the US"; 
		document.getElementById('msg').style.backgroundColor = "red";
	}

	else if(document.getElementById('first-name').value.indexOf(" ") != -1 || document.getElementById('last-name').value.indexOf(" ") != -1) {
		document.getElementById('msg').innerHTML = "no spaces in the name";
		document.getElementById('msg').style.backgroundColor = "red";
	}
	
	else if(document.getElementById('tel').value >15) {
		document.getElementById('msg').innerHTML = "phone number is too long";
		document.getElementById('msg').style.backgroundColor = "red";		
	}
	else{
		document.getElementById('msg').style.backgroundColor = "green";
		document.getElementById('msg').innerHTML = "password saved";
	}
};
console.log(document.getElementById('pass').length);
document.getElementById('submit').onclick = validation;