/* =====================================================  SURPRISE WEBSITE - OPTIMIZED VERSION   PART 1
=====================================================*/

"use strict";

/* -----------------------------   ELEMENTS
----------------------------- */

const $ = (selector) => document.querySelector(selector);

const loader = $("#loader");
const music = $("#bgMusic");

const days = $("#days");
const hours = $("#hours");
const minutes = $("#minutes");
const seconds = $("#seconds");

const typingText = $("#typingText");

const heartContainer = $("#floatingHearts");
const roseContainer = $("#roseRain");


/* -----------------------------   LOADER
----------------------------- */

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hide");

        setTimeout(() => {

            loader.remove();

            startAnimations();

        },500);

    },500);

});


/* -----------------------------   MUSIC
----------------------------- */

document.addEventListener("click",()=>{

    if(!music) return;

    music.volume=.35;

    music.play().catch(()=>{});

},{once:true});


/* -----------------------------  FRIENDSHIP TIMER
----------------------------- */

const START_DATE = new Date("2023-07-23T00:00:00");

function updateTimer(){

    const now = new Date();

    const diff = now - START_DATE;

    const d = Math.floor(diff/86400000);

    const h = Math.floor(diff/3600000)%24;

    const m = Math.floor(diff/60000)%60;

    const s = Math.floor(diff/1000)%60;

    days.textContent=d;

    hours.textContent=h;

    minutes.textContent=m;

    seconds.textContent=s;

}

updateTimer();

setInterval(updateTimer,1000);


/* -----------------------------  TYPEWRITER
----------------------------- */

const LETTER = `

My Dear Forever love  ❤️

Exactly three years ago,
our beautiful relationship started.

Thank you for every smile,
every laugh,
every conversation,
and every unforgettable memory.

May our relationship continue
to grow stronger every day.

Happy Third Anniversary ❤️

from the bottom of my heart,
`;

let pointer = 0;

function typeWriter(){

    if(pointer>=LETTER.length) return;

    typingText.textContent += LETTER[pointer];

    pointer++;

    requestAnimationFrame(()=>{

        setTimeout(typeWriter,28);

    });

}

setTimeout(typeWriter,1000);


/* -----------------------------   HEARTS
----------------------------- */

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.textContent="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*20)+"px";

    heart.style.animationDuration=(7+Math.random()*3)+"s";

    heartContainer.appendChild(heart);

    heart.addEventListener("animationend",()=>{

        heart.remove();

    });

}


/* -----------------------------   ROSES
----------------------------- */

function createRose(){

    const rose=document.createElement("div");

    rose.className="rose";

    rose.textContent="🌹";

    rose.style.left=Math.random()*100+"vw";

    rose.style.fontSize=(20+Math.random()*18)+"px";

    rose.style.animationDuration=(8+Math.random()*3)+"s";

    roseContainer.appendChild(rose);

    rose.addEventListener("animationend",()=>{

        rose.remove();

    });

}


/* -----------------------------   START EFFECTS
----------------------------- */

function startAnimations(){

    setInterval(createHeart,1800);

    setInterval(createRose,2200);

}

console.log("Part 1 Loaded");
/* =====================================================   SURPRISE WEBSITE - OPTIMIZED VERSION   PART 2
=====================================================*/

/* -----------------------------   GIFT
----------------------------- */

const giftBox = $("#giftBox");
const giftMessage = $("#giftMessage");

let giftOpened = false;

