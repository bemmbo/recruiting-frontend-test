export const LoadingTable = () => {
  return (
    <div className="animate-pulse flow-root overflow-x-auto">
      <table className="overflow-x-auto min-w-full table-fixed divide-y divide-gray-300">
        <tbody className="divide-y divide-gray-200 bg-white">
          {[...Array(3)].map((_, index) => (
            <tr key={index}>
              <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                <div className="col-span-2 h-2 rounded bg-gray-200"></div>
              </td>
              <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                <div className="col-span-2 h-2 rounded bg-gray-200"></div>
              </td>
              <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                <div className="col-span-2 h-2 rounded bg-gray-200"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
