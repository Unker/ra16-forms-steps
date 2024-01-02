import React, { useState } from 'react';
import InputForm from './InputForm';
import DataTable from './DataTable';
import './Tracking.css';

interface DataItem {
  date: string;
  distance: number;
}

const Tracking: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  const handleSubmit = (date: string, distance: number) => {
    const existingItem = data.find((item) => item.date === date);

    if (existingItem) {
      const newData = data.map((item) =>
        item.date === date ? { ...item, distance: item.distance + distance } : item
      );
      setData(newData);
    } else {
      setData([...data, { date, distance }]);
    }
  };

  const handleDelete = (date: string) => {
    const newData = data.filter((item) => item.date !== date);
    setData(newData);
  };

  return (
    <div className="container">
      <h1>Учёт тренировок</h1>
      <InputForm onSubmit={handleSubmit} />
      <DataTable data={data} onDelete={handleDelete} />
    </div>
  );
};

export default Tracking;