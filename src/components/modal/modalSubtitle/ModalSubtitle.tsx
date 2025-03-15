import "./modalSubtitle.scss";

type ModalSubtitleProps = {
  title: string;
};
const ModalSubtitle: React.FC<ModalSubtitleProps> = ({ title }) => {
  return <h2 className={"modal-subtitle"}>{title}</h2>;
};

export default ModalSubtitle;
