import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import SalesNotifications from "@/components/SalesNotifications";
import founderImg from "@/assets/founder.jpg";
import heroImg from "@/assets/hero-mockup.png";
import workingImg from "@/assets/electrician-working.jpg";
import test1Img from "@/assets/testimonial-1.png";
import test2Img from "@/assets/testimonial-2.png";
import test3Img from "@/assets/testimonial-3.png";
import test4Img from "@/assets/testimonial-4.png";
import test5Img from "@/assets/testimonial-5.png";
import bonus1Img from "@/assets/bonus-1.png";
import bonus2Img from "@/assets/bonus-2.png";
import bonus3Img from "@/assets/bonus-3.png";
import bonus4Img from "@/assets/bonus-4.png";
import bonus5Img from "@/assets/bonus-5.png";
import garantiaImg from "@/assets/garantia-30dias.png";
import step1Img from "@/assets/step-1.png";
import step2Img from "@/assets/step-2.png";
import step3Img from "@/assets/step-3.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "OrçaElétrico Pro — Orçamentos para Eletricistas em Segundos" },
      { name: "description", content: "Calcule fio, disjuntor, tomadas e seu lucro em segundos. Gere orçamentos em PDF profissionais direto do celular." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@400;500;600;700;800;900&display=swap" },
    ],
  }),
});

