import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://recruiting.api.bemmbo.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export function getPendingInvoices() {
  return apiClient.get('/invoices/pending');
}
