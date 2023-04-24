import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
	const [showHide, setShowHide] = useState(false);
	const [showHideLogout, setshowHideLogout] = useState(false);
	const [showHideSideMenu, setshowHideSideMenu] = useState(false);
	const handleToggle = () => {
		setShowHide((current) => !current);
	  };
	  const handleLogoutToggle = () => {
		setshowHideLogout((current) => !current);
	  };
	  const handleSideMenuToggle = () => {
		setshowHideSideMenu((current) => !current);
	  };
    return (
        <header className="app-header fixed-top">
		<div className="app-header-inner">
			<div className="container-fluid py-2">
				<div className="app-header-content">
					<div className="row justify-content-between align-items-center">

						<div className="col-auto">
							<Link onClick={handleToggle} id="sidepanel-toggler" className="sidepanel-toggler d-inline-block d-xl-none" to="#">
								<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
									role="img">
									<title>Menu</title>
									<path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10"
										stroke-width="2" d="M4 7h22M4 15h22M4 23h22"></path>
								</svg>
							</Link>
						</div>
						<div className="search-mobile-trigger d-sm-none col">
							<i className="search-mobile-trigger-icon fas fa-search"></i>
						</div>
						<div className="app-search-box col">
							<form className="app-search-form">
								<input type="text" placeholder="Search..." name="search"
									className="form-control search-input"/>
								<button type="submit" className="btn search-btn btn-primary" value="Search"><i
										className="fas fa-search"></i></button>
							</form>
						</div>

						<div className="app-utilities col-auto">

							<div className="app-utility-item app-user-dropdown dropdown">
								<Link onClick={handleLogoutToggle} className="dropdown-toggle" id="user-dropdown-toggle" data-toggle="dropdown" to="#"
									role="button" aria-expanded="false">Admin</Link>
								<ul className={showHideLogout ? 'dropdown-menu show' : 'dropdown-menu sidepanel-hidden'} aria-labelledby="user-dropdown-toggle">
									<li>
										<hr className="dropdown-divider"/>
									</li>
									<li><Link onClick={() => signOut(auth)} className="dropdown-item" to="/login">Log Out</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="app-sidepanel" className={showHide ? 'app-sidepanel sidepanel-visible' : 'app-sidepanel sidepanel-hidden'}>
			<div onClick={handleToggle} id="sidepanel-drop" className="sidepanel-drop"></div>
			<div className="sidepanel-inner d-flex flex-column">
				<Link onClick={handleToggle} to="#" id="sidepanel-close" className="sidepanel-close d-xl-none">&times;</Link>

				<nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
					<ul className="app-menu list-unstyled accordion" id="menu-accordion">
						<li className="nav-item">
							<Link className="nav-link active" to="/dashboard">
								<span className="nav-icon">
									<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house-door"
										fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd"
											d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z" />
										<path fill-rule="evenodd"
											d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
									</svg>
								</span>
								<span className="nav-link-text">Dashboard</span>
							</Link>
						</li>

						<li className="nav-item has-submenu">

							<Link onClick={handleSideMenuToggle} className="nav-link submenu-toggle" to="#" data-toggle="collapse" data-target="#submenu-1"
								aria-expanded="false" aria-controls="submenu-1">
								<span className="nav-icon">

									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
										className="bi bi-house" viewBox="0 0 16 16">
										<path
											d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
									</svg>
								</span>
								<span className="nav-link-text">Property</span>
								<span className="submenu-arrow">
									<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down"
										fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd"
											d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
									</svg>
								</span>
							</Link>
							<div id="submenu-1" className={showHideSideMenu ? 'collapse submenu submenu-1 show' : 'collapse submenu submenu-1'} data-parent="#menu-accordion">
								<ul className="submenu-list list-unstyled">

									<li className="submenu-item"><Link className="submenu-link" to="/add-property">Add
											New</Link>
									</li>
									<li className="submenu-item"><Link className="submenu-link" to="/properties">List
											Of Property</Link>
									</li>
								</ul>
							</div>
						</li>

						<li className="nav-item">

							<Link className="nav-link" to="/appointment">
								<span className="nav-icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
										className="bi bi-calendar2-check" viewBox="0 0 16 16">
										<path
											d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
										<path
											d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
										<path
											d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
									</svg>
								</span>
								<span className="nav-link-text">Appointments</span>
							</Link>
						</li>
					</ul>
				</nav>

			</div>
		</div>
	</header>
    );
};

export default Header;