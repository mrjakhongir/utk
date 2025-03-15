import CreditInput from "./creditInput/CreditInput";
import MonthSelector from "./monthSelector/MonthSelector";
import "./modal.scss";
import { useEffect, useState } from "react";
import PeriodSelector from "./periodSelector/PeriodSelector";
import clsx from "clsx";

export interface Data {
  credit: string;
  month: number;
  period: "в год" | "в месяц";
}

type ModalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const Modal: React.FC<ModalProps> = ({ showModal, setShowModal }) => {
  const [data, setData] = useState<Data>({
    credit: "",
    month: 12,
    period: "в месяц",
  });

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target === document.querySelector(".modal")) {
        setShowModal(false);
      }
    });
  });

  return (
    <div className={clsx("modal", { showModal: showModal })}>
      <div className='modal__content'>
        <h1 className='modal__title'>Платежи по кредиту</h1>
        <p className='modal__text'>
          Введите сумму кредита и выберите срок, на который вы хотите его
          оформить. <br /> Мы автоматически рассчитаем для вас ежемесячный
          платеж, чтобы вы могли лучше спланировать свои финансы.{" "}
        </p>
        <CreditInput setData={setData} />
        <MonthSelector data={data} setData={setData} />
        <PeriodSelector data={data} setData={setData} />
        <button className='modal__button'>Добавить</button>
        <button
          className='modal__close_btn'
          onClick={() => setShowModal(false)}
        >
          <img src='assets/cross.svg' alt='cross' />
        </button>
      </div>
    </div>
  );
};

export default Modal;
