function Time(){
    setTimeout(()=>{
        console.log("From TimeOut");
        
},3000)
console.log("Step 1");
}
Time()

function func(name,callback){
    console.log("Hi"+name);
    callback()
}

function greet()
{
    console.log("Good Morning");

}

func("Ye",greet)

const promise=new Promise((resolve,reject)=>{
    const api=true;
    setTimeout(()=>{
        if(api)resolve('Data fetched')
        else reject('error while fetching')    
    },2000)
})
promise
         .then((msg)=>{console.log("Success "+msg);})
         .catch((error)=>{console.log("Error "+error);})