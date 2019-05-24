var timeline = new TimelineMax({repeat:-1, paused:true, yoyo:true });
var timeline2 = new TimelineMax({repeat:-1, paused:true, yoyo:true });
var timeline3 = new TimelineMax({repeat:-1, paused:true, yoyo:true });
var timeline4 = new TimelineMax({repeat: 0, paused:true, yoyo:true });


//acces classes with jquery $ selector
var astro = $('.astro');
var rightHand = $('.right-hand');
var leftHand = $('.left-hand');
var opacity = $('.astro');

//  timeline one makes the astronaut jump. tl2 and tl3 make his right and left hand rotate with transformOrigin property. see greensock -
// docs for more info
timeline.from([astro], 4.5, { y: -200, x: 50, scale: 1.25, ease: Back.easeOut});
timeline2.to([rightHand ], 4.5, {x: 0, y: 5, transformOrigin:"top right" , rotation:"-50",  ease: Back.easeOut.config(1.7)}, )
timeline3.from([leftHand ], 4.5, {x: 10, y: 10, transformOrigin:"top left" , rotation:"50",   ease: Back.easeOut.config(1.7)}, )


//pause all tween timeles
function pauseJump(){
   timeline.pause()
   timeline2.pause()
   timeline3.pause()
}

//play all tween timeles
function startJump(){
   timeline.play()
   timeline2.play()
   timeline3.play()
}

//restart all timelines
function restartJump(){
   timeline.restart()
   timeline2.restart()
   timeline3.restart()
}


//Add eventlistener on keydown with arrow keycodes
window.addEventListener("keydown", checkKeyPress, false);

//trigger pre-made functions if the given keycodes are down
function checkKeyPress(e){
   if(e.keyCode == "38"){
      startJump()
   }
   else if(e.keyCode == "40"){
      pauseJump()
   }
   else if(e.keyCode == "39"){
      restartJump()
   }
   else if(e.keyCode == "37"){
      $('.astro').classList.toggle("toggle")
   }
   else if(e.keyCode == "83"){
      $('.sky-container').classList.toggle("sky-container1")
   }
}

   var stars = $('.bg-1')
   var sky = $('.metro-sign')


    stars.onclick = function(){
      stars.classList.toggle("stars")
      
 };

  


//     planet.onclick = function(){
//       planet.classList.toggle("flickr")
      
//  };




   function $ (el) {
     return document.querySelector(el);
   }

   function $$ (els) {
     return document.querySelectorAll(els);
   }