const PAGE_CSS = `
:root {
  --yellow: #FFD60A;
  --yellow-dark: #E6BC00;
  --navy: #0A0E1A;
  --navy2: #111827;
  --navy3: #1a2236;
  --white: #FFFFFF;
  --gray: #8B95A8;
  --gray-light: #E8ECF4;
  --success: #22C55E;
  --danger: #EF4444;
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Outfit', sans-serif;
  background: #fff;
  color: var(--navy);
  overflow-x: hidden;
  line-height: 1.6;
}
.display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }

/* ── UTILITIES ── */
.container { max-width: 1100px; margin: 0 auto; padding: 0 1.25rem; }
.section-tag {
  display: inline-flex; align-items: center; gap: 6px;
  background: var(--yellow); color: var(--navy);
  font-size: 11px; font-weight: 800; letter-spacing: .18em;
  text-transform: uppercase; padding: 6px 16px; border-radius: 99px;
  margin-bottom: 1.25rem;
}
.check-icon { color: var(--success); flex-shrink: 0; }
.x-icon { color: var(--danger); flex-shrink: 0; }

/* ── HERO ── */
header {
  background: var(--navy);
  padding: 3.5rem 0 0;
  position: relative;
  overflow: hidden;
}
header::before {
  content: '';
  position: absolute; inset: 0;
  background-image: radial-gradient(rgba(255,214,10,.06) 1px, transparent 1px);
  background-size: 36px 36px;
  pointer-events: none;
}
header::after {
  content: '';
  position: absolute;
  top: -200px; right: -200px;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(255,214,10,.12) 0%, transparent 70%);
  pointer-events: none;
}
.hero-inner { text-align: center; position: relative; z-index: 2; }
.hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,214,10,.12); border: 1px solid rgba(255,214,10,.3);
  color: var(--yellow); font-size: 11px; font-weight: 800;
  letter-spacing: .2em; text-transform: uppercase;
  padding: 7px 20px; border-radius: 99px; margin-bottom: 1.75rem;
}
.bolt-inline {
  display: inline-block; width: 14px; height: 14px;
}
.hero-h1 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.6rem, 7vw, 5.5rem);
  line-height: 1.0;
  color: var(--white);
  letter-spacing: .03em;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}
.hero-h1 em { color: var(--yellow); font-style: normal; }
.hero-sub {
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: rgba(255,255,255,.72);
  max-width: 680px;
  margin: 0 auto 2.5rem;
  font-weight: 500;
  line-height: 1.65;
}
.btn-primary {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  background: var(--yellow); color: var(--navy);
  font-family: 'Outfit', sans-serif;
  font-size: 1.2rem; font-weight: 900;
  padding: 1.1rem 2.8rem; border-radius: 99px;
  text-decoration: none; border: none; cursor: pointer;
  transition: transform .15s, background .15s;
  text-transform: uppercase; letter-spacing: .05em;
  box-shadow: 0 0 40px rgba(255,214,10,.35);
}
.btn-primary:hover { background: var(--yellow-dark); transform: scale(1.04); }
.btn-primary:active { transform: scale(.97); }
.btn-dark {
  background: var(--navy); color: var(--white);
  box-shadow: 0 8px 32px rgba(0,0,0,.25);
}
.btn-dark:hover { background: #1a2236; transform: scale(1.04); }

.hero-checks {
  display: flex; flex-wrap: wrap; justify-content: center;
  gap: 1rem 2rem; margin-top: 2.5rem;
  font-size: .75rem; font-weight: 700; color: rgba(255,255,255,.45);
  text-transform: uppercase; letter-spacing: .15em;
}
.hero-checks span { display: flex; align-items: center; gap: 5px; }
.hero-checks svg { color: var(--success); }

.mockup-wrap {
  margin: 3rem auto 0;
  max-width: 820px;
  position: relative;
  z-index: 2;
}
.mockup-screen {
  background: var(--navy2);
  border-radius: 24px 24px 0 0;
  border: 1.5px solid rgba(255,255,255,.08);
  border-bottom: none;
  padding: 2rem 1.5rem 3rem;
  position: relative;
  overflow: hidden;
}
.mockup-screen::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--yellow), transparent);
}
.mockup-bar {
  display: flex; align-items: center; gap: 8px;
  margin-bottom: 1.5rem;
}
.mockup-dot { width: 10px; height: 10px; border-radius: 50%; }
.mock-app {
  background: #1C2538;
  border-radius: 16px; padding: 1.25rem;
  border: 1px solid rgba(255,255,255,.06);
}
.mock-title {
  font-size: .7rem; font-weight: 700; color: var(--yellow);
  text-transform: uppercase; letter-spacing: .15em; margin-bottom: .75rem;
}
.mock-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 1rem; }
.mock-field {
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 8px; padding: .6rem .9rem;
}
.mock-field-label { font-size: 9px; color: var(--gray); text-transform: uppercase; letter-spacing: .1em; }
.mock-field-val { font-size: 13px; font-weight: 600; color: #fff; margin-top: 2px; }
.mock-result {
  background: linear-gradient(135deg, rgba(255,214,10,.12), rgba(255,214,10,.04));
  border: 1px solid rgba(255,214,10,.2);
  border-radius: 12px; padding: 1rem 1.25rem;
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;
}
.mock-stat-label { font-size: 9px; color: rgba(255,255,255,.45); text-transform: uppercase; letter-spacing: .1em; }
.mock-stat-val { font-size: 1.05rem; font-weight: 800; color: var(--yellow); margin-top: 3px; }
.mock-btn-row { margin-top: 1rem; display: flex; gap: 8px; }
.mock-btn {
  flex: 1; border-radius: 8px; padding: .55rem;
  font-size: 11px; font-weight: 700; text-align: center; border: none;
}
.mock-btn-y { background: var(--yellow); color: var(--navy); }
.mock-btn-o { background: rgba(255,255,255,.07); color: rgba(255,255,255,.7); border: 1px solid rgba(255,255,255,.1); }

/* ── DORES ── */
.dores-section { background: #F8F9FC; padding: 5rem 0; }
.section-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.05;
  text-transform: uppercase;
  letter-spacing: .02em;
  margin-bottom: 1rem;
}
.section-title em { color: var(--yellow-dark); font-style: normal; }
.divider { width: 48px; height: 4px; background: var(--yellow); border-radius: 2px; margin: 0 auto 3rem; }
.dores-grid { display: grid; gap: 12px; max-width: 760px; margin: 0 auto; }
.dor-card {
  display: flex; align-items: center; gap: 1.25rem;
  background: #fff; border: 1px solid #E8ECF4;
  border-radius: 20px; padding: 1.1rem 1.4rem;
  transition: box-shadow .2s, transform .2s;
}
.dor-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,.06); transform: translateY(-2px); }
.dor-icon {
  font-size: 1.75rem; width: 52px; height: 52px;
  background: #F1F4FA; border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.dor-text { font-weight: 700; font-size: 1rem; color: #4B5A72; line-height: 1.4; }
.dores-close {
  text-align: center; margin-top: 2.5rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.6rem; letter-spacing: .05em; color: var(--navy);
}

/* ── PRODUTO ── */
.produto-section { padding: 5rem 0; background: #fff; }
.features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 3rem; }
.feat-card {
  background: #F8F9FC; border-radius: 28px; padding: 2rem;
  text-align: center; border: 1px solid #E8ECF4;
  transition: background .2s, box-shadow .2s;
}
.feat-card:hover { background: #fff; box-shadow: 0 12px 40px rgba(0,0,0,.07); }
.feat-icon-wrap {
  width: 56px; height: 56px; background: var(--navy);
  border-radius: 16px; display: flex; align-items: center;
  justify-content: center; margin: 0 auto 1.25rem;
}
.feat-icon-wrap svg { color: var(--yellow); }
.feat-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem; letter-spacing: .05em;
  margin-bottom: .5rem; color: var(--navy);
}
.feat-desc { color: #6B7A93; font-size: .95rem; font-weight: 500; }

/* ── HOW IT WORKS ── */
.how-section { padding: 5rem 0; background: #fff; }
.steps-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2.5rem; margin-top: 3.5rem; }
.step-card { text-align: center; }
.step-num {
  display: inline-flex; align-items: center; justify-content: center;
  width: 36px; height: 36px; background: rgba(255,214,10,.15);
  color: var(--yellow-dark); border-radius: 10px;
  font-size: .7rem; font-weight: 800; letter-spacing: .12em;
  text-transform: uppercase; margin-bottom: 1rem;
}
.step-phone {
  background: var(--navy);
  border-radius: 32px; padding: 12px;
  max-width: 220px; margin: 0 auto 1.5rem;
  border: 2px solid rgba(255,255,255,.06);
  position: relative;
}
.step-phone::before {
  content: ''; position: absolute;
  top: 10px; left: 50%; transform: translateX(-50%);
  width: 48px; height: 4px;
  background: rgba(255,255,255,.12); border-radius: 2px;
}
.step-screen {
  background: var(--navy2); border-radius: 20px;
  padding: 1rem .75rem; min-height: 180px;
  display: flex; flex-direction: column; gap: 8px;
}
.step-shot {
  background: var(--navy2); border-radius: 20px;
  overflow: hidden; display: block;
}
.step-shot img { width: 100%; height: auto; display: block; }
.step-screen-label {
  font-size: 9px; font-weight: 700; color: var(--yellow);
  letter-spacing: .14em; text-transform: uppercase;
}
.mini-field {
  background: rgba(255,255,255,.06); border-radius: 8px;
  padding: 6px 10px; display: flex; flex-direction: column; gap: 2px;
}
.mini-field span:first-child { font-size: 8px; color: var(--gray); text-transform: uppercase; }
.mini-field span:last-child { font-size: 11px; font-weight: 600; color: #fff; }
.mini-result {
  background: rgba(255,214,10,.1); border: 1px solid rgba(255,214,10,.2);
  border-radius: 8px; padding: 8px 10px;
  display: flex; justify-content: space-between; align-items: center;
}
.mini-result-label { font-size: 9px; color: rgba(255,255,255,.5); }
.mini-result-val { font-size: 13px; font-weight: 800; color: var(--yellow); }
.mini-pdf {
  background: rgba(255,255,255,.05); border-radius: 8px;
  padding: 8px 10px; display: flex; align-items: center; gap: 8px;
}
.mini-pdf-icon { font-size: 18px; }
.mini-pdf-text { font-size: 10px; font-weight: 600; color: rgba(255,255,255,.7); }
.step-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.6rem; letter-spacing: .04em;
  margin-bottom: .4rem; color: var(--navy);
}
.step-desc { color: #6B7A93; font-weight: 500; font-size: .95rem; max-width: 220px; margin: 0 auto; }

/* ── RECEBE ── */
.recebe-section { background: var(--navy); padding: 5rem 0; position: relative; overflow: hidden; }
.recebe-section::before {
  content: '';
  position: absolute; top: -200px; left: -200px;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(255,214,10,.08) 0%, transparent 70%);
  pointer-events: none;
}
.recebe-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 2.5rem; }
@media (max-width: 600px) { .recebe-grid { grid-template-columns: 1fr; } }
.recebe-item {
  display: flex; gap: 12px; padding: 1rem 1.1rem;
  background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.07);
  border-radius: 14px; transition: background .2s;
}
.recebe-item:hover { background: rgba(255,255,255,.08); }
.recebe-check {
  width: 22px; height: 22px; background: rgba(255,214,10,.15);
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; margin-top: 1px;
}
.recebe-check svg { color: var(--yellow); width: 12px; height: 12px; }
.recebe-text { font-size: .9rem; font-weight: 600; color: rgba(255,255,255,.85); line-height: 1.4; }

/* ── COMPARAÇÃO ── */
.comp-section { padding: 5rem 0; background: #fff; }
.comp-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  background: #F8F9FC; border-radius: 40px;
  overflow: hidden; border: 1px solid #E8ECF4;
  box-shadow: 0 20px 60px rgba(0,0,0,.08);
}
@media (max-width: 640px) { .comp-grid { grid-template-columns: 1fr; } }
.comp-col { padding: 2.5rem 2rem; }
.comp-col-right { background: var(--navy); position: relative; overflow: hidden; }
.comp-col-right::after {
  content: ''; position: absolute;
  bottom: -100px; right: -100px;
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(255,214,10,.12), transparent 70%);
}
.comp-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem; padding-bottom: 1.25rem; border-bottom: 1px solid rgba(255,255,255,.1); }
.comp-header-left { border-bottom-color: #E8ECF4; }
.comp-badge { width: 52px; height: 52px; border-radius: 16px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.comp-badge-bad { background: #FEF2F2; }
.comp-badge-good { background: var(--success); box-shadow: 0 8px 24px rgba(34,197,94,.3); }
.comp-scenario { font-size: .7rem; font-weight: 800; letter-spacing: .15em; text-transform: uppercase; }
.comp-scenario-bad { color: var(--danger); }
.comp-scenario-good { color: var(--success); }
.comp-title {
  font-family: 'Bebas Neue', sans-serif; font-size: 1.8rem;
  letter-spacing: .04em; color: var(--navy);
}
.comp-title-white { color: #fff; }
.comp-list { display: flex; flex-direction: column; gap: 10px; }
.comp-item {
  display: flex; align-items: flex-start; gap: 1rem;
  padding: .75rem 1rem; border-radius: 14px;
  background: rgba(255,255,255,.5); border: 1px solid transparent;
  transition: all .2s;
}
.comp-item:hover { border-color: #E8ECF4; background: #fff; }
.comp-item-dark {
  background: rgba(255,255,255,.04); border-color: rgba(255,255,255,.05);
}
.comp-item-dark:hover { background: rgba(255,255,255,.08); border-color: rgba(255,214,10,.2); }
.comp-emoji { font-size: 1.4rem; flex-shrink: 0; }
.comp-item-text { font-weight: 700; color: #5A6A82; font-size: .95rem; line-height: 1.35; }
.comp-item-text-white { color: rgba(255,255,255,.88); }

/* ── BÔNUS ── */
.bonus-section { padding: 5rem 0; background: var(--navy); position: relative; overflow: hidden; }
.bonus-section::before {
  content: ''; position: absolute;
  top: -150px; right: -150px; width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(255,214,10,.08), transparent 70%);
}
.bonus-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; margin-top: 3rem; }
.bonus-card { display: flex; flex-direction: column; align-items: center; text-align: center; gap: .75rem; }
.bonus-img-wrap {
  width: 100%; background: #fff;
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 20px; padding: .5rem;
  display: flex; align-items: center; justify-content: center;
  min-height: 200px; margin-bottom: .25rem;
  overflow: hidden;
}
.bonus-img-wrap img { width: 100%; height: auto; display: block; border-radius: 12px; }
.bonus-mockup {
  width: 100%; max-width: 140px; background: #1C2538;
  border-radius: 12px; padding: 1rem;
  border: 1px solid rgba(255,255,255,.1);
}
.bonus-mockup-title { font-size: 7px; font-weight: 700; color: var(--yellow); text-transform: uppercase; letter-spacing: .12em; margin-bottom: .5rem; }
.bonus-mockup-line { height: 5px; background: rgba(255,255,255,.08); border-radius: 3px; margin-bottom: 4px; }
.bonus-mockup-line.short { width: 65%; }
.bonus-mockup-line.med { width: 82%; }
.bonus-name { font-weight: 700; color: #fff; font-size: .9rem; line-height: 1.35; max-width: 180px; }
.bonus-price { font-size: .8rem; font-weight: 700; color: var(--danger); text-decoration: line-through; }
.bonus-free { font-size: 1rem; font-weight: 900; color: var(--success); text-transform: uppercase; }
.bonus-total {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  background: rgba(255,255,255,.04); border: 2px dashed rgba(255,255,255,.15);
  border-radius: 20px; padding: 1.5rem; min-height: 140px;
  gap: .5rem;
}
.bonus-total-label { font-size: .7rem; font-weight: 800; text-transform: uppercase; letter-spacing: .15em; color: var(--success); }
.bonus-total-val { font-family: 'Bebas Neue', sans-serif; font-size: 3.5rem; color: #fff; line-height: 1; }
.bonus-total-old { font-size: .8rem; font-weight: 700; color: var(--danger); text-decoration: line-through; }

/* ── PRICING ── */
.pricing-section { padding: 5rem 0; background: #fff; }
.plans-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 2rem; max-width: 860px; margin: 3.5rem auto 0;
  align-items: stretch;
}
@media (max-width: 600px) { .plans-grid { grid-template-columns: 1fr; } }
.plan-card {
  border-radius: 28px; padding: 2.25rem 2rem;
  border: 1px solid #E8ECF4; position: relative;
  display: flex; flex-direction: column;
}
.plan-card-featured {
  background: var(--navy); border-color: transparent;
  box-shadow: 0 24px 80px rgba(10,14,26,.25);
  transform: scale(1.025);
}
.plan-featured-badge {
  position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
  background: var(--yellow); color: var(--navy);
  font-size: .7rem; font-weight: 900; letter-spacing: .15em;
  text-transform: uppercase; padding: 5px 20px; border-radius: 99px;
  white-space: nowrap;
}
.plan-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.8rem; letter-spacing: .05em;
  margin-bottom: 4px;
}
.plan-name-white { color: #fff; }
.plan-tag { font-size: .7rem; font-weight: 700; color: var(--gray); text-transform: uppercase; letter-spacing: .12em; margin-bottom: 1.5rem; }
.plan-tag-white { color: rgba(255,255,255,.45); }
.plan-items { display: flex; flex-direction: column; gap: .75rem; flex: 1; margin-bottom: 1.75rem; }
.plan-item { display: flex; gap: 10px; align-items: flex-start; font-size: .9rem; font-weight: 600; }
.plan-item-white { color: rgba(255,255,255,.85); }
.plan-item-gray { color: #5A6A82; }
.plan-icon { width: 18px; height: 18px; flex-shrink: 0; margin-top: 1px; }
.plan-price { margin-bottom: 1.5rem; }
.plan-price-old { font-size: .9rem; font-weight: 700; color: var(--danger); text-decoration: line-through; margin-bottom: 2px; }
.plan-price-val { font-family: 'Bebas Neue', sans-serif; font-size: 3.2rem; line-height: 1; color: var(--navy); letter-spacing: .02em; }
.plan-price-val-white { color: #fff; }
.plan-price-period { font-size: .7rem; font-weight: 800; letter-spacing: .15em; text-transform: uppercase; color: var(--gray); }
.plan-price-period-yellow { color: var(--yellow); }

/* ── PROVA SOCIAL ── */
.social-section { background: #F8F9FC; padding: 5rem 0; }
.testimonials { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.25rem; margin-top: 3rem; }
.testimonial {
  background: #fff; border-radius: 20px; padding: 1.5rem;
  border: 1px solid #E8ECF4;
}
.test-stars { color: var(--yellow-dark); font-size: 1.1rem; margin-bottom: .75rem; letter-spacing: 2px; }
.test-text { font-size: .95rem; font-weight: 500; color: #4B5A72; line-height: 1.55; margin-bottom: 1rem; }
.test-author { display: flex; align-items: center; gap: 10px; }
.test-avatar {
  width: 44px; height: 44px; border-radius: 50%;
  background: var(--navy); display: flex; align-items: center;
  justify-content: center; font-weight: 800; font-size: .85rem;
  color: var(--yellow); flex-shrink: 0; overflow: hidden;
}
.test-avatar img { width: 100%; height: 100%; object-fit: cover; object-position: center top; display: block; }
.test-name { font-weight: 700; font-size: .9rem; }
.test-role { font-size: .8rem; color: var(--gray); }

/* ── TESTIMONIAL CAROUSEL ── */
.test-carousel { position: relative; margin-top: 3rem; max-width: 480px; margin-left: auto; margin-right: auto; }
.test-track { overflow: hidden; border-radius: 24px; background: #0A0E1A; box-shadow: 0 20px 60px rgba(0,0,0,.15); display: flex; scroll-snap-type: x mandatory; scroll-behavior: smooth; }
.test-slide { flex: 0 0 100%; scroll-snap-align: start; display: flex; align-items: center; justify-content: center; }
.test-slide img { width: 100%; height: auto; display: block; }
.test-row { margin-top: 3rem; display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; max-width: 1200px; margin-left: auto; margin-right: auto; }
.test-item { border-radius: 16px; overflow: hidden; background: #0A0E1A; box-shadow: 0 12px 32px rgba(0,0,0,.18); }
.test-item img { width: 100%; height: auto; display: block; }
@media (max-width: 900px) { .test-row { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 520px) { .test-row { grid-template-columns: 1fr; max-width: 360px; } }
.test-nav {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 44px; height: 44px; border-radius: 50%;
  background: var(--yellow); color: var(--navy);
  border: none; cursor: pointer; font-size: 1.8rem; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 6px 20px rgba(0,0,0,.2); z-index: 3; line-height: 1;
}
.test-prev { left: -22px; }
.test-next { right: -22px; }
.test-nav:hover { background: var(--yellow-dark); }
.test-dots { display: flex; gap: 8px; justify-content: center; margin-top: 1.25rem; }
.test-dots button {
  width: 10px; height: 10px; border-radius: 50%;
  background: #D0D6E0; border: none; cursor: pointer; padding: 0;
  transition: all .25s;
}
.test-dots button.active { background: var(--yellow-dark); width: 26px; border-radius: 5px; }
@media (max-width: 540px) {
  .test-prev { left: 4px; }
  .test-next { right: 4px; }
}

/* ── GARANTIA ── */
.garantia-section { padding: 5rem 0; background: #F8F9FC; }
.garantia-inner {
  display: flex; align-items: center; gap: 4rem;
  background: #fff; border-radius: 40px; padding: 3.5rem 4rem;
  border: 1px solid #E8ECF4; box-shadow: 0 20px 60px rgba(0,0,0,.06);
  flex-wrap: wrap;
}
.garantia-badge {
  width: 200px; height: 200px; background: var(--navy);
  border-radius: 50%; display: flex; align-items: center;
  justify-content: center; flex-direction: column; flex-shrink: 0;
  position: relative;
}
.garantia-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 6.5rem; color: var(--yellow); line-height: 1;
}
.garantia-sub { font-size: .65rem; font-weight: 800; color: rgba(255,255,255,.5); text-transform: uppercase; letter-spacing: .2em; }
.garantia-ring {
  position: absolute; inset: -8px;
  border: 2px dashed rgba(255,214,10,.3); border-radius: 50%;
}
.garantia-content { flex: 1; min-width: 260px; }
.garantia-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  line-height: 1.1; letter-spacing: .03em;
  color: var(--navy); margin-bottom: 1rem;
}
.garantia-title em { color: var(--yellow-dark); font-style: normal; }
.garantia-bar { width: 48px; height: 4px; background: var(--yellow); border-radius: 2px; margin-bottom: 1rem; }
.garantia-text { font-size: 1rem; font-weight: 500; color: #5A6A82; line-height: 1.65; }
.garantia-badge-img { width: 220px; height: 220px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; filter: drop-shadow(0 12px 28px rgba(0,0,0,.25)); animation: garantiaPulse 3s ease-in-out infinite; }
.garantia-badge-img img { width: 100%; height: 100%; object-fit: contain; }
@keyframes garantiaPulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.04); } }

/* ── FUNDADOR ── */
.fundador-section { padding: 5rem 0; background: #fff; border-top: 1px solid #E8ECF4; }
.fundador-inner { display: flex; align-items: flex-start; gap: 4rem; flex-wrap: wrap; }
.fundador-photo {
  width: 300px; flex-shrink: 0;
  background: var(--navy2); border-radius: 32px;
  overflow: hidden; aspect-ratio: 3/4;
  display: flex; align-items: flex-end;
  position: relative;
}
.fundador-placeholder {
  width: 100%; height: 100%; background: linear-gradient(160deg, #1a2236, #0f1422);
  display: flex; align-items: center; justify-content: center;
  font-size: 5rem; color: rgba(255,255,255,.06);
}
.fundador-badge-overlay {
  position: absolute; bottom: 1rem; left: 1rem; right: 1rem;
  background: rgba(10,14,26,.85); border-radius: 12px;
  padding: .75rem 1rem; backdrop-filter: blur(10px);
}
.fundador-badge-name { font-weight: 800; color: #fff; font-size: 1rem; }
.fundador-badge-role { font-size: .75rem; color: var(--yellow); font-weight: 600; }
.fundador-content { flex: 1; min-width: 260px; }
.fundador-eyebrow { font-size: .7rem; font-weight: 800; color: var(--yellow-dark); text-transform: uppercase; letter-spacing: .18em; margin-bottom: .5rem; }
.fundador-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  letter-spacing: .03em; color: var(--navy);
  line-height: 1.05; margin-bottom: .25rem;
}
.fundador-role { color: var(--yellow-dark); font-weight: 700; font-size: 1rem; margin-bottom: 2rem; }
.fundador-text { font-size: 1rem; font-weight: 500; color: #5A6A72; line-height: 1.7; margin-bottom: 1rem; }
.fundador-quote {
  background: #F8F9FC; border-left: 4px solid var(--yellow);
  padding: 1.25rem 1.5rem; border-radius: 0 16px 16px 0;
  margin-top: 1.5rem;
}
.fundador-quote p { font-weight: 800; color: var(--navy); font-size: 1rem; font-style: italic; line-height: 1.5; }

/* ── FAQ ── */
.faq-section { padding: 5rem 0; background: #F8F9FC; }
.faq-list { max-width: 700px; margin: 3rem auto 0; display: flex; flex-direction: column; gap: 10px; }
.faq-item {
  background: #fff; border: 1px solid #E8ECF4;
  border-radius: 16px; overflow: hidden;
}
.faq-q {
  width: 100%; display: flex; align-items: center;
  justify-content: space-between; gap: 1rem;
  padding: 1.1rem 1.4rem; background: none; border: none;
  cursor: pointer; text-align: left;
}
.faq-q-text { font-weight: 700; font-size: 1rem; color: var(--navy); }
.faq-icon {
  width: 30px; height: 30px; border-radius: 50%;
  background: #F1F4FA; display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; transition: background .2s, transform .3s;
}
.faq-item.open .faq-icon { background: var(--yellow); transform: rotate(45deg); }
.faq-a { display: none; padding: 0 1.4rem 1.25rem; font-size: .95rem; color: #5A6A72; font-weight: 500; line-height: 1.65; }
.faq-item.open .faq-a { display: block; }
.faq-cta { text-align: center; margin-top: 3rem; }

/* ── FOOTER ── */
footer {
  background: var(--navy); padding: 3rem 0 1.5rem;
  color: rgba(255,255,255,.5); font-size: .85rem;
}
.footer-inner {
  display: flex; justify-content: space-between;
  align-items: center; flex-wrap: wrap; gap: 1.5rem;
  margin-bottom: 2rem; padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255,255,255,.06);
}
.footer-logo {
  display: flex; align-items: center; gap: 8px;
}
.footer-logo-icon {
  width: 32px; height: 32px; background: var(--yellow);
  border-radius: 8px; display: flex; align-items: center; justify-content: center;
}
.footer-logo-text {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.3rem; letter-spacing: .05em; color: #fff;
}
.footer-logo-text span { color: var(--yellow); }
.footer-tagline { font-size: .75rem; color: rgba(255,255,255,.3); margin-top: 4px; }
.footer-security { display: flex; align-items: center; gap: 6px; font-size: .72rem; font-weight: 700; text-transform: uppercase; letter-spacing: .12em; }
.footer-copy { text-align: center; font-size: .72rem; color: rgba(255,255,255,.2); text-transform: uppercase; letter-spacing: .1em; }

/* ── BOLT SVG ── */
.bolt-bg {
  position: absolute; opacity: .04; pointer-events: none;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22rem; color: var(--yellow);
  line-height: 1; user-select: none;
}

@media (max-width: 768px) {
  .fundador-photo { width: 100%; max-width: 320px; margin: 0 auto; }
  .garantia-inner { flex-direction: column; align-items: center; padding: 2.5rem 1.5rem; }
  .comp-col { padding: 2rem 1.25rem; }
  .plans-grid { gap: 2.5rem; }
  .plan-card-featured { transform: none; }
  .mock-fields { grid-template-columns: 1fr; }
}


@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: .7; }
}


.hero-real-img-wrap{margin:2rem auto 1rem;max-width:780px;position:relative;z-index:2}
.hero-real-img{width:100%;display:block;filter:drop-shadow(0 30px 60px rgba(0,0,0,.5))}
.fundador-real-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center top}
.band-section{padding:5rem 0;background:linear-gradient(180deg,#fff 0%,#F8F9FC 100%);border-top:1px solid #E8ECF4;border-bottom:1px solid #E8ECF4}
.band-inner{display:grid;grid-template-columns:1.05fr 1fr;gap:3.5rem;align-items:center}
@media (max-width:820px){.band-inner{grid-template-columns:1fr}}
.band-img{width:100%;border-radius:28px;aspect-ratio:4/3;object-fit:cover;box-shadow:0 30px 80px rgba(10,14,26,.18);border:1px solid #E8ECF4}
.band-title{font-size:clamp(1.8rem,4vw,3rem);line-height:1.05;color:var(--navy);text-transform:uppercase;letter-spacing:.02em;margin:1rem 0}
.band-title em{color:var(--yellow-dark);font-style:normal}
.band-desc{font-size:1.05rem;color:#5A6A82;font-weight:500;line-height:1.6;max-width:480px}
`;
const PAGE_BODY_RAW = `

<!-- ══════════════ HERO ══════════════ -->
<header>
  <div class="container">
    <div class="hero-inner">
      <div class="hero-badge">
        <svg class="bolt-inline" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        Feito para Eletricistas
      </div>
      <h1 class="hero-h1">
        Orçamento de Eletricista<br>
        em <em>PDF</em> em <em>3 Minutos</em><br>
        Direto do Celular
      </h1>
      <p class="hero-sub">
        Calcule fio, disjuntor, tomadas e seu lucro automaticamente. Mande PDF profissional pelo WhatsApp e feche mais serviços — sem chute, sem mensalidade.
      </p>
      <a href="#pricing" class="btn-primary">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        QUERO MEU ACESSO POR R$ 10
      </a>

      <!-- VSL -->
      <div class="hero-real-img-wrap" style="background:transparent;box-shadow:none;padding:0;max-width:420px;margin:2rem auto">
        <style>wistia-player[media-id='pbo4ofgvsl']:not(:defined){background:center / contain no-repeat url('https://fast.wistia.com/embed/medias/pbo4ofgvsl/swatch');display:block;filter:blur(5px);padding-top:177.78%;}</style>
        <wistia-player media-id="pbo4ofgvsl" aspect="0.5625"></wistia-player>
      </div>
      <div class="hero-checks">
        <span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
          Acesso Imediato
        </span>
        <span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
          Funciona Offline
        </span>
        <span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
          Atualizações Gratuitas
        </span>
        <span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
          Suporte VIP
        </span>
      </div>
    </div>
  </div>
</header>

<!-- ══════════════ DORES ══════════════ -->
<section class="dores-section">
  <div class="container">
    <div style="text-align:center;margin-bottom:.5rem">
      <div class="section-tag">Você se identifica?</div>
    </div>
    <h2 class="section-title display" style="text-align:center">
      Alguma dessas situações<br><em>te custou dinheiro?</em>
    </h2>
    <div class="divider"></div>
    <div class="dores-grid">
      <div class="dor-card">
        <div class="dor-icon">⏰</div>
        <p class="dor-text">Gasta uma hora calculando metro de fio que o app faria em 2 minutos — e ainda erra a conta</p>
      </div>
      <div class="dor-card">
        <div class="dor-icon">💸</div>
        <p class="dor-text">Orça instalação no chute, chega na obra e descobre que faltou disjuntor — compra no balcão pagando 2x o preço</p>
      </div>
      <div class="dor-card">
        <div class="dor-icon">📱</div>
        <p class="dor-text">Responde "te mando o valor depois" e o cliente já fechou com outro eletricista que respondeu PDF em 5 minutos</p>
      </div>
      <div class="dor-card">
        <div class="dor-icon">💔</div>
        <p class="dor-text">Perde serviço para eletricista menos experiente que só porque ele responde mais rápido e com proposta profissional</p>
      </div>
    </div>
    <p class="dores-close">Se marcou pelo menos 1 — esse app foi feito pra você.</p>
  </div>
</section>




<!-- ══════════════ COMO FUNCIONA ══════════════ -->
<section class="how-section">
  <div class="container">
    <div style="text-align:center">
      <div class="section-tag">Passo a passo</div>
      <h2 class="section-title display">Como Funciona <em>na Prática</em></h2>
      <div class="divider" style="margin:1rem auto 0"></div>
    </div>
    <div class="steps-grid">
      <div class="step-card">
        <div class="step-num">Passo 1</div>
        <div class="step-phone">
          <div class="step-shot"><img src="__STEP1__" alt="Tela de novo orçamento" loading="lazy" /></div>
        </div>
        <div class="step-title">Preencha os Dados</div>
        <p class="step-desc">Nome do cliente, tipo de serviço, número de pontos e sua margem de lucro desejada.</p>
      </div>
      <div class="step-card">
        <div class="step-num">Passo 2</div>
        <div class="step-phone">
          <div class="step-shot"><img src="__STEP2__" alt="Tela de resultado do orçamento" loading="lazy" /></div>
        </div>
        <div class="step-title">Veja seu Lucro Real</div>
        <p class="step-desc">Lista de materiais completa, total a cobrar e lucro líquido. Tudo no seu celular.</p>
      </div>
      <div class="step-card">
        <div class="step-num">Passo 3</div>
        <div class="step-phone">
          <div class="step-shot"><img src="__STEP3__" alt="Tela de compartilhamento via PDF e WhatsApp" loading="lazy" /></div>
        </div>
        <div class="step-title">Envie pro Cliente</div>
        <p class="step-desc">Gere o PDF e mande pelo WhatsApp na hora. Resposta profissional em menos de 3 minutos.</p>
      </div>
    </div>
    <div style="text-align:center;margin-top:3rem">
      <p style="font-weight:700;color:#5A6A82;max-width:540px;margin:0 auto 1.5rem;font-size:1rem;line-height:1.6">
        Você ainda personaliza com o nome da sua empresa, logo e cores. O orçamento sai com a sua cara profissional.
      </p>
      <a href="#pricing" class="btn-primary">Quero meu acesso agora</a>
    </div>
  </div>
</section>

<!-- ══════════════ O QUE VOCÊ RECEBE ══════════════ -->
<section class="recebe-section">
  <div class="container" style="position:relative;z-index:2">
    <div style="text-align:center">
      <h2 class="section-title display" style="color:#fff">O que está <em style="color:var(--yellow)">incluído</em></h2>
      <div class="divider" style="margin:1rem auto 0;background:var(--yellow)"></div>
    </div>
    <div class="recebe-grid">
      <div class="recebe-item">
        <div class="recebe-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg></div>
        <p class="recebe-text">Cálculo automático de fio, disjuntor, tomada e material para 6 tipos de serviço</p>
      </div>
      <div class="recebe-item">
        <div class="recebe-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg></div>
        <p class="recebe-text">Margem de lucro ajustável de 30% a 100% com resultado em tempo real</p>
      </div>
      <div class="recebe-item">
        <div class="recebe-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg></div>
        <p class="recebe-text">PDF profissional + botão "Copiar pro WhatsApp" pra enviar na hora</p>
      </div>
      <div class="recebe-item">
        <div class="recebe-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg></div>
        <p class="recebe-text">Editor de preços do SEU fornecedor — esqueça tabela defasada</p>
      </div>
      <div class="recebe-item">
        <div class="recebe-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg></div>
        <p class="recebe-text">Funciona offline no celular, tablet ou computador — direto na obra</p>
      </div>
      <div class="recebe-item">
        <div class="recebe-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg></div>
        <p class="recebe-text">Acesso vitalício + todas as atualizações futuras sem custo adicional</p>
      </div>
    </div>
  </div>
</section>


<!-- ══════════════ BÔNUS ══════════════ -->
<section class="bonus-section">
  <div class="container" style="position:relative;z-index:2">
    <div style="text-align:center">
      <div class="section-tag">Somente no Plano Premium</div>
      <h2 class="section-title display" style="color:#fff">Bônus <em style="color:var(--yellow)">Exclusivos</em></h2>
      <p style="color:rgba(255,255,255,.5);font-weight:600;font-size:1rem;text-transform:uppercase;letter-spacing:.08em;margin-top:.5rem">Acesso imediato com o plano premium</p>
    </div>
    <div class="bonus-grid">

      <!-- Bônus 1 -->
      <div class="bonus-card">
        <div class="bonus-img-wrap"><img src="__BONUS1__" alt="Modelo de Contrato de Prestação de Serviço Elétrico" loading="lazy" /></div>
        <p class="bonus-name">Modelo de Contrato de Prestação de Serviço Elétrico</p>
        <p class="bonus-price">R$ 37,00</p>
        <p class="bonus-free">Hoje grátis</p>
      </div>

      <!-- Bônus 2 -->
      <div class="bonus-card">
        <div class="bonus-img-wrap"><img src="__BONUS2__" alt="Tabela de Bitola de Fio por Potência e Distância" loading="lazy" /></div>
        <p class="bonus-name">Tabela de Bitola de Fio por Potência e Distância</p>
        <p class="bonus-price">R$ 37,00</p>
        <p class="bonus-free">Hoje grátis</p>
      </div>

      <!-- Bônus 3 -->
      <div class="bonus-card">
        <div class="bonus-img-wrap"><img src="__BONUS3__" alt="Checklist Completo de Vistoria Elétrica Residencial" loading="lazy" /></div>
        <p class="bonus-name">Checklist Completo de Vistoria Elétrica Residencial</p>
        <p class="bonus-price">R$ 37,00</p>
        <p class="bonus-free">Hoje grátis</p>
      </div>

      <!-- Bônus 4 -->
      <div class="bonus-card">
        <div class="bonus-img-wrap"><img src="__BONUS4__" alt="Mensagens Prontas para Fechar Serviço no WhatsApp" loading="lazy" /></div>
        <p class="bonus-name">Mensagens Prontas para Fechar Serviço no WhatsApp</p>
        <p class="bonus-price">R$ 37,00</p>
        <p class="bonus-free">Hoje grátis</p>
      </div>

      <!-- Bônus 5 -->
      <div class="bonus-card">
        <div class="bonus-img-wrap"><img src="__BONUS5__" alt="Tabela de Quanto Cobrar por Ponto Elétrico por Região" loading="lazy" /></div>
        <p class="bonus-name">Tabela de Quanto Cobrar por Ponto Elétrico por Região</p>
        <p class="bonus-price">R$ 37,00</p>
        <p class="bonus-free">Hoje grátis</p>
      </div>

      <!-- Total -->
      <div class="bonus-card">
        <div class="bonus-total">
          <p class="bonus-total-label">Valor total dos bônus</p>
          <p class="bonus-total-val">GRÁTIS</p>
          <p class="bonus-total-old">(R$ 185,00)</p>
        </div>
        <p class="bonus-name">Tudo incluído no Plano Premium</p>
        <p class="bonus-free">Acesso imediato</p>
      </div>

    </div>
  </div>
</section>

<!-- ══════════════ PRICING ══════════════ -->
<section class="pricing-section" id="pricing">
  <div class="container">
    <div style="text-align:center">
      <div class="section-tag">Investimento</div>
      <h2 class="section-title display">Escolha seu <em>Plano</em></h2>
      <div class="divider" style="margin:1rem auto 0"></div>
    </div>
    <div class="plans-grid">

      <!-- Básico -->
      <div class="plan-card">
        <div class="plan-name display">Plano Básico</div>
        <p class="plan-tag">Ferramenta essencial</p>
        <div class="plan-items">
          <div class="plan-item plan-item-gray">
            <svg class="plan-icon check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            APP OrçaElétrico Pro
          </div>
          <div class="plan-item plan-item-gray">
            <svg class="plan-icon check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            Cálculo automático de material, custo e lucro
          </div>
          <div class="plan-item plan-item-gray">
            <svg class="plan-icon check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            Orçamento profissional em PDF
          </div>
          <div class="plan-item plan-item-gray">
            <svg class="plan-icon check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            Acesso vitalício
          </div>
          <div class="plan-item" style="color:#B0BAC9">
            <svg class="plan-icon x-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/></svg>
            Sem bônus exclusivos
          </div>
        </div>
        <div class="plan-price">
          <div class="plan-price-val display">R$ 10,00</div>
          <p class="plan-price-period">Pagamento único</p>
        </div>
        <a href="https://pay.lowify.com.br/go.php?offer=jqv9t21" target="_blank" rel="noopener" class="btn-primary btn-dark" style="width:100%;padding:.9rem 1.5rem;font-size:1.1rem">Quero o plano básico</a>
      </div>

      <!-- Completo -->
      <div class="plan-card plan-card-featured">
        <div class="plan-featured-badge">⭐ Mais Recomendado</div>
        <div class="plan-name display plan-name-white">Plano Premium</div>
        <p class="plan-tag plan-tag-white">O arsenal do profissional</p>
        <div class="plan-items">
          <div class="plan-item plan-item-white">
            <svg class="plan-icon check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            APP OrçaElétrico Pro
          </div>
          <div class="plan-item plan-item-white">
            <svg class="plan-icon check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            Cálculo automático de material, custo e lucro
          </div>
          <div class="plan-item plan-item-white">
            <svg class="plan-icon check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            Orçamento profissional em PDF
          </div>
          <div class="plan-item plan-item-white">
            <svg class="plan-icon check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            Envio direto pelo WhatsApp
          </div>
          <div class="plan-item plan-item-white">
            <svg class="plan-icon check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            Acesso vitalício + atualizações
          </div>
          <div class="plan-item plan-item-white">🎁 BÔNUS: Modelo de contrato elétrico</div>
          <div class="plan-item plan-item-white">🎁 BÔNUS: Tabela de bitola por potência</div>
          <div class="plan-item plan-item-white">🎁 BÔNUS: Checklist de vistoria</div>
          <div class="plan-item plan-item-white">🎁 BÔNUS: Tabela de preços por região</div>
          <div class="plan-item plan-item-white">🎁 BÔNUS: Scripts de WhatsApp</div>
          <div class="plan-item" style="color:var(--yellow);font-weight:800;animation:pulse 2s infinite">
            <svg class="plan-icon" style="color:var(--yellow)" viewBox="0 0 24 24" fill="currentColor"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
            Inclui todos os 5 bônus
          </div>
        </div>
        <div class="plan-price">
          <p class="plan-price-old">De R$ 197,00 por apenas</p>
          <div class="plan-price-val display plan-price-val-white">R$ 19,90</div>
          <p class="plan-price-period plan-price-period-yellow">Pagamento único</p>
        </div>
        <a href="https://pay.lowify.com.br/checkout.php?product_id=7LUkS8" target="_blank" rel="noopener" class="btn-primary" style="width:100%;padding:.9rem 1.5rem;font-size:1.1rem">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          Quero o plano premium
        </a>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════ PROVA SOCIAL ══════════════ -->
<section class="social-section">
  <div class="container">
    <div style="text-align:center;margin-bottom:.5rem">
      <div class="section-tag">Resultados reais</div>
    </div>
    <h2 class="section-title display" style="text-align:center">O que os eletricistas<br><em>estão dizendo</em></h2>
    <p style="text-align:center;color:var(--yellow-dark);font-weight:700;font-size:.9rem;text-transform:uppercase;letter-spacing:.1em;margin-top:.5rem">
      Resultados de quem parou de orçar no chute
    </p>
    <div class="test-carousel" id="testCarousel">
      <button class="test-nav test-prev" id="testPrev" aria-label="Anterior">‹</button>
      <div class="test-track" id="testTrack">
        <div class="test-slide"><img src="__TEST1__" alt="Depoimento WhatsApp Carlos Cliente" loading="lazy" /></div>
        <div class="test-slide"><img src="__TEST2__" alt="Depoimento WhatsApp Luiz Cliente" loading="lazy" /></div>
        <div class="test-slide"><img src="__TEST3__" alt="Depoimento WhatsApp André Cliente" loading="lazy" /></div>
        <div class="test-slide"><img src="__TEST4__" alt="Depoimento WhatsApp Marcos Cliente" loading="lazy" /></div>
        <div class="test-slide"><img src="__TEST5__" alt="Depoimento WhatsApp Jonathan Cliente" loading="lazy" /></div>
      </div>
      <button class="test-nav test-next" id="testNext" aria-label="Próximo">›</button>
      <div class="test-dots" id="testDots"></div>
    </div>
  </div>
</section>

<!-- ══════════════ GARANTIA ══════════════ -->
<section class="garantia-section">
  <div class="container">
    <div class="garantia-inner">
      <div class="garantia-badge-img">
        <img src="__GARANTIA__" alt="Selo 30 dias de garantia" loading="lazy" />
      </div>
      <div class="garantia-content">
        <h2 class="garantia-title">Confiamos <em>tanto</em> no produto que damos <em>30 dias</em> de garantia incondicional</h2>
        <div class="garantia-bar"></div>
        <p class="garantia-text">
          Experimente o <strong>APP OrçaElétrico Pro</strong> com total tranquilidade. Se por qualquer motivo você decidir que não é para você — sem burocracia, sem questionamento, devolvemos cada centavo. Teste sem nenhum risco.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════ FUNDADOR ══════════════ -->
<section class="fundador-section">
  <div class="container">
    <div style="text-align:center;margin-bottom:3.5rem">
      <div class="section-tag">A história</div>
      <h2 class="section-title display">Quem criou o <em>OrçaElétrico Pro?</em></h2>
    </div>
    <div class="fundador-inner">
      <div class="fundador-photo">
        <img src="__FOUNDER__" alt="Carlos Eduardo - Fundador" class="fundador-real-img" loading="lazy" />
        <div class="fundador-badge-overlay">
          <p class="fundador-badge-name">Carlos Eduardo</p>
          <p class="fundador-badge-role">Eletricista há +14 anos</p>
        </div>
      </div>
      <div class="fundador-content">
        <p class="fundador-eyebrow">A história</p>
        <h3 class="fundador-title display">Me chamo<br>Carlos Eduardo</h3>
        <p class="fundador-role">Eletricista Residencial e Comercial há +14 anos</p>
        <p class="fundador-text">
          Durante anos sofri com o mesmo problema: chegava em casa depois de um dia longo de obra e ainda precisava calcular orçamento no papel. Errava a conta de fio, esquecia disjuntor, e no final do serviço descobria que meu lucro tinha sumido.
        </p>
        <p class="fundador-text">
          Já perdi obra boa porque demorei dois dias para responder. Já comprei material dobrado no balcão porque esqueci de calcular direito. Já fechei serviço por um preço que mal pagou o material — sem contar minha mão de obra.
        </p>
        <p class="fundador-text">
          Foi aí que criei o <strong>OrçaElétrico Pro</strong> — uma ferramenta simples que qualquer eletricista consegue usar no celular, na obra, em 3 minutos. Hoje uso em todos os meus serviços e trabalho com previsibilidade, sem chute e sem prejuízo.
        </p>
        <div class="fundador-quote">
          <p>"Se eu tivesse esse app quando comecei, teria evitado anos de orçamento errado e cliente sem resposta."</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════ FAQ ══════════════ -->
<section class="faq-section">
  <div class="container">
    <div style="text-align:center">
      <div class="section-tag">Dúvidas</div>
      <h2 class="section-title display">Perguntas <em>Frequentes</em></h2>
    </div>
    <div class="faq-list">

      <div class="faq-item">
        <button class="faq-q">
          <span class="faq-q-text">Nunca usei app assim — vou conseguir usar?</span>
          <div class="faq-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </button>
        <div class="faq-a">Sim. Em 5 minutos você já gera seu primeiro orçamento. O app foi criado por um eletricista pensando em outros eletricistas — a interface é direta, sem complicação. Se tiver qualquer dúvida, o suporte VIP te atende.</div>
      </div>

      <div class="faq-item">
        <button class="faq-q">
          <span class="faq-q-text">Preciso saber calcular bitola de fio na mão?</span>
          <div class="faq-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </button>
        <div class="faq-a">Não. O app faz todos os cálculos técnicos por você. Você informa os dados básicos do serviço e o sistema calcula a bitola correta, a metragem necessária e os demais materiais automaticamente, com base nas normas técnicas.</div>
      </div>

      <div class="faq-item">
        <button class="faq-q">
          <span class="faq-q-text">Como acesso o app?</span>
          <div class="faq-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </button>
        <div class="faq-a">Após a compra você recebe o acesso imediatamente por e-mail. O app funciona direto no navegador do celular, tablet ou computador — sem precisar baixar nada da loja de aplicativos. Funciona em Android, iPhone e qualquer sistema.</div>
      </div>

      <div class="faq-item">
        <button class="faq-q">
          <span class="faq-q-text">Tem garantia?</span>
          <div class="faq-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </button>
        <div class="faq-a">Sim. 30 dias de garantia incondicional. Se por qualquer motivo você não ficar satisfeito, basta mandar uma mensagem e devolvemos 100% do seu dinheiro — sem perguntas, sem burocracia.</div>
      </div>

    </div>
    <div class="faq-cta">
      <a href="#pricing" class="btn-primary">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        Quero meu acesso agora
      </a>
    </div>
  </div>
</section>

<!-- ══════════════ FOOTER ══════════════ -->
<footer>
  <div class="container">
    <div class="footer-inner">
      <div>
        <div class="footer-logo">
          <div class="footer-logo-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A0E1A"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <div class="footer-logo-text">ORÇA<span>ELÉTRICO</span> PRO</div>
        </div>
        <p class="footer-tagline">A ferramenta nº 1 do eletricista profissional no Brasil.</p>
      </div>
      <div class="footer-security">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
        100% Seguro &amp; Criptografado
      </div>
    </div>
    <p class="footer-copy">© 2025 OrçaElétrico Pro — Todos os Direitos Reservados</p>
  </div>
</footer>





`;

