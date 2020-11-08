/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it




//import mediumZoom from 'medium-zoom'

import { wrapWithI18nProvider } from "./src/components/wrapWithI18nProvider";
export const wrapPageElement = wrapWithI18nProvider;

export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
        `This application has been updated. ` +
        `Reload to display the latest version?`
    )

    if (answer === true) {
        window.location.reload()
    }
}

export const onRouteUpdate = () => {

    // Load page
    document.addEventListener("DOMContentLoaded", ready())

    // mediumZoom('.images p span img', {
    //     //background: '#efeff0',

    //     background: '#ffffff',
    // })
}

function ready() {
    //alert('DOM is ready');
    // document.addEventListener('touchmove', function (e) {
    //     mobileNav()
    // });
    document.querySelector(".headerNavWrapper").style.top = "0";
    mobileNav()
    canvasAnin()



}

function canvasAnin() {
    var animsToRun = [
        document.querySelector('.headAnim'),
        document.querySelector('.footerAnim'),
        document.querySelector('.catAnim'),
    ]
    var i

    for (i = 0; i < animsToRun.length; i++) {
        if (animsToRun[i] !== null) {
            const animItem = animsToRun[i]
            runCanvasAnin(animItem)
        }
    }
}

function runCanvasAnin(animItem) {
    if (animItem) {
        var $ = animItem.getContext('2d');
        var col = function (x, y, r, g, b) {
            $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            $.fillRect(x, y, 1, 1);
        }
        var R = function (x, y, t) {
            return (Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t)));
        }

        var G = function (x, y, t) {
            return (Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)));
        }

        var B = function (x, y, t) {
            return (Math.floor(192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)));
        }

        var t = 0;

        var x = 0;
        var y = 0;

        var run = function () {
            for (x = 0; x <= 35; x++) {
                for (y = 0; y <= 35; y++) {
                    col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
                }
            }
            t = t + 0.0330;
            window.requestAnimationFrame(run);
        }

        run();
    }
}

function toggleMobileNavOnClick(headerNavWrapper, hamBurgerBtn, headerDiv, headerDivNav, headerDivLogo) {


    hamBurgerBtn.addEventListener("click", function () {
        //headerDiv.scrollTop = 0
        //console.log('Hamburger Clicked')

        if (!headerDiv.classList.contains("open")) {
            headerDiv.classList.add("open", "fillBground")
            hamBurgerBtn.classList.add("is-active")

            // headerNavWrapper.classList.add("fillBground")
            //headerNavWrapper.style.zIndex = "100004";

            // window.onscroll = function () {
            //     headerWrapper.style.top = "0";
            // }

        } else {
            headerDiv.classList.remove("open", "fillBground")
            hamBurgerBtn.classList.remove("is-active")
            //headerNavWrapper.style.zIndex = "100000";
        }


    });

    headerDivNav.addEventListener("click", function () {
        headerDiv.classList.remove("open", "fillBground")
        hamBurgerBtn.classList.remove("is-active")
        //headerNavWrapper.style.zIndex = "100000";
    });

    headerDivLogo.addEventListener("click", function () {
        headerDiv.classList.remove("open", "fillBground")
        hamBurgerBtn.classList.remove("is-active")
        //headerNavWrapper.style.zIndex = "100000";
    });

}

function mobileNav() {
    const headerNavWrapper = document.querySelector(".headerNavWrapper")
    const headerDivLogo = document.querySelector(".headerNavWrapper a ")
    const hamBurgerBtn = document.querySelector(".hamburger")
    const headerDiv = document.querySelector(".header-nav")
    const headerDivNav = document.querySelector(".header-nav ul ")

    const contentStart = document.querySelector(".contentStart");


    var prevScrollpos = 0;
    // No errors
    var projectsNav = document.querySelector('.projects-nav');

    //console.log('prevScrollpos = ' + prevScrollpos)


    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if ((prevScrollpos >= currentScrollPos) || (hamBurgerBtn.classList.contains("is-active"))) {
            document.querySelector(".headerNavWrapper").style.top = "0";
            if (projectsNav) {
                projectsNav.style.top = "50px";
            }

        } else {
            document.querySelector(".headerNavWrapper").style.top = "-61px";
            if (projectsNav) {
                projectsNav.style.top = "-10px";
            }
        }



        if (contentStart) {
            var rect = contentStart.getBoundingClientRect()
            headerNavWrapper.classList.remove("fillBground")
            //console.log(rect.top);
            if (rect.top <= 61) {
                headerNavWrapper.classList.add("fillBground")
            } else {
                headerNavWrapper.classList.remove("fillBground")
            }
        }

        if (window.pageYOffset <= 0) {
            currentScrollPos = 0;
        }
        prevScrollpos = currentScrollPos;
    }

    toggleMobileNavOnClick(headerNavWrapper, hamBurgerBtn, headerDiv, headerDivNav, headerDivLogo)
}
