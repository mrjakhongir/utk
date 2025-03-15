import { Data } from "../..";
import "./totalSum.scss";

type TotalSumProps = {
  data: Data;
};

const TotalSum: React.FC<TotalSumProps> = ({ data }) => {
  const calculateCredit = () => {
    if (data.period === "в месяц") {
      return (+data.credit / data.month)
        .toFixed()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    } else {
      return (+data.credit * 12 / data.month).toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
  };
  return (
    <h2 className='total-sum'>
      <span>{calculateCredit()}</span>
      <span> рублей</span>
    </h2>
  );
};

export default TotalSum;
