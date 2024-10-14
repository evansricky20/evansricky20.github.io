function showSidebar() {
  const nav = document.querySelector("nav");
  nav.style.left = "0";

  const closebtn = document.querySelector(".x-menu");
  closebtn.style.top = "16px";

  const navlogo = document.querySelector(".nav-logo");
  navlogo.style.top = "-100%";

  const ham = document.querySelector(".hamburger-menu");
  ham.style.left = "-100%";

  const back = document.querySelector(".nav-back");
  back.style.display = "flex";
}

function closeSidebar() {
  const nav = document.querySelector("nav");
  nav.style.left = "-100%";

  const closebtn = document.querySelector(".x-menu");
  closebtn.style.top = "-100%";

  const navlogo = document.querySelector(".nav-logo");
  navlogo.style.top = "0";

  const ham = document.querySelector(".hamburger-menu");
  ham.style.left = "10%";

  const back = document.querySelector(".nav-back");
  back.style.display = "none";
}
