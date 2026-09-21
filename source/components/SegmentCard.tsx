'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Segment } from '@/data/segments'

export default function SegmentCard({segment,index}:{segment:Segment,index:number}){
  return <motion.div whileHover={{y:-8,scale:1.012}} transition={{type:'spring',stiffness:220,damping:20}} className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-ink-900 shadow-premium">
    <Link href={`/${segment.slug}/`} className="block min-h-[380px]">
      <img src={segment.hero} alt={segment.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/5"/>
      <div className="absolute inset-x-0 bottom-0 p-7"><div className="mb-4 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-gold-400 text-xs font-black text-black">0{index+1}</span><span className="text-xs font-bold uppercase tracking-[.18em] text-gold-300">{segment.eyebrow}</span></div><h3 className="font-display text-3xl text-white">{segment.title}</h3><p className="mt-3 text-sm leading-6 text-white/65">{segment.lead}</p><span className="mt-5 inline-flex text-sm font-bold text-gold-300">Explorar solução →</span></div>
    </Link>
  </motion.div>
}
