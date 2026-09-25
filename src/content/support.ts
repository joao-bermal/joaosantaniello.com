/**
 * Local services page (/suporte), Portuguese only. Linked from the footer and from the flyers,
 * not from the main navigation, so the main site stays focused on brand and development work.
 */

export type PriceRow = { item: string; note: string; value: string; highlight?: boolean };
export type PriceGroup = { title: string; subtitle: string; rows: PriceRow[] };

export const support = {
  meta: {
    title: 'Suporte técnico em São José dos Campos | João Santaniello',
    description:
      'Formatação, remoção de vírus, upgrade de SSD e memória, redes, drivers e manutenção de instrumentos em São José dos Campos. Atendimento presencial ou remoto.',
  },
  eyebrow: 'Serviços locais · São José dos Campos',
  title: 'Suporte técnico sem fila de loja.',
  lead:
    'Para quando o computador trava, fica lento ou precisa de uma manutenção que não pode esperar. Atendimento presencial em São José dos Campos ou remoto, com backup antes de qualquer mudança.',
  groups: [
    {
      title: 'Suporte técnico',
      subtitle: 'Presencial ou remoto',
      rows: [
        { item: 'Formatação básica do sistema', note: 'Sem backup incluso', value: 'R$ 80' },
        { item: 'Formatação com backup completo dos arquivos', note: 'Antes de apagar o disco', value: 'R$ 100' },
        { item: 'Instalação limpa do Windows', note: 'Com licença própria do cliente', value: 'R$ 120' },
        { item: 'Instalação do Windows + pacote Office', note: 'Ativação inclusa, se a licença for fornecida', value: 'R$ 140' },
        { item: 'Remoção de vírus e malware', note: 'Diagnóstico incluso', value: 'R$ 70' },
        { item: 'Limpeza e otimização de sistema lento', note: 'Sem reinstalar o sistema', value: 'R$ 90' },
        { item: 'Remoção de vírus + limpeza completa', note: 'As duas manutenções juntas', value: 'R$ 110', highlight: true },
        { item: 'Upgrade de SSD ou memória RAM', note: 'Mão de obra, sem o valor da peça', value: 'R$ 60 a 100' },
        { item: 'Configuração de rede, impressora ou software', note: 'Por visita ou sessão remota', value: 'R$ 60 a 90' },
        { item: 'Instalação e configuração de drivers', note: 'Placa de vídeo, áudio, rede e periféricos', value: 'R$ 50 a 80' },
        { item: 'Configuração de interface de áudio para gravação', note: 'Placa de som externa, monitoramento e drivers ASIO', value: 'R$ 70 a 100' },
      ],
    },
    {
      title: 'Manutenção de instrumentos',
      subtitle: 'Cuidados básicos do dia a dia',
      rows: [
        { item: 'Higienização e limpeza geral', note: 'Corpo, captadores e hardware', value: 'R$ 40 a 60' },
        { item: 'Troca de cordas', note: 'Violão, guitarra ou baixo, cordas não inclusas', value: 'R$ 30 a 50' },
        { item: 'Regulagem básica de altura das cordas', note: 'Ajuste de ação', value: 'R$ 50 a 80' },
        { item: 'Pacote troca de cordas + regulagem', note: 'As duas manutenções juntas', value: 'R$ 70 a 110', highlight: true },
      ],
    },
    {
      title: 'Criação rápida',
      subtitle: 'Peças avulsas com IA',
      rows: [
        { item: 'Peça avulsa para redes sociais', note: 'Post, capa ou banner único', value: 'R$ 40 a 80' },
        { item: 'Jingle básico', note: 'Até 30 segundos, uso simples', value: 'R$ 80 a 150' },
        { item: 'Música customizada completa', note: 'Letra, arranjo e mixagem, com revisões', value: 'R$ 250 a 600' },
      ],
    },
  ] satisfies PriceGroup[],
  cta: {
    title: 'Me chama e conta o que está acontecendo.',
    text: 'Respondo rápido pelo WhatsApp e já combinamos o horário.',
  },
  premium: {
    text: 'Procura identidade visual, loja virtual ou um sistema sob medida?',
    link: 'Conheça os projetos',
  },
};
