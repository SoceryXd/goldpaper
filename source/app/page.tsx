'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Boxes, Droplets, Sparkles, ShieldCheck, WandSparkles } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SmoothExperience from '@/components/SmoothExperience'
import ParticlesHero from '@/components/ParticlesHero'
import SegmentCard from '@/components/SegmentCard'
import { segments } from '@/data/segments'

export default function Home(){
  return <main className="overflow-hidden bg-[#f5f1e8]"><SmoothExperience/><Header/>
    <section className="relative min-h-[92vh] overflow-hidden bg-ink-950 pt-20 text-white">
      <ParticlesHero/>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:74px_74px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"/>
      <div className="relative z-10 mx-auto grid min-h-[calc(92vh-80px)] max-w-7xl items-center px-5 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <div className="py-20">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="inline-flex items-center gap-2 rounded-full border border-gold-400/25 bg-gold-400/5 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-gold-300"><Sparkles size={15}/> Gold Paper • Ultra Premium</motion.div>
          <motion.h1 initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.85,delay:.08}} className="mt-8 max-w-4xl font-display text-[clamp(52px,7vw,100px)] leading-[.91] tracking-[-.05em]">Distribuição profissional em um novo nível de <span className="gold-text">experiência.</span></motion.h1>
          <motion.p initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.18}} className="mt-7 max-w-2xl text-lg leading-8 text-white/65">Químicos profissionais, papéis descartáveis, equipamentos, máquinas e soluções especializadas para lavanderia, hotelaria, varejo alimentar e indústria.</motion.p>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.26}} className="mt-9 flex flex-wrap gap-3"><a href="#segmentos" className="premium-btn premium-btn-gold">Explorar soluções <ArrowRight size={17}/></a><a href="https://wa.me/5527998179289?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Gold%20Paper." target="_blank" className="premium-btn premium-btn-outline">Falar com especialista</a></motion.div>
          <div className="mt-14 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">{[['B2B','Atendimento consultivo'],['Tersu','Distribuição autorizada'],['4','Segmentos detalhados'],['36+','Imagens técnicas']].map(([n,l])=><div key={l} className="rounded-2xl border border-white/10 bg-white/[.035] p-4 backdrop-blur-xl"><b className="text-xl text-gold-300">{n}</b><span className="mt-1 block text-[11px] leading-4 text-white/50">{l}</span></div>)}</div>
        </div>
        <div className="hidden lg:block"/>
      </div>
    </section>

    <section id="solucoes" className="py-24 md:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div data-reveal className="max-w-3xl"><span className="eyebrow">Ecossistema profissional</span><h2 className="section-title">Muito além de produtos. <span>Uma solução completa.</span></h2><p className="section-copy">A Gold Paper integra química profissional, descartáveis, equipamentos e máquinas em uma experiência comercial consultiva.</p></div><div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{[
      [Droplets,'Químicos profissionais','Lavanderia, limpeza geral, higiene alimentícia e processos especializados.'],[Boxes,'Papéis descartáveis','Linha profissional para operações com alto consumo e necessidade de padronização.'],[ShieldCheck,'Equipamentos','Acessórios e equipamentos para elevar produtividade e segurança operacional.'],[WandSparkles,'Máquinas Tersu','Lavadoras de piso e soluções mecanizadas com atendimento comercial especializado.']
    ].map(([Icon,title,desc]:any)=><div data-reveal key={title} className="premium-feature"><Icon className="text-gold-500"/><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>

    <section id="segmentos" className="bg-ink-950 py-24 text-white md:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div data-reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div className="max-w-3xl"><span className="eyebrow text-gold-300">Conteúdo informativo</span><h2 className="section-title text-white">Quatro experiências. <span>Quatro operações reais.</span></h2></div><p className="max-w-md text-sm leading-7 text-white/50">Cada página utiliza imagens do material técnico fornecido e organiza aplicações e produtos por ambiente ou processo.</p></div><div className="mt-14 grid gap-6 md:grid-cols-2">{segments.map((s,i)=><SegmentCard key={s.slug} segment={s} index={i}/>)}</div></div></section>

    <section id="tersu" className="relative overflow-hidden bg-[#e9e1d3] py-24 md:py-32"><div className="absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-gold-400/15 blur-[120px]"/><div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8"><div data-reveal><span className="eyebrow">Distribuidora da marca Tersu</span><h2 className="section-title">Máquinas profissionais que completam o <span>ecossistema Gold Paper.</span></h2><p className="section-copy">A Gold Paper também distribui soluções Tersu para limpeza mecanizada de pisos, conectando equipamentos, químicos e suporte comercial em uma única operação.</p><a className="premium-btn premium-btn-dark mt-8" href="https://wa.me/5527998179289" target="_blank">Conhecer soluções Tersu <ArrowRight size={17}/></a></div><div data-reveal className="rounded-[36px] border border-black/10 bg-white/85 p-10 shadow-premium backdrop-blur-xl"><img src="/assets/images/tersu-logo.png" className="mx-auto max-h-[230px] max-w-full object-contain" alt="Tersu"/></div></div></section>

    <section id="sobre" className="py-24 md:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8"><div data-reveal className="rounded-[32px] bg-ink-950 p-10 text-white shadow-premium"><img src="/assets/images/goldpaper-logo-oficial.png" className="w-full rounded-2xl bg-white p-7" alt="Gold Paper"/><div className="mt-8 grid grid-cols-2 gap-3">{['Químicos profissionais','Papéis descartáveis','Equipamentos','Máquinas'].map(x=><div key={x} className="rounded-xl border border-white/10 p-4 text-xs text-white/65">{x}</div>)}</div></div><div data-reveal className="flex flex-col justify-center"><span className="eyebrow">Gold Paper Distribuidora</span><h2 className="section-title">Sofisticação visual. <span>Praticidade comercial.</span></h2><p className="section-copy">Este projeto foi construído como uma experiência digital de alto padrão: navegação fluida, animações progressivas, interações 3D e páginas técnicas organizadas para apoiar decisão e venda.</p></div></div></section>
    <Footer/>
  </main>
}
