"use strict";

$(function() {
    let eventCount = 0;

    $("#text").keyup(function(event) {
        console.log(event);
        const colorsThatWontCauseProblems = ["azure", "ghostwhite", "honeydew", "mintcream"];
        const colors = ["red", "blue", "green", "orange"];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        $("body").css("background-color", randomColor);
        eventCount++;
        if (eventCount > 3) {
            $("#text").off();
        }
    });


});