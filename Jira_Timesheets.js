// ==UserScript==
// @name         Jira Timesheets
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://flow.de.pri.o2.com/secure/TempoUserBoard!timesheet.jspa
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_setClipboard
// @grant        unsafeWindow
// @grant        window.close
// @grant        window.focus
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function() {
        alert('WINNING');
        location.click(a.getAttribute("tempo-add-button"));
    });


})();
