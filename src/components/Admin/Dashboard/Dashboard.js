import React from 'react';
import Header from '../Header/Header';
import useProperties from '../../../hooks/useProperties';

const Dashboard = () => {
	const [properties] = useProperties();
    return (
        <>
        <Header/>
        <div className="app-wrapper">

		<div className="app-content pt-3 p-md-3 p-lg-4">
			<div className="container-xl">

				<h1 className="app-page-title">Overview</h1>

				<div className="app-card alert alert-dismissible shadow mb-4 border-left-decoration" role="alert">
					<div className="inner">
						<div className="app-card-body p-3 p-lg-4">
							<h3 className="mb-3">Welcome to dashboard!</h3>
						</div>

					</div>
				</div>

				<div className="row g-4 mb-4">
					<div className="col-6 col-lg-3">
						<div className="app-card app-card-stat shadow h-100">
							<div className="app-card-body p-3 p-lg-4">
								<i className="fa fa-building icon" aria-hidden="true"></i>
								<h4 className="stats-type mb-1">Total Properties</h4>
								<div className="stats-figure">{properties.length}</div>

							</div>
							<a className="app-card-link-mask" href="#"></a>
						</div>
					</div>

					<div className="col-6 col-lg-3">
						<div className="app-card app-card-stat shadow h-100">
							<div className="app-card-body p-3 p-lg-4">
								<i className="fa fa-building icon" aria-hidden="true"></i>
								<h4 className="stats-type mb-1">Properties In Dubai</h4>
								<div className="stats-figure">{properties.filter(property => property.emirate === 'Dubai').length}</div>

							</div>
							<a className="app-card-link-mask" href="#"></a>
						</div>
					</div>

					<div className="col-6 col-lg-3">
						<div className="app-card app-card-stat shadow h-100">
							<div className="app-card-body p-3 p-lg-4">
								<i className="fa fa-building icon" aria-hidden="true"></i>
								<h4 className="stats-type mb-1">Properties In Abu Dhabi</h4>
								<div className="stats-figure">{properties.filter(property => property.emirate === 'Abu Dhabi').length}</div>

							</div>
							<a className="app-card-link-mask" href="#"></a>
						</div>
					</div>

					<div className="col-6 col-lg-3">
						<div className="app-card app-card-stat shadow h-100">
							<div className="app-card-body p-3 p-lg-4">
								<i className="fa fa-building icon" aria-hidden="true"></i>
								<h4 className="stats-type mb-1">Properties In Sharjah</h4>
								<div className="stats-figure">{properties.filter(property => property.emirate === 'Sharjah').length}</div>

							</div>
							<a className="app-card-link-mask" href="#"></a>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
            
        </>
    );
};

export default Dashboard;