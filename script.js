const tl = gsap.timeline();

function time() {
  var a = 0;
  setInterval(function () {
    if (a < 100) {
      a = a + Math.floor(Math.random() * 15);
      document.querySelector(".loader h1").innerHTML = a + "%";
    } else {
      a = 100;
      document.querySelector(".loader h1").innerHTML = a + "%";
    }
  }, 150);
}

tl.to(".loader h1", {
  delay: 0.5,
  duration: 1,
  onStart: time(),
});

tl.to(".loader", {
  top: "-100vh",
  delay: 0.5,
  opacity: 1,
  duration: 1,
});

tl.from(".logo", {
  y: -100,
  duration: 0.5,
});
tl.from(".center ", {
  y: -100,
  duration: 0.3,
});
tl.from(".right", {
  y: -100,
  duration: 0.3,
});

tl.from("nav h1", {
  y: -100,
  duration: 1,
  opacity: 0,
});

tl.from(".para", {
  y: -100,
  duration: 1,
  opacity: 0,
});

gsap.from(".page2 .box5", {
  scale: 0,
  with: 100,
  rotate: 360,
  duration: 1,
  scrollTrigger: {
    trigger: ".page2 .box5",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 30%",
    scrub: true,
    pin: true,
  },
});
