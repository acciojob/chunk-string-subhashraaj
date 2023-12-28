function stringChop(str, size) {
	if(str===null){
		return [];
	}
	let ans=[],i=0;
	while(i<=str.length-1){
		ans.push(str.slice(i,i+size));
		i=+size;
	}
	console.log(ans);
	
}

// Do not change the code below
//const str = prompt("Enter String.");
//const size = prompt("Enter Chunk Size.");
//alert(stringChop(str, size));
