import { useEffect, useRef, useState } from "react";


const useDropDownPopup = () => {
    const [isOpen,setIsOpen] = useState();

    const dorpDownRef = useRef(null);

    // toogle menu
    const toogleMenu = () => {
        setIsOpen(!isOpen);
    }
    const handleClickOUtside = (e) => {
        console.log(e.target);
        if(dorpDownRef.current && !dorpDownRef.current.contains(e.target)){
          setIsOpen(false);
        }
    }

    useEffect( () => {
      document.addEventListener("click", handleClickOUtside);
      return () => {
        document.removeEventListener("click", handleClickOUtside);
      }
    },[])
  return { isOpen, toogleMenu, dorpDownRef };
}

export default useDropDownPopup;