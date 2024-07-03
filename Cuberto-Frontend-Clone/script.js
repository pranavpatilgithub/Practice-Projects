Shery.mouseFollower();

// magnet effect
Shery.makeMagnet(".magnet");

//circle effect of text
Shery.hoverWithMediaCircle(".textClass", { videos: ["https://cdn.cuberto.com/cb/home/hero/1.mp4"] })


gsap.to(".fleft-elm",{
    scrollTrigger: {
        trigger: ".fimages",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y: "-300%",
    ease: Power1
})

let sections = document.querySelectorAll(".fleft-elm");
//for images
Shery.imageEffect(".images", {
    style: 4,
    config: {onMouse: {value: 1}},
    slideStyle: (setScroll) => {
        sections.forEach(function(section,index){
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function(progress){
                    setScroll(progress.progress+index);
                }
            })
        })
    },
});
