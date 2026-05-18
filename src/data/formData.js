const pub = process.env.PUBLIC_URL;

export const estilosDecoracao = [
  {
    id: "minimalista",
    nome: "Minimalista & Intimista",
    descricao: "Linhas limpas, neutros suaves e elegância discreta.",
    descricaoLonga: "O minimalismo traduz a elegância do “menos é mais”. Com uma estética sofisticada e contemporânea, esse estilo valoriza paletas neutras — como branco, areia e tons crus — além de poucos elementos decorativos, cuidadosamente escolhidos e posicionados para criar um ambiente leve, elegante e acolhedor. É perfeito para casais que apreciam uma decoração mais clean, com poucas flores, iluminação intimista e detalhes que falam pela sutileza.",
    elementos: ['Velas e iluminação quente', 'Poucas flores, com arranjos delicados', 'Mesa do bolo reduzida e elegante', 'Objetos decorativos minimalistas', 'Ambiente sofisticado e aconchegante'],
    imgs: [
      `${pub}/imgs/minimalista.png`,
      `${pub}/imgs/minimalista1.jpeg`,
      `${pub}/imgs/minimalista2.jpeg`,
  
    ],
  },
  {
    id: "classico",
    nome: "Clássico",
    descricao: "Tradição e glamour",
    descricaoLonga: "O clássico é o estilo da elegância atemporal. Sofisticado e imponente, ele combina a grandiosidade das flores brancas em abundância com elementos refinados, como mesas de vidro e espelho, lustres marcantes, velas e detalhes luxuosos que criam uma atmosfera romântica e inesquecível. É a escolha perfeita para casais que sonham com um casamento digno de filme: glamoroso, delicado e eternamente elegante.",
    elementos: ['Flores brancas em abundância', ' Lustres, candelabros e velas', 'Mesas de vidro e espelho', 'Toalhas em tecidos claros', 'Decoração imponente e romântica'],
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
    descricaoLonga: "O estilo rústico é uma decoração que valoriza a beleza da natureza. Com uma estética leve e acolhedora, ele valoriza materiais naturais e personalidade, criando uma atmosfera romântica e cheia de significado. Madeira, folhagens, flores mais desconstruídas, iluminação quente e elementos artesanais compõem esse cenário que encanta pela beleza natural. É um estilo que faz os convidados se sentirem acolhidos e conectados à essência do momento. Perfeito para casais que sonham com um casamento romântico, natural e sofisticado na medida certa.",
    elementos: ['Madeira natural ', 'Folhagens e flores com aspecto orgânico', ' Iluminação quente com luminárias de vime ', 'Tons terrosos e paleta natural', 'Texturas naturais'],
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
    descricaoLonga: "O estilo tropical é vibrante, marcante e cheio de vida. Inspirado na exuberância da natureza, ele mistura folhagens imponentes, plantas amazônicas, flores em tons quentes e cenários generosos que transformam o casamento em uma experiência alegre, envolvente e inesquecível. Com cores intensas como laranja, fúcsia, amarelo e verde, esse estilo transmite energia, frescor e personalidade do início ao fim da celebração. É perfeito para cerimônias ao ar livre, festas animadas e casais que desejam um casamento leve, moderno e cheio de movimento. O tropical valoriza a beleza natural em sua forma mais exuberante, criando ambientes impactantes, acolhedores e sofisticados ao mesmo tempo.",
    elementos: ['Folhagens grandes e volumosas', 'Plantas amazônicas e elementos naturais', ' Flores em tons quentes e vibrantes', 'Iluminação aconchegante', 'Decoração alegre, moderna e cheia de personalidade'],
    imgs: [
      `${pub}/imgs/tropical.png`,
      `${pub}/imgs/tropical1.jpeg`,
      `${pub}/imgs/tropical2.jpeg`,
      `${pub}/imgs/tropical3.jpeg`,
    ],
  },
  {
    id: "boho",
    nome: "Boho",
    descricao: "Macramê, capim-dos-pampas e alma livre.",
    descricaoLonga: "A decoração boho valoriza composições desconstruídas e elegantes, com tons terrosos, folhagens secas, flores desconstruídas, tecidos leves e madeira natural. Tudo é pensado para transmitir uma atmosfera artística e sofisticada ao mesmo tempo. É um estilo muito escolhido por casais que desejam um casamento moderno, leve e com identidade marcante, fugindo das composições mais tradicionais sem perder a elegância.",
    elementos: ['Tons terrosos e paleta natural', 'Flores e folhagens com aspecto orgânico', 'Capim-dos-pampas e elementos secos', 'Macramês, tecidos leves e texturas artesanais', 'Mobiliário em madeira'],
    imgs: [
      `${pub}/imgs/Boho.png`,
      `${pub}/imgs/boho1.jpeg`,
      `${pub}/imgs/boho2.jpeg`,
      `${pub}/imgs/boho3.jpeg`,
    ],
  },
];

export const locaisEvento = [
  { value: "Murano Eventos", label: "Murano Eventos" },
  { value: "Green Garden", label: "Green Garden" },
  { value: "Rancho Alto", label: "Rancho Alto" },
  { value: "outro", label: "Outro local…" },
];