giftBox?.addEventListener("click", () => {

    if(giftOpened) return;

    giftOpened = true;

    giftBox.textContent = "💝";

    giftBox.style.transform = "scale(1.2) rotate(12deg)";

    giftMessage.innerHTML = `
        <div style="text-align:center; margin-bottom:35px;">

    ✨ ───────── ❤️ ───────── ✨

    <h2 style="
        color:white;
        font-size:2.6rem;
        margin:18px 0;
    ">
        ❤️ Surprise ❤️
    </h2>

    ✨ ───────── ❤️ ───────── ✨

</div>
        <br>
        <div style="
    max-width:850px;
    margin:40px auto;
    padding:40px;
    text-align:center;
    line-height:2.1;
    color:#ffffff;
    font-size:18px;
    background:rgba(255,255,255,0.08);
    border:1px solid rgba(255,255,255,0.15);
    border-radius:25px;
    backdrop-filter:blur(15px);
    box-shadow:0 10px 40px rgba(255,77,136,.25);
">

<h2 style="
    font-size:42px;
    color:#ff4d88;
    margin-bottom:15px;
    text-shadow:0 0 20px rgba(255,77,136,.7);
">
❤️ Surprise ❤️
</h2>

<p style="
    font-size:24px;
    color:#ffd6e7;
    margin-bottom:30px;
">


<div style="text-align:left; line-height:2; font-size:18px; color:#fff;">

<p style="text-align:center; font-size:28px; font-weight:bold; color:#ff4d88;">
❤️ Happy 3rd Anniversary ❤️
</p>

<p style="text-align:center; font-size:22px; color:#ffd6e7;">
मेरो सबैभन्दा प्यारो मान्छे ❤️
</p>

<p>
सर्वप्रथम त, <b>Happy Third Anniversary</b> मेरो मायालु। ❤️🫂
</p>
<p>तिमीलाई मैले मेरो जीवनको त्यो स्थानमा राखेको छु, जहाँ कसैले पनि तिम्रो ठाउँ लिन सक्दैन। तिमी मेरो लागि बाबा–मम्मीपछि सबैभन्दा ठूलो priority हौ, र त्यो स्थान अब कसैले कहिल्यै लिन सक्दैन। 🥺❤️
साच्चै भन्नुपर्दा, म संसारकै भाग्यमानी मान्छे हुँ, किनकि मैले तिमी जस्तो माया गर्ने, बुझ्ने, साथ दिने र हरेक परिस्थितिमा मेरो हात नछोड्ने मान्छे पाएको छु। 🥰</p>
<p>मलाई थाहा छ, मैले धेरै पटक तिमीलाई दुःख दिएको छु, रुवाएको छु, रिस उठाएको छु। तर यति सबै हुँदा पनि तिमीले मेरो साथ कहिल्यै छोडेनौ। त्यसका लागि म तिमीसँग मनदेखि नै माफी माग्न चाहन्छु। ❤️🥺 अनि एउटा कुरा, सबैभन्दा सुरुमा त म तिमीसँग माफी माग्न चाहन्छु। ❤️🥺</p>
<p>किनकि तिमी period भएको बेला, तिमी आफैं शारीरिक र मानसिक रूपमा धेरै गाह्रो अवस्थाबाट गुज्रिरहेकी थियौ। त्यस्तो समयमा तिमीलाई साथ दिनुपर्ने, बुझ्नुपर्ने तर म नै उल्टै रिसाएँ, गाली गरेँ, नराम्रा कुरा भनेँ। आज त्यो सम्झिँदा आफैंलाई धेरै नराम्रो लाग्छ। 😔❤️ त्यो मेरो जीवनको सबैभन्दा ठूलो गल्तीहरूमध्ये एक हो। त्यसको लागि म साँच्चिकै मनदेखि माफी माग्छु। तिम्रो अगाडि घुँडा टेकेर, तिम्रो खुट्टा ढोगेर पनि माफी माग्न तयार छु। 😘❤️</p>
<p>
त्यो दिनपछि मैले एउटा कुरा राम्ररी बुझेँ—माया भनेको खुसी हुँदा मात्र होइन, गाह्रो समयमा पनि एक-अर्कालाई बुझ्नु र साथ दिनु रहेछ। म कसम खान्छु कि अबदेखि तिमीलाई सबैभन्दा बढी साथ चाहिएको बेला म कहिल्यै तिम्रो साथ छोड्ने छैन। 🫂❤️ म तिमीलाई सधैं आफ्नै बनाएर राख्न चाहन्छु। तिमीलाई कसैसँग तुलना गर्न सक्दिन, न त तिम्रो स्थान कसैलाई दिन सक्छु। तिमी मेरो जीवनको सबैभन्दा अमूल्य व्यक्ति हौ। ❤️❤️‍🩹</p>
<p>
एउटा कुरा मनदेखि भन्न चाहन्छु। मलाई थाहा छ, तिमीलाई म अरू केटीसँग बोलेको मन पर्दैन, jealous पनि हुन्छौ। त्यो स्वाभाविक हो। यदि कहिल्यै मैले कुनै गल्ती गरेँ भने रिसाऊ, गाली गर, सम्झाऊ, चाहे पिट पनि, तर एउटा कुरा मात्र बुझिदेऊ। मेरो साथी Swastika माथि कहिल्यै शंका नगर है, मेरो Babe। 🫂❤️</p>







<p>किनकि तिमीले जति साथ र हौसला मलाई उस्ले दिएकी छे। जब हाम्रो सम्बन्ध बिगार्ने प्रयास गरे, उसले सधैं हाम्रो पक्ष लिएकी छे। मैले केही गलत गर्दा उसले पनि मलाई गाली गरेर सम्झाएकी छे। 🥰 त्यसैले जसले हाम्रो राम्रो चाहेको छ, उसलाई म कहिल्यै नराम्रो नजरले हेर्न सक्दिन 🥹❤️ त्यसैले उसलाई कहिल्यै नराम्रो नसोच्नु, न नराम्रो नजरले हेर्नु। 🤗
</p>
<p>अब मेरो नराम्रो बानीको कुरा। साच्चै भन्नुपर्दा, म पहिले धेरै नै अपरिपक्व थिएँ। तर आज म जुन मान्छे बनेको छु, त्यो तिम्रै कारणले हो। तिमीले मलाई राम्रो–नराम्रो छुट्याउन सिकायौ, जिम्मेवार बन्न सिकायौ, बाबा–मम्मीको लागि केही गर्नुपर्छ भन्ने सोच दियौ। त्यसैले All Credit Goes To You. ❤️</p>

<p>तिमीले मलाई गाली गर्ने, सम्झाउने, थर्काउने बानी मन पर्छ। किनकि त्यो सबै तिमीले मेरो राम्रोको लागि गर्छ्यौ। अनि सबैको mood सधैं एउटै हुँदैन। कहिलेकाहीँ मैले पनि नराम्रो बोल्न सक्छु, रिसाउन सक्छु। त्यसलाई आफ्नै मान्छे सम्झेर माफ गरिदिनू है। किनकि म त सधैं तिम्रै हुँ। 🫂❤️</p>

<p>अनि एउटा सानो suggestion पनि छ। सपना देख्नु राम्रो कुरा हो, तर त्यो सपना पूरा गर्न आफ्नो career मा पनि ध्यान दिनुपर्छ। सधैं मसँग जिस्किँदै, रमाउँदै मात्र हुँदैन। पहिले आफ्नो भविष्य बनाऊ, आफ्नो सपना पूरा गर। First your career, then me. ❤️ किनकि म चाहन्छु, तिमी आफ्नै नजरमा सबैभन्दा सफल र गर्व गर्न लायक मान्छे बन। त्यसपछि संसारलाई जवाफ दिन सजिलो हुन्छ।</p>

<p>तिमी मेरो जीवनमा आएको सबैभन्दा सुन्दर उपहार हौ। You are the best partner I could ever ask for. ❤️ अरू धेरै कुरा छन्, तर ती सबै भेटेर भनौँला। 🥺🫂</p>

<p>अनि... I HAVE FEW SURPRISES FOR YOU.🎁❤️ gift त अहिले दिन सक्दिन, किनकि पहिले नै दिन थालेको छु। 😜</p>

<p>अनि हेर्दा हेर्दै हाम्रो सम्बन्धले ३ वर्ष पूरा गरिसकेछ। ❤️ समय कति छिटो बितेछ है? हिजो जस्तै लाग्छ, तर आज हामी हाम्रो तेस्रो Anniversary मनाइरहेका छौँ। मेरो एउटै इच्छा छ—यसरी नै हाम्रो सम्बन्ध अझ बलियो बन्दै जाओस् र एक दिन विवाहसम्म पुगेर सधैंको लागि एउटै जीवन बनोस्। 💍❤️</p>

<p>अनि एउटा कुरा, यो सम्बन्धको बारेमा कहिल्यै tension नलिनु। ढुक्क भएर आफ्नो सपना र भविष्यतिर अगाडि बढ्दै जानु। सधैं एउटा कुरा सम्झिनु— "मेरो साथ दिन, मेरो हात समातेर हिँड्न मेरो साने सधैं छ।" 🫂❤️</p>

<p>कहिल्यै पनि "उसले मलाई छोड्ला कि?" भन्ने सोच मनमा नल्याउनु। त्यो दिन कहिल्यै आउने छैन। म जहाँ भए पनि, जस्तोसुकै परिस्थिति आए पनि, म तिम्रै साथमा हुनेछु। ❤️</p>

<p>मायामा कहिलेकाहीँ साना–साना झगडा, रिस, मनमुटाव हुनु सामान्य कुरा हो। तर त्यसलाई लिएर हाम्रो सम्बन्ध नै सकिन्छ भन्ने सोच कहिल्यै नराख्नु। झगडा त केही समयको हुन्छ, तर मेरो माया र तिमीप्रतिको विश्वास सधैंको लागि हो। 🥺❤️</p>

<p>सधैं एउटा कुरा मात्र बुझ्नू— म तिमीसँग नै सबैभन्दा धेरै खुसी छु। मेरो जीवनमा तिम्रो ठाउँ कसैले लिन सक्दैन, र म कसैलाई त्यो ठाउँ लिन पनि दिने छैन। You are my forever, my home, and my happiest place. ❤️🌍♾️</p>

<p>अन्त्यमा...</p>

<p>Happy Third Anniversary, मेरो Ashika Darling. 😘❤️</p>

<p>I Love You Today, Tomorrow and Forever. ♾️❤️</p>

<p>Happy Third Anniversary Saneyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy ❤️🫂🌍</p>
<hr style="margin:40px 0; border:1px solid rgba(255,255,255,.2);">

<p style="text-align:center; font-size:26px; font-weight:bold; color:#ff4d88;">
Happy Third Anniversary,
</p>

<p style="text-align:center; font-size:22px;">
मेरो Ashika Darling. 😘❤️
</p>

<p style="text-align:center; font-size:20px; color:#ffd6e7;">
I Love You Today, Tomorrow and Forever. ♾️❤️
</p>

<p style="text-align:center; font-size:24px; font-weight:bold;">
❤️🫂🌍 Happy Third Anniversary Saneyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy 🌍🫂❤️
</p>

</div>

</div>
    `;

    launchFireworks();

    launchConfetti();

    heartExplosion();

});


