gsap.to("#page2 h1", {
    transform: "translate(-58%)",
    scrollTrigger:{
        trigger: "#page2",
        scroller: "body",
        scrub: 2,
        pin: true,
        markers: true,
        end: "bottom 50%",
    }

});