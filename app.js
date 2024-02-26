let gameSeq=[];
let userSeq=[];
let started=false;
let h2=document.querySelector('h2');
let level=0;
let maxScore=0;
let btns=['yellow','red','purple','green'];
document.addEventListener('keypress',function (event) {
    if (started==false) {
        console.log('game is started');
        started=true;

        levelUp();
        // highScore();

    }
    function btnFlash(btn) {
        btn.classList.add('flash');
        setTimeout(function () {
            btn.classList.remove('flash');
            
        },250);
    }
    function userFlash(btn) {
        btn.classList.add('userflash');
        setTimeout(function () {
            btn.classList.remove('userflash');
            
        },250);
    }
    function levelUp() {
        userSeq=[];
        level++;
        h2.innerText=`level ${level}`;
        let ranIdx=Math.floor(Math.random()*3);
        let randColor=btns[ranIdx];
        let randBtn=document.querySelector(`.${randColor}`);
        // console.log(ranIdx);
        // console.log(randColor);
        // console.log(randBtn);
        gameSeq.push(randColor);
        console.log(gameSeq);
        btnFlash(randBtn);
    }
    function highScore() {
        if (maxScore<level) {
            maxScore = level;            
        }
        return maxScore;
       }
       
    function checkAns(idx) {
        // console.log('Check Level',level);
        if (userSeq[idx]===gameSeq[idx]) {
            // console.log('same value');
            if (userSeq.length==gameSeq.length) {
                setTimeout(levelUp,1000);
            }
        }else{
            h2.innerHTML=`Game Over! Your Score was <b>${level}</b><br> Press any key to Start `;
            document.querySelector('body').style.backgroundColor='red';
            console.log(highScore());

        
            setTimeout(function () {
                document.querySelector('body').style.backgroundColor='white';
            },150);

            reset();
        }
    }
  
   

    function btnPress() {
        // console.log('button pressed');
        // console.log(this);
        let btn=this;
        userFlash(btn);
      
        userColor=btn.getAttribute('id');
        console.log(userColor);
        userSeq.push(userColor);
        
        checkAns(userSeq.length-1);

    }
    let allBtns=document.querySelectorAll('.btn');
    for (const btn of allBtns) {
        btn.addEventListener('click',btnPress);
        
    }
    function reset() {
        started=false;
        gameSeq=[];
        userSeq=[];
        level=0;
    }

    
});