type DataTableProps = {
  headers: string[];
  rows: string[][];
  caption?: string;
  footnote?: string;
};

export function DataTable({ headers, rows, caption, footnote }: DataTableProps) {
  return (
    <div className="my-6 overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[320px] text-left text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead className="bg-section-alt">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold text-primary">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border even:bg-white odd:bg-section-alt/50">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-body">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {footnote && <p className="border-t border-border px-4 py-2 text-xs text-body/80">{footnote}</p>}
    </div>
  );
}
