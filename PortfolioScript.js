/*STICKY RIBBON*/
window.onscroll = function () { HandleStickyRibbon() };

var header = document.getElementById("StickyRibbon");
var stickyOffset = header.offsetTop;

function HandleStickyRibbon() {
    if (window.pageYOffset > stickyOffset) {
        header.classList.add("Sticky");
    }
    else {
        header.classList.remove("Sticky");
    }
}


/*PROJECTS*/
var APOPInfo = document.getElementById("APOP");
if (APOPInfo != null) APOPInfo.onclick = OpenAPOPInfo;

var WYLWInfo = document.getElementById("WYLW");
if (WYLWInfo != null) WYLWInfo.onclick = OpenWYLWInfo;

var CAInfo = document.getElementById("CA");
if (CAInfo != null) CAInfo.onclick = OpenCAInfo;

function OpenAPOPInfo() {
    window.open("APOPInfo.html", "_self");
}

function OpenWYLWInfo() {
    window.open("WYLWInfo.html", "_self");
}

function OpenCAInfo() {

}

/*BUTTONS*/
document.getElementById("PortfolioButton").onclick = OpenPortfolio;

function OpenPortfolio() {
    window.open("PortfolioHomepage.html", "_self");
}