import config from '../whatsappConfig';

/**
 * @param {Object} dados 
 */
export function gerarLinkWhatsApp(dados) {
  const { data, convidados, local, cerimonial, estilos } = dados;

  const [y, m, d] = data.split('-');
  const dataFormatada = `${d}/${m}/${y}`;

  const mensagem =
    `*FEST NOIVAS*\n\n` +
    `*Data do casamento:* ${dataFormatada}\n` +
    `*Convidados:* ${convidados}\n` +
    `*Local:* ${local}\n` +
    `*Cerimonial:* ${cerimonial}\n` +
    `*Estilo(s):* ${estilos.join(', ')}\n\n` +
    `_Resposta recebida via formulario Fest Noivas_`;

  return `https://wa.me/${config.PHONE}?text=${encodeURIComponent(mensagem)}`;
}
