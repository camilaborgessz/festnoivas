const pub = process.env.PUBLIC_URL;

export const estilosDecoracao = [
  {
    id: "minimalista",
    nome: "Minimalista & Intimista",
    img: `${pub}/imgs/minimalista.png`,
    descricao: "Linhas limpas, neutros suaves e elegância discreta. Foco no essencial.",
  },
  {
    id: "classico",
    nome: "Clássico",
    img: `${pub}/imgs/classico1.png`,
    descricao: "Flores tradicionais, toques dourados e atmosfera atemporal de glamour.",
  },
  {
    id: "rustico",
    nome: "Rústico",
    img: `${pub}/imgs/rustico.png`,
    descricao: "Madeira, palha, flores do campo e aconchego campestre com personalidade.",
  },
  {
    id: "tropical",
    nome: "Tropical",
    img: `${pub}/imgs/tropical.png`,
    descricao: "Folhagens exuberantes, flores vibrantes e cores inspiradas na natureza.",
  },
  {
    id: "boho",
    nome: "Boho",
    img: `${pub}/imgs/Boho.png`,
    descricao: "Macramê, tule fluido, pampas e um charme despojado cheio de alma.",
  },
];

export const locaisEvento = [
  { value: "Murano Eventos", label: "Murano Eventos" },
  { value: "Green Garden",   label: "Green Garden"   },
  { value: "outro",          label: "Outro local…"   },
];
