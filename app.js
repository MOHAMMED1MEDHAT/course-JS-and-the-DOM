// const container=document.createElement("span");
// container.textContent=", right here!";
// const MainHeading=document.querySelector("h1");
// mainHeading.appendChild(container);
// // const editClass=document.querySelector("#start-now .button--primary");
// // editClass.style.backgroundColor="red";
// const headingEdit=document.querySelector("h6.text-center");
// headingEdit.style.fontSize="2rem";
// headingEdit.style.color="orange";
// const h6Headings=document.querySelectorAll("h6");
// h6Headings.forEach((h6Heading)=>{
// h6Heading.style.color="red";
// });
// function removeChildOnce(){
//     console.log("remove first child");
//     const childContainer=document.querySelector("#contain-all");
//     childContainer.firstChild.remove();
// };
// //this is event listener===============================================
// document.body.addEventListener("keypress",removeChildOnce);
// document.body.removeEventListener("click",removeChildOnce);
//     const mainHeading=document.querySelector("h1");
//     mainHeading.textContent="I am clicked";
//     mainHeading.style.backgroundColor="black";
// document.addEventListener("click",function(event){
//     console.log(event);
// });
// //this is event delegation =================================================
// const mydiv =document.createElement("div");
// function respondToClick (event){
//     if(event.target.nodeName.toLowerCase()=="h1"){
//         console.log("I am clicked and i am h1");
//     }
// }
// for (let i=0;i<100;i++){
//     const paragraph =document.createElement("p");
//     paragraph.textContent=`this is paragraph number ${i}`;
//     mydiv.appendChild(paragraph);
// }
// const myHeader=document.createElement("h1");
// myHeader.textContent="click me";
// mydiv.appendChild(myHeader);
// document.body.appendChild(mydiv);
// mydiv.addEventListener('click',respondToClick);// bubbling phase
// //testing code performance==================================================
const firstStamp=performance.now();
const fragment =document.createDocumentFragment();

for (let i=0;i<100;i++){
    const paragraph =document.createElement("p");
    paragraph.textContent=`this is paragraph number ${i}`;
    fragment.appendChild(paragraph);
}
const secondStamp=performance.now();
document.body.appendChild(fragment);
console.log(`this is the time taken to run the code ${(secondStamp-firstStamp).toFixed(3)} ms`);
// const myHeader=document.createElement("h1");
// myHeader.textContent="click me";
// mydiv.appendChild(myHeader);
// mydiv.addEventListener('click',respondToClick);// bubbling phase