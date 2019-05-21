var timeline = new TimelineMax({repeat:-1, paused:false, yoyo:true });
var timeline2 = new TimelineMax({repeat:-1, paused:false, yoyo:true });
var timeline3 = new TimelineMax({repeat:-1, paused:false, yoyo:true });
var timeline4 = new TimelineMax({repeat:-1, paused:false, yoyo:true });
var timeline5 = new TimelineMax({repeat:1, paused:false, yoyo:true });

var jump = $('.jump');
var astro = $('.astro');
var rightHand = $('#Righthand');
var leftHand = $('#Lefthand');


timeline.to([astro], 2.5, { y: -200, x: 50, scale: 1.25, ease: Sine.easeOut}, );
timeline2.to([rightHand ], 2.5, {x: 0, y: 5, transformOrigin:"top right" , rotation:"-50",  ease: Back.easeOut.config(1.7)}, )
timeline4.from([leftHand ], 2.5, {x: 10, y: 10, transformOrigin:"top left" , rotation:"50",   ease: Back.easeOut.config(1.7)}, )


function $ (el) {
     return document.querySelector(el);
   }

   function $$ (els) {
     return document.querySelectorAll(els);
   }
