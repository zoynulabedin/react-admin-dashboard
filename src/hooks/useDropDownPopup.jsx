import { useRef, useState } from "react"


const useDropDownPopup = () => {
    const [isOpen,setIsOpen] = useState();

    const dorpDownRef = useRef(null);

    // toogle menu
    const toogleMenu = () => {
        setIsOpen(!isOpen);
    }
  return { isOpen, toogleMenu, dorpDownRef };
}

export default useDropDownPopup;