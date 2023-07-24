import { Modal } from "@z-avanes/bootstrap-4-rtl";
function ModalPopup({target, children}) {




	return (
		<>
			<div className="modal fade" id={target} aria-hidden="true" role="dialog">
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">{children}</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ModalPopup;
