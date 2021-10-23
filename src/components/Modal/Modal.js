
import './modal.scss';


const Modal = ( { handleClose, show, children }) => {

    const showHideClassName = show ? "modal display-block"  : "modal display-none"

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <button type="button" onClick={handleClose} >Close</button>
                {children}
            </section>
        </div>
    )
}

export default Modal;