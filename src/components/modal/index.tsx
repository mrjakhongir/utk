import "./modal.scss";
const Modal = () => {
  return (
    <div className='modal'>
      <div className='modal__content'>
        <h1 className='modal__title'>Платежи по кредиту</h1>
        <p className='modal__text'>
          Введите сумму кредита и выберите срок, на который вы хотите его
          оформить. Мы автоматически рассчитаем для вас ежемесячный платеж,
          чтобы вы могли лучше спланировать свои финансы.{" "}
        </p>
        <button className='modal__button'>Добавить</button>
        <button className='modal__close_btn'>
          <img src='assets/cross.svg' alt='cross' />
        </button>
      </div>
    </div>
  );
};

export default Modal;
