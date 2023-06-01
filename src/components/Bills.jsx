import React, { useState, useEffect } from 'react';
import { getPendingInvoices } from '../Api/apiClient';
import lodash from 'lodash';
import {CreditNoteModal} from './CreditNoteModal';
import {InvoiceTable} from './InvoiceTable';
import {CreditNoteTable} from './CreditNoteTable';

export function Bills() {
  const [bills, setBills] = useState([]);
  const [creditNotes, setCreditNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [assignedNote, setAssignedNote] = useState({});
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getPendingInvoices().then((bills) => {
      const billsGrouped = lodash.groupBy(bills.data, 'type');
      setBills(billsGrouped.received);
      setCreditNotes(billsGrouped.credit_note);
    });
  }, []);

  const handleClick = (id) => {
    const filteredNotes = creditNotes.filter((item) => item.reference === id);
    setSelectedNote(filteredNotes);
  };

  const handleClose = () => {
    setSelectedNote(null);
    setAssignedNote({});
  };

  return (
    <div className='flex flex-col mt-10 justify-center items-center'>
      <h1 className='mb-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-black'>Selecciona una factura</h1>
      <div className='flex flex-col'>
        <div className='overflow-x-auto'>
          <div className='p-1.5 w-full inline-block align-middle'>
            <div className='overflow-hidden border rounded-lg'>
              <InvoiceTable bills={bills} handleClick={handleClick} />
            </div>
          </div>
          {selectedNote && <CreditNoteTable selectedNote={selectedNote} setAssignedNote={setAssignedNote} />}
        </div>
      </div>
      {Object.entries(assignedNote).length > 0 && (
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2'
          onClick={() => setOpenModal(!openModal)}
        >
          Asignar
        </button>
      )}
      <CreditNoteModal 
        assignedNote={assignedNote} 
        openModal={openModal} 
        setOpenModal={setOpenModal} 
        handleClose={handleClose} 
      />
    </div>
  );
}
