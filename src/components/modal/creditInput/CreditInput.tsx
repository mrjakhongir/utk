import React, { useState } from "react";
import { Data } from "..";
import ModalSubtitle from "../modalSubtitle/ModalSubtitle";
import "./creditInput.scss";

type CreditInputProps = {
  setData: React.Dispatch<React.SetStateAction<Data>>;
};

const CreditInput: React.FC<CreditInputProps> = ({ setData }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setData((prevData) => ({ ...prevData, credit: inputValue }));
  };

  return (
    <div className='credit-input'>
      <ModalSubtitle title='Ваша сумма кредита' />
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Введите данные'
          required
          value={inputValue}
          onChange={handleChange}
        />
        <button>Рассчитать</button>
      </form>
    </div>
  );
};

export default CreditInput;
