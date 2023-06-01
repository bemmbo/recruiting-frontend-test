export function parseAmount(amount, currency) {
  if (currency === 'CLP') {
    const tranlatedAmount = Math.round(amount / 810).toLocaleString('en-US');
    const toLocalAmount = amount.toLocaleString('es-CL', {
      style: 'currency',
      currency: 'CLP',
    });
    return `${toLocalAmount} CLP - (${tranlatedAmount} USD)`;
  }
  if (currency === 'USD') {
    const tranlatedAmount = Math.round(amount * 810).toLocaleString('en-US');
    const toLocalAmount = amount.toLocaleString('es-CL', {
      style: 'currency',
      currency: 'CLP',
    });
    return `${toLocalAmount} CLP - (${tranlatedAmount} USD)`;
  }
}
