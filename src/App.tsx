/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Play, LineChart, Sparkles, User, AudioLines, ArrowRight, CornerDownRight, CheckCircle2 } from 'lucide-react';

export default function App() {
  return (
    <div className="font-sans min-h-screen selection:bg-highlighter selection:text-black scroll-smooth">
      {/* HEADER */}
      <header className="relative pt-24 pb-32 px-6 md:px-12 mx-auto max-w-7xl overflow-hidden">
        {/* Asymmetrical decorative bg element */}
        <div className="absolute top-0 right-0 w-full md:w-2/3 h-[120%] bg-white/60 -skew-x-12 -z-10 origin-top-right blur-3xl opacity-50" />
        
        <div className="flex flex-col gap-8 md:gap-16 relative z-10">
          <div className="flex flex-wrap gap-4 md:gap-8 items-center text-label-caps text-xs md:text-sm font-semibold">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-highlighter inline-block shadow-sm"></span>
              EDITION N°1
            </span>
            <span>FIRST EDITION</span>
            <span>BFC TECH ECOSYSTEM</span>
          </div>
          
          <h1 className="headline text-5xl md:text-7xl lg:text-[7rem] font-bold text-slate-900 mix-blend-multiply -ml-1 md:-ml-2">
            Silicon Comté <br />
            <span className="text-label">Monthly</span> Newsletter <br />
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mt-6 md:hidden lg:flex lg:mt-8 opacity-90">
              <span className="bg-highlighter px-4 py-2 font-display text-4xl inline-block shadow-none w-fit border-none text-slate-900">
                N°1
              </span>
              <span className="text-4xl md:text-5xl lg:text-6xl text-slate-700 tracking-tight normal-case">Blueprint de l'Innovation</span>
            </div>
          </h1>
        </div>
      </header>

      {/* Section 1: EDITORIAL */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
          <div className="md:w-1/3 flex flex-col items-start gap-6 card !bg-white shadow-[0_8px_32px_rgba(0,0,0,0.03)]">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden shadow-inner ring-2 ring-offset-2 ring-offset-white ring-slate-100">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nicholas" alt="Nicholas Goodwin" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold font-sans text-lg text-slate-900">Nicholas Goodwin</p>
                <p className="text-label-caps text-[10px] font-semibold mt-1">Responsable Commission Newsletter</p>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 card !bg-transparent !p-0">
            <h2 className="headline text-4xl md:text-5xl mb-10 text-slate-900 !normal-case">Le Mot du Rédacteur</h2>
            <div className="text-slate-600 leading-relaxed max-w-2xl text-base md:text-lg space-y-6">
              <p className="text-xl md:text-2xl font-light text-slate-900 italic tracking-tight border-l-4 border-highlighter pl-6 py-2">
                "Learn more to valorize better."
              </p>
              <p>
                Our vision is to use AI to connect, grow, and unleash the 'super power' of our dynamic Franche-Comté ecosystem. We are redefining how information flows through our network, treating every update as a vital node in an ever-expanding graph of regional innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: REPENSER LA NEWSLETTER AVEC L'IA */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="headline text-4xl md:text-6xl font-bold mb-12 max-w-3xl text-slate-900">
          Repenser la newsletter avec l'IA : Un "Super-Pouvoir"
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-8">
          {/* Prompt du Mois */}
          <div className="card col-span-1 lg:col-span-2 group hover:bg-white hover:shadow-xl transition-all duration-500 overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-highlighter/10 blur-3xl -z-10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
             <div className="flex justify-between items-start mb-24 relative z-10">
               <span className="text-label-caps text-xs font-bold opacity-60">Concept 01</span>
               <span className="chip">Cafés IA</span>
             </div>
             <h3 className="headline text-3xl font-bold mb-6 text-slate-900 !normal-case">Prompt du Mois</h3>
             <div className="text-slate-700 italic text-sm bg-white/80 p-5 border-none shadow-none relative z-10">
                "Générer des idées marketing pour mon commerce local"
             </div>
          </div>
          
          {/* Résumé Audio IA */}
          <div className="card col-span-1 flex flex-col justify-between group hover:bg-white hover:shadow-xl transition-all duration-500 overflow-hidden">
             <div className="flex justify-between items-start mb-16 relative z-10">
               <span className="text-label-caps text-xs font-bold opacity-60">Concept 02</span>
               <AudioLines strokeWidth={1.5} className="text-label opacity-70 w-6 h-6" />
             </div>
             <div className="relative z-10">
               <h3 className="headline text-3xl font-bold mb-4 text-slate-900 !normal-case">Résumé Audio IA</h3>
               <p className="text-slate-600 font-medium mb-8">Écoutez notre mini-podcast de cette édition.</p>
               
               <button className="flex items-center gap-3 bg-slate-900 text-white px-5 py-3 rounded-xl text-sm font-semibold hover:-translate-y-[2px] transition-transform duration-300 w-max shadow-md hover:shadow-lg">
                 <Play size={16} fill="currentColor" /> Play Episode
               </button>
             </div>
             <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
               <AudioLines size={240} strokeWidth={1} />
             </div>
          </div>
          
          {/* Data Storytelling */}
          <div className="card col-span-1 group hover:bg-white hover:shadow-xl transition-all duration-500">
             <div className="flex justify-between items-start mb-12">
               <span className="text-label-caps text-xs font-bold opacity-60">Concept 03</span>
               <LineChart strokeWidth={1.5} className="text-label opacity-70 w-6 h-6" />
             </div>
             <h3 className="headline text-3xl font-bold mb-4 text-slate-900 !normal-case">Data Storytelling</h3>
             <p className="text-slate-600 font-medium mb-8">Compétences clés de l'annuaire automatisé</p>
             
             <div className="space-y-4">
               {/* Simple CSS Bar Chart */}
               <div className="flex items-center gap-4">
                 <span className="text-xs w-16 text-right font-mono text-slate-500 font-bold uppercase tracking-wider">React</span>
                 <div className="h-3 bg-gradient-to-r from-highlighter to-[#e5c500] w-[80%] rounded-sm"></div>
               </div>
               <div className="flex items-center gap-4">
                 <span className="text-xs w-16 text-right font-mono text-slate-500 font-bold uppercase tracking-wider">Python</span>
                 <div className="h-3 bg-gradient-to-r from-label to-[#004e66] w-[60%] rounded-sm"></div>
               </div>
               <div className="flex items-center gap-4">
                 <span className="text-xs w-16 text-right font-mono text-slate-500 font-bold uppercase tracking-wider">AI/ML</span>
                 <div className="h-3 bg-slate-300 w-[45%] rounded-sm"></div>
               </div>
             </div>
          </div>

          {/* Ask the AI & Micro-Interview */}
          <div className="card col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12 group hover:bg-white hover:shadow-xl transition-all duration-500">
             <div>
               <div className="flex justify-between items-start mb-12">
                 <span className="text-label-caps text-xs font-bold opacity-60">Concept 04</span>
                 <Sparkles strokeWidth={1.5} className="text-label opacity-70 w-6 h-6" />
               </div>
               <h3 className="headline text-3xl font-bold mb-6 text-slate-900 !normal-case">Ask the AI</h3>
               
               <div className="space-y-6 text-sm font-mono mt-8">
                 <div className="pl-4 border-l-2 border-slate-300 break-words opacity-80">
                    <span className="text-slate-500 font-bold block mb-2 text-xs uppercase tracking-widest">Member Q:</span>
                    "Quel outil nocode pour mon prototype?"
                 </div>
                 <div className="pl-4 border-l-2 border-highlighter bg-highlighter/10 p-4 break-words rounded-r-md">
                    <span className="text-yellow-800 font-bold block mb-2 text-xs uppercase tracking-widest">AI Answer:</span>
                    <span className="text-slate-800 font-sans text-base">Bubble et FlutterFlow sont excellents. Pour des flux IA intégrés, considérez BuildShip ou Make pour l'automatisation.</span>
                 </div>
               </div>
            </div>
            
             <div>
               <div className="flex justify-between items-start mb-12">
                 <span className="text-label-caps text-xs font-bold opacity-60">Concept 05</span>
                 <User strokeWidth={1.5} className="text-label opacity-70 w-6 h-6" />
               </div>
               <h3 className="headline text-3xl font-bold mb-6 text-slate-900 !normal-case">Micro-Interviews</h3>
               
               <div className="space-y-5 text-sm mt-8">
                 <div>
                   <p className="font-bold text-slate-900 font-display text-lg mb-2">Q: Votre plus gros défi tech ?</p>
                   <p className="text-slate-600 pl-4 border-l-2 border-slate-200">R: L'intégration de LLMs locaux avec des données privées en temps réel.</p>
                 </div>
                 <div>
                   <p className="font-bold text-slate-900 font-display text-lg mb-2 mt-6">Q: Un outil sous-coté ?</p>
                   <p className="text-slate-600 pl-4 border-l-2 border-slate-200">R: Cursor. Il a changé notre façon d'itérer sur le code.</p>
                 </div>
                 <p className="italic text-xs text-slate-400 mt-6 font-mono">— Sarah Jenkins, DataBrique</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: BIENVENUE AUX NOUVEAUX ADHÉRENTS */}
      <section className="py-24 md:py-32 bg-white relative flex flex-col items-center overflow-hidden">
        {/* Asymmetrical geometric highlights */}
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-highlighter/30 blur-[120px] rounded-full mix-blend-multiply -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-label/10 blur-[100px] rounded-full mix-blend-multiply translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <h2 className="headline text-5xl md:text-7xl max-w-2xl text-slate-900">
              Bienvenue aux<br/>Nouveaux Adhérents
            </h2>
            <div className="bg-surface-low px-6 py-3 border-l-4 border-highlighter">
              <p className="font-mono text-sm tracking-widest uppercase text-label font-semibold">Q2 — 2026 Cohort</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Cards with glassmorphism removed for simple surface */}
             <div className="card shadow-md mt-0 group">
               <h3 className="headline text-2xl mb-2 !normal-case group-hover:text-label transition-colors">Aurélien Dupuis</h3>
               <p className="text-xs font-semibold uppercase tracking-widest text-[#006685] mb-6">Fondateur de VisionStream</p>
               <p className="text-slate-700 text-sm leading-relaxed">Spécialiste de la vision par ordinateur, travaillant sur le contrôle qualité en temps réel pour l'industrie 4.0.</p>
             </div>

             <div className="card shadow-md mt-0 md:mt-16 group">
               <h3 className="headline text-2xl mb-2 !normal-case group-hover:text-label transition-colors">Clara Menant</h3>
               <p className="text-xs font-semibold uppercase tracking-widest text-[#006685] mb-6">Fondatrice de GreenLedger</p>
               <p className="text-slate-700 text-sm leading-relaxed">Création de solutions de traçabilité carbone grâce à la blockchain pour la logistique européenne.</p>
             </div>

             <div className="card shadow-md mt-0 lg:mt-32 group">
               <h3 className="headline text-2xl mb-2 !normal-case group-hover:text-label transition-colors">Samir El-Fahdi</h3>
               <p className="text-xs font-semibold uppercase tracking-widest text-[#006685] mb-6">CEO @ Nexus Robotics</p>
               <p className="text-slate-700 text-sm leading-relaxed">Conception d'essaims de robots autonomes pour l'optimisation des flux logistiques hyper-denses.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Section 4: POURQUOI NOUS REJOINDRE? */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          <div className="lg:w-5/12 static lg:sticky top-12">
            <h2 className="headline text-5xl md:text-6xl mb-8">Pourquoi<br />Nous Rejoindre ?</h2>
            <p className="text-slate-600 mb-12 text-lg md:text-xl font-light">Valorisez votre adhésion avec un pack d'avantages exclusifs pour accélérer votre croissance et tisser des liens solides.</p>
            
            <div className="card relative group border-l-4 border-highlighter">
               <CornerDownRight className="absolute -top-4 -left-4 w-8 h-8 text-highlighter group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-500" strokeWidth={1.5} />
               <p className="text-xl font-light font-sans italic text-slate-800 mb-6 leading-snug">"L'écosystème Silicon Comté est le catalyseur dont notre startup avait besoin. Les rencontres valent autant que les outils."</p>
               <p className="text-label-caps font-bold text-xs">— Nicolas</p>
            </div>
          </div>
          
          <div className="lg:w-7/12 flex flex-col gap-8">
            {[ 
              { id: '01', title: 'Badge Adhérent exclusif', highlight: true },
              { id: '02', title: 'Référencement dans l\'annuaire', sub: '(optimisation SEO & backlinks profils)' },
              { id: '03', title: 'Accueillir un Digital Apéro', sub: 'Faites découvrir vos locaux et votre vision' },
              { id: '04', title: 'Pot de Rentrée réservé' },
              { id: '05', title: 'Réductions événements' }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start group bg-white shadow-sm p-6">
                <div className="headline text-3xl text-slate-300 font-bold pt-1 !normal-case">{item.id}</div>
                <div>
                  <h4 className="headline text-2xl text-slate-900 group-hover:text-label transition-colors !normal-case">{item.title}</h4>
                  {item.sub && <p className="text-slate-500 text-sm mt-2">{item.sub}</p>}
                  {item.highlight && (
                    <div className="mt-4 chip border border-black/5">
                       <CheckCircle2 size={12} className="text-label mr-1" />
                       Digital Asset Included
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: SETUP IMMÉDIAT: Plan de Lancement */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface-low">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <div className="w-16 h-[2px] bg-label"></div>
            <h2 className="headline text-4xl md:text-5xl !normal-case">Setup Immédiat : <span className="opacity-50">Plan de Lancement</span></h2>
          </div>
          
          <div className="space-y-8">
            <div className="card !bg-white flex flex-col md:flex-row gap-8 items-start md:items-center hover:shadow-xl transition-shadow duration-300 group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-highlighter transform -translate-x-full group-hover:translate-x-0 transition-transform"></div>
               <div className="w-20 h-20 shrink-0 bg-surface-low flex items-center justify-center font-display text-3xl font-bold text-label bg-tertiary rounded-xl">P1</div>
               <div className="flex-1">
                 <h3 className="headline text-2xl mb-3 !normal-case">Roles, Tools, and Setup</h3>
                 <p className="text-slate-600 mb-6 text-lg font-light">Nicholas G. Lead, Visual Design FX? Integration platforms setup in progress.</p>
                 <div className="flex gap-3">
                   <span className="chip">AssoConnect</span>
                   <span className="chip">Brevo</span>
                 </div>
               </div>
            </div>
            
            <div className="card !bg-white flex flex-col md:flex-row gap-8 items-start md:items-center hover:shadow-xl transition-shadow duration-300 group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-highlighter transform -translate-x-full group-hover:translate-x-0 transition-transform"></div>
               <div className="w-20 h-20 shrink-0 bg-surface-low flex items-center justify-center font-display text-3xl font-bold text-label bg-tertiary rounded-xl">P2</div>
               <div className="flex-1">
                 <h3 className="headline text-2xl mb-3 !normal-case">Next Steps & Coordination</h3>
                 <p className="text-slate-600 text-lg font-light">Consult other committee members for themes/ideas. Finalize list of membership advantages.</p>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="card !bg-white shadow-sm border-l-4 border-l-slate-300">
                 <h4 className="text-label-caps mb-4 opacity-70">Data Ops</h4>
                 <p className="text-slate-800 text-lg font-medium">Database Cleanup: Damien to clean up existing contacts.</p>
              </div>
              <div className="card !bg-white shadow-sm border-b-4 border-b-highlighter">
                 <h4 className="text-label-caps mb-4 opacity-70">QA Testing</h4>
                 <p className="text-slate-800 text-lg font-medium">Verify Signup process is fully operational and smooth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: ÉVÉNEMENTS À NE PAS MANQUER */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto relative content-center">
        <h2 className="headline text-5xl md:text-6xl mb-20 text-center md:text-left">Événements <br className="hidden md:block" />à ne pas manquer</h2>
        
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-[4.5rem] space-y-20 py-8">
          
          <div className="relative pl-12 md:pl-20 group">
             {/* timeline dot */}
             <div className="absolute top-2 -left-[9px] w-4 h-4 rounded-full bg-label shadow-[0_0_0_8px_#fcf9f8] group-hover:bg-highlighter transition-colors duration-300"></div>
             <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                <div className="shrink-0 md:-ml-32 mt-1 md:text-right md:w-20">
                  <span className="font-display text-2xl font-bold text-slate-400 block leading-tight">AVR <br className="hidden md:block" /><span className="text-slate-900">15</span></span>
                </div>
                <div>
                  <h3 className="headline text-3xl mb-4 text-slate-900">DIGITAL APÉRO</h3>
                  <span className="chip mb-4">IA Agentique & Éthique</span>
                  <p className="text-slate-600 max-w-xl text-lg font-light leading-relaxed"><strong className="font-semibold text-slate-800">"Challenges et opportunités pour les systèmes IA agentiques éthiques."</strong><br />Une discussion profonde sur le futur de l'autonomie machine en Franche-Comté.</p>
                </div>
             </div>
          </div>
          
          <div className="relative pl-12 md:pl-20 group">
             <div className="absolute top-2 -left-[9px] w-4 h-4 rounded-full bg-label shadow-[0_0_0_8px_#fcf9f8] group-hover:bg-highlighter transition-colors duration-300"></div>
             <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                <div className="shrink-0 md:-ml-32 mt-1 md:text-right md:w-20">
                  <span className="font-display text-2xl font-bold text-slate-400 block leading-tight">JUIN <br className="hidden md:block" /><span className="text-slate-900">XX</span></span>
                </div>
                <div>
                  <h3 className="headline text-3xl mb-4 text-slate-900">CAFÉS IA</h3>
                  <span className="chip mb-4">Au Pixel</span>
                  <p className="text-slate-600 max-w-xl text-lg font-light leading-relaxed"><strong className="font-semibold text-slate-800">"RDV régulier tous les mois au Pixel."</strong><br />Un moment d'échange convivial autour des avancées locales en intelligence artificielle.</p>
                </div>
             </div>
          </div>
          
          <div className="relative pl-12 md:pl-20 group">
             <div className="absolute top-2 -left-[9px] w-4 h-4 rounded-full bg-label shadow-[0_0_0_8px_#fcf9f8] group-hover:bg-highlighter transition-colors duration-300"></div>
             <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                <div className="shrink-0 md:-ml-32 mt-1 md:text-right md:w-20">
                  <span className="font-display text-2xl font-bold text-slate-400 block leading-tight">JUIN <br className="hidden md:block" /><span className="text-slate-900">20</span></span>
                </div>
                <div>
                   <h3 className="headline text-3xl mb-4 text-slate-900">AFTERWORK NETWORKING</h3>
                   <span className="chip mb-4 border border-label/20">Partenaire BFC Numérique</span>
                   <p className="text-slate-600 max-w-xl text-lg font-light leading-relaxed"><strong className="font-semibold text-slate-800">"Dans un cadre original..."</strong><br />Célébrons la force de notre écosystème en toute décontraction pour clore le trimestre.</p>
                </div>
             </div>
          </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-base pt-32 pb-16 px-6 md:px-12 relative overflow-hidden text-slate-900">
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          
          <h2 className="headline text-5xl md:text-7xl mb-12 max-w-3xl">
            S'inscrire à la révolution technologique locale.
          </h2>
          
          {/* CTA Button requested: metallic effect as per design */}
          <button className="metallic-btn mb-16 flex items-center justify-center gap-4 text-base md:text-lg">
            S'INSCRIRE / RENOUVELER 
            <ArrowRight strokeWidth={2.5} className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>
          
          <div className="w-full flex flex-col md:flex-row justify-between items-end gap-12 text-left mt-8">
            <div>
              <p className="text-label-caps mb-3">Siège Social</p>
              <p className="text-slate-700 text-sm leading-relaxed">48 GRANDE RUE<br/>25000 BESANCON</p>
            </div>
            
            <div className="flex flex-wrap justify-end gap-3 max-w-xl">
               <a href="https://www.siliconcomte.com" className="chip hover:bg-slate-300 transition-colors">www.siliconcomte.com</a>
               <span className="chip">@SiliconComte</span>
               <span className="chip">Linkedin</span>
               <span className="chip">BFC Numérique</span>
            </div>
          </div>
          
          <div className="w-full h-px bg-slate-200 my-12"></div>
          
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
            <p>© 2026 Silicon Comté. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <span className="opacity-70">Powered by AssoConnect</span>
              <span className="opacity-70">Delivered via Brevo</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