/* -----------------------------  HEART EXPLOSION
----------------------------- */

function heartExplosion(){

    const fragment = document.createDocumentFragment();

    for(let i=0;i<25;i++){

        const heart=document.createElement("div");

        heart.textContent="❤️";

        heart.style.position="fixed";

        heart.style.left="50%";

        heart.style.top="50%";

        heart.style.fontSize=(18+Math.random()*20)+"px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="9999";

        fragment.appendChild(heart);

        const x=(Math.random()-.5)*700;

        const y=(Math.random()-.5)*700;

        heart.animate([

            {
                transform:"translate(0,0) scale(1)",
                opacity:1
            },

            {
                transform:`translate(${x}px,${y}px) scale(.3)`,
                opacity:0
            }

        ],{

            duration:1600,

            easing:"ease-out"

        });

        setTimeout(()=>heart.remove(),1600);

    }

    document.body.appendChild(fragment);

}


/* -----------------------------   CONFETTI
----------------------------- */

function launchConfetti(){

    const colors=[
        "#ff4d88",
        "#ffd93d",
        "#00e5ff",
        "#7c4dff",
        "#ffffff"
    ];

    const fragment=document.createDocumentFragment();

    for(let i=0;i<60;i++){

        const c=document.createElement("div");

        c.style.position="fixed";

        c.style.left="50%";

        c.style.top="50%";

        c.style.width="8px";

        c.style.height="12px";

        c.style.borderRadius="3px";

        c.style.background=
            colors[Math.floor(Math.random()*colors.length)];

        c.style.pointerEvents="none";

        c.style.zIndex="9999";

        fragment.appendChild(c);

        const x=(Math.random()-.5)*1000;

        const y=(Math.random()-.5)*800;

        c.animate([

            {

                transform:"translate(0,0)",

                opacity:1

            },

            {

                transform:`translate(${x}px,${y}px)
                rotate(${Math.random()*720}deg)`,

                opacity:0

            }

        ],{

            duration:2200,

            easing:"ease-out"

        });

        setTimeout(()=>c.remove(),2200);

    }

    document.body.appendChild(fragment);

}


