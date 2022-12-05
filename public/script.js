(function () {
  const btnOn = document.querySelector("#btnOn");
  const btnOff = document.querySelector("#btnOff");
  btnOn.addEventListener("click", function () {
    document.cookie = "user=John";
    localStorage.setItem("JS", "ON");
    window.location.reload();
  });
  btnOff.addEventListener("click", function () {
    document.cookie = "user=John; max-age=0";
    localStorage.clear();
    window.location.reload();
  });
})();
