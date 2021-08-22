// Second try, still no idea what I am doing but I like it ;-)

// ==UserScript==
// @name         Twitter Enhancements
// @description  Enhance Twitter by removing their "TwitterChirp" font
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Attempt to disable Twitter's "TwitterChirp" font
// @author       Doncho Gunchev <dgunchev@gmail.com>
// @match        https://twitter.com/*
// @match        https://www.twitter.com/*
// @grant        non
// @icon         data:image/gif;base64,R0lGODlhEAAQAPQAABqW4huX4xuZ5hub6hya6Byb6Rud7Byd7Byd7R2e7R2f7h2h8R2h8h2h8x2i8h2i8x2i9B2j9B6k9h2o/x2p/x6p/x2q/x2r/x6q/x+q/wAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABoALAAAAAAQABAAAAVJoCaOZGmeaFpapgNBFkHC5NHckDy6BKs5t4bDJ7JAXEigsORoNoNNiOnwvCmAApMCorg5pSdCtQGZpBBOR+YE2LogAZV8Tk+FAAA7
// @license      GNU LESSER GENERAL PUBLIC LICENSE 2.1+
// @homepageURL  https://github.com/mr700/tampermonkey-scripts
// @supportURL   https://github.com/mr700/tampermonkey-scripts/issues
// @downloadURL  https://raw.githubusercontent.com/mr700/tampermonkey-scripts/master/twitter_style.user.js
// @updateURL    https://raw.githubusercontent.com/mr700/tampermonkey-scripts/master/twitter_style.user.js
// ==/UserScript==

// Original style:
//
// .r-37j5jr {
//    font-family: "TwitterChirp", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
//}

// Ideas from:
//   https://github.com/jparise/gmail-fixed-font/blob/master/gmail-fixed-font.user.js

(function() {
    'use strict';

    var css = `
.r-37j5jr {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
}`;

    if (typeof GM_addStyle != "undefined") {
        GM_addStyle(css);
    } else if (typeof addStyle != "undefined") {
        addStyle(css);
    } else {
        var heads = document.getElementsByTagName("head");
        if (heads.length > 0) {
            var node = document.createElement("style");
            node.type = "text/css";
            node.appendChild(document.createTextNode(css));
            heads[0].appendChild(node);
        }
    }

})();
