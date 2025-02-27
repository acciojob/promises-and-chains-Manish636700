//your JS code here. If required.

document.getElementById("btn").addEventListener("click",function(event){
	event.preventDefault();

	let age = document.getElementById("age").value.trim();
	let name = document.getElementById("name").value.trim();
	
	if(!age || !name)
	{
		alert("Please enter valid details.");
		return;
	}
	age = parseInt(age,10);
	let check = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age>18)
				resolve(`Welcome, . You can vote.`);
			else
				resolve(`Oh sorry . You aren't old enough.`)
		},4000);
	});

	check.then(message => alert(message))
		.catch(error => (error));
})