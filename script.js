console.log("hello world");
let get=document.querySelector(".get");
let post=document.querySelector(".post");



get.addEventListener("click",function(){

console.log("Button  clicked.");
const xhr=new XMLHttpRequest();

// open the object
xhr.open('GET','https://jsonplaceholder.typicode.com/comments?postId=1',true);
// what to do on progress (optional)
xhr.onprogress=function(){
    console.log("On Progress");
}



xhr.onreadystatechange=function(){
console.log("ready state is",xhr.readyState);

}


// what to do when response is ready
xhr.onload=function(){                                  
if(this.status ===200){


console.log(this.responseText);
}else{
    console.log("Some error occured");

}

}



// send the request
xhr.send();
console.log("We are done");


})
post.addEventListener("click",function(){

    console.log("You have clicked the POP Button.");
    const xhr=new XMLHttpRequest();
    
    // open the object
//  xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true);
xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);

// what to do on progress (optional)
 xhr.getResponseHeader('Content-type','application/json');



    xhr.onprogress=function(){
        console.log("On Progress");
    }
    
    
    
    // xhr.onreadystatechange=function(){
    // console.log("ready state is",xhr.readyState);    
    // }


xhr.onload=function(){
if(this.status===200){
// console.log(this.responseText);
let obj=JSON.parse(this.responseText);
console.log(obj);
let list=document.getElementById('list');
str="";
for(key in obj){
str+=`<li>${obj[key].userId} </li>`;

}

list.innerHTML=str;



}else{
    console.log("Error occured");
}

}

// params=`{"name":"text2331","salary":"123","age":"23","id":"23123"}`;
// xhr.send(params);

xhr.send();

console.log("we are done");



// =========================POST request is much safer than GET beacause it doesnot save the data in browser logs


})