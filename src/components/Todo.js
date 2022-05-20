import { useState } from 'react';
import Modal from './Modal.js';
import Backdrop from './Backdrop.js';

function Todo(props){
    const [isModalOpen, setModalIsOpen] = useState(false);

    function clickedDelete(){
        console.log('Delete clicked');
        setModalIsOpen(true);
    }

    function closeModal(){
        setModalIsOpen(false);
    }

    return(
        <div className="card">
            <h2>
                {props.title}
            </h2>
            <div className="actions">
                <button className="btn" onClick={clickedDelete}>Delete</button>
            </div>
            { isModalOpen ? <Modal onCancel={closeModal} onConfirm={closeModal} /> : null }
            { isModalOpen ? <Backdrop onClick={closeModal} /> : null }
        </div>
    )
}

export default Todo;