window.onscroll = () => {
    const scrollY = window.scrollY;
    document.querySelector(".background").style.marginTop = scrollY + "px";

    document.querySelector(".dpnbackground").style.marginTop = scrollY / 1.5 + "px";

    document.querySelector(".stars").style.marginTop = scrollY * 2 + "px";

    document.querySelector(".stars").style.marginRight = scrollY / 2 + "px";

    document.querySelector(".moon").style.transform = "rotate(-" + (scrollY / 5.5) + "deg)";

    document.querySelector(".api").style.marginTop = scrollY / 100 + "px";

    document.querySelector(".api").style.marginRight = scrollY * 20 + "px";

    document.querySelector(".asap").style.marginTop = scrollY / 50 + "px";

    document.querySelector(".asap").style.marginRight = scrollY / 5 + "px";

    document.querySelector(".superman").style.marginTop = scrollY / 2 + "px";

    document.querySelector(".superman").style.marginLeft = scrollY * 8 + "px";

    document.querySelector(".Home h1").style.marginTop = scrollY + "px";

    document.querySelector(".Home h1").style.opacity = (200 - scrollY) / 200;

    document.querySelector(".bdepan").style.marginTop = scrollY / 2 + "px";

    document.querySelector(".bdepan").style.marginLeft = scrollY * 8 + "px";

    document.querySelector(".bbelakang").style.marginTop = scrollY / 2 + "px";

    document.querySelector(".bbelakang").style.marginLeft = scrollY * 8 + "px";





};