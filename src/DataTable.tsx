import React from 'react';

interface DataTableProps {
  data: { 
    date: string; 
    distance: number 
  }[];
  onDelete: (date: string) => void;
  onEdit: (date: string) => void;
}

// Преобразуем значение в нужный формат "DD.MM.YYYY"
const formatDate = (date: string): string => {
  return date.split('-').reverse().join('.');
};

const DataTable: React.FC<DataTableProps> = ({ data, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Дата (ДД.ММ.ГГ)</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.date}>
            <td>{formatDate(row.date)}</td>
            <td>{row.distance}</td>
            <td>
              <button onClick={() => onDelete(row.date)}>✘</button>
              <button onClick={() => onEdit(row.date)}>✎</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;