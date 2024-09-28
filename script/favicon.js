const faviconTag = document.getElementById("faviconTag");
const isDark = window.matchMedia('(prefers-color-scheme: dark)');
console.log(isDark.matches);
const changeFavicon = () =>
{
    if(isDark.matches) faviconTag.href="./assets/images/logo.svg";
    else faviconTag.href="./assets/images/FASHION.svg";
}
changeFavicon();