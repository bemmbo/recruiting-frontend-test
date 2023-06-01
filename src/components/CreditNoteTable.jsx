import React, { useState } from 'react';
import { parseAmount } from '../utils/parseCurrency';

export const CreditNoteTable = ({ selectedNote, setAssignedNote }) => {
  const [selectedId, setSelectedId] = useState(null);

  const handleRowClick = (item) => {
    setAssignedNote(item);
    setSelectedId(item.id);
  };

  return (
    <>
      <h1 className='mt-10 mb-4 text-lg font-bold leading-none tracking-tight text-gray-500 md:text-5xl lg:text-2xl dark:text-black'>
        Notas de credito asociadas a la factura
      </h1>
      <div className='p-1.5 w-full inline-block align-middle'>
        <div className='overflow-hidden border rounded-lg'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
                >
                  Empresa
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
                >
                  Monto
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
                >
                  Estado
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {selectedNote && selectedNote.length > 0 ? (
                selectedNote.map((item, index) => {
                  const rowClasses =
                    item.id === selectedId
                      ? 'bg-blue-200'
                      : 'bg-gray-50 hover:bg-gray-100';
                  return (
                    <tr
                      key={index}
                      onClick={() => handleRowClick(item)}
                      className={`${rowClasses} cursor-pointer`}
                    >
                      <td className='px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap'>
                        {item.organization_id}
                      </td>
                      <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        {parseAmount(item.amount, item.currency)}
                      </td>
                      <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        {item.type === 'received'
                          ? 'Recibida'
                          : 'Nota de Credito'}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td className='px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap'>
                    No hay notas de credito asociadas
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
