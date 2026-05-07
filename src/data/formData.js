const pub = process.env.PUBLIC_URL;

export const estilosDecoracao = [
  {
    id: "minimalista",
    nome: "Minimalista & Intimista",
    descricao: "Linhas limpas, neutros suaves e elegância discreta.",
    descricaoLonga: "O minimalismo é o estilo do 'menos é mais'. Trabalha com paletas neutras (branco, cru, areia), poucos elementos decorativos cuidadosamente posicionados e uma estética arquitetônica. Ideal para casais que valorizam sofisticação silenciosa, ambientes com respiração visual e uma fotografia de altíssimo padrão estético.",
    paleta: ['#F5F1EC', '#D8CFC4', '#2A2724'],
    elementos: ['Velas pilar brancas', 'Folhagens verdes pontuais', 'Mesas longas de madeira clara', 'Iluminação quente e baixa'],
    imgs: [
      `${pub}/imgs/minimalista.jpeg`,
      `${pub}/imgs/minimalista1.jpeg`,
      `${pub}/imgs/minimalista2.jpeg`,
      `${pub}/imgs/minimalista3.jpeg`,
    ],
  },
  {
    id: "classico",
    nome: "Clássico",
    descricao: "Tradição e glamour",
    descricaoLonga: "O clássico é o estilo da elegância eterna. Combina flores brancas em abundância (rosas, hortênsias, lírios), toques metálicos em ouro champagne, candelabros, taças de cristal e tecidos nobres. É a escolha de casais que querem aquele casamento que parece saído de um filme  atemporal e glamoroso.",
    paleta: ['#FAF7F2', '#C9A961', '#1F1F1F'],
    elementos: ['Flores brancas em abundância', 'Candelabros e velas', 'Toalhas de mesa em tecido nobre', 'Detalhes em dourado champagne'],
    imgs: [
      `${pub}/imgs/classico1.jpeg`,
      `${pub}/imgs/classico2.png`,
      `${pub}/imgs/classico3.jpeg`,
      `${pub}/imgs/classico4.jpeg`,
    ],
  },
  {
    id: "rustico",
    nome: "Rústico",
    descricao: "Madeira, palha e charme campestre com personalidade.",
    descricaoLonga: "O rústico é o abraço caloroso de um casamento no interior mesmo dentro de um salão urbano. Trabalha texturas naturais (madeira de demolição, juta, palha), flores do campo (girassóis, margaridas, lavandas) e objetos com história (livros antigos, baús, garrafas vintage). Perfeito para casais que querem um clima informal, nostálgico e cheio de personalidade.",
    paleta: ['#E8D5B7', '#8B6F47', '#3E2A1B'],
    elementos: ['Madeira de demolição', 'Flores do campo e lavandas', 'Cordas, juta e tecidos crus', 'Lanternas e luzes pendentes'],
    imgs: [
      `${pub}/imgs/rustico5.jpeg`,
      `${pub}/imgs/rustico6.jpeg`,
      `${pub}/imgs/rustico4.jpeg`,
    ],
  },
  {
    id: "tropical",
    nome: "Tropical",
    descricao: "Folhagens exuberantes, cores vivas e energia da natureza.",
    descricaoLonga: "O tropical é o casamento mais alegre que existe, folhagens grandes (costela-de-Adão, palmeiras, bananeiras) em cenários generosos, flores em tons quentes (laranja, fúcsia, amarelo) e uma energia solar do começo ao fim. Combina perfeitamente com cerimônias ao ar livre, festas que vão noite adentro e casais que querem celebrar o amor com cor e movimento.",
    paleta: ['#2D5F3F', '#FF6B35', '#FFC857'],
    elementos: ['Folhagens grandes (Monstera, palmeiras)', 'Flores em tons quentes', 'Frutas tropicais nas mesas', 'Arranjos suspensos exuberantes'],
    imgs: [
      `${pub}/imgs/tropical.jpeg`,
      `${pub}/imgs/tropical1.jpeg`,
      `${pub}/imgs/tropical2.jpeg`,
      `${pub}/imgs/tropical3.jpeg`,
    ],
  },
  {
    id: "boho",
    nome: "Boho",
    descricao: "Macramê, capim-dos-pampas e alma livre.",
    descricaoLonga: "O boho é o estilo dos casais que vivem o amor com leveza. Trabalha com tons terrosos (terracota, ferrugem, areia), capim-dos-pampas, tapetes persas, almofadões no chão, macramês pendentes e uma estética desestruturada e cheia de alma.",
    paleta: ['#D4A574', '#A0522D', '#F4E4C1'],
    elementos: ['Capim-dos-pampas e folhagens secas', 'Macramês e tecidos com franjas', 'Tapetes persas e almofadões', 'Mobiliário vintage e baixo'],
    imgs: [
      `${pub}/imgs/Boho.jpeg`,
      `${pub}/imgs/boho1.jpeg`,
      `${pub}/imgs/boho2.jpeg`,
      `${pub}/imgs/boho3.jpeg`,
    ],
  },
];

export const locaisEvento = [
  { value: "Murano Eventos", label: "Murano Eventos" },
  { value: "Green Garden", label: "Green Garden" },
  { value: "outro", label: "Outro local…" },
];