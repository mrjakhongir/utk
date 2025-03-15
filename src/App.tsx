import { useState } from "react";
import "./app.scss";
import Modal from "./components/modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='app'>
      <button className='app__button' onClick={() => setShowModal(true)}>
        Расчет платежей
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default App;
