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
    resizeAllGridItems()
    // mediumZoom('.images p span img', {
    //     //background: '#efeff0',

    //     background: '#ffffff',
    // })

    // "resize reload change".split(" ").forEach(function (e) {
    //     window.addEventListener(e, () => {
    //         resizeAllGridItems()
    //     })
    // })

    // window.addEventListener('resize', function (e) {
    //     resizeAllGridItems()
    // })

    "resize reload click keydown keyup orientationchange".split(" ").forEach(function (e) {
        window.addEventListener(e, () => {
            resizeAllGridItems()
        })
    })


}

function ready() {
    document.addEventListener('click', function (e) {
        srollNav()
    })
    resizeAllGridItems()
    srollNav()
    canvasAnin()
    checkTagListHeight()
    toggleMainNav()
}


function toggleMainNav() {
    const toggleMainBtn = document.querySelector('.toggleMainMenu')
    document.addEventListener('click', function (event) {
        var isClickInside = toggleMainBtn.contains(event.target)
        //console.log("click 1")
        if (isClickInside) {
            toggleMainBtn.classList.toggle("open")
        } else {
            toggleMainBtn.classList.remove("open")
        }
    })
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

// Resize grid
const resizeGridItem = item => {

    const grid = document.querySelector(".grid"),
        rowHeight = parseInt(
            window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
        ),
        rowGap = parseInt(
            window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
        ),
        rowSpan = Math.ceil(
            // (item.querySelector(".item-content").getBoundingClientRect().height +
            //     rowGap) /
            // (rowHeight + rowGap)

            (item.getBoundingClientRect().height +
                rowGap) /
            (rowHeight + rowGap)
        )
    item.style.gridRowEnd = `span ${rowSpan}`
    //console.log("Grid updated")

}
function resizeAllGridItems() {
    const allItems = document.querySelectorAll(".grid li")
    for (let x = 0; x < allItems.length; x += 1) {
        resizeGridItem(allItems[x])
        //console.log("allItems = " + allItems)
    }
}
function checkTagListHeight() {
    const tagListWrapper = document.querySelector(".tagList > span")
    const tagListMoreBtn = document.querySelector(".tagListMore")
    if (tagListWrapper) {
        if (tagListWrapper.clientHeight <= 40) {
            tagListMoreBtn.style = "display:none;"
        } else {
            tagListMoreBtn.style = "display:flex;"
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

function srollNav() {
    const contentStart = document.querySelector(".contentStart")
    const headerNavWrapper = document.querySelector(".headerNavWrapper")
    const secondaryNav = document.querySelector(".secondaryNav")
    // const toggleMainMenu = document.querySelector(".toggleMainMenu > ul")
    const hamBurgerBtn = document.querySelector(".hamburger")
    var prevScrollpos = 0;
    // No errors

    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if ((prevScrollpos >= currentScrollPos) || (hamBurgerBtn.classList.contains("is-active"))) {
            headerNavWrapper.classList.remove("slide")
            // toggleMainMenu.classList.remove("slide")
            if (secondaryNav) {
                secondaryNav.classList.remove("slide")
            }
        } else {
            headerNavWrapper.classList.add("slide")
            // toggleMainMenu.classList.add("slide")
            if (secondaryNav) {
                secondaryNav.classList.add("slide")
            }
        }

        if (contentStart) {
            var rect = contentStart.getBoundingClientRect()
            headerNavWrapper.classList.remove("fillBground")
            var rectHeight = rect.top
            //console.log(rectHeight)
            //console.log(rect.top);
            //if (rect.bottom <= 61) {
            if (rectHeight <= -60) {
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

    if (contentStart) {
        var rect = contentStart.getBoundingClientRect()
        headerNavWrapper.classList.remove("fillBground")
        headerNavWrapper.classList.remove("fillBgroundQuick")
        //console.log(rect.top);
        if (rect.bottom <= 61) {
            headerNavWrapper.classList.add("fillBground")
        } else {
            headerNavWrapper.classList.remove("fillBground")
            headerNavWrapper.classList.remove("fillBgroundQuick")
        }
    } else {
        headerNavWrapper.classList.add("fillBgroundQuick")
    }
}