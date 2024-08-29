// ==UserScript==
// @name         Tune In
// @namespace    http://tampermonkey.net/
// @version      2024-08-22
// @description  add a "Tune in!" option to the menu that simply connects you to the owot radio thing
// @author       Gaje
// @match        http*://ourworldoftext.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    menu.addOption("Tune in!", function() {
        let ytcontain;
        let ytdrag
        let player
        let ytobject
        fetch("https://api.github.com/repos/LimeSlime888/lime.radio/contents/client.js?raw=true").then(e=>e.json()).then(e=>eval(atob(e.content)))
        })();
})();
