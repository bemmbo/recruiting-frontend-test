import React, { useState } from 'react';
import { parseAmount } from '../Utils/parseCurrency';

export const InvoiceTable = ({ bills, handleClick }) => {
  const [selectedId, setSelectedId] = useState(null);

  const handleRowClick = (id) => {
    handleClick(id);
    setSelectedId(id);
  };

  return (
    <div className='overflow-hidden border rounded-lg'>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th scope='col' className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '>Empresa</th>
            <th scope='col' className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '>Monto</th>
            <th scope='col' className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '>Estado</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200'>
          {bills && bills.map((item, index) => {
            const rowClasses = item.id === selectedId ? 'bg-blue-200' : 'bg-gray-50 hover:bg-gray-100';
            return (
              <tr key={index} onClick={() => handleRowClick(item.id)} className={`${rowClasses} cursor-pointer`}>
                <td className='px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap'>{item.organization_id}</td>
                <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>{parseAmount(item.amount)}</td>
                <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>{item.type === 'received' ? 'Recibida' : 'Nota de Credito'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
