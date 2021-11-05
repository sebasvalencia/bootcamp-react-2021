
import './modal.scss';


const Modal = ( { handleClose, show, children, color }) => {

    const showHideClassName = show ? "modal display-block"  : "modal display-none"

    const styles = { backgroundColor: ` ${color}` };
    const buttonStyles = { color:  `${color}`};

    return (
        <div className={showHideClassName} >
            <section className="modal-main" style={styles } >
                <button type="button" className="close-button" style={buttonStyles} onClick={handleClose} >X</button>
                {children}
            </section>
        </div>
    )
}

export default Modal;