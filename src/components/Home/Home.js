import React, { useState } from 'react';
import useProperties from '../../hooks/useProperties';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { useForm } from 'react-hook-form';

const Home = () => {
    const [properties] = useProperties();
    const [searchedResult, setSearchedResult] = useState();
    const [click, setClick] = useState(false);
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        const searchedProperties = properties.filter(property => property.emirate === data.emirate && property.region === data.region && property.propertyType === data.propertyType && property.room === data.room && parseInt(property.price) >= parseInt(data.minPrice) && parseInt(property.price) <= parseInt(data.maxPrice));
        setSearchedResult(searchedProperties);
        setClick(true);
    }
    return (
        <>
            <div className="banner">

                <div className="container">
                    <h2 className="text-center text-capitalize text-white pb-5 fs-1">Find your best property</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="row g-3 align-items-center">
                        <div className="col-6  col-lg">
                            <select className="form-select" {...register("emirate")}>
                                <option selected disabled value="">Select Emirate</option>
                                {
                                    [...new Set(properties.map(properties => properties.emirate))].map(emirate => <option key={emirate} value={emirate}>{emirate}</option>)
                                }
                            </select>
                        </div>
                        <div className="col-6  col-lg">
                            <select className="form-select" {...register("region")}>
                                <option selected disabled value="">Select Region</option>
                                {
                                    [...new Set(properties.map(properties => properties.region))].map(region => <option key={region} value={region}>{region}</option>)
                                }
                            </select>
                        </div>

                        <div className="col-6  col-lg">
                            <select className="form-select" {...register("propertyType")}>
                                <option selected disabled value="">Property Type</option>
                                {
                                    [...new Set(properties.map(properties => properties.propertyType))].map(propertyType => <option key={propertyType} value={propertyType}>{propertyType}</option>)
                                }
                            </select>
                        </div>
                        <div className="col-6  col-lg">
                            <select className="form-select" {...register("room")}>
                                <option selected disabled value="">Number of Room</option>
                                {
                                    [...new Set(properties.map(properties => properties.room))].sort().map(room => <option key={room} value={room}>{room}</option>)
                                }
                            </select>
                        </div>
                        <div className="col-6  col-lg">
                            <input type="number" className="form-control" name="minprice" {...register("minPrice")} min='0' placeholder="Min. Price" required />
                        </div>
                        <div className="col-6  col-lg">
                            <input type="number" className="form-control" name="maxprice" {...register("maxPrice")} min='0' placeholder="Max. Price" required />
                        </div>

                        <div className="col-12 col-lg">
                            <button type="submit" className="btn btn-light px-5 py-2 w-100">Search</button>
                        </div>
                    </form>
                </div>

            </div>


            <section className="py-5">
                <div className="container">
                    <h2 className="text-center pb-4">Property Lists</h2>
                    <div className="row">
                        {
                            click && searchedResult.length ? searchedResult.map(property => <div className="col-lg-4 mb-4 " key={property.property?._id}>
                                <Link to={`/property-details/${property?._id}`}>
                                    <div className="card">
                                        <img src={property.img} alt="" />
                                        <div className="purpose">
                                            <span className="badge bg-warning">{property.sell}</span>
                                        </div>
                                        <div className="status">
                                            <span className={property.status === "Available" ? 'badge bg-success' : 'badge bg-danger'}>{property.status}</span>
                                        </div>
                                        <div className="type">
                                            <span className="badge bg-info">{property.propertyType}</span>
                                        </div>
                                        <div className="list-text">
                                            <h5><Link to={`/property-details/${property?._id}`}>{property.name}</Link></h5>
                                            <p><i className="bi bi-geo-alt-fill"></i> {property.location + ', ' + property.region}</p>
                                            <p className="sub-location">{property.emirate + ', ' + property.country}</p>
                                            <p className="price">Price: ${property.price}</p>
                                        </div>
                                        <div className="freature">
                                            <p><i className="fas fa-door-open"></i> {property.room} Rooms</p>
                                            <p><i className="fas fa-expand-arrows-alt"></i> {property.size} sqft</p>
                                            <p><i className="fas fa-bed"></i> {property.bed} Beds</p>
                                            <p><i className="fas fa-bath"></i> {property.bath} Bath</p>
                                        </div>
                                        <div className="list-text">
                                            <p><b>Parking:</b> <span className={property.parking === "Available" ? 'badge bg-success' : 'badge bg-danger'}>{property.parking}</span></p>
                                        </div>
                                    </div>
                                </Link>
                            </div>) : click && !searchedResult.length ? <p className='text-center'>No result found</p> : !click && !properties.length ? <Loading /> : properties.map(property => <div className="col-lg-4 mb-4 " key={property.property?._id}>
                                <Link to={`/property-details/${property?._id}`}>
                                    <div className="card">
                                        <img src={property.img} alt="" />
                                        <div className="purpose">
                                            <span className="badge bg-warning">{property.sell}</span>
                                        </div>
                                        <div className="status">
                                            <span className={property.status === "Available" ? 'badge bg-success' : 'badge bg-danger'}>{property.status}</span>
                                        </div>
                                        <div className="type">
                                            <span className="badge bg-info">{property.propertyType}</span>
                                        </div>
                                        <div className="list-text">
                                            <h5><Link to={`/property-details/${property?._id}`}>{property.name}</Link></h5>
                                            <p><i className="bi bi-geo-alt-fill"></i> {property.location + ', ' + property.region}</p>
                                            <p className="sub-location">{property.emirate + ', ' + property.country}</p>
                                            <p className="price">Price: ${property.price}</p>
                                        </div>
                                        <div className="freature">
                                            <p><i className="fas fa-door-open"></i> {property.room} Rooms</p>
                                            <p><i className="fas fa-expand-arrows-alt"></i> {property.size} sqft</p>
                                            <p><i className="fas fa-bed"></i> {property.bed} Beds</p>
                                            <p><i className="fas fa-bath"></i> {property.bath} Bath</p>
                                        </div>
                                        <div className="list-text">
                                            <p><b>Parking:</b> <span className={property.parking === "Available" ? 'badge bg-success' : 'badge bg-danger'}>{property.parking}</span></p>
                                        </div>
                                    </div>
                                </Link>
                            </div>)

                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;