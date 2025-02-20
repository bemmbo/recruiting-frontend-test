export const Modal = ({ isOpen, setIsOpen }) => {
  if (!isOpen) {
    return <></>;
  }
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6">
      <div className="pointer-events-auto mx-auto max-w-xl rounded-xl bg-white p-6 ring-1 shadow-lg ring-gray-900/10">
        <p className="text-sm/6 text-gray-900">Factura asignada con exito</p>
        <div className="mt-4 flex items-center gap-x-5">
          <button
            type="button"
            className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            onClick={() => setIsOpen(false)}
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