/* -----------------------------   FIREWORK
----------------------------- */

function firework(x,y){

    const fragment=document.createDocumentFragment();

    for(let i=0;i<20;i++){

        const dot=document.createElement("div");

        dot.style.position="fixed";

        dot.style.left=x+"px";

        dot.style.top=y+"px";

        dot.style.width="8px";

        dot.style.height="8px";

        dot.style.borderRadius="50%";

        dot.style.background=
        `hsl(${Math.random()*360},100%,60%)`;

        dot.style.pointerEvents="none";

        dot.style.zIndex="9999";

        fragment.appendChild(dot);

        const angle=Math.random()*Math.PI*2;

        const distance=80+Math.random()*120;

        const dx=Math.cos(angle)*distance;

        const dy=Math.sin(angle)*distance;

        dot.animate([

            {

                transform:"translate(0,0)",

                opacity:1

            },

            {

                transform:`translate(${dx}px,${dy}px)`,

                opacity:0

            }

        ],{

            duration:1200,

            easing:"ease-out"

        });

        setTimeout(()=>dot.remove(),1200);

    }

    document.body.appendChild(fragment);

}

function launchFireworks(){

    for(let i=0;i<6;i++){

        setTimeout(()=>{

            firework(

                Math.random()*window.innerWidth,

                Math.random()*window.innerHeight*.6

            );

        },i*220);

    }

}


