export const TableWithCheckboxes = ({
  options = [],
  selectedOptions,
  onChange,
}) => {

  return (
    <div className="flow-root overflow-x-auto">
      <table className="overflow-x-auto min-w-full table-fixed divide-y divide-gray-300">
        <tbody className="divide-y divide-gray-200 bg-white">
          {options.map((invoice) => (
            <tr
              key={invoice.id}
              className={
                selectedOptions.includes(invoice) ? "bg-gray-50" : undefined
              }
            >
              <td className="relative px-7 sm:w-12 sm:px-6">
                {selectedOptions.includes(invoice) && (
                  <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                )}
                <div className="group absolute top-1/2 left-4 -mt-2 grid size-4 grid-cols-1">
                  <input
                    type="checkbox"
                    className="appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100"
                    value={invoice.id}
                    checked={selectedOptions.includes(invoice)}
                    onChange={(e) => onChange(invoice, e.target.checked)}
                  />
                </div>
              </td>
              <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                {invoice.organization_id}
              </td>
              <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                {invoice.amount} {invoice.currency}
              </td>
              <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                {invoice.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
