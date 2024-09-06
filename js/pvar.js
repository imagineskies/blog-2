// JavaScript file used for site wide variables. Using this instead of learning react just yet.

'use strict';

// Variables

var siteTitle = "Pulcherrimum Quaerere";
var siteURL = "https://pulcherrimumquaerere.com/";
var siteSubTitle = "look beautiful"
var footerLine = "Pulcherrimum Quaerere | 2024 | Look Beauful";

var homePageMenu = `
<li class="nav-item">
    <a class="nav-link" href="#">Home</a>
</li>
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Writings
    </a>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="Pages/poems.html">Poems</a></li>
        <li><a class="dropdown-item" href="Pages/infrequents.html">Infrequents</a></li>
    </ul>
</li>
<li class="nav-item">
    <a class="nav-link" href="Pages/sandbox.html">Sandbox</a>
</li>
`;
var homePageMenuClasses = "navbar-nav ms-auto mb-2 mb-lg-0";

var pagesMenu = `
<li class="nav-item">
    <a class="nav-link" href="../index.html">Home</a>
</li>
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Writings
    </a>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="poems.html">Poems</a></li>
        <li><a class="dropdown-item" href="infrequents.html">Infrequents</a></li>
    </ul>
</li>
<li class="nav-item">
    <a class="nav-link" href="sandbox.html">Sandbox</a>
</li>
`;
var pagesMenuClasses = "navbar-nav ms-auto mb-2 mb-lg-0"

var navbarsPoemPages = `
<li class="nav-item">
    <a class="nav-link" href="../../index.html">Home</a>
</li>
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Writings
    </a>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="../poems.html">Poems</a></li>
        <li><a class="dropdown-item" href="../infrequents.html">Infrequents</a></li>
    </ul>
</li>
<li class="nav-item">
    <a class="nav-link" href="../sandbox.html">Sandbox</a>
</li>
`;
var navbarsPoemPagesClasses = "navbar-nav ms-auto mb-2 mb-lg-0";






// Templates

function menuBlock(insideHTML, parentClasses, parentElement) {
    let x = document.createElement('ul');
    x.setAttribute('class', parentClasses);
    x.innerHTML = insideHTML;
    $(parentElement).append(x);
}

function addFooter(insideHTML, parentClasses, parentElement) {
    let x = document.createElement('ul');
    x.setAttribute('class', parentClasses);
    x.innerHTML = insideHTML;
    $(parentElement).append(x);
}

// Setting values

$(".siteTitle").html(siteTitle);
$(".siteURL").html(siteURL);
$(".siteSubTitle").html(siteSubTitle);
$("#footerLine").html(footerLine);
menuBlock(homePageMenu, homePageMenuClasses, "#navbarsmenuTemp");
menuBlock(pagesMenu, pagesMenuClasses, "#navbarsPages");
menuBlock(navbarsPoemPages, navbarsPoemPagesClasses, "#navbarsPoemPages")