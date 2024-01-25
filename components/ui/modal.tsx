'use client'

import React from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog"


interface ModelProps {
    description:string
    title : string 
    isOpen : boolean
    onClose : ()=>void
    children? : React.ReactNode
}


const Modal:React.FC<ModelProps> = ({title,description,isOpen,onClose,children})=>{

   
   const onChange = (val:boolean)=>{
    if(!open){
        onClose();
    }

   }
    
    return (
         <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <div>
                    {children}
                </div>
            </DialogContent>
         </Dialog>
    )
}



export default Modal;