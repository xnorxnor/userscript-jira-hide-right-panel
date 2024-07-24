// ==UserScript==
// @name         Jira hide right (and left) side panel
// @namespace    https://openuserjs.org/users/xnor
// @description  Adds a button to hide the big right panel. Also hides the small left navigation panel
// @copyright    2024, xnor (https://openuserjs.org/users/xnor)
// @license      MIT
// @version      1.0
// @match        https://*/jira/browse/*
// @grant        none
// ==/UserScript==


/*
document.addEventListener("click", function(){
    'use strict'
    setTimeout(addLink, 1000);
});
*/

const observeUrlChange = () => {
  let oldHref = document.location.href;
  const body = document.querySelector("body");
  const observer = new MutationObserver(mutations => {
    if (oldHref !== document.location.href) {
      oldHref = document.location.href;
        //alert('dummy');
        setTimeout(addLink, 1000);
      /* Changed ! your code here */
    }
  });
  observer.observe(body, { childList: true, subtree: true });
};

window.onload = observeUrlChange;
let isVisible = true;

// first load
(function () {
    'use strict';
    setTimeout(addLink, 500);
})();

function addLink() {
    let createButton = document.getElementById('opsbar-opsbar-transitions');

    let switchButton = document.createElement("pre");
    switchButton.classList = createButton.classList;
    switchButton.innerText = isVisible ? '[-]' : '[+]';
    switchButton.style = 'cursor: pointer';

    let hideShow = function() {
        let sidebarRight = document.querySelector('#viewissuesidebar.aui-item.issue-side-column');
        let sidebarLeft = document.querySelector('.aui-sidebar-wrapper');
        if (sidebarLeft) {
            sidebarLeft.style.display = isVisible ? '' : 'none';
        }
        sidebarRight.style.display = isVisible ? '' : 'none';
    };

    hideShow();

    switchButton.addEventListener('click', function() {
        isVisible = !isVisible;
        hideShow();

        switchButton.innerText = isVisible ? '[-]' : '[+]';
    });
    createButton.appendChild(switchButton);
}