function Index() {
  const html = PAGE_BODY_RAW
    .replaceAll("__FOUNDER__", founderImg)
    .replaceAll("__HERO__", heroImg)
    .replaceAll("__WORKING__", workingImg)
    .replaceAll("__TEST1__", test1Img)
    .replaceAll("__TEST2__", test2Img)
    .replaceAll("__TEST3__", test3Img)
    .replaceAll("__TEST4__", test4Img)
    .replaceAll("__TEST5__", test5Img)
    .replaceAll("__BONUS1__", bonus1Img)
    .replaceAll("__BONUS2__", bonus2Img)
    .replaceAll("__BONUS3__", bonus3Img)
    .replaceAll("__BONUS4__", bonus4Img)
    .replaceAll("__BONUS5__", bonus5Img)
    .replaceAll("__GARANTIA__", garantiaImg)
    .replaceAll("__STEP1__", step1Img)
    .replaceAll("__STEP2__", step2Img)
    .replaceAll("__STEP3__", step3Img);
  useEffect(() => {
    // Load Wistia player scripts
    const s1 = document.createElement("script");
    s1.src = "https://fast.wistia.com/player.js";
    s1.async = true;
    document.head.appendChild(s1);
    const s2 = document.createElement("script");
    s2.src = "https://fast.wistia.com/embed/pbo4ofgvsl.js";
    s2.async = true;
    s2.type = "module";
    document.head.appendChild(s2);

    // Load Utmify pixel
    (window as any).pixelId = "6a187668e9b05c9efd0d23d7";
    const a = document.createElement("script");
    a.setAttribute("async", "");
    a.setAttribute("defer", "");
    a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
    document.head.appendChild(a);
  }, []);


  useEffect(() => {
    // FAQ accordion
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const btn = target.closest(".faq-q") as HTMLElement | null;
      if (btn) {
        const item = btn.closest(".faq-item");
        if (!item) return;
        const isOpen = item.classList.contains("open");
        document.querySelectorAll(".faq-item.open").forEach((i) => i.classList.remove("open"));
        if (!isOpen) item.classList.add("open");
        return;
      }
      const a = target.closest('a[href="#pricing"]') as HTMLAnchorElement | null;
      if (a) {
        e.preventDefault();
        document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
      }
    };
    document.addEventListener("click", onClick);

    // Testimonial carousel
    const track = document.getElementById("testTrack");
    const dotsWrap = document.getElementById("testDots");
    const prev = document.getElementById("testPrev");
    const next = document.getElementById("testNext");
    let current = 0;
    let interval: ReturnType<typeof setInterval> | null = null;
    const slides = track ? Array.from(track.querySelectorAll(".test-slide")) : [];

    const go = (i: number) => {
      if (!track || slides.length === 0) return;
      current = (i + slides.length) % slides.length;
      track.scrollTo({ left: current * track.clientWidth, behavior: "smooth" });
      dotsWrap?.querySelectorAll("button").forEach((d, idx) =>
        d.classList.toggle("active", idx === current)
      );
    };

    const startAutoplay = () => {
      if (interval) clearInterval(interval);
      if (slides.length > 1) interval = setInterval(() => go(current + 1), 5000);
    };
    const stopAutoplay = () => { if (interval) clearInterval(interval); };

    if (dotsWrap && slides.length) {
      dotsWrap.innerHTML = "";
      slides.forEach((_, i) => {
        const b = document.createElement("button");
        b.setAttribute("aria-label", `Depoimento ${i + 1}`);
        if (i === 0) b.classList.add("active");
        b.addEventListener("click", () => {
          go(i);
          stopAutoplay();
          startAutoplay();
        });
        dotsWrap.appendChild(b);
      });
    }
    const onPrev = () => { go(current - 1); stopAutoplay(); startAutoplay(); };
    const onNext = () => { go(current + 1); stopAutoplay(); startAutoplay(); };
    prev?.addEventListener("click", onPrev);
    next?.addEventListener("click", onNext);
    startAutoplay();

    return () => {
      document.removeEventListener("click", onClick);
      prev?.removeEventListener("click", onPrev);
      next?.removeEventListener("click", onNext);
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div className="orca-page">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <SalesNotifications />
    </div>
  );
}
