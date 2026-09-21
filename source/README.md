# Gold Paper — Ultra Premium

Projeto migrado para uma arquitetura moderna com **Next.js + React + TypeScript + Tailwind CSS + GSAP + Lenis + Framer Motion + Three.js / React Three Fiber**.

## Recursos
- Hero 3D com Three.js / React Three Fiber
- Partículas e iluminação dinâmica
- Rolagem premium com Lenis
- Animações de entrada e parallax com GSAP + ScrollTrigger
- Microinterações com Framer Motion
- Tailwind CSS para sistema visual responsivo
- TypeScript para maior robustez
- Páginas separadas: Lavanderia, Hotelaria, Supermercados e Cervejarias
- Imagens extraídas dos PDFs técnicos fornecidos
- Exportação estática para hospedagem tradicional

## Como executar
1. Instale Node.js 18.17+ (recomendado Node 20 LTS).
2. Na pasta do projeto rode:
   npm install
3. Desenvolvimento:
   npm run dev
4. Build de produção / exportação estática:
   npm run build
5. O Next.js gerará a pasta `out/` pronta para publicação em hospedagem estática.

## WhatsApp
O número está como placeholder `5527998179289`. Pesquise esse número no projeto e troque pelo número comercial correto da Gold Paper.

## Observação de desempenho
O 3D é usado apenas no hero e com DPR limitado. Em dispositivos mais simples, o restante do site continua totalmente utilizável mesmo que a cena 3D seja mais leve.
