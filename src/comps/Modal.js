import React from "react"
import {motion} from 'framer-motion'

const Modal = ({selectedImg, setSelectedImg}) =>{
    const handleClose = (e) =>{
        if(e.target.classList.contains('backdrop'))
        setSelectedImg(null)
    }
    return(<div className="backdrop" onClick={handleClose}>
        <motion.img src={selectedImg} initial={{y:'-100vh'}} animate={{y:0}}/>
    </div>)
}

export default Modal;