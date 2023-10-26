function open(){
 const btn=document.getElementById("btnclose")
 const btn1=document.getElementById("btnclose1")
 const log=document.getElementById("opebtn")
 const log1=document.getElementById("opebtn1")
 const page1=document.getElementById("container2")
 const page3=document.getElementById("container3")
 const page2=document.getElementById("container1")
 const eyes=document.getElementById("eyseicon")
 const eyes1=document.getElementById("eyseicon1")
 const password=document.getElementById("password")
 const password1=document.getElementById("password1")
 btn.onclick=()=>{
    page1.style.display="none"
 }
 btn1.onclick=()=>{
    page3.style.display="none"
 }
 log.onclick=()=>{
    page1.style.display="block"
   
 }
 log1.onclick=()=>{
   page3.style.display="block"
  
}
 eyes.onclick=()=>{
    if(password.type=="password"){
        password.type='text'
        eyes.innerHTML="<i class='fa-solid fa-eye-slash'></i>"
        

    }else if(password.type=="text"){
        password.type='password'
        eyes.innerHTML="<i class='fa-solid fa-eye'></i>"
    }
   
 }
 eyes1.onclick=()=>{
    if(password1.type=="password"){
        password1.type='text'
        eyes1.innerHTML="<i class='fa-solid fa-eye-slash'></i>"
        

    }else if(password1.type=="text"){
        password1.type='password'
        eyes1.innerHTML="<i class='fa-solid fa-eye'></i>"
    }
   
 }

}
open()