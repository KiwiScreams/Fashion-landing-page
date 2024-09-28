const faviconTag = document.getElementById("faviconTag");
const isDark = window.matchMedia("(prefers-color-scheme: dark)");
const changeFavicon = () => {
  if (isDark.matches) faviconTag.href = "./assets/images/light.svg";
  else faviconTag.href = "./assets/images/logo.svg";
};
changeFavicon();
isDark.addEventListener("change", changeFavicon);