// First try, no idea what I am doing ;-)

// ==UserScript==
// @name         eToro Enhancements
// @description  Enhance eToro by hiding some junk.
// @namespace    http://tampermonkey.net/
// @version      0.1.2
// @author       Doncho Gunchev <dgunchev@gmail.com>
// @match        https://www.etoro.com/*
// @icon         data:image/gif;base64,R0lGODlhEAAQAPIAAGmsDGmsDWqsDGqsDQAAAAAAAAAAAAAAACH5BAEAAAQALAAAAAAQABAAAAM5SLrc/i9AyQJ14gYB1ZCWwBGWpQjDkIlgVpLpl5EzacauzczbCJYhkAMInFw6nkEFmSqJmKwRspMAADs=
// @grant        none
// @license      GNU LESSER GENERAL PUBLIC LICENSE 2.1+
// @homepageURL  https://github.com/mr700/tampermonkey-scripts
// @supportURL   https://github.com/mr700/tampermonkey-scripts/issues
// @downloadURL  https://raw.githubusercontent.com/mr700/tampermonkey-scripts/master/etoro.user.js
// @updateURL    https://raw.githubusercontent.com/mr700/tampermonkey-scripts/master/etoro.user.js
// ==/UserScript==

(function() {
    'use strict';
    var css = `
/* Hide zoom controls, mouse scroll wheel works well enough. */
.stx_chart_controls { display: none !important; }

/* Hide disclaimer because we can, they can not :-) */
.prochart-disclaimer { display: none !important; }

/* and add 62 more pixels for charts (was height: calc(100vh - 62px);) */
.instrument-chart-ph instrument-chart { height: 100% !important; }
`;

    if (typeof GM_addStyle != "undefined") {
        GM_addStyle(css);
        console.log('etoro.user.js: GM_addStyle worked');
    } else if (typeof addStyle != "undefined") {
        addStyle(css);
        console.log('etoro.user.js: addStyle worked');
    } else {
        var heads = document.getElementsByTagName("head");
        if (heads.length > 0) {
            var node = document.createElement("style");
            node.type = "text/css";
            node.appendChild(document.createTextNode(css));
            heads[0].appendChild(node);
        }
        console.log('etoro.user.js: fallback worked');
    }

})();
