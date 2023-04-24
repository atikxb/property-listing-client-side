import React from 'react';
import Header from '../Header/Header';
import useAppointments from '../../../hooks/useAppointments';

const Appointment = () => {
	const [appointments] = useAppointments();
	return (
		<>
			<Header />
			<div className="app-wrapper">

				<div className="app-content pt-3 p-md-3 p-lg-4">
					<div className="container-xl">

						<div className="row g-3 mb-4 align-items-center justify-content-between">
							<div className="col-auto">
								<h1 className="app-page-title mb-0">Appointments</h1>
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
														<th className="cell">Name</th>
														<th className="cell">Email</th>
														<th className="cell">Phone</th>
														<th className="cell">Property title</th>
														<th className="cell">Action</th>
													</tr>
												</thead>
												<tbody>
													{
														appointments.map((appointment, index) => <tr key={appointment.id}>
															<td className="cell">{index + 1}</td>
															<td className="cell">{appointment.name}</td>
															<td className="cell">{appointment.email}</td>
															<td className="cell">{appointment.number}</td>
															<td className="cell">{appointment.propertyName}</td>
															<td className="cell"><span className="badge bg-success">Scheduled</span>
															</td>
														</tr>)
													}
													<tr>
													</tr>
												</tbody>
											</table>
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

export default Appointment;