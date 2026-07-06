gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

function Mousefollower(){
  window.addEventListener("mousemove",(det)=>{
    document.querySelector(".mm").style.transform = `translate(${det.clientX}px,${det.clientY}px)`
  })
}

Mousefollower()