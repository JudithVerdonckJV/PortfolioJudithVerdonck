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
var WIPInfo = document.getElementById("WIP");
if (WIPInfo != null) WIPInfo.onclick = OpenWIPInfo;

var CotPInfo = document.getElementById("CotP");
if (CotPInfo != null) CotPInfo.onclick = OpenCotpInfo;

var APOPInfo = document.getElementById("APOP");
if (APOPInfo != null) APOPInfo.onclick = OpenAPOPInfo;

var WYLWInfo = document.getElementById("WYLW");
if (WYLWInfo != null) WYLWInfo.onclick = OpenWYLWInfo;

var CAInfo = document.getElementById("CA");
if (CAInfo != null) CAInfo.onclick = OpenCAInfo;

var WritingInfo = document.getElementById("Writing");
if (WritingInfo != null) WritingInfo.onclick = OpenWritingInfo;

var ArtInfo = document.getElementById("Art");
if (ArtInfo != null) ArtInfo.onclick = Open3dInfo;

function OpenWIPInfo() {
    window.open("WIPInfo.html", "_self");
}

function OpenCotpInfo() {
    window.open("CotPInfo.html", "_self");
}

function OpenAPOPInfo() {
    window.open("APOPInfo.html", "_self");
}

function OpenWYLWInfo() {
    window.open("WYLWInfo.html", "_self");
}

function OpenCAInfo() {
    window.open("ACInfo.html", "_self");
}

function OpenWritingInfo() {
    window.open("WritingInfo.html", "_self");
}

function Open3dInfo() {
    window.open("3dWorkflowsInfo.html", "_self");
}

/*BUTTONS*/
var PortfolioButton = document.getElementById("PortfolioButton");
if (PortfolioButton != null) PortfolioButton.onclick = OpenPortfolio;

var AboutMeButton = document.getElementById("AboutMeButton");
if (AboutMeButton != null) AboutMeButton.onclick = OpenAboutMe;

function OpenPortfolio() {
    window.open("index.html", "_self");
}

function OpenAboutMe() {
    window.open("ResumeInfo.html", "_self");
}