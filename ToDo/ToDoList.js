let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");

button.addEventListener("click", function(){
    // let li = this.innerHTML=input;
//   console.log("clicked",input.value);

let item = document.createElement("li");
item.innerText=input.value;

let delbtn = document.createElement("button");
delbtn.innerText = "delete";
delbtn.classList.add("delete");

item.appendChild(delbtn);
ul.appendChild(item);
input.value="";
});
//for add old event on new added event we use Event_Delegation
// in that we use this code parent elm

ul.addEventListener("click",function(event){
    console.log(event.target.nodeName);
 if (event.target.nodeName=="BUTTON") {
    let list = event.target.parentElement;
    //console.log(list);
    list.remove();
    console.log("deleted");
 }
});



//this event only work for EventBubling but its not good for 
// in case of add event on new elem its not working
//
// let delbtns = document.querySelectorAll(".delete");
// for(del of delbtns){
//     del.addEventListener("click",function () {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
//}
