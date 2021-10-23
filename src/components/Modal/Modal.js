
import './modal.scss';


const Modal = ( { handleClose, show, children, pokemonName }) => {

    const showHideClassName = show ? "modal display-block"  : "modal display-none"

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {/* <div>{pokemonName}</div> */}
                <button type="button" onClick={handleClose} >X</button>
                {children}
            </section>
        </div>
    )
}

export default Modal;