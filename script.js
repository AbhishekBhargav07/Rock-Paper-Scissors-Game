let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice2");
const msg=document.querySelector("#msg");

const userPara=document.querySelector("#user");
const computerPara=document.querySelector("#computer");
const messageColor = document.querySelector(".message");

const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>
{
    msg.innerText="Game was Draw.Play Again.";
    messageColor.style.backgroundColor="#495057";
}
const showWinner=(userWin,userChoice,compChoice)=>
{
    if(userWin)
    {
        userScore++;
        userPara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        messageColor.style.backgroundColor="#f77f00";
    }else
    {
        compScore++;
        computerPara.innerText=compScore;
        msg.innerText=`You Lost. ${compChoice} beats your ${userChoice}`;
        messageColor.style.backgroundColor="#d62828";
    }
};
const playGame=(userChoice)=>
{
    console.log("user Choice = ",userChoice);

    const compChoice=genComputerChoice();
    console.log("comp Choice = ",compChoice);

    if(userChoice===compChoice)
    {
        //draw Game
        drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice==="rock")
        {
            //scissors or paper
            userWin= compChoice==="paper"? false:true;
        }
        else if(userChoice==="paper")
        {
            // rock or scissors
            userWin= compChoice==="scissors"?false:true;
        }
        else
        {
            //scissors
            //paper or rock
            userWin= compChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((ch)=>
{
    ch.addEventListener("click",()=>
    {
        const userChoice= ch.getAttribute("id");
        playGame(userChoice);
    });
});