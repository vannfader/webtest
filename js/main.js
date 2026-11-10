/* Tema claro/oscuro + hora de Lima. Sin dependencias. */
(function () {
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem("vf-theme");
    if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);
  } catch (e) {}

  var btn = document.querySelector(".theme");
  if (btn) {
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("vf-theme", next); } catch (e) {}
    });
  }

  var clock = document.querySelector("[data-clock]");
  function tick() {
    if (!clock) return;
    var t = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Lima", hour: "numeric", minute: "2-digit", hour12: true
    }).format(new Date());
    clock.textContent = t.replace(/\s/g, "").toLowerCase();
  }
  tick();
  setInterval(tick, 20000);
})();
