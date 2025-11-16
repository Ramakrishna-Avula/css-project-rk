gsap.registerPlugin(ScrollTrigger);
gsap.from(".section2sub1, .section2sub2, .section2sub3", {
  y: 150,
  opacity: 0,
  duration: 2,
  delay: 0.5,
  stagger:0.5,
  scrollTrigger: {
    trigger: ".section2", 
    start: "top 80%",
        
  }
});
gsap.from(".section7parent", {
  y: 150,
  opacity: 0,
  duration: 2,
  delay: 0.4,
  stagger:0.5,
  scrollTrigger: {
    trigger: ".section7", 
    start: "top 80%",
        
  }
});
