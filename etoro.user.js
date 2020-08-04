// First try, no idea what I am doing ;-)

// ==UserScript==
// @name         eToro Enhancements
// @description  Enhance eToro by hiding some junk.
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @author       Doncho Gunchev <dgunchev@gmail.com>
// @match        https://www.etoro.com/*
// @grant        none
// @license      GNU LESSER GENERAL PUBLIC LICENSE 2.1+
// @homepageURL  https://github.com/mr700/tampermonkey-scripts
// @supportURL   https://github.com/mr700/tampermonkey-scripts/issues
// @downloadURL  https://raw.githubusercontent.com/mr700/tampermonkey-scripts/master/etoro.user.js
// @updateURL    https://raw.githubusercontent.com/mr700/tampermonkey-scripts/master/etoro.user.js
// ==/UserScript==

(function() {
    'use strict';
    var style = document.createElement('style');
    style.type = "text/css";
    style.innerHTML = ".stx_chart_controls { display: none !important; }"; // Hide zoom controls, mouse scroll wheel works well enough.
    style.innerHTML += ".prochart-disclaimer { display: none !important; }"; // Hide disclaimer because we can, they can not :-)
    style.innerHTML += ".instrument-chart-ph instrument-chart { height: 100% !important; }"; // and add 62 more pixels for charts (was height: calc(100vh - 62px);)

    (document.head || document.documentElement).appendChild(style);
})();
