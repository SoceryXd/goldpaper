'use client'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SmoothExperience from '@/components/SmoothExperience'
import AreaShowcase from '@/components/AreaShowcase'
import type { Segment } from '@/data/segments'

export default function SegmentTemplate({segment}:{segment:Segment}){
  return <main className="bg-[#f6f2e9]"><SmoothExperience/><Header/>
    <section className="relative min-h-[78vh] overflow-hidden bg-ink-950 pt-20 text-white">
      <img src={segment.hero} alt={segment.title} className="absolute inset-0 h-full w-full object-cover opacity-45" data-parallax/>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20"/>
      <div className="relative z-10 mx-auto flex min-h-[calc(78vh-80px)] max-w-7xl items-center px-5 py-20 lg:px-8"><div className="max-w-3xl"><Link href="/#segmentos" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-white/60 hover:text-white"><ArrowLeft size={16}/> Voltar para segmentos</Link><span className="eyebrow block" style={{color:segment.accent}}>{segment.eyebrow}</span><h1 className="mt-5 font-display text-[clamp(54px,8vw,105px)] leading-[.9] tracking-[-.05em]">{segment.title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">{segment.lead}</p><div className="mt-9 flex flex-wrap gap-3"><a href="#conteudo" className="premium-btn premium-btn-gold">Explorar conteúdo <ArrowRight size={17}/></a><a href="https://wa.me/5527998179289" target="_blank" className="premium-btn premium-btn-outline">Solicitar orientação</a></div></div></div>
    </section>
    <section id="conteudo" className="bg-ink-950 py-16 text-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8"><div><span className="eyebrow">Visão técnica</span><h2 className="mt-4 font-display text-5xl leading-none md:text-7xl">Informação que ajuda a <span className="gold-text">decidir.</span></h2></div><p className="self-end text-base leading-8 text-white/60">{segment.intro}</p></div></section>
    {segment.areas.map((area,i)=><AreaShowcase key={area.title} area={area} index={i} accent={segment.accent}/>) }
    <section className="bg-ink-950 py-20 text-white"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center lg:px-8"><div><span className="eyebrow text-gold-300">Gold Paper</span><h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl">Quer transformar este conteúdo em uma solução comercial?</h2></div><a href="https://wa.me/5527998179289" target="_blank" className="premium-btn premium-btn-gold">Falar com especialista <ArrowRight size={17}/></a></div></section>
    <Footer/>
  </main>
}
