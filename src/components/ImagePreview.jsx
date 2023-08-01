import React, { useState } from "react";

const ImagePreview = () => {
	const [imageFile, setImageFile] = useState(null);
	const [imagePreview, setImagePreview] = useState(null);

	const handleImageChange = (e) => {
		const file = e.target.files[0];

		if (file) {
			const reader = new FileReader();

			reader.onloadend = () => {
				setImageFile(file);
				setImagePreview(reader.result);
			};

			reader.readAsDataURL(file);
		}
	};

	return (
		<div>
			<form action="">
				<div className="row form-row">
					<div className="col-12">
						<div className="form-group">
							<input
								type="file"
								accept="image/*"
								onChange={handleImageChange}
							/>
							{imagePreview && (
								<div>
									<img
										src={imagePreview}
										alt="Preview"
										style={{ maxWidth: "100%", maxHeight: "200px" }}
									/>
								</div>
							)}
						</div>
						<div className="form-group">
							<button className="btn btn-primary">Update profile</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ImagePreview;
