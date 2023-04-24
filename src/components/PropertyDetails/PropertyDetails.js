import React from 'react';
import { useParams } from 'react-router-dom';
import useProperty from '../../hooks/useProperty';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PropertyDetails = () => {
    const { id } = useParams();
    const [property] = useProperty(id);
    const { register, handleSubmit, reset } = useForm();
	const onSubmit = async data => {
        data.propertyId = id;
        data.propertyName = property.name;
        try {
            const response = await axios.post('https://property-listing-server-side-github.vercel.app/insertAppointment', data);
            response?.data?.result?.insertedId && toast.success("You have successfully booked the property !");
        }
        catch (error) {
            console.log(error);
        }
		reset();//reset form data after submit
    }
    return (
        <section className="py-5 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="shadow-sm p-4 rounded">
                            <div className="headeing">
                                <h2>{property?.name}</h2>
                                <p><i className="bi bi-geo-alt-fill"></i> {`${property?.location}, ${property?.region}, ${property?.emirate}, ${property?.country}`}</p>
                            </div>
                            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={property?.img} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between align-items-center pt-5">
                                <h3>Price: ${property?.price}</h3>
                                <p>Parking: <span className={property?.parking === "Available" ? 'badge bg-success' : 'badge bg-danger'}>{property?.parking}</span></p>
                                <p>Type: <span className="badge bg-info">{property?.propertyType}</span></p>
                            </div>
                        </div>

                        <div className="shadow-sm mt-5 p-4">
                            <h5>Description</h5>
                            <p>{property?.description}</p>
                            <h5>Specifications</h5>
                            <ul className="spec">
                                <li><i class="bi bi-check"></i>  {property?.room}Room</li>
                                <li><i class="bi bi-check"></i>  {property?.size}sqft</li>
                                <li><i class="bi bi-check"></i>  {property?.bed}Bed</li>
                                <li><i class="bi bi-check"></i>  {property?.bath}Bath</li>
                                <li><i class="bi bi-check"></i>  <b>Amnities: </b>{property?.amnities}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 mt-2 pt-2 mt-lg-5 pt-lg-5">
                        <h3 className='my-3'>Book the property!</h3>
                        <form  onSubmit={handleSubmit(onSubmit)} method='post'>
                            <input type="text" className="form-control mb-2" name="name" placeholder='Name' {...register("name")} required />
                            <input type="email" className="form-control mb-2" name="email" placeholder='Email' {...register("email")} required />
                            <input type="number" className="form-control mb-2" name="number" placeholder='Phone Number' {...register("number")} required />
                            <input type="submit" className="form-control mb-2 btn btn-success" name="submit" placeholder='Book Now' required />


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
        </section>
    );
};

export default PropertyDetails;