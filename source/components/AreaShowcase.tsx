'use client'
import { motion } from 'framer-motion'
import type { Area } from '@/data/segments'

export default function AreaShowcase({area,index,accent}:{area:Area,index:number,accent:string}){
  const reverse=index%2===1
  return <section className="border-b border-black/5 py-20 md:py-28">
    <div className={`mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8 ${reverse?'lg:[&>*:first-child]:order-2':''}`}>
      <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{duration:.7}} className="relative">
        <div className="absolute -inset-4 rounded-[36px] opacity-25 blur-2xl" style={{background:accent}}/>
        <div className="relative overflow-hidden rounded-[30px] border border-black/10 bg-white p-3 shadow-[0_30px_100px_rgba(0,0,0,.14)]"><img src={area.image} alt={area.title} className="w-full rounded-[22px]"/></div>
      </motion.div>
      <motion.div initial={{opacity:0,y:34}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.3}} transition={{duration:.7,delay:.08}}>
        <div className="mb-5 flex items-center gap-4"><span className="grid h-12 w-12 place-items-center rounded-full text-sm font-black text-white" style={{background:accent}}>{String(index+1).padStart(2,'0')}</span><span className="text-xs font-extrabold uppercase tracking-[.22em] text-black/45">Imagem do material técnico</span></div>
        <h2 className="font-display text-4xl leading-tight text-ink-950 md:text-6xl">{area.title}</h2><p className="mt-6 max-w-xl text-base leading-8 text-black/60 md:text-lg">{area.description}</p><div className="mt-8 h-px w-28" style={{background:accent}}/>
      </motion.div>
    </div>
  </section>
}
