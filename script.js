gsap.registerPlugin(ScrollTrigger);

/* PARALLAX BACKGROUND */
gsap.to(".layer1", {
  y: 200,
  scrollTrigger: {
    scrub: true
  }
});

gsap.to(".layer2", {
  y: -200,
  scrollTrigger: {
    scrub: true
  }
});

gsap.to(".layer3", {
  y: 100,
  scrollTrigger: {
    scrub: true
  }
});

/* SCENE PIN (TRAILER STYLE) */
gsap.utils.toArray(".scene").forEach((scene) => {

  gsap.from(scene, {
    scrollTrigger: {
      trigger: scene,
      start: "top top",
      end: "+=100%",
      pin: true,
      scrub: true
    },
    opacity: 0,
    scale: 0.95
  });

});

/* PARALLAX TEXT */
gsap.utils.toArray(".parallax").forEach((el) => {
  gsap.from(el, {
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      scrub: true
    }
  });
});

/* TYPEWRITER SIMPLE */
const el = document.querySelector(".typewriter");
const text = el.innerText;
el.innerText = "";

let i = 0;

function type() {
  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 60);
  }
}

type();

/* CONTACT */
function goContact(){
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

/* FORM */
document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();

  const btn = this.querySelector("button");

  btn.innerText = "Enviando...";
  btn.disabled = true;

  setTimeout(() => {
    btn.innerText = "Quiero acceso";
    btn.disabled = false;

    window.open("https://wa.me/34600000000", "_blank");
  }, 800);
});
