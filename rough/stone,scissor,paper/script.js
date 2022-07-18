const computer=document.getElementById("computer-coice")
const user=document.getElementById("user-choice")
const resulT=document.getElementById("result")
let userChoice
let computerChoice

choice=["stone","scissors","paper"]

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
   practice()
}
function displaY2(){
   userChoice=document.getElementById("scissor").innerHTML;
   user.innerHTML=userChoice
   practice()
}
function displaY3(){
   userChoice=document.getElementById("paper").innerHTML;
   user.innerHTML=userChoice
   practice()
}


function practice(){
   computerChoice=choice[Math.floor(Math.random()*choice.length)]
   computer.innerHTML=computerChoice
   let anime
   function anime(){
      if (computerChoice==="stone") {

         computer.innerHTML=computerChoice+"🗿"
      }
      if (computerChoice==="scissor"){
         computer.innerHTML=computerChoice+"✂️"
      }
      if (computerChoice==="paper") {

         computer.innerHTML=computerChoice+"🧻"
      }
   }

   Result()
    
}
function Result(){
   if(userChoice === computerChoice ){
       resulT.innerHTML="It's Tie"
   }
   if(userChoice =="stone🗿" && computerChoice =="paper🧻" ){
       resulT.innerHTML="computer Wins"
   }
   if(userChoice =="stone🗿" && computerChoice =="scissor✂️"){
        resulT.innerHTML="You win"
   }
   if(userChoice =="scissor✂️" && computerChoice =="paper🧻"){
        resulT.innerHTML="you win"
   }
   if(userChoice =="scissor✂️" && computerChoice =="stone🗿" ){
        resulT.innerHTML="computer Wins"
   }
  if(userChoice =="paper🧻" && computerChoice =="stone🗿" ){
       resulT.innerHTML="You Win"
   }
   if(userChoice =="paper🧻" && computerChoice =="scissor✂️" ){
      resulT.innerHTML="computer Wins"
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