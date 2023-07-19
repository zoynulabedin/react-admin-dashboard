import swal from "sweetalert";

export const sweetalertBasic = (msg) => {
	swal(msg);
};

export const sweetalertStandard = (msg, type) => {
	swal(msg.title, msg.desc, type);
};

