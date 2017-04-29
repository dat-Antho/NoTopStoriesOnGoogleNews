// ==UserScript==
// @name GoogleNewsCleaner
// @version 1.0
// // @encoding utf-8
// @namespace https://github.com/dat-Antho/NoTopStoriesOnGoogleNews
// author Dat_Antho
// @description Remove Top stories and top stories menu form google news
// @include https://news.google.fr/*
// @include https://news.google.com/*
// @include http://news.google.fr/*
// @include http://news.google.com/*
// @include https://news.google.fr/news*
// @include https://news.google.com/news*
// @include http://news.google.fr/news*
// @include http://news.google.com/news*



// ==/UserScript==
(function () {
    "use strict";
    // We hide elements that have the class of the top stories this include the top stories link in the navigation
    document.getElementsByClassName("top-stories-section")[0].style.display = "none";
    document.getElementsByClassName("nv-FRONTPAGE")[0].style.display = "none";
}());
