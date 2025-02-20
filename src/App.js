import { useEffect, useState } from "react";
import { CheckIcon } from "@heroicons/react/solid";
import { ChevronDoubleRightIcon } from "@heroicons/react/outline";

import "./App.css";
import { TableWithCheckboxes } from "./components/tableWithCheckboxes";
import { LoadingTable } from "./components/loadingTable";
import { Modal } from "./components/modal";

function App() {
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState([]);
  const [selectedCreditNote, setSelectedCreditNote] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const url = "https://recruiting.api.bemmbo.com/invoices/pending";
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((data) => setInvoices(data))
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <div className="m-10">
      <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="mb-10 ms-6">
          <div className="flex flex-row space-x-4">
            <span className=" bg-gray-100 z-10 flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
              {selectedInvoice.length > 0 ? (
                <CheckIcon className="w-8 h-8 p-1.5 bg-green-200 rounded-full" />
              ) : (
                1
              )}
            </span>
            <div>
              <h3 className="font-medium leading-tight">Facturas</h3>
              <p className="text-sm">
                Selecciona la factura que quieres asignar
              </p>
            </div>
            <div className="z-0 absolute top-8 h-full w-0.5 bg-gray-300" />
          </div>
          <div className="m-10 w-1/2 border border-zinc-300 rounded-md p-5 shadow-md">
            {invoices.length > 0 ? (
              <TableWithCheckboxes
                options={invoices.filter(({ type }) => type === "received")}
                selectedOptions={selectedInvoice}
                onChange={(invoice, checked) =>
                  checked
                    ? setSelectedInvoice([invoice])
                    : setSelectedInvoice([])
                }
              />
            ) : (
              <LoadingTable />
            )}
          </div>
        </li>

        <li className="mb-10 ms-6">
          <div className="flex flex-row space-x-4">
            <span className=" bg-gray-100 z-10 flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
              {selectedCreditNote.length > 0 && selectedInvoice.length > 0 ? (
                <CheckIcon className="w-8 h-8 p-1.5 bg-green-200 rounded-full" />
              ) : (
                2
              )}
            </span>
            <div>
              <h3 className="font-medium leading-tight">Notas de crédito</h3>
              {
                <p className="text-sm">
                  {selectedInvoice.length
                    ? "Selecciona las notas de crédito"
                    : "Selecciona una factura para continuar"}
                </p>
              }
            </div>
            <div className="z-0 absolute top-8 h-full w-0.5 bg-gray-300" />
          </div>
          <div className="m-10 w-1/2 border border-zinc-300 rounded-md p-5 shadow-md">
            {selectedInvoice.length > 0 ? (
              <TableWithCheckboxes
                options={invoices.filter(({ type }) => type === "credit_note")}
                selectedOptions={selectedCreditNote}
                onChange={(creditNote, checked) =>
                  checked
                    ? setSelectedCreditNote([...selectedCreditNote, creditNote])
                    : setSelectedCreditNote(
                        selectedCreditNote.filter((c) => c !== creditNote)
                      )
                }
              />
            ) : (
              <LoadingTable />
            )}
          </div>
        </li>

        <li className="mb-10 ms-6">
          <div className="flex flex-row space-x-4">
            <span className=" bg-gray-100 z-10 flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
              {selectedCreditNote.length > 0 && selectedInvoice.length > 0 ? (
                <CheckIcon className="w-8 h-8 p-1.5 bg-green-200 rounded-full" />
              ) : (
                3
              )}
            </span>
            <div>
              <h3 className="font-medium leading-tight">Resumen</h3>
              {
                <p className="text-sm">
                  Confirma la informacion antes de continuar
                </p>
              }
            </div>
            <div className="z-0 absolute top-8 h-full w-0.5 bg-gray-300" />
          </div>
          {selectedInvoice.length > 0 && selectedCreditNote.length > 0 && (
            <div className="flex m-10 rounded-md p-5 space-x-10">
              <div>
                <h2 className="text-base font-semibold text-gray-900">
                  Factura
                </h2>
                <div className="max-w-min rounded-lg bg-white px-4 py-5 shadow-2xl sm:p-6 border border-gray-200">
                  <div className="truncate text-sm font-medium text-gray-500">
                    {selectedInvoice[0]["organization_id"]}
                  </div>
                  <div className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                    {selectedInvoice[0]["amount"]}
                    {selectedInvoice[0]["currency"]}
                  </div>
                </div>
              </div>
              <div className="self-center">
                <ChevronDoubleRightIcon className="w-10 h-10 self-center text-gray-600 " />
              </div>
              <div className="shrink-0">
                <h2 className="text-base font-semibold text-gray-900">
                  Notas de credito
                </h2>
                <div className="flex flex-nowrap space-x-2 overscroll-y-auto ">
                  {selectedCreditNote.map((creditNote) => (
                    <div
                      key={creditNote.id}
                      className="overflow-hidden max-w-min rounded-lg bg-white px-4 py-5 shadow-2xl sm:p-6 border border-gray-200"
                    >
                      <div className="truncate text-sm font-medium text-gray-500">
                        {creditNote["organization_id"]}
                      </div>
                      <div className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                        {creditNote["amount"]}
                        {creditNote["currency"]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="self-center">
                <ChevronDoubleRightIcon className="w-10 h-10 self-center text-gray-600 " />
              </div>
              <div className="flex-none w-full self-center">
                <button
                  type="button"
                  className="rounded-md self-center max-h-fit bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                  onClick={() => setIsModalOpen(true)}
                >
                  Asignar
                </button>
                <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>
              </div>
            </div>
          )}
        </li>
      </ol>
    </div>
  );
}

export default App;
