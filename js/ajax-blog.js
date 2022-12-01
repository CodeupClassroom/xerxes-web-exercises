"use strict";

$(function() {
    $.ajax("../data/blog.json").done(function(data) {
        let htmlStr = "";
        data.forEach(function (post) {
            htmlStr += "<article>";
            htmlStr += "<h2>" + post.title + "</h2>";
            htmlStr += "<h5>Posted on: " + post.date + "</h5>";
            htmlStr += "<p>" + post.content + "</p>";
            htmlStr +=  "<ul>";
            post.categories.forEach(function(category) {
                htmlStr += "<li>" + category + "</li>"
            });
            htmlStr += "</ul></article>";
        });
        $("#blog-container").html(htmlStr);
    });
});