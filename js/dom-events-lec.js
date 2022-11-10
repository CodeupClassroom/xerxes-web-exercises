"use strict";
(function() {
    let headingExample = document.getElementById("heading-example");
    let jeffsum = document.getElementsByTagName("p")[0];
    let textArea = document.getElementById("textarea-example");
    let power = 0;

    function changeToGreen() {
        this.style.color = "seagreen";
    }

    function changeBGToFireBrick() {
        this.style.backgroundColor = "firebrick";
    }

    function chargePower() {
        power++;
    }

    // document.addEventListener("click", function () {
    //     headingExample.style.color = "steelblue";
    // });

    headingExample.addEventListener("click", changeToGreen);
    jeffsum.addEventListener("click", changeToGreen);

    jeffsum.addEventListener("dblclick", function () {
        alert("Too many clicks!");
    });

    headingExample.addEventListener("mouseenter", changeBGToFireBrick);

    headingExample.addEventListener("mouseleave", function () {
        this.style.color = "orangered";
        this.style.backgroundColor = "blue";
        this.removeEventListener("click", changeToGreen);
        this.removeEventListener("mouseenter", changeBGToFireBrick);
    })

    // headingExample.addEventListener("click", function() {
    //     headingExample.style.color = "hotpink";
    // });

    // textArea.addEventListener("keypress", function () {
        // const colors = ["burlywood", "limegreen", "rebeccapurple", "deeppink"];
        // const colorsThatWontGetDavidFired = ["lavender", "ivory", 'lavenderblush', "cornsilk"];
        // let randomIndex = Math.floor(Math.random() * colors.length);
        // document.getElementsByTagName("body")[0].style.backgroundColor = colorsThatWontGetDavidFired[randomIndex];
    // });

    textArea.addEventListener("keydown", chargePower);

    textArea.addEventListener("keyup", function () {
        this.removeEventListener("keydown", chargePower);
        jeffsum.innerHTML = "You charged your power to: " + power;
        power = 0;
    })



})();