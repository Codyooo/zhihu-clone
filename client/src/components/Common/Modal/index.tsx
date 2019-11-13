import React, { useEffect, useRef, createContext } from 'react';
import { ModalWrapper } from './style';
import ReactDOM from 'react-dom';
import { ReactComponent as LogoClose } from '../../../assets/close.svg';

interface Props {
    visible?: boolean;
    onOk?: () => void;
    onCancel: () => void;
    children: any;
    width?: string;
    height?: string
}

const Modal: React.FC<Props> = ({ children, visible = false, onCancel, width = '650px', height = 'calc(100vh - 48px)' }) => {
    const root = useRef(document.createElement('div'));

    const cancelModal = () => {
        onCancel();
        // document.body.style.overflow = 'scroll';

    }

    useEffect(() => {
        // document.body.style.overflow = 'hidden';
        const keyup = (event: KeyboardEvent) => event.key === 'Escape' ? cancelModal() : null;
        window.addEventListener('keyup', keyup);
        const modalRoot = document.getElementById('modal-root');
        modalRoot && modalRoot.appendChild(root.current);

        return () => {
            root.current.remove();
            window.removeEventListener('keyup', keyup);
        }
    }, [])

    return (ReactDOM.createPortal(<ModalWrapper visible={visible} width={width} height={height}>
        <section className="container">
            {children}
            <div className='btn-close' onClick={cancelModal}><LogoClose /></div>
        </section>


    </ModalWrapper>, root.current)
    )
}

export default Modal;
