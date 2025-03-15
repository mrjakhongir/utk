import { Data } from "..";
import ModalSubtitle from "../modalSubtitle/ModalSubtitle";
import "./monthSelector.scss";
import clsx from "clsx";

const months = [12, 24, 36, 48];

type MonthSelectorProps = {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
};

const MonthSelector: React.FC<MonthSelectorProps> = ({ data, setData }) => {
  return (
    <div className='month-selectors'>
      <ModalSubtitle title='Количество месяцев?' />
      <div className='btn-wrapper'>
        {months.map((month) => (
          <button
            key={month}
            className={clsx("btn", { btnActive: month === data.month })}
            onClick={() =>
              setData((prevData) => ({ ...prevData, month: month }))
            }
          >
            {month}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MonthSelector;
