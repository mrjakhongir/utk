import { Data } from "..";
import ModalSubtitle from "../modalSubtitle/ModalSubtitle";
import clsx from "clsx";
import "./periodSelector.scss";
import TotalSum from "./totalSum/TotalSum";

const periods = ["в год", "в месяц"];

type PeriodSelectorProps = {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
};

const PeriodSelector: React.FC<PeriodSelectorProps> = ({ data, setData }) => {
  return (
    <div
      className={clsx("period-selectors", { showPeriodSelectors: data.credit })}
    >
      <ModalSubtitle title='Итого ваш платеж по кредиту:' />
      <div className='btn-wrapper'>
        {periods.map((period) => (
          <button
            key={period}
            className={clsx("btn", { btnActive: period === data.period })}
            onClick={() =>
              setData((prevData) => ({
                ...prevData,
                period: prevData.period === "в год" ? "в месяц" : "в год",
              }))
            }
          >
            {period}
          </button>
        ))}
      </div>
      <TotalSum data={data} />
    </div>
  );
};

export default PeriodSelector;