/* -----------------------------   PHOTO LIGHTBOX
----------------------------- */

const overlay=document.createElement("div");

overlay.style.position="fixed";

overlay.style.inset="0";

overlay.style.display="none";

overlay.style.justifyContent="center";

overlay.style.alignItems="center";

overlay.style.background="rgba(0,0,0,.88)";

overlay.style.zIndex="99999";

const preview=document.createElement("img");

preview.style.maxWidth="90%";

preview.style.maxHeight="90%";

preview.style.borderRadius="18px";

preview.style.boxShadow="0 0 40px hotpink";

overlay.appendChild(preview);

document.body.appendChild(overlay);

overlay.addEventListener("click",()=>{

    overlay.style.display="none";

});

document.querySelectorAll(".gallery img").forEach(img=>{

    img.loading="lazy";

    img.addEventListener("click",()=>{

        preview.src=img.src;

        overlay.style.display="flex";

    });

});

console.log("Part 2 Loaded");
/* =====================================================  SURPRISE WEBSITE - OPTIMIZED VERSION
PART 3
=====================================================*/

/* -----------------------------
  MOUSE SPARKLES (OPTIMIZED)
----------------------------- */

let lastSpark = 0;

document.addEventListener("mousemove",(e)=>{

    const now = performance.now();

    if(now-lastSpark<35) return;

    lastSpark=now;

    const spark=document.createElement("div");

    spark.style.position="fixed";
    spark.style.left=e.clientX+"px";
    spark.style.top=e.clientY+"px";
    spark.style.width="6px";
    spark.style.height="6px";
    spark.style.borderRadius="50%";
    spark.style.pointerEvents="none";
    spark.style.background="white";
    spark.style.boxShadow="0 0 10px white";
    spark.style.zIndex="99999";

    document.body.appendChild(spark);

    spark.animate([
        {
            transform:"scale(1)",
            opacity:1
        },
        {
            transform:"scale(0)",
            opacity:0
        }
    ],{
        duration:500,
        easing:"ease-out"
    });

    setTimeout(()=>spark.remove(),500);

});


/* -----------------------------
   FLOATING BALLOONS
----------------------------- */

function createBalloon(){

    const balloon=document.createElement("div");

    balloon.textContent=
    ["🎈","🎈","💖","💕"][Math.floor(Math.random()*4)];

    balloon.style.position="fixed";

    balloon.style.left=Math.random()*100+"vw";

    balloon.style.bottom="-80px";

    balloon.style.fontSize=(24+Math.random()*18)+"px";

    balloon.style.pointerEvents="none";

    balloon.style.zIndex="1";

    document.body.appendChild(balloon);

    balloon.animate([

        {

            transform:"translateY(0)",

            opacity:1

        },

        {

            transform:`translateY(-${window.innerHeight+200}px)`,

            opacity:0

        }

    ],{

        duration:10000,

        easing:"linear"

    });

    setTimeout(()=>balloon.remove(),10000);

}

setInterval(createBalloon,3500);


/* -----------------------------  SCROLL REVEAL
----------------------------- */

const revealObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    revealObserver.observe(section);

});


/* -----------------------------
   HERO BUTTONS
----------------------------- */

$("#letterBtn")?.addEventListener("click",()=>{

    $("#letter").scrollIntoView({

        behavior:"smooth"

    });

});

$("#giftBtn")?.addEventListener("click",()=>{

    $("#gift").scrollIntoView({

        behavior:"smooth"

    });

});


/* -----------------------------   ACTIVE NAVBAR
----------------------------- */

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    document.querySelectorAll("section").forEach(sec=>{

        if(window.scrollY>=sec.offsetTop-180){

            current=sec.id;

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/* ----------------------------- HERO HEART FLOAT
----------------------------- */

const heroHeart=document.querySelector(".hero-heart");

if(heroHeart){

    setInterval(()=>{

        heroHeart.animate([

            {

                transform:"translateY(0)"

            },

            {

                transform:"translateY(-20px)"

            },

            {

                transform:"translateY(0)"

            }

        ],{

            duration:2200,

            easing:"ease-in-out"

        });

    },2200);

}


/* -----------------------------
   PERFORMANCE OPTIMIZATION
----------------------------- */

window.addEventListener("pageshow",()=>{

    requestAnimationFrame(()=>{

        updateTimer();

    });

});


/* -----------------------------
   END
----------------------------- */

console.log("❤️ Optimized Surprise Website Loaded Successfully ❤️");
