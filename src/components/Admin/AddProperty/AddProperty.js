import React from 'react';
import Header from '../Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useForm } from 'react-hook-form'; 

const AddProperty = () => {
	const { register, handleSubmit, reset } = useForm();
	const imageAPIKey = '77d32d9c4f942e5f8d2fada6d2811886';
	const onSubmit = async data => {
		//uploading image to imagebb
		const formData = new FormData();
        formData.append('image', data.img[0]);
		try {
			const response = await axios.post(`https://api.imgbb.com/1/upload?key=${imageAPIKey}`, formData);
			if (response.data.success) {
				const img = response.data.data.url;
				data.img = img;
				try {
					//inserting image url and other data to mongodb
            const response = await axios.post('https://property-listing-server-side-github.vercel.app/insertProperty', data);
            response?.data?.insertedId && toast.success("Property added successfully !");
        }
        catch (error) {
            console.log(error);
        }
			}
		} catch (error) {
			console.log(error);		
		}
		reset();//reset form data after submit
    }
    return (
        <>
        <Header/>
        <div className="app-wrapper">

		<div className="app-content pt-3 p-md-3 p-lg-4 ">
			<div className="container-xl">

				<div className="shadow p-2 p-lg-5 rounded">
					<h1 className="app-page-title">Add New Property</h1>

					<form onSubmit={handleSubmit(onSubmit)} method='post' className="row g-3 px-3 px-lg-5">
						<div className="col-md-6">
							<label htmlFor="title" className="form-label">Property Title</label>
							<input type="text" className="form-control" name="title" {...register("name")} id="title" required/>
						</div>
						<div className="col-md-6">
							<label htmlFor="plocation" className="form-label">Property Address</label>
							<input type="text" className="form-control" Name="plocation" id="plocation" {...register("location")} required/>
						</div>
						<div className="col-md-4">
							<label htmlFor="cteacher" className="form-label">Region</label>
							<input type="text" className="form-control" name="cteacher" id="cteacher" {...register("region")} required/>
						</div>
						<div className="col-md-4">
							<label htmlFor="cteacher" className="form-label">Emirate</label>
							<select {...register("emirate")} className="form-select">
								<option value="Abu Dhabi">Abu Dhabi</option>
								<option selected value="Dubai">Dubai</option>
								<option value="Sharjah">Sharjah</option>
								<option value="Ajman">Ajman</option>
							</select>
						</div>
						<div className="col-md-4">
							<label htmlFor="cteacher" className="form-label">Country</label>
							<input type="text" className="form-control" placeholder='UAE' value="UAE" {...register("country")} readOnly name="cteacher" id="cteacher"/>
						</div>
						<div className="col-md-3">
							<label htmlFor="cteacher" className="form-label">Size in sqft</label>
							<input type="number" className="form-control" name="cteacher" {...register("size")} id="cteacher" required/>
						</div>
						<div className="col-md-3">
							<label htmlFor="cteacher" className="form-label">Rooms</label>
							<input type="number" className="form-control" name="cteacher" id="cteacher" {...register("room")} required/>
						</div>
						<div className="col-md-3">
							<label htmlFor="cteacher" className="form-label">Beds</label>
							<input type="number" className="form-control" name="cteacher" id="cteacher" {...register("bed")} required/>
						</div>
						<div className="col-md-3">
							<label htmlFor="cteacher" className="form-label">Bath</label>
							<input type="number" className="form-control" name="cteacher" id="cteacher" {...register("bath")} required/>
						</div>
						<div className="col-md-3">
						<label htmlFor="cteacher" className="form-label">Purpose</label>
							<select name="" id="" {...register("sell")} className="form-select">
								<option selected value="For Sell">For Sell</option>
								<option value="For Rent">For Rent</option>
							</select>
						</div>
						<div className="col-md-3">
						<label htmlFor="cteacher" className="form-label">Property Types</label>
							<select name="" id="" {...register("propertyType")} className="form-select">
								<option selected value="Detached Villa">Detached Villa</option>
								<option value="Villa in a Compound">Villa in a Compound</option>
								<option value="Apartment">Apartment</option>
							</select>
						</div>
						<div className="col-md-3">
						<label htmlFor="cteacher" className="form-label">Status</label>
							<select name="" id="" {...register("status")} className="form-select">
								<option value="Rented">Rented</option>
								<option value="Sold">Sold</option>
								<option selected value="Available">Available</option>
							</select>
						</div>
						<div className="col-md-3">
						<label htmlFor="cteacher" className="form-label">Parking</label>
							<select name="" id="" {...register("parking")} className="form-select">
								<option selected value="Available">Available</option>
								<option value="Not Available">Not Available</option>
							</select>
						</div>
						<div className="col-md-3">
							<label htmlFor="cteacher" className="form-label">Price</label>
							<input type="number" className="form-control" name="cteacher" id="cteacher" {...register("price")} required/>
						</div>
						<div className="col-md-3">
							<label htmlFor="cteacher" className="form-label">Amnities</label>
							<input type="text" className="form-control" name="cteacher" id="cteacher" {...register("amnities")}/>
						</div>
						<div className="col-md-6">
							<label htmlFor="cdocument" className="form-label">Upload Proparty Image</label>
							<input type="file"  name='image' accept='image/*' className="form-control" id="cdocument" {...register("img")} required/>
						</div>
						<div className="col-md-12">
							<label htmlFor="cdocument" className="form-label">Description</label>
							<textarea className="form-control" name="cdocument" id="cdocument" {...register("description")}></textarea>
						</div>

						<div className="col-12">
							<button type="submit" name="add" className="btn btn-primary text-white">Add Property</button>
						</div>
					</form>
					<ToastContainer
                                position="top-center"
                                autoClose={2000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />
				</div>
			</div>
		</div>
	</div>
            
        </>
    );
};

export default AddProperty;