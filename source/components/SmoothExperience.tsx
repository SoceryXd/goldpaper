'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SmoothExperience(){
  useEffect(()=>{
    const lenis = new Lenis({ duration:1.05, smoothWheel:true })
    const raf=(time:number)=>{ lenis.raf(time); requestAnimationFrame(raf) }
    const id=requestAnimationFrame(raf)
    gsap.registerPlugin(ScrollTrigger)
    const ctx=gsap.context(()=>{
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el)=>{
        gsap.fromTo(el,{opacity:0,y:40},{opacity:1,y:0,duration:.85,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}})
      })
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el)=>{
        gsap.to(el,{y:-55,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:1.1}})
      })
    })
    return ()=>{ cancelAnimationFrame(id); lenis.destroy(); ctx.revert() }
  },[])
  return null
}
