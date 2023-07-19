import { toast } from "react-toastify";

export const createToasity = (msg, type ="success") => {
	toast[type](msg);
};
