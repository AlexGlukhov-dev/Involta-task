export const getPortal = link => link.includes('www.mos.ru') ? 'www.mos.ru' : 'www.lenta.ru';
export const getDate = date => (
  new Date(date).toISOString()
    .replace(/^([^T]+)T(.+)$/,'$1')
    .replace(/^(\d+)-(\d+)-(\d+)$/,'$3.$2.$1')
)
