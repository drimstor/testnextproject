(function () {
  const btnOn = document.querySelector("#btnOn");
  const btnOff = document.querySelector("#btnOff");
  window.location.href =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname;
  btnOn.addEventListener("click", function () {
    localStorage.setItem("JS", "ON");
    window.location.href;
  });
  btnOff.addEventListener("click", function () {
    localStorage.clear();
    window.location.href;
  });
})();
