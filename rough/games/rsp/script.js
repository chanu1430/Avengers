const computer=document.getElementById("computer-coice")
const user=document.getElementById("user-choice")
const resulT=document.getElementById("result")
let userChoice
let computerChoice

choice=["stone","scissor","paper"]

/* const scissoR=document.getElementById("scissor")
const papeR=document.getElementById("paper")   
const a=document.getElementsByClassName("same")
a.addEventListener("click",displaY)
function displaY(){
   console.log("clicked")
   
}
  */
function displaY1(){
   userChoice=document.getElementById("stone").innerHTML;
   user.innerHTML=userChoice
   user.style="color:violet"

   practice()
}
function displaY2(){
   userChoice=document.getElementById("scissor").innerHTML;
   user.innerHTML=userChoice
   user.style="color:violet"

   practice()
}
function displaY3(){
   userChoice=document.getElementById("paper").innerHTML;
   user.innerHTML=userChoice
   user.style="color:violet"
   practice()
}


function practice(){
   computerChoice=choice[Math.floor(Math.random()*choice.length)]
   computer.innerHTML=computerChoice 
   computer.style="color:violet"
   Result()
    
}
function Result(){
   if(userChoice === computerChoice ){
       resulT.innerHTML="It's Tie";
       itscolor()
   }
   if(userChoice =="stone" && computerChoice =="paper" ){
       resulT.innerHTML="computer Wins"
       itscolor()
   }
   if(userChoice =="stone" && computerChoice =="scissor"){
        resulT.innerHTML="You Win"
        itscolor()
   }
   if(userChoice =="scissor" && computerChoice =="paper" ){
        resulT.innerHTML="You Win"
        itscolor()
   }
   if(userChoice =="scissor" && computerChoice =="stone" ){
        resulT.innerHTML="computer Wins"
        itscolor()
   }
  if(userChoice =="paper" && computerChoice =="stone" ){
       resulT.innerHTML="You Win"
       itscolor()
   }
   if(userChoice =="paper" && computerChoice =="scissor" ){
      resulT.innerHTML="computer Wins"
      itscolor()
   }

}

function itscolor(){
   if (resulT.innerHTML=="computer Wins"){
      resulT.style="color:red";
   }
   else if (resulT.innerHTML=="You Win"){
   
      resulT.style="color:green";
   
   }
   else{
      resulT.style="color:blue";
   }
}




/* for (i=0 ;i=10 ;i++){
   const a=document.getElementsByClassName("same")
   a.addEventListener("click",practice)
   function practice(){
    const ran=choice[Math.floor(Math.random()*choice.length)]
    console.log(ran) 
    
}
*/