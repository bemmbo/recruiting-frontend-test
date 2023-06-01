export function parseAmount(amount) {
  return amount.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
  });
}
