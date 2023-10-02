import DataTable from "datatables.net-dt";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import ModalPopup from "../../components/ModalPopup/ModalPopup";
import useFormsFields from "../../hooks/useFormsFields";

import { timeAgo } from "../../utility/timeago";
import { createToasity } from "../../utility/toastify";
import PageHeader from "../../components/pageHeader/PageHeader";
import { DeleteBrand, createBrand, updateStatusBrand } from "../../features/product/productApiSlice";
import {getAllProductDatas,setMessageEmpty} from "../../features/product/productSlice";
import { updateStatusUser } from "../../features/user/userApiSlice";
const Brands =  () => {
	const dispatch = useDispatch();
		const { brand, error, message,loader } = useSelector(getAllProductDatas);

	const { input, handleInputchange, resetForm, setInput } = useFormsFields({
		name: "",
		email: "",
		password: "",
		role: "",
	});
	


const [logo, setLogo] = useState(null);
const [logoPreview, setLogoPreview] = useState(null);

const HandleLogoPreview = (e) => {
	const file = e.target.files[0];

    if (file) {
      // Create a blob URL from the selected file
      const blobUrl = URL.createObjectURL(file);

      // Set the blob URL as the image source
    setLogoPreview(blobUrl);
	setLogo(file);
    }
};

const logoClear = () => {
	setLogo(null);
}

		useEffect(() => {
			if (error) {
				createToasity(error, "error");
				dispatch(setMessageEmpty());
			} else if (message) {
				createToasity(message, "success");
				dispatch(setMessageEmpty());
			}
		}, [error, message, dispatch]);




	const HandleDeleteBrand = (id) => {
		swal({
			title: "Are you sure?",
			text: "Are you sure that you want to delete this Brand?",
			icon: "warning",
			dangerMode: true,
		}).then((willDelete) => {
			dispatch(DeleteBrand(id));
			if (willDelete) {
				swal("Deleted!", "Your imaginary file has been deleted!", "success");
			}
		});
	};


	const handleStatus = (status, id) => {
		dispatch(updateStatusBrand({ status, id }));
	};
const HandleBrandSubmit = (e) => {
	e.preventDefault();

	const form_data = new FormData();
	form_data.append("name", input.name);
	form_data.append("logo", logo);

	dispatch(
		createBrand(form_data)
	);
	resetForm();
};


	useEffect(() => {
		new DataTable(".table");
	},[]);

  return (
		<>
		<PageHeader title="Brand"/>
			<div className="row">
				<div className="col-md-12">
					<ModalPopup target="userModalPopup">
						<h4>Add New Brand</h4>
						<form onSubmit={HandleBrandSubmit} method="POST" encType="multipart/form-data" >
							<div className="my-3">
								<input
									type="text"
									name="name"
									placeholder="Name"
									value={input.name}
									onChange={handleInputchange}
									className="form-control"
								/>
							</div>
							{/* logo upload field */}
							<div className="my-3">
								{!logoPreview && (<input
									type="file"
									name="logo"
									className="form-control"
									onChange={HandleLogoPreview}
								/>)} 
							
								</div>
								<div>
								{logoPreview && (
									<img
									src={logoPreview}
									alt="Preview"
									style={{ maxWidth: '300px', maxHeight: '300px' }}
									/>
								)}
								{logoPreview && (
									<button onClick={logoClear}>Clear</button>
								)}
        					</div>
						
							<div className="my-3 text-center">
								
								<button type="submit" className="btn btn-primary btn-block">
									{loader && (<span>Creating Brand ...</span>) || (<span>Create Brand</span>)}
									
								</button>
							</div>
						</form>
					</ModalPopup>
				
					<div className="card card-table">
						<div className="card-header d-flex justify-content-between">
							<h4 className="card-title">Appointment List</h4>
							<button
								data-target="#userModalPopup"
								data-toggle="modal"
								className="btn btn-primary">
								Add new
							</button>
						</div>
						<div className="card-body">
							<div className="table-responsive">
								{brand && (
									<table className="table table-hover table-center mb-0">
										<thead>
											<tr>
												<th>#</th>
												<th>Brand Name</th>
												<th>Brand Logo</th>
												<th>created At</th>
												<th>Status</th>
												<th className="text-right">Action</th>
											</tr>
										</thead>
										<tbody>
											{brand?.map((item, index) => {
												return (
													<tr key={index}>
														<td>{index + 1}</td>
														<td>{item.name}</td>
														<td><img style={{width:"100px",height:"100px",objectFit:"cover"}} src={item.logo} alt="" /></td>
														<td>{timeAgo(item.createdAt)}</td>
														<td>
															<div className="status-toggle">
																<input
																	type="checkbox"
																	id="status_1"
																	className="check"
																	checked={item.status ? true : false}
																/>
																<label
																	onClick={() =>
																		handleStatus(item.status, item._id)
																	}
																	htmlFor="status_1"
																	className="checktoggle">
																	checkbox
																</label>
															</div>
														</td>
														<td className="text-right">
															<button
																
																data-target="#userEditModalPopup"
																data-toggle="modal"
																className="btn btn-warning mr-1">
																<i
																	className="fe fe-edit"
																	aria-hidden="true"></i>
															</button>
															<button
																onClick={() => HandleDeleteBrand(item._id)}
																className="btn btn-danger">
																<i
																	className="fe fe-trash"
																	aria-hidden="true"></i>
															</button>
														</td>
													</tr>
												);
											})}
										</tbody>
									</table>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Brands