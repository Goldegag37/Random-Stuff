// ==UserScript==
// @name         Tune In
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  add a "Tune in!" option to the menu that simply connects you to the owot radio thing
// @author       Gaje
// @match        http*://ourworldoftext.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    menu.addOption("Tune in!", function() {
    w.loadScript("https://files.catbox.moe/yxg22k.js");
    })();
})();
