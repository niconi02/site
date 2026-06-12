import { jsx, jsxs } from "react/jsx-runtime";
import { h as heroImg } from "./router-wZxGPSU_.js";
import { useMemo, useRef, useState, useEffect } from "react";
import "@tanstack/react-query";
import "@tanstack/react-router";
function HeartParticles({ count = 18 }) {
  const hearts = useMemo(
    () => Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 22,
      duration: 12 + Math.random() * 14,
      delay: Math.random() * 18,
      opacity: 0.35 + Math.random() * 0.5
    })),
    [count]
  );
  return /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", "aria-hidden": "true", children: hearts.map((h) => /* @__PURE__ */ jsx(
    "span",
    {
      className: "heart-float absolute bottom-[-40px]",
      style: {
        left: `${h.left}%`,
        fontSize: `${h.size}px`,
        animationDuration: `${h.duration}s`,
        animationDelay: `${h.delay}s`,
        opacity: h.opacity,
        color: "var(--rose)",
        filter: "drop-shadow(0 0 6px oklch(0.78 0.13 80 / 0.6))"
      },
      children: "❤"
    },
    h.id
  )) });
}
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}
const loveReasons = [
  "Seu sorriso ilumina qualquer dia.",
  "Você faz minha vida mais feliz.",
  "Seu abraço é meu lugar favorito.",
  "Você acredita em mim quando nem eu acredito.",
  "Seu jeito carinhoso me encanta.",
  "Você transforma momentos simples em lembranças inesquecíveis.",
  "Eu amo conversar com você.",
  "Você me faz sentir amada todos os dias.",
  "Sua companhia é tudo o que preciso.",
  "Porque você é você."
];
const url$5 = "/__l5e/assets-v1/19757cac-e3f5-48e7-b9ef-4d168c78df72/g1.jpg";
const g1Asset = {
  url: url$5
};
const url$4 = "/__l5e/assets-v1/3d17e8de-a05f-469e-85a1-506542efac66/g2.jpg";
const g2Asset = {
  url: url$4
};
const url$3 = "/__l5e/assets-v1/8703887a-b4a8-4a08-88b1-d3057ecfbd27/g3.jpg";
const g3Asset = {
  url: url$3
};
const url$2 = "/__l5e/assets-v1/d7a6855f-b918-4daa-ad12-f2690c339809/g4.jpg";
const g4Asset = {
  url: url$2
};
const url$1 = "/__l5e/assets-v1/3d31f910-8b43-423f-bd0e-a57160e8c557/g5.jpg";
const g5Asset = {
  url: url$1
};
const url = "/__l5e/assets-v1/cd1e22da-8288-4112-887a-a3c11527374d/g6.jpg";
const g6Asset = {
  url
};
const g1 = g1Asset.url;
const g2 = g2Asset.url;
const g3 = g3Asset.url;
const g4 = g4Asset.url;
const g5 = g5Asset.url;
const g6 = g6Asset.url;
const RELATIONSHIP_START = /* @__PURE__ */ new Date("2022-03-21T00:00:00");
const gallery = [{
  src: g1,
  alt: "Viajando Juntas",
  span: "row-span-2"
}, {
  src: g2,
  alt: "Abraços quentinhos",
  span: ""
}, {
  src: g3,
  alt: "Praia como sempre kkk",
  span: ""
}, {
  src: g4,
  alt: "Por do sol juntas",
  span: "row-span-2"
}, {
  src: g5,
  alt: "Nossa Familia",
  span: ""
}, {
  src: g6,
  alt: "O grande pedido de casamento",
  span: ""
}];
const timeline = [{
  date: "25 / 01 / 2022",
  title: "Dia em que nos conhecemos ✨",
  text: "Nesse dia nem imaginavamos o que a vida tinha preparado para a gente. Quem diria que uma amor de balada viraria o amor da minha vida ne? haha"
}, {
  date: "21 / 03 / 2022",
  title: "Início do namoro ❤️",
  text: "O dia em que tudo começou — o primeiro 'sim' que mudou nossas vidas. Mesmo com o pedido com o meme do Ronaldinho kkk não poderia ter sido melhor"
}, {
  date: "Junho de 2022",
  title: "Primeira viagem 🌎",
  text: "São Thome das Letras, foi mágico, com certeza umas das melhores viagens que já fizemos."
}, {
  date: "15 / 02 / 2025",
  title: "Nossa nova data 🎂",
  text: "O dia em que você me acordou cedo para ir ver o nascer do sol e quando eu menos esperava, você me pedia em casamento as 05:30 da manhâ"
}];
const dandelionsLyrics = `Maybe it's the way you say my name
Maybe it's the way you play your game
But it's so good, I've never known anybody like you

Maybe it's the way you dance with mine
Tell me secrets that I can't define
And it's so good, I've never dreamed of nobody like you

And honey it's strange that my life changed
In the blink of an eye
You caught my soul on a runaway roll
Look at us now and tell me how I could ever deny

You're in my dreams that's how I know
Oh, dandelions
Hoping for the best, expecting nothing
Sends me a heaven that I can't find on my own
Oh, dandelions...`;
function LoveSite() {
  return /* @__PURE__ */ jsxs("main", { className: "relative min-h-screen overflow-x-hidden romantic-bg text-foreground", children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Gallery, {}),
    /* @__PURE__ */ jsx(Counter, {}),
    /* @__PURE__ */ jsx(LoveLetter, {}),
    /* @__PURE__ */ jsx(Reasons, {}),
    /* @__PURE__ */ jsx(Music, {}),
    /* @__PURE__ */ jsx(Timeline, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative h-[100svh] min-h-[640px] w-full overflow-hidden", children: [
    /* @__PURE__ */ jsx("img", { src: heroImg, alt: "Nós dois", width: 1920, height: 1080, className: "absolute inset-0 h-full w-full object-cover" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
      background: "var(--gradient-hero)"
    } }),
    /* @__PURE__ */ jsx(HeartParticles, { count: 22 }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex h-full flex-col items-center justify-center px-6 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "animate-gentle-fade font-script text-3xl text-[oklch(0.92_0.1_85)] drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] sm:text-4xl md:text-5xl", children: "para sempre" }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-3 animate-gentle-fade text-5xl font-medium leading-[1.05] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] sm:text-6xl md:text-7xl lg:text-8xl", style: {
        animationDelay: "0.15s"
      }, children: [
        "Nossa História ",
        /* @__PURE__ */ jsx("br", {}),
        "de ",
        /* @__PURE__ */ jsx("span", { className: "shimmer-gold", children: "Amor" }),
        " ",
        /* @__PURE__ */ jsx("span", { className: "animate-heartbeat inline-block", children: "❤️" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-2xl animate-gentle-fade text-lg text-white/90 drop-shadow-md sm:text-xl md:text-2xl", style: {
        animationDelay: "0.35s",
        fontFamily: "var(--font-display)"
      }, children: "Cada dia ao seu lado torna minha vida mais feliz." }),
      /* @__PURE__ */ jsxs("a", { href: "#galeria", className: "mt-12 inline-flex animate-gentle-fade items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm text-white backdrop-blur-md transition hover:bg-white/20", style: {
        animationDelay: "0.55s"
      }, children: [
        "Nossa jornada",
        /* @__PURE__ */ jsx("span", { className: "inline-block animate-bounce", children: "↓" })
      ] })
    ] })
  ] });
}
function Gallery() {
  const {
    ref,
    visible
  } = useReveal();
  const [lightbox, setLightbox] = useState(null);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return /* @__PURE__ */ jsxs("section", { id: "galeria", ref, className: "relative px-6 py-24 md:py-32", children: [
    /* @__PURE__ */ jsx(SectionTitle, { eyebrow: "momentos", title: "Nossos Melhores Momentos", emoji: "📸" }),
    /* @__PURE__ */ jsx("div", { className: `mx-auto mt-16 grid max-w-6xl auto-rows-[180px] grid-cols-2 gap-4 transition-all duration-1000 sm:auto-rows-[220px] md:grid-cols-3 md:gap-6 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: gallery.map((g, i) => /* @__PURE__ */ jsxs("button", { onClick: () => setLightbox(i), className: `group relative overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-soft)] ${g.span}`, style: {
      transitionDelay: `${i * 80}ms`
    }, children: [
      /* @__PURE__ */ jsx("img", { src: g.src, alt: g.alt, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
      /* @__PURE__ */ jsx("span", { className: "absolute bottom-3 left-4 translate-y-2 font-script text-2xl text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100", children: g.alt })
    ] }, i)) }),
    lightbox !== null && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6 backdrop-blur animate-gentle-fade", onClick: () => setLightbox(null), children: [
      /* @__PURE__ */ jsx("img", { src: gallery[lightbox].src, alt: gallery[lightbox].alt, className: "max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl" }),
      /* @__PURE__ */ jsx("button", { className: "absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white backdrop-blur hover:bg-white/30", onClick: () => setLightbox(null), "aria-label": "Fechar", children: "✕" })
    ] })
  ] });
}
function Counter() {
  const [t, setT] = useState(() => diff());
  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1e3);
    return () => clearInterval(id);
  }, []);
  function diff() {
    const ms = Date.now() - RELATIONSHIP_START.getTime();
    const s = Math.floor(ms / 1e3);
    return {
      days: Math.floor(s / 86400),
      hours: Math.floor(s % 86400 / 3600),
      minutes: Math.floor(s % 3600 / 60),
      seconds: s % 60
    };
  }
  const items = [{
    label: "Dias",
    value: t.days
  }, {
    label: "Horas",
    value: t.hours
  }, {
    label: "Minutos",
    value: t.minutes
  }, {
    label: "Segundos",
    value: t.seconds
  }];
  return /* @__PURE__ */ jsxs("section", { className: "relative px-6 py-24 md:py-32", children: [
    /* @__PURE__ */ jsx(SectionTitle, { eyebrow: "tempo", title: "Estamos Juntas Há", emoji: "❤️" }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6", children: items.map((it) => /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-2xl border border-[color:var(--blush)] bg-card/70 p-6 text-center shadow-[var(--shadow-soft)] backdrop-blur md:p-8", children: [
      /* @__PURE__ */ jsx("div", { className: "font-display text-5xl font-medium text-gradient-rose md:text-6xl lg:text-7xl tabular-nums", children: String(it.value).padStart(2, "0") }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm uppercase tracking-[0.3em] text-muted-foreground", children: it.label }),
      /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute -right-4 -top-4 text-6xl opacity-10", children: "❤" })
    ] }, it.label)) }),
    /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 max-w-xl text-center text-muted-foreground", style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic"
    }, children: "Desde 21 de março de 2022 — e cada segundo conta uma história nossa." })
  ] });
}
function LoveLetter() {
  const {
    ref,
    visible
  } = useReveal();
  return /* @__PURE__ */ jsxs("section", { className: "relative px-6 py-24 md:py-32", children: [
    /* @__PURE__ */ jsx(SectionTitle, { eyebrow: "carta", title: "Para o Amor da Minha Vida", emoji: "💌" }),
    /* @__PURE__ */ jsx("div", { ref, className: `mx-auto mt-14 max-w-3xl transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`, children: /* @__PURE__ */ jsxs("article", { className: "relative rounded-[2rem] border border-[color:var(--blush)] bg-[oklch(0.99_0.01_60)] p-10 shadow-[var(--shadow-soft)] md:p-14", style: {
      backgroundImage: "radial-gradient(circle at 10% 10%, oklch(0.97 0.04 25 / 0.6), transparent 50%), radial-gradient(circle at 90% 90%, oklch(0.95 0.06 15 / 0.5), transparent 60%)"
    }, children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-6 left-1/2 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full bg-primary text-2xl text-primary-foreground shadow-[var(--shadow-glow)]", children: "❤" }),
      /* @__PURE__ */ jsx("p", { className: "font-script text-4xl text-primary md:text-5xl", children: "Meu amor," }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5 text-lg leading-relaxed text-foreground/85 md:text-xl", style: {
        fontFamily: "var(--font-display)"
      }, children: [
        /* @__PURE__ */ jsx("p", { children: "Se eu pudesse escrever em estrelas tudo o que sinto por você, ainda assim faltaria céu. Você chegou devagarinho e, sem perceber, virou o motivo de cada manhã ser mais bonita." }),
        /* @__PURE__ */ jsx("p", { children: "Obrigada por escolher me amar todos os dias, pelos abraços que curam, pelas conversas que não acabam, pelo silêncio confortável que só nós entendemos." }),
        /* @__PURE__ */ jsx("p", { children: "Quero envelhecer rindo ao seu lado, dividindo cafés, viagens, planos e até as bobagens. Que a vida nos dê tempo — muito tempo — para continuarmos sendo uma da outra." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-10 text-right font-script text-3xl text-primary md:text-4xl", children: "com todo o meu amor." })
    ] }) })
  ] });
}
function Reasons() {
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const recent = useRef([0]);
  const pickNext = () => {
    if (loveReasons.length <= 1) return;
    const memory = Math.min(Math.floor(loveReasons.length / 2), 20);
    let next = index;
    let tries = 0;
    while ((recent.current.includes(next) || next === index) && tries < 50) {
      next = Math.floor(Math.random() * loveReasons.length);
      tries++;
    }
    recent.current = [next, ...recent.current].slice(0, memory);
    setIndex(next);
    setAnimKey((k) => k + 1);
  };
  return /* @__PURE__ */ jsxs("section", { className: "relative px-6 py-24 md:py-32", children: [
    /* @__PURE__ */ jsx(SectionTitle, { eyebrow: "motivos", title: "1000 Motivos Para Te Amar", emoji: "❤️" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-14 max-w-2xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-[color:var(--blush)] bg-card/80 p-10 text-center shadow-[var(--shadow-soft)] backdrop-blur md:p-14", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute -left-6 -top-6 text-8xl opacity-10", children: '"' }),
        /* @__PURE__ */ jsx("span", { className: "absolute -bottom-12 -right-2 text-8xl opacity-10", children: '"' }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground", children: [
          "Motivo nº ",
          index + 1
        ] }),
        /* @__PURE__ */ jsx("p", { className: "animate-gentle-fade font-display text-2xl leading-snug text-foreground md:text-4xl", children: loveReasons[index] }, animKey)
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxs("button", { onClick: pickNext, className: "group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-primary px-8 py-4 text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:scale-105 hover:shadow-[var(--shadow-glow)]", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" }),
        /* @__PURE__ */ jsx("span", { className: "relative font-display text-lg tracking-wide", children: "Clique Aqui" }),
        /* @__PURE__ */ jsx("span", { className: "relative animate-heartbeat", children: "❤️" })
      ] }) }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-center text-sm text-muted-foreground", children: [
        loveReasons.length,
        " motivos cadastrados — e ainda faltam muitos."
      ] })
    ] })
  ] });
}
function Music() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);
  const [error, setError] = useState(false);
  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    try {
      if (playing) {
        a.pause();
        setPlaying(false);
      } else {
        await a.play();
        setPlaying(true);
      }
    } catch {
      setError(true);
    }
  };
  return /* @__PURE__ */ jsxs("section", { className: "relative px-6 py-24 md:py-32", children: [
    /* @__PURE__ */ jsx(SectionTitle, { eyebrow: "trilha sonora", title: "Nossa Música", emoji: "🎵" }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto mt-14 max-w-2xl", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-[color:var(--blush)] bg-gradient-to-br from-[oklch(0.96_0.04_15)] to-[oklch(0.92_0.08_25)] p-8 shadow-[var(--shadow-soft)] md:p-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsx("button", { onClick: toggle, className: "grid h-20 w-20 shrink-0 place-items-center rounded-full bg-primary text-3xl text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-110", "aria-label": playing ? "Pausar" : "Tocar", children: playing ? "❚❚" : "▶" }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-primary", children: "Nossa canção" }),
          /* @__PURE__ */ jsx("h3", { className: "truncate font-display text-2xl font-medium md:text-3xl", children: "Dandelions" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Ruth B." }),
          /* @__PURE__ */ jsx("div", { className: "mt-3 flex h-6 items-end gap-1", children: Array.from({
            length: 24
          }).map((_, i) => /* @__PURE__ */ jsx("span", { className: `block w-1 rounded-full bg-primary/70 ${playing ? "animate-wave" : ""}`, style: {
            height: `${20 + i * 13 % 80}%`,
            animationDelay: `${i % 8 * 0.08}s`
          } }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("audio", { ref: audioRef, src: "/music/dandelions.mp3", preload: "none", onEnded: () => setPlaying(false), onError: () => setError(true) }),
      error && /* @__PURE__ */ jsxs("p", { className: "mt-4 rounded-xl bg-white/60 p-3 text-xs text-muted-foreground", children: [
        "Adicione o arquivo ",
        /* @__PURE__ */ jsx("code", { children: "public/music/dandelions.mp3" }),
        " para tocar a nossa canção aqui."
      ] }),
      /* @__PURE__ */ jsxs("button", { onClick: () => setShowLyrics((s) => !s), className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline", children: [
        showLyrics ? "Esconder letra" : "Mostrar letra",
        /* @__PURE__ */ jsx("span", { className: `transition-transform ${showLyrics ? "rotate-180" : ""}`, children: "⌄" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `grid transition-all duration-500 ${showLyrics ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`, children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("pre", { className: "whitespace-pre-wrap rounded-2xl bg-white/60 p-5 font-display text-base leading-relaxed text-foreground/80", children: dandelionsLyrics }) }) })
    ] }) })
  ] });
}
function Timeline() {
  return /* @__PURE__ */ jsxs("section", { className: "relative px-6 py-24 md:py-32", children: [
    /* @__PURE__ */ jsx(SectionTitle, { eyebrow: "jornada", title: "Nossa Jornada", emoji: "❤️" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto mt-16 max-w-3xl", children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:left-1/2" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-12", children: timeline.map((item, i) => /* @__PURE__ */ jsx(TimelineItem, { item, side: i % 2 === 0 ? "left" : "right" }, i)) })
    ] })
  ] });
}
function TimelineItem({
  item,
  side
}) {
  const {
    ref,
    visible
  } = useReveal(0.2);
  return /* @__PURE__ */ jsxs("div", { ref, className: `relative grid grid-cols-[2rem_1fr] gap-4 md:grid-cols-2 md:gap-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: [
    /* @__PURE__ */ jsx("span", { className: "absolute left-4 top-3 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full bg-primary shadow-[var(--shadow-glow)] md:left-1/2" }),
    /* @__PURE__ */ jsx("div", { className: `md:col-span-1 ${side === "right" ? "md:order-2" : ""}`, children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-[color:var(--blush)] bg-card/80 p-6 shadow-[var(--shadow-soft)] backdrop-blur md:p-7", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: item.date }),
      /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display text-2xl font-medium", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-foreground/75", style: {
        fontFamily: "var(--font-display)"
      }, children: item.text })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:block" })
  ] });
}
function Footer() {
  const sparkles = useMemo(() => Array.from({
    length: 14
  }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 4,
    size: 10 + Math.random() * 14
  })), []);
  return /* @__PURE__ */ jsxs("footer", { className: "relative overflow-hidden px-6 py-24 text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[oklch(0.92_0.08_25_/_0.5)] to-[oklch(0.85_0.12_15_/_0.4)]" }),
    sparkles.map((s) => /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute animate-sparkle text-[color:var(--gold)]", style: {
      left: `${s.left}%`,
      top: `${s.top}%`,
      fontSize: `${s.size}px`,
      animationDelay: `${s.delay}s`
    }, children: "✦" }, s.id)),
    /* @__PURE__ */ jsxs("p", { className: "font-script text-4xl text-primary md:text-6xl", children: [
      "Eu te amarei hoje, amanhã ",
      /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
      " e para sempre."
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 inline-block animate-heartbeat text-3xl", children: "❤️" }),
    /* @__PURE__ */ jsx("p", { className: "mt-8 text-xs uppercase tracking-[0.4em] text-muted-foreground", children: "feito com amor — para você" })
  ] });
}
function SectionTitle({
  eyebrow,
  title,
  emoji
}) {
  const {
    ref,
    visible
  } = useReveal(0.3);
  return /* @__PURE__ */ jsxs("div", { ref, className: `mx-auto max-w-3xl text-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`, children: [
    /* @__PURE__ */ jsx("p", { className: "font-script text-3xl text-primary md:text-4xl", children: eyebrow }),
    /* @__PURE__ */ jsxs("h2", { className: "mt-2 font-display text-4xl font-medium leading-tight md:text-5xl lg:text-6xl", children: [
      title,
      " ",
      /* @__PURE__ */ jsx("span", { className: "inline-block", children: emoji })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "h-px w-12 bg-primary/40" }),
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: "❦" }),
      /* @__PURE__ */ jsx("span", { className: "h-px w-12 bg-primary/40" })
    ] })
  ] });
}
export {
  LoveSite as component
};
