function open(){
 const btn=document.getElementById("btnclose")
 const log=document.getElementById("opebtn")
 const page1=document.getElementById("container2")
 const page2=document.getElementById("container1")
 const eyes=document.getElementById("eyseicon")
 const password=document.getElementById("password")
 btn.onclick=()=>{
    page1.style.display="none"
 }
 log.onclick=()=>{
    page1.style.display="block"
   
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

}
open()