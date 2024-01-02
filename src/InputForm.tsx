import React, { useState, ChangeEvent, FormEvent } from 'react';

interface InputFormProps {
  onSubmit: (date: string, distance: number) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleDistanceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDistance(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (date && distance) {
      onSubmit(date, parseFloat(distance));
      setDate('');
      setDistance('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Дата (ДД.ММ.ГГ):
        <input type="date" value={date} onChange={handleDateChange} />
      </label>
      <label>
        Пройдено км:
        <input type="number" value={distance} onChange={handleDistanceChange} />
      </label>
      <button type="submit">Ок</button>
    </form>
  );
};

export default InputForm;