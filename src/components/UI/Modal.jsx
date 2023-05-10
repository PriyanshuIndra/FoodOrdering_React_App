import React from 'react'
import { ReactDOM } from 'react'
import classes from './Modal.module.css'


function Backdrop(props) {

    return <div className={classes.backdrop} />
}

function ModalOverlay(props) {

    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays')

function Modal(props) {
  return (
    <>
        {ReactDOM.createPortal(<Backdrop />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>)}
    </>
  )
}

export default Modal