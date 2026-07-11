/* Hypatia Academy — renders CONTENT (content.js) into the page and
   wires up navigation / scroll interactions. Edit copy in content.js,
   not here. */

(function () {
  "use strict";

  function $(id) { return document.getElementById(id); }

  function setText(id, text) {
    const node = $(id);
    if (node && text != null) node.textContent = text;
  }

  function paragraphs(container, lines) {
    if (!container || !lines) return;
    container.innerHTML = lines.map((line) => `<p>${line}</p>`).join("");
  }

  function renderNav() {
    setText("nav-brand", CONTENT.nav.brand);
    setText("footer-brand", CONTENT.nav.brand);

    const links = $("nav-links");
    links.innerHTML = CONTENT.nav.links
      .map((l) => `<li><a href="${l.href}">${l.label}</a></li>`)
      .join("");

    const cta = $("nav-cta");
    cta.href = CONTENT.contact.signupUrl;
    cta.textContent = CONTENT.nav.cta;
  }

  function renderHero() {
    setText("hero-eyebrow", CONTENT.hero.eyebrow);
    setText("hero-title", CONTENT.hero.title);

    const primary = $("hero-cta-primary");
    primary.href = CONTENT.contact.signupUrl;
    primary.textContent = CONTENT.hero.ctaPrimary;

    const secondary = $("hero-cta-secondary");
    secondary.href = CONTENT.contact.youtube;
    secondary.textContent = CONTENT.hero.ctaSecondary;
  }

  function renderIntro() {
    paragraphs($("intro-paragraphs"), CONTENT.intro.paragraphs);
    setText("intro-tagline", CONTENT.intro.tagline);
  }

  function renderCourse() {
    const c = CONTENT.moreThanArduino;
    setText("arduino-title", c.title);
    paragraphs($("arduino-intro"), c.intro);
    $("arduino-fundamentals").innerHTML = c.fundamentals
      .map((f) => `<li>${f}</li>`)
      .join("");
    paragraphs($("arduino-closing"), c.closing);
  }

  function renderLearn() {
    const c = CONTENT.whatStudentsLearn;
    setText("learn-title", c.title);
    $("learn-cards").innerHTML = c.cards
      .map((card) => {
        const body = card.paragraphs.map((p) => `<p>${p}</p>`).join("");
        const items = card.items
          ? `<div class="item-tags">${card.items.map((i) => `<span>${i}</span>`).join("")}</div>`
          : "";
        return `<div class="learn-card"><h3>${card.title}</h3>${body}${items}</div>`;
      })
      .join("");
  }

  function renderDifferent() {
    const c = CONTENT.different;
    setText("different-title", c.title);
    paragraphs($("different-intro"), c.intro);
    $("different-questions").innerHTML = c.questions
      .map((q) => `<li>${q}</li>`)
      .join("");
    setText("different-closing", c.closing);
  }

  function renderInfo() {
    const who = CONTENT.info.whoCanJoin;
    const free = CONTENT.info.free;
    setText("who-title", who.title);
    paragraphs($("who-body"), who.paragraphs);
    setText("free-title", free.title);
    paragraphs($("free-body"), free.paragraphs);
  }

  function renderAbout() {
    const c = CONTENT.about;
    setText("about-title", c.title);
    paragraphs($("about-body"), c.paragraphs);

    const photo = $("instructor-photo");
    photo.src = c.instructor.photo;
    photo.alt = c.instructor.name;
    setText("instructor-name", c.instructor.name);
    setText("instructor-bio", c.instructor.bio);
  }

  function renderPath() {
    const c = CONTENT.path;
    setText("path-title", c.title);
    setText("path-intro", c.intro);
    $("path-steps").innerHTML = c.steps.map((s) => `<li>${s}</li>`).join("");
    setText("path-closing", c.closing);

    $("path-flow").innerHTML = c.flow
      .map((f, i) => {
        const arrow = i < c.flow.length - 1 ? `<span class="arrow">&rarr;</span>` : "";
        return `<span>${f}</span>${arrow}`;
      })
      .join("");
  }

  function renderApply() {
    const c = CONTENT.apply;
    setText("apply-title", c.title);
    setText("apply-intro", c.intro);
    $("apply-details").innerHTML = c.details
      .map((d) => `<dt>${d.label}</dt><dd>${d.value}</dd>`)
      .join("");

    const cta = $("apply-cta");
    cta.href = CONTENT.contact.signupUrl;
    cta.textContent = c.cta;
  }

  const ICONS = {
    whatsapp:
      '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.1 8.1 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1s-.7.8-.9 1c-.2.2-.3.2-.6.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5.3-.4a.5.5 0 0 0 0-.5c-.1-.1-.6-1.5-.8-2s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.3c0 1.3 1 2.6 1.1 2.8.1.2 2 3 4.8 4.3a16 16 0 0 0 1.6.6 3.8 3.8 0 0 0 1.8.1c.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>',
    email:
      '<svg viewBox="0 0 24 24"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 8 8.2-6.2a.5.5 0 0 0-.3-.9H4.1a.5.5 0 0 0-.3.9L12 13zM4 8.4V18h16V8.4l-8 6-8-6z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24"><path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM3.3 8.7h3.3V21H3.3V8.7zM9.6 8.7h3.16v1.68h.05c.44-.83 1.52-1.7 3.13-1.7 3.35 0 3.97 2.2 3.97 5.07V21h-3.3v-6.53c0-1.56-.03-3.56-2.17-3.56-2.17 0-2.5 1.7-2.5 3.45V21H9.6V8.7z"/></svg>'
  };

  function renderContact() {
    const c = CONTENT.contact;
    setText("footer-tagline", CONTENT.footer.tagline);
    setText("footer-copyright", CONTENT.footer.copyright);
    setText("footer-privacy", CONTENT.footer.privacyLink);

    const items = [
      { href: c.whatsapp, label: "WhatsApp", inner: ICONS.whatsapp },
      { href: `mailto:${c.email}`, label: "Email", inner: ICONS.email },
      { href: c.linkedin, label: "LinkedIn", inner: ICONS.linkedin },
      { href: c.youtube, label: "YouTube", inner: '<img src="img/youtube-avatar.jpg" alt="">' }
    ];

    $("footer-contact").innerHTML = items
      .map(
        (i) =>
          `<li><a href="${i.href}" target="_blank" rel="noopener" aria-label="${i.label}">${i.inner}</a></li>`
      )
      .join("");
  }

  function renderAll() {
    document.title = CONTENT.meta.title;
    renderNav();
    renderHero();
    renderIntro();
    renderCourse();
    renderLearn();
    renderDifferent();
    renderInfo();
    renderAbout();
    renderPath();
    renderApply();
    renderContact();
  }

  function initNav() {
    const header = $("site-header");
    const toggle = $("nav-toggle");
    const collapse = $("nav-collapse");

    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 40);
    });

    toggle.addEventListener("click", () => {
      const open = collapse.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    collapse.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        collapse.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initReveal() {
    const targets = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("in-view"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px 200px 0px" }
    );
    targets.forEach((t) => observer.observe(t));
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderAll();
    initNav();
    initReveal();
  });
})();
