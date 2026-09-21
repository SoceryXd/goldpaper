'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header(){
  const [open,setOpen]=useState(false)
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-2xl">
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
      <Link href="/" className="rounded-2xl border border-gold-400/30 bg-white/95 px-3 py-2 shadow-glow"><img src="/assets/images/goldpaper-logo-oficial.png" className="h-10 w-auto" alt="Gold Paper"/></Link>
      <nav className="hidden items-center gap-7 text-sm font-semibold text-white/75 lg:flex">
        <Link href="/#solucoes" className="hover:text-gold-300">Soluções</Link><Link href="/#segmentos" className="hover:text-gold-300">Segmentos</Link><Link href="/#tersu" className="hover:text-gold-300">Tersu</Link><Link href="/#sobre" className="hover:text-gold-300">A Gold Paper</Link>
      </nav>
      <div className="hidden lg:block"><a className="premium-btn premium-btn-outline" href="https://wa.me/5527998179289?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Gold%20Paper%20e%20gostaria%20de%20um%20or%C3%A7amento." target="_blank">Solicitar orçamento</a></div>
      <button className="lg:hidden text-white" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
    </div>
    {open&&<div className="border-t border-white/10 bg-ink-950/95 px-5 py-5 lg:hidden"><div className="flex flex-col gap-4 text-white/85"><Link onClick={()=>setOpen(false)} href="/#solucoes">Soluções</Link><Link onClick={()=>setOpen(false)} href="/#segmentos">Segmentos</Link><Link onClick={()=>setOpen(false)} href="/#tersu">Tersu</Link><Link onClick={()=>setOpen(false)} href="/#sobre">A Gold Paper</Link></div></div>}
  </header>
}
