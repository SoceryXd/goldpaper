export type Area = { title:string; image:string; description:string }
export type Segment = {
  slug:string; title:string; eyebrow:string; accent:string; hero:string; lead:string; intro:string; areas:Area[]
}

export const segments: Segment[] = [
  {
    slug:'lavanderia', title:'Lavanderia Profissional', eyebrow:'Soluções têxteis', accent:'#8d55ad', hero:'/assets/materiais/lavanderia-p4.jpg',
    lead:'Uma visão completa do processo de lavanderia profissional, organizada por etapa e por tipo de produto.',
    intro:'Da recepção e triagem das peças ao acabamento final, o material apresenta um processo estruturado para elevar eficiência, padronização e cuidado com os tecidos.',
    areas:[
      {title:'Visão da operação',image:'/assets/materiais/lavanderia-p4.jpg',description:'Recepção, triagem, lavagem, secagem, passadoria, finalização, dobragem e armazenamento apresentados como um fluxo integrado.'},
      {title:'Linha em pó — etapa 1',image:'/assets/materiais/lavanderia-p5.jpg',description:'Clean Zym para manchas proteicas; Clean Lav Green com ação desengordurante; Clean Clor Gold/Green para alvejamento clorado com ação desinfetante.'},
      {title:'Linha em pó — etapa 2',image:'/assets/materiais/lavanderia-p6.jpg',description:'Oxipower 5 e Clean Perb 2000 combinam detergência e alvejamento sem cloro; Clean Sour Green atua na neutralização final.'},
      {title:'Linha líquida — detergência e umectação',image:'/assets/materiais/lavanderia-p7.jpg',description:'Tetrasurf, Klisol e Tetrafac atendem umectação, lavagem enzimática e remoção de óleos e gorduras.'},
      {title:'Linha líquida — desengordurantes',image:'/assets/materiais/lavanderia-p8.jpg',description:'Klisol L, Efikaz DA e Efikaz DN ampliam a ação alcalina, umectante e desengordurante em diferentes rotinas.'},
      {title:'Lavagem pesada e alvejamento',image:'/assets/materiais/lavanderia-p9.jpg',description:'Efikaz XP combina detergência e peróxido; Tetramax é base alcalina para remoção de sujidade pesada.'},
      {title:'Branqueadores e oxidantes',image:'/assets/materiais/lavanderia-p10.jpg',description:'Genoxol 50 e Tetraclor 150 são apresentados para alvejamento e desinfecção em lavanderias profissionais.'}
    ]
  },
  {
    slug:'hotelaria', title:'Hotelaria', eyebrow:'Higiene por ambiente', accent:'#73ba4e', hero:'/assets/materiais/hotelaria-p4.jpg',
    lead:'Soluções profissionais organizadas por ambiente para manter limpeza, conservação e conforto ao hóspede.',
    intro:'A operação é dividida por áreas do hotel, permitindo associar produtos e procedimentos às necessidades reais de cada espaço.',
    areas:[
      {title:'Mapa geral do hotel',image:'/assets/materiais/hotelaria-p4.jpg',description:'Recepção, quartos, banheiros, restaurante, cozinha e áreas de lazer são tratados como ambientes com rotinas distintas.'},
      {title:'Recepção',image:'/assets/materiais/hotelaria-p5.jpg',description:'Misterglass aparece para espelhos e vidros; Clean Tec Oxy para pisos, paredes e mobílias; Asep 870 para banheiros.'},
      {title:'Pack para recepção',image:'/assets/materiais/hotelaria-p6.jpg',description:'Combinação técnica para limpeza, desinfecção e odorização de superfícies e áreas de contato.'},
      {title:'Quarto e banheiro',image:'/assets/materiais/hotelaria-p7.jpg',description:'A proposta separa pisos e mobílias, vidros e espelhos e sanitários, com foco em higiene e conforto.'},
      {title:'Pack quarto e banheiro',image:'/assets/materiais/hotelaria-p8.jpg',description:'Clean Tec Oxy, Misterglass e Asep 870 formam a solução apresentada para o ambiente.'},
      {title:'Restaurante e cozinha',image:'/assets/materiais/hotelaria-p9.jpg',description:'Soluções para pisos, mobílias, vidros, banheiros, utensílios, fornos, grelhas, chapas, formas e panelas.'},
      {title:'Pack cozinha — superfícies',image:'/assets/materiais/hotelaria-p10.jpg',description:'Clean Tec Oxy, Misternet e Asep 870 são organizados para superfícies, áreas de atendimento e banheiros.'},
      {title:'Pack cozinha — incrustações',image:'/assets/materiais/hotelaria-p11.jpg',description:'Clean Plac para gorduras carbonizadas; Rimnet para alumínios; Neutro Gel para utensílios e bancadas.'},
      {title:'Áreas de lazer',image:'/assets/materiais/hotelaria-p12.jpg',description:'Spa, salão de jogos, piscina e academia recebem foco em desinfecção, desengorduramento e controle de odores.'},
      {title:'Pack áreas de lazer',image:'/assets/materiais/hotelaria-p13.jpg',description:'Clean Tec Oxy, Asep 870 e Supervix compõem a combinação apresentada para áreas coletivas.'}
    ]
  },
  {
    slug:'supermercados', title:'Supermercados', eyebrow:'Varejo alimentar', accent:'#6db84a', hero:'/assets/materiais/supermercados-p4.jpg',
    lead:'Uma solução segmentada para setores com rotinas e riscos de sujidade diferentes dentro do supermercado.',
    intro:'Peixaria, açougue, padaria, frios e áreas comuns são tratados individualmente para facilitar a escolha das soluções.',
    areas:[
      {title:'Mapa geral do supermercado',image:'/assets/materiais/supermercados-p4.jpg',description:'Peixaria, açougue, frios, padaria, gôndolas, pisos, copa/cozinha e banheiros aparecem em um panorama operacional.'},
      {title:'Peixaria',image:'/assets/materiais/supermercados-p5.jpg',description:'Higiene, conservação e controle de odores em equipamentos, expositores, pisos, paredes, bancadas e utensílios.'},
      {title:'Pack peixaria',image:'/assets/materiais/supermercados-p6.jpg',description:'Vixclor, Deosol e Neutro Gel são apresentados para as principais necessidades do setor.'},
      {title:'Açougue',image:'/assets/materiais/supermercados-p7.jpg',description:'Separação entre equipamentos e expositores, pisos e superfícies plásticas e utensílios e bancadas.'},
      {title:'Pack açougue',image:'/assets/materiais/supermercados-p8.jpg',description:'Combinação de Vixclor, Deosol e Neutro Gel para limpeza e sanitização.'},
      {title:'Confeitaria e padaria',image:'/assets/materiais/supermercados-p9.jpg',description:'Foco em gorduras e resíduos de preparo em utensílios, equipamentos, bancadas, formas e panelas.'},
      {title:'Pack confeitaria e padaria',image:'/assets/materiais/supermercados-p10.jpg',description:'Clean Plac, Deosol, Rimnet e Neutro Gel cobrem incrustações, superfícies, alumínios e lavagem manual.'},
      {title:'Frios e perecíveis',image:'/assets/materiais/supermercados-p11.jpg',description:'Limpeza, desinfecção e controle de odores em freezers, expositores e utensílios.'},
      {title:'Pack frios e perecíveis',image:'/assets/materiais/supermercados-p12.jpg',description:'Deosol é destacado para superfícies de manipulação e equipamentos do setor.'},
      {title:'Áreas comuns',image:'/assets/materiais/supermercados-p13.jpg',description:'Depósitos, pisos, paredes, mobiliários e banheiros exigem limpeza, desinfecção e desengraxe.'},
      {title:'Pack áreas comuns',image:'/assets/materiais/supermercados-p14.jpg',description:'Clean Tec Oxy, Supervix e Asep 870 aparecem como solução para ambientes comuns.'}
    ]
  },
  {
    slug:'cervejarias', title:'Cervejarias', eyebrow:'Indústria alimentícia', accent:'#ff9945', hero:'/assets/materiais/cervejarias-p4.jpg',
    lead:'Higiene profissional aplicada às etapas produtivas da cervejaria, com foco em processo, controle microbiológico e qualidade final.',
    intro:'O material separa tanques, fermentação, maturação, superfícies externas, esteira de envase, barris, chopeiras e áreas de apoio.',
    areas:[
      {title:'Mapa geral da cervejaria',image:'/assets/materiais/cervejarias-p4.jpg',description:'Tanques de quentura, fermentação e maturação, barris, acessórios, esteira de envase, pisos e recepção.'},
      {title:'Pontos de aplicação',image:'/assets/materiais/cervejarias-p5.jpg',description:'Fortex SC, Desocal SC, Ácido Peracético, Ecoplus D, Translube CN e Vixclor aparecem associados a diferentes processos.'},
      {title:'Tanques de mostura e fervura',image:'/assets/materiais/cervejarias-p6.jpg',description:'Limpeza alcalina, desincrustação ácida e sanitização são organizadas como um processo combinado.'},
      {title:'Fermentação e maturação',image:'/assets/materiais/cervejarias-p7.jpg',description:'A etapa é tratada com foco em remoção de resíduos, controle microbiológico e preservação da qualidade.'},
      {title:'Superfícies externas',image:'/assets/materiais/cervejarias-p8.jpg',description:'Vixclor é apresentado para limpeza e desinfecção de superfícies externas e áreas de apoio.'},
      {title:'Esteira de envase',image:'/assets/materiais/cervejarias-p9.jpg',description:'Translube CN aparece como lubrificante detergente para correntes e tapetes transportadores.'},
      {title:'Tanques — configuração ampliada',image:'/assets/materiais/cervejarias-p10.jpg',description:'O material reforça o sistema combinado de alcalino, ácido e sanitização.'},
      {title:'Barris e chopeiras',image:'/assets/materiais/cervejarias-p11.jpg',description:'Ecoplus D é apresentado para limpeza e desinfecção de superfícies, equipamentos e áreas de processamento.'}
    ]
  }
]

export const getSegment = (slug:string) => segments.find(s=>s.slug===slug)
