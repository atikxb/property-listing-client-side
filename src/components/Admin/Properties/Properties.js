import React from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import useProperties from '../../../hooks/useProperties';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Properties = () => {
	const [properties, setproperties] = useProperties();
	const deleteProperty = async id => {
        try {
            const response = await axios.delete(`https://property-listing-server-side-github.vercel.app/properties/${id}`);
            response?.data?.deletedCount && toast.warning("Property deleted successfully !");
			const restProperties = properties.filter(property => property._id !== id);
			setproperties(restProperties);
        }
        catch (error) {
            console.log(error);
        }
	}
	return (
		<>
			<Header />
			<div className="app-wrapper">

				<div className="app-content">
					<div className="container-xl">

						<div className="row g-3 mb-4 align-items-center justify-content-between">
							<div className="col-auto">
								<h1 className="app-page-title mb-0">List of properties</h1>
							</div>
							<div className="col-auto">
								<div className="page-utilities">
									<div className="row g-2 justify-content-start justify-content-md-end align-items-center">
										<div className="col-auto">
											<Link to="/add-property"><button className="btn btn-secondary">Add
												Property</button></Link>
										</div>

									</div>
								</div>
							</div>
						</div>

						<div className="tab-content" id="orders-table-tab-content">
							<div className="tab-pane fade show active" id="orders-all" role="tabpanel"
								aria-labelledby="orders-all-tab">
								<div className="app-card app-card-orders-table shadow-sm mb-5">
									<div className="app-card-body">
										<div className="table-responsive">
											<table className="table app-table-hover mb-0 text-left">
												<thead>
													<tr>
														<th className="cell">#</th>
														<th className="cell">Property Title</th>
														<th className="cell">Property Location</th>
														<th className="cell">Price</th>
														<th className="cell">sqft</th>
														<th className="cell">Rooms</th>
														<th className="cell">Beds</th>
														<th className="cell">Baths</th>
														<th className="cell">Status</th>
														<th className="cell">Action</th>
													</tr>
												</thead>
												<tbody>
													{
														properties.map((property, index) => <tr key={property.id}><td className="cell">{index + 1}</td>
															<td className="cell">{property.name}</td>
															<td className="cell">{`${property.location}, ${property.emirate}, ${property.country}`}</td>
															<td className="cell">{property.price}</td>
															<td className="cell">{property.size}
															</td>
															<td className="cell">{property.room}</td>
															<td className="cell">{property.bed}</td>
															<td className="cell">{property.bath}</td>
															<td className="cell"><span className={property.status === "Available" ? 'badge bg-success' : 'badge bg-danger'}>{property.status}</span>
															</td>
															<td className="cell"><span onClick={()=> deleteProperty(property._id)} className="btn btn-danger text-white">Delete</span>
															</td></tr>)
													}
												</tbody>
											</table>
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

						</div>
					</div>
				</div>

			</div>

		</>
	);
};

export default Properties;