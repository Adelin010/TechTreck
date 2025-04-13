const obj = {
    attr1: "ceva",
    attr2: () =>{
        console.log("salut");
        
    }
}

for(let entry of Object.entries(obj))
    console.log(entry);

for(let key of Object.keys(obj))
    console.log(key);

for(let values of Object.values(obj))
    console.log(values);
    
    

    