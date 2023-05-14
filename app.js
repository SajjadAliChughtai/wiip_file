var WIIPapp = (function (global) {

    function init() {
        startAnimation();
    }

    function startAnimation() {
        var tl = new TimelineMax();
        tl.add('start');
        tl.fromTo('.square', 0.25, {scale: 0}, {scale: 1, rotation: 0.01, repeat: 1, yoyo:true, ease: Power1.easeOut});
        tl.fromTo('.circle', 0.25, {scale: 0}, {scale: 1, rotation: 0.01, repeat: 1, yoyo:true, ease: Power1.easeOut});
        tl.fromTo('.logo-red', 0.25, {scale: 0}, {scale: 1, rotation: 0.01, ease: Power1.easeOut});
        tl.set('.animation', {opacity: 0, ease: Power0.easeNone}, '+=0.5');
        tl.to('.logo-white-xl', 0.5, {css: {top: '50px', left: '10vw', transform: 'scale(0.44)'}, rotation: 0.01, ease: Power0.easeNone});
        tl.to('.logo-white-l', 0.5, {css: {top: '50px', left: '10vw', transform: 'scale(0.44)'}, rotation: 0.01, ease: Power0.easeNone});
        tl.to('.logo-white-m', 0.5, {css: {top: '50px', left: '10vw', transform: 'scale(0.44)'}, rotation: 0.01, ease: Power0.easeNone});
        tl.to('.logo-white-s', 0.5, {css: {top: '50px', left: '10vw', transform: 'scale(0.44)'}, rotation: 0.01, ease: Power0.easeNone});
        
        
        tl.set('body', {css: {overflow:'auto'}});
        tl.to('.site-copy', 0.5, {opacity: 1, ease: Power0.easeNone});
        tl.set('.animation', {css: {display:'none'}});
    }

    return {
        init: init
    }

})(window);

document.addEventListener("DOMContentLoaded", WIIPapp.init);

