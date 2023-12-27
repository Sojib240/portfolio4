//<======= custom cursor =======>
const cursorDot = document.querySelector(".cursor-dot");

window.addEventListener("mousemove", (ev) => {
  const eventX = ev.clientX;
  const eventY = ev.clientY;
  //
  cursorDot.animate(
    {
      left: `${eventX}px`,
      top: `${eventY}px`,
    },
    { duration: 1000, fill: "forwards" }
  );
});
//<======= home landing =======>
var homeTl = gsap.timeline({
  duration: 1.5,
  stagger: 1,
});
homeTl
  .from(
    ".top-content h1",
    {
      opacity: 0,
      x: "-400",
    },
    "a"
  )
  .from(
    ".bottom-content h1",
    {
      opacity: 0,
      x: "400",
    },
    "a"
  )
  .from(
    ".top-content h3",
    {
      opacity: 0,
      y: "-400",
    },
    "b"
  )
  .from(
    ".bottom-content h3",
    {
      opacity: 0,
      y: "400",
    },
    "b"
  )
  .from(".logo", {
    opacity: 0,
    scale: 0,
  })
  .from(".ready-to-work h2", {
    opacity: 0,
    scale: 0,
  })
  .from(".scroll", {
    opacity: 0,
    scale: 0,
  });
//home rounded rotating texts
const text = document.querySelector(".text P");

text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style = "transform:rotate(${i * 10}deg)">${char}</span>`
  )
  .join("");
// ALL GSAP CODES
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  "(min-width: 800px)": function () {
    //<======= about text =======>
    const titleTexts = gsap.utils.toArray(".title-text");
    titleTexts.forEach((titleText) => {
      gsap.to(titleText, {
        backgroundSize: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: titleText,
          start: "top 60%",
          end: "top 60%",
          scrub: true,
          // markers: true,
        },
      });
    });
    // const descs = gsap.utils.toArray(".desc");
    // descs.forEach((desc) => {
    //   gsap.to(desc, {
    //     backgroundSize: "100%",
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: desc,
    //       start: "top 60%",
    //       end: "top 60%",
    //       scrub: true,
    //       // markers: true,
    //     },
    //   });
    // });
    //<======= work text =======>
    // var tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "#work",
    //     start: "top 60%",
    //     end: "top 60%",
    //     scrub: 2,
    //     stagger: 1.5,
    //     // markers: true,
    //   },
    // });
    // tl.from(
    //   ".work-title-h1",
    //   {
    //     y: "100%",
    //     duration: 2,
    //     ease: "Power3.out",
    //   },
    //   "a"
    // );
    // tl.from(
    //   ".work-title-h2",
    //   {
    //     y: "-100%",
    //     duration: 2,
    //     ease: "Power3.out",
    //   },
    //   "a"
    // );
    // tl.from(".project h1", {
    //   x: "-100%",
    //   duration: 2,
    //   ease: "Power3.out",
    //   stagger: 1.5,
    // });
  },
  "(max-width: 799px)": function () {
    //<======= about text =======>
    // const titleTexts = gsap.utils.toArray(".title-text");
    // titleTexts.forEach((titleText) => {
    //   gsap.to(titleText, {
    //     backgroundSize: "100%",
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: titleText,
    //       start: "bottom 60%",
    //       end: "bottom 60%",
    //       scrub: true,
    //       // markers: true,
    //     },
    //   });
    // });
    // const descs = gsap.utils.toArray(".desc");
    // descs.forEach((desc) => {
    //   gsap.to(desc, {
    //     backgroundSize: "100%",
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: desc,
    //       start: "top 60%",
    //       end: "top 60%",
    //       scrub: true,
    //       // markers: true,
    //     },
    //   });
    // });
    //<======= work text =======>
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#work",
        start: "top 100%",
        end: "top 50%",
        scrub: 2,
        // markers: true,
      },
    });
    tl.from(
      ".work-title-h1",
      {
        x: "10%",
        duration: 2,
        ease: "Power3.out",
      },
      "a"
    );
    tl.from(
      ".work-title-h2",
      {
        x: "-10%",
        duration: 2,
        ease: "Power3.out",
      },
      "a"
    );
  },
});
//<======= contact text =======>
// var tl2 = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#contact",
//     start: "50% 90%",
//     end: "50% 90%",
//     scrub: 2,
//     stagger: 2,
//     // markers: true,
//   },
// });
// tl2
//   .from(
//     ".contact-title-h1",
//     {
//       y: "100%",
//       duration: 2,
//       ease: "Power3.out",
//     },
//     "b"
//   )
//   .from(
//     ".contact-title-h2",
//     {
//       y: "-100%",
//       duration: 2,
//       ease: "Power3.out",
//     },
//     "b"
//   );
// .from(
//   ".social-links span",
//   {
//     // x: "-100%",
//     scale: 0,
//     duration: 2,
//     ease: Power3.out,
//     stagger: "1.5",
//   },
//   "b"
// );
//<======= work =======>
const projects = document.querySelectorAll(".project");
const marquees = document.querySelectorAll(".marquee");

projects.forEach((project) => {
  //
  project.addEventListener("mouseenter", () => {
    // project.childNodes[1].classList.add("show-work-card");
    project.childNodes[7].classList.add("show-work-marquee");
    cursorDot.style.width = "100px";
    cursorDot.style.height = "100px";
  });
  //
  project.addEventListener("mouseleave", () => {
    // project.childNodes[1].classList.remove("show-work-card");
    project.childNodes[7].classList.remove("show-work-marquee");
    cursorDot.style.width = "25px";
    cursorDot.style.height = "25px";
  });
  //
});

//
//

// contact hover effect
const socialLinks = document.querySelectorAll(".social-links");

socialLinks.forEach((socialLink) => {
  socialLink.addEventListener("mouseenter", () => {
    cursorDot.style.width = "100px";
    cursorDot.style.height = "100px";
  });
  socialLink.addEventListener("mouseleave", () => {
    cursorDot.style.width = "25px";
    cursorDot.style.height = "25px";
  });
});

// home mouse hover effect
const logo = document.querySelector(".logo");
logo.addEventListener("mouseenter", () => {
  cursorDot.style.width = "100px";
  cursorDot.style.height = "100px";
});
logo.addEventListener("mouseleave", () => {
  cursorDot.style.width = "25px";
  cursorDot.style.height = "25px";
});
