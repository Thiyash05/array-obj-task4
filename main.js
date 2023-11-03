//Using Map method 
//Output:["Sheridan", "Lee", "Carte"] 


const users = [ 

  { 
    first_name: 'Mike', 
    last_name: 'Sheridan', 
    age: 30 
  }, 

  { 
    first_name: 'Tim', 
    last_name: 'Lee', 
    age: 45 
  }, 

  { 
    first_name: 'John', 
    last_name: 'Carte', 
    age: 25 
  } 

]; 


	let ans=users.map((e)=>{
		return e.last_name
	})
    console.log(ans)




