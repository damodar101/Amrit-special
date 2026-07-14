/* ==========================================
    SURPRISE - INDEX PAGE
========================================== */

const CORRECT_DATE = "2080/04/10";

const card = document.getElementById("card");
const input = document.getElementById("date");
const message = document.getElementById("message");

const successPopup = document.getElementById("success");
const wrongPopup = document.getElementById("wrong");

const heartsContainer = document.getElementById("floatingHearts");
const rosesContainer = document.getElementById("fallingRoses");
const sparkContainer = document.getElementById("sparkles");

const music = document.getElementById("music");

/* ==========================================
CHECK ANSWER
========================================== */

function checkAnswer(){

    const answer = input.value.trim();

    if(answer === CORRECT_DATE){

        message.style.color="#22c55e";
        message.innerHTML="❤️ Correct!";

        successPopup.classList.add("show");
playMusic();

createConfetti();

// Wait 5 seconds so the music can play
setTimeout(() => {

    window.location.href = "surprise.html";

}, 5000);

    }

    else{

        card.classList.add("shake");

        wrongPopup.classList.add("show");

        message.style.color="#ff6b81";
        message.innerHTML="Oops... Sorry! That's not correct ❤️";

        setTimeout(()=>{

            card.classList.remove("shake");

            wrongPopup.classList.remove("show");

        },1800);

    }

}

/* ==========================================
ENTER KEY
========================================== */

input.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        checkAnswer();

    }

});

/* ==========================================
PLAY MUSIC
========================================== */

function playMusic() {

    if (!music) {
        console.log("Audio element not found!");
        return;
    }

    music.volume = 0.4;

    music.play()
        .then(() => {
            console.log("Music started.");
        })
        .catch(error => {
            console.error("Music failed:", error);
        });

}
/* ==========================================
FLOATING HEARTS
========================================== */

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*22)+"px";

    heart.style.animationDuration=(6+Math.random()*5)+"s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

}

setInterval(createHeart,600);

/* ==========================================
FALLING ROSES
========================================== */

function createRose(){

    const rose=document.createElement("div");

    rose.className="rose";

    rose.innerHTML="🌹";

    rose.style.left=Math.random()*100+"vw";

    rose.style.fontSize=(18+Math.random()*20)+"px";

    rose.style.animationDuration=(6+Math.random()*5)+"s";

    rosesContainer.appendChild(rose);

    setTimeout(()=>{

        rose.remove();

    },12000);

}

setInterval(createRose,900);

/* ==========================================
MOUSE SPARKLES
========================================== */

document.addEventListener("mousemove",function(e){

    const spark=document.createElement("div");

    spark.className="spark";

    spark.style.left=e.clientX+"px";

    spark.style.top=e.clientY+"px";

    sparkContainer.appendChild(spark);

    setTimeout(()=>{

        spark.remove();

    },800);

});

/* ==========================================
CONFETTI
========================================== */

function createConfetti(){

    for(let i=0;i<120;i++){

        const piece=document.createElement("div");

        piece.style.position="fixed";

        piece.style.left=Math.random()*100+"vw";

        piece.style.top="-20px";

        piece.style.width="8px";

        piece.style.height="14px";

        piece.style.borderRadius="3px";

        piece.style.background=`hsl(${Math.random()*360},90%,60%)`;

        piece.style.pointerEvents="none";

        piece.style.zIndex="9999";

        piece.style.transition="4s linear";

        document.body.appendChild(piece);

        setTimeout(()=>{

            piece.style.transform=`translateY(${window.innerHeight+150}px) rotate(${Math.random()*720}deg)`;

        },30);

        setTimeout(()=>{

            piece.remove();

        },4200);

    }

}

/* ==========================================
AUTO FOCUS
========================================== */

window.onload=()=>{

    input.focus();

};