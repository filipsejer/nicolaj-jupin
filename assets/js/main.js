(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var ROOT = document.documentElement.getAttribute("data-root") || "./";
  var MONTHS = ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
  var PIECES = window.PIECES || [];
  var TECHNIQUES = window.TECHNIQUES || [];
  var WIP = window.WIP || [];

  // Hallmark number: oldest piece is Nr. 01, so the number itself shows progression.
  PIECES.slice().sort(function (a, b) { return (a.date || "9999").localeCompare(b.date || "9999"); })
    .forEach(function (p, i) { p.no = String(i + 1).padStart(2, "0"); });

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function month(d) { if (!d) return "Dato følger"; var p = d.split("-"); return MONTHS[+p[1] - 1] + " " + p[0]; }
  function missingTag(p) { return p.missing && p.missing.length ? '<span class="ph-tag">Info mangler</span>' : ""; }
  function specLine(p) {
    return [p.techniques.join(" · "), p.metal, p.weight, p.hours + " t", month(p.date)].filter(Boolean).join(" — ");
  }
  function photo(images, alt, label) {
    if (images && images.length) {
      return '<img src="' + esc(ROOT + images[0]) + '" alt="' + esc(alt) + '" loading="lazy" decoding="async">';
    }
    return '<span class="ph-tag">Pladsholder</span><div class="ph-photo"><div><span class="mark" aria-hidden="true"></span>' +
      '<span class="spec">' + esc(label || "Foto følger") + "</span></div></div>";
  }
  function card(p) {
    return '<button class="card reveal" type="button" data-piece="' + esc(p.id) + '">' +
      '<div class="frame">' + (p.images.length ? missingTag(p) : "") + photo(p.images, p.title) + "</div>" +
      '<div class="card-meta"><span class="card-no">Nr. ' + p.no + "</span>" +
      '<span class="card-no">' + month(p.date) + "</span></div>" +
      "<h3>" + esc(p.title) + "</h3>" +
      '<div class="spec">' + esc(p.techniques.join(" · ")) + " — " + esc(p.metal) + "</div></button>";
  }

  /* ---------- nav ---------- */
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) toggle.addEventListener("click", function () {
    var open = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", open);
  });

  /* ---------- featured (home) ---------- */
  var featured = document.getElementById("featured");
  if (featured) {
    featured.innerHTML = PIECES.filter(function (p) { return p.featured; })
      .sort(function (a, b) { return b.date.localeCompare(a.date); }).slice(0, 3).map(card).join("");
  }

  /* ---------- skills ledger (home) ---------- */
  var ledger = document.getElementById("ledger");
  if (ledger) {
    ledger.innerHTML = TECHNIQUES.map(function (t) {
      var n = PIECES.filter(function (p) { return p.techniques.indexOf(t.name) > -1; }).length;
      if (!n) return "";
      return '<li class="reveal"><a href="' + ROOT + "portfolio/?teknik=" + encodeURIComponent(t.name) + '">' +
        '<span class="t">' + esc(t.name) + '</span><span class="d">' + esc(t.desc) + "</span>" +
        '<span class="n">' + n + (n === 1 ? " stykke" : " stykker") + " →</span></a></li>";
    }).join("");
  }

  /* ---------- WIP ---------- */
  function wipBlock(w) {
    var bars = w.steps.map(function (_, i) { return '<i class="' + (i < w.step ? "on" : "") + '"></i>'; }).join("");
    return '<article class="wip reveal" id="' + esc(w.id) + '">' +
      '<div class="frame">' + photo(w.images, w.title, "Foto fra bænken følger") + "</div>" +
      "<div>" +
      '<div class="wip-status spec"><span class="live">På bænken</span><span>Startet ' + month(w.started) + "</span><span>" + esc(w.metal) + "</span></div>" +
      "<h3>" + esc(w.title) + "</h3>" +
      '<div class="progress" style="--steps:' + w.steps.length + '" aria-hidden="true">' + bars + "</div>" +
      '<span class="progress-label spec">Trin ' + w.step + " af " + w.steps.length + " — " + esc(w.steps[w.step - 1]) + "</span>" +
      '<dl class="notes">' +
      "<div><dt>Hvad jeg prøver</dt><dd>" + esc(w.trying) + "</dd></div>" +
      "<div><dt>Hvad gik galt</dt><dd>" + esc(w.wrong) + "</dd></div>" +
      "<div><dt>Næste skridt</dt><dd>" + esc(w.next) + "</dd></div>" +
      "</dl></div></article>";
  }
  var wipEl = document.getElementById("wip");
  if (wipEl) {
    var limit = +wipEl.getAttribute("data-limit") || WIP.length;
    wipEl.innerHTML = WIP.slice(0, limit).map(wipBlock).join("");
  }

  /* ---------- portfolio ---------- */
  var grid = document.getElementById("portfolio-grid");
  if (grid) {
    var chips = document.getElementById("chips");
    var sortSel = document.getElementById("sort");
    var countEl = document.getElementById("count");
    var params = new URLSearchParams(location.search);
    var state = { tech: params.get("teknik") || "Alle", sort: params.get("sorter") || "nyeste" };

    var used = TECHNIQUES.map(function (t) { return t.name; }).filter(function (name) {
      return PIECES.some(function (p) { return p.techniques.indexOf(name) > -1; });
    });
    if (used.indexOf(state.tech) < 0) state.tech = "Alle";
    chips.innerHTML = ["Alle"].concat(used).map(function (name) {
      var n = name === "Alle" ? PIECES.length : PIECES.filter(function (p) { return p.techniques.indexOf(name) > -1; }).length;
      return '<button class="chip" type="button" data-tech="' + esc(name) + '">' + esc(name) + '<span class="c">' + n + "</span></button>";
    }).join("");
    sortSel.value = state.sort;

    var render = function () {
      var list = PIECES.filter(function (p) { return state.tech === "Alle" || p.techniques.indexOf(state.tech) > -1; })
        .sort(function (a, b) { var ad = a.date || "9999", bd = b.date || "9999";
          return state.sort === "aeldste" ? ad.localeCompare(bd) : (b.date || "").localeCompare(a.date || ""); });
      grid.innerHTML = list.length ? list.map(card).join("") : '<p class="empty">Ingen stykker med denne teknik endnu.</p>';
      countEl.textContent = list.length + (list.length === 1 ? " stykke" : " stykker");
      chips.querySelectorAll(".chip").forEach(function (c) { c.setAttribute("aria-pressed", c.getAttribute("data-tech") === state.tech); });
      document.body.classList.toggle("show-progress", state.sort === "aeldste");
      var q = new URLSearchParams();
      if (state.tech !== "Alle") q.set("teknik", state.tech);
      if (state.sort !== "nyeste") q.set("sorter", state.sort);
      history.replaceState(null, "", location.pathname + (q.toString() ? "?" + q : "") + location.hash);
      observe(grid);
    };
    chips.addEventListener("click", function (e) {
      var c = e.target.closest(".chip"); if (!c) return;
      state.tech = c.getAttribute("data-tech"); render();
    });
    sortSel.addEventListener("change", function () { state.sort = sortSel.value; render(); });
    render();
  }

  /* ---------- piece dialog ---------- */
  var dialog = document.getElementById("piece-dialog");
  function openPiece(id, push) {
    var p = PIECES.filter(function (x) { return x.id === id; })[0];
    if (!p || !dialog) return;
    var thumbs = p.images.length > 1 ? '<div class="piece-thumbs">' + p.images.map(function (src, i) {
      return '<button type="button" data-src="' + esc(ROOT + src) + '" aria-current="' + (i === 0) + '" aria-label="Foto ' + (i + 1) + '"><img src="' + esc(ROOT + src) + '" alt=""></button>';
    }).join("") + "</div>" : "";
    dialog.innerHTML = '<div class="piece-inner">' +
      '<div class="piece-media"><div class="frame">' + photo(p.images, p.title) + "</div>" + thumbs + "</div>" +
      '<div class="piece-body"><button class="piece-close" type="button" aria-label="Luk">×</button>' +
      '<span class="card-no">Nr. ' + p.no + " — " + month(p.date) + "</span>" +
      "<h2>" + esc(p.title) + (p.placeholder ? ' <span class="ph-tag">Pladsholder</span>' : "") + "</h2>" +
      (p.missing && p.missing.length ? '<p class="spec" style="color:var(--gold-deep)">Info mangler: ' + esc(p.missing.join(", ")) + "</p>" : "") +
      "<p>" + esc(p.text) + "</p>" +
      '<table class="spec-table"><tbody>' +
      "<tr><th>Teknikker</th><td>" + esc(p.techniques.join(", ")) + "</td></tr>" +
      "<tr><th>Materiale</th><td>" + esc(p.metal) + "</td></tr>" +
      (p.weight ? "<tr><th>Vægt</th><td>" + esc(p.weight) + "</td></tr>" : "") +
      (p.hours ? "<tr><th>Timer ved bænken</th><td>" + esc(p.hours) + "</td></tr>" : "") +
      "<tr><th>Færdig</th><td>" + month(p.date) + "</td></tr>" +
      "</tbody></table>" +
      '<a class="btn btn--ink" href="' + ROOT + 'kontakt/">Tal med mig om læreplads <span class="arr">→</span></a>' +
      "</div></div>";
    dialog.showModal();
    if (push !== false) history.replaceState(null, "", "#" + id);
  }
  if (dialog) {
    document.addEventListener("click", function (e) {
      var c = e.target.closest("[data-piece]");
      if (c) { e.preventDefault(); openPiece(c.getAttribute("data-piece")); }
    });
    dialog.addEventListener("click", function (e) {
      if (e.target === dialog || e.target.closest(".piece-close")) dialog.close();
      var t = e.target.closest(".piece-thumbs button");
      if (t) {
        dialog.querySelector(".piece-media .frame img").src = t.getAttribute("data-src");
        dialog.querySelectorAll(".piece-thumbs button").forEach(function (b) { b.setAttribute("aria-current", b === t); });
      }
    });
    dialog.addEventListener("close", function () {
      if (location.hash) history.replaceState(null, "", location.pathname + location.search);
    });
    if (location.hash.length > 1) openPiece(decodeURIComponent(location.hash.slice(1)), false);
  }

  /* ---------- contact form: opens the visitor's mail app, no server needed ---------- */
  var form = document.getElementById("contact-form");
  if (form) form.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = form.elements;
    var subject = "Læreplads — " + (f.workshop.value || f.name.value);
    var body = f.message.value + "\n\n— " + f.name.value + (f.workshop.value ? "\n" + f.workshop.value : "") + (f.phone.value ? "\nTlf. " + f.phone.value : "");
    location.href = "mailto:" + form.getAttribute("data-to") + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });

  /* ---------- reveal on scroll ---------- */
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { rootMargin: "0px 0px -8% 0px" }) : null;
  function observe(scope) {
    (scope || document).querySelectorAll(".reveal:not(.in)").forEach(function (el) {
      if (io) io.observe(el); else el.classList.add("in");
    });
  }
  observe();

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
