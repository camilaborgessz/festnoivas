# 💍 Fest Noivas — Formulário React

Formulário de captura de leads com envio automático para WhatsApp via CallMeBot.

---

## 📁 Estrutura do projeto

```
fest-noivas/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ProgressBar.jsx   → barra de progresso + dots
│   │   ├── StepCard.jsx      → card de cada pergunta
│   │   ├── RadioOption.jsx   → opção clicável (radio)
│   │   ├── StyleCard.jsx     → card de estilo de decoração
│   │   ├── NavButtons.jsx    → botões Voltar / Próximo
│   │   └── SuccessScreen.jsx → tela de confirmação + resumo
│   ├── data/
│   │   └── formData.js       → ← edite aqui os estilos e locais
│   ├── utils/
│   │   └── sendWhatsApp.js   → função que envia para o WhatsApp
│   ├── whatsappConfig.js     → ← SEU NÚMERO E APIKEY AQUI
│   ├── App.jsx               → lógica principal do formulário
│   └── index.js              → ponto de entrada React
└── package.json
```

---

## 🚀 Passo a passo para rodar

### 1. Instalar o Node.js (se ainda não tiver)
Baixe em: https://nodejs.org (versão LTS recomendada)

### 2. Abrir a pasta do projeto no terminal
```bash
cd fest-noivas
```

### 3. Instalar as dependências
```bash
npm install
```

### 4. Rodar em modo desenvolvimento
```bash
npm start
```
Vai abrir automaticamente em http://localhost:3000

---

## 📱 Configurar o WhatsApp (CallMeBot) — GRATUITO

### Passo 1 — Ativar o CallMeBot
Mande esta mensagem exata no WhatsApp para o número **+34 644 32 71 84**:

```
I allow callmebot to send me messages
```

Aguarde. Em poucos minutos você recebe uma mensagem com sua **APIKEY**.

### Passo 2 — Preencher o arquivo de configuração
Abra o arquivo `src/whatsappConfig.js` e preencha:

```js
const whatsappConfig = {
  PHONE: "5511999999999",   // seu número com DDI+DDD, sem + ou espaços
  APIKEY: "123456",         // chave recebida pelo CallMeBot
};
```

**Exemplo de número:**
- Número: (11) 98765-4321
- Preencher como: `"5511987654321"`

---

## 🌐 Publicar online (deploy gratuito)

### Opção 1 — Vercel (recomendado, mais fácil)
1. Crie conta em https://vercel.com
2. Instale a CLI: `npm i -g vercel`
3. Dentro da pasta do projeto: `vercel`
4. Siga os passos — em ~2 minutos o site está no ar com link público!

### Opção 2 — Netlify
1. Rode `npm run build` para gerar a pasta `build/`
2. Acesse https://app.netlify.com
3. Arraste a pasta `build/` para a área de deploy

---

## ✏️ Como editar o formulário

### Adicionar/remover estilos de decoração
Edite o arquivo `src/data/formData.js`:
```js
export const estilosDecoracao = [
  {
    id: "minimalista",
    nome: "Minimalista & Intimista",
    emoji: "🤍",
    bg: "linear-gradient(135deg, #F5F5F0, #E8E5E0)",
    descricao: "Descrição aqui.",
  },
  // adicione mais objetos aqui...
];
```

### Adicionar/remover locais de evento
Também em `src/data/formData.js`:
```js
export const locaisEvento = [
  { value: "Murano Eventos", label: "Murano Eventos" },
  { value: "Green Garden",   label: "Green Garden"   },
  { value: "outro",          label: "Outro local…"   }, // sempre deixe este por último
];
```

### Adicionar fotos reais nos estilos
Substitua o campo `emoji` por uma URL de imagem e altere o `StyleCard.jsx` para renderizar um `<img>` em vez de emoji.

---

## ⚠️ Limitações do CallMeBot (plano gratuito)
- Máximo de **~100 mensagens/mês** no plano gratuito
- Se precisar de mais volume, considere o **Z-API** (pago, mais robusto)

---

## 🆘 Dúvidas frequentes

**O formulário não envia para o WhatsApp?**
→ Confirme se ativou o CallMeBot mandando a mensagem para o número deles
→ Verifique se PHONE e APIKEY estão corretos em `whatsappConfig.js`
→ O CORS pode bloquear em localhost — teste após fazer o deploy

**Como trocar a cor bordô?**
→ Procure `#7B1F3A` nos arquivos e substitua pela cor desejada

**Como adicionar mais perguntas?**
→ Aumente `TOTAL_STEPS` em `App.jsx`, adicione o novo step no render e valide em `validate()`
# festnoivas
