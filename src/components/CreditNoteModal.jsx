import React from 'react';
import { parseAmount } from '../Utils/parseCurrency';

export const CreditNoteModal = ({ assignedNote, openModal, setOpenModal, handleClose }) => {
  return (
    openModal && (
      <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
        <div className='bg-white p-6 border-2 border-gray-300 rounded-lg shadow-2xl space-y-4'>
          <h2 className='text-2xl mb-2'>
            Nota de credito asignada correctamente
          </h2>
          <h3 className='text-xl mb-2'>Detalle de la nota de credito</h3>
          <div className='space-y-2 text-lg leading-6'>
            <p>
              <span className='font-bold'>Empresa: </span>
              {assignedNote.organization_id}
            </p>
            <p>
              <span className='font-bold'>Monto: </span>
              {parseAmount(assignedNote.amount)}
            </p>
          </div>
          <button
            className='mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-200'
            onClick={() => {
              setOpenModal(!openModal);
              handleClose();
            }}
          >
            Seguir Asignando!
          </button>
        </div>
      </div>
    )
  );
};
