document.addEventListener("DOMContentLoaded", function () {

    //window.alert("Sitio web en desarrollo");

    let langBtn = document.querySelector(".langBtn");
    let langNav = document.querySelector(".langNav");
    let openNav = document.querySelector(".openNav");
    let x = document.getElementById("myTopnav");
    let meLink = document.querySelector(".meLink");
    let skillsLink = document.querySelector(".skillsLink");
    let proyectsLink = document.querySelector(".proyectsLink");
    let contactLink = document.querySelector(".contactLink");

    openNav.addEventListener("click", () => {
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    });

    meLink.addEventListener("click", () => {
        if (x.className === "topnav responsive"){
            x.className = "topnav";
        }
    });

    skillsLink.addEventListener("click", () => {
        if (x.className === "topnav responsive"){
            x.className = "topnav";
        }
    });

    proyectsLink.addEventListener("click", () => {
        if (x.className === "topnav responsive"){
            x.className = "topnav";
        }
    });

    contactLink.addEventListener("click", () => {
        if (x.className === "topnav responsive"){
            x.className = "topnav";
        }
    });

    langBtn.addEventListener("click", function () {
        swal("Perdón!", "La traducción se encuentra en desarrollo!", "error");
    });

    langNav.addEventListener("click", function () {
        swal("Perdón!", "La traducción se encuentra en desarrollo!", "error");
    });

    let meDiv = gsap.timeline({
        scrollTrigger: {
            trigger: ".meDiv",

        }
    });

    meDiv.from(".meDiv", {y: 300, opacity: 0, duration: 1});

    let skillsDiv = gsap.timeline({
        scrollTrigger: {
            trigger: ".skillsDiv",

        }
    });

    skillsDiv.from(".skillsDiv", {y: 300, opacity: 0, duration: 1});

    let proyectsDiv = gsap.timeline({
        scrollTrigger: {
            trigger: ".proyectsDiv",

        }
    });

    proyectsDiv.from(".proyectsDiv", {y: 300, opacity: 0, duration: 1});

    let contactDiv = gsap.timeline({
        scrollTrigger: {
            trigger: ".contactDiv",

        }
    });

    contactDiv.from(".contactDiv", {y: 300, opacity: 0, duration: 1});

});