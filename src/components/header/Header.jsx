import './Header.css';
import image from '../image.png';

function Header() {
    return (
        <header className="header">
            <div className="header-top bg-dark py-3">
                <div className="container">
                    <div className="header-top-inner d-flex align-items-center justify-content-between">
                        <a className="link-unstyled text-light link-hover" href="tel:+998997773355"><i class="bi bi-telephone text-danger"></i> +998 99 777 33 55</a>
                        <div className="header-top-socials d-none d-sm-flex align-items-center justify-content-between gap-3">
                            <a className="text-light link-hover" href="https://telegram.org/mrdi"><i class="bi bi-telegram"></i></a>
                            <a className="text-light link-hover" href="https://facebook.com/mrdi"><i class="bi bi-facebook"></i></a>
                            <a className="text-light link-hover" href="https://x.com/mrdi"><i class="bi bi-twitter-x"></i></a>
                            <a className="text-light link-hover" href="https://instagram.com/mrdi"><i class="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-center container d-none d-lg-flex align-items-center justify-content-between align-self-center gap-5">
                <a href="#" className="header-logo">
                    <img width={100} src={image} alt="LOGO" className="header-logo-img" />
                </a>
                <div className="d-flex align-items-center justify-content-between align-self-center gap-5">
                    <button type="button" class="btn bg-danger text-light dropdown-toggle btn-dropdown d-flex align-items-center justify-content-between gap-3" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-grid-3x3-gap fs-4"></i> Kategoriyalar
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                    <input className="header-search" type="text" placeholder="Izlash..." />
                </div>
                <button className="btn btn-danger">SING UP</button>
            </div>
            <hr className="d-none d-md-block" />
            <nav className="navbar shadow-0 p-0 m-0">
                <div className="w-100 d-flex align-items-center justify-content-center">
                    <a href="#" className="header-logo d-block d-lg-none text-dark fw-bold">
                        <img width={100} src={image} alt="LOGO" className="header-logo-img" /> Kutubxona
                    </a>
                    <button class="btn ms-auto d-block btn-outline-light d-md-none navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="container">
                    <ul className="navbar-list d-none d-md-flex w-75 py-4 mx-auto fw-bold align-items-center justify-content-between">
                        <li className="navbar-item">Asosiy</li>
                        <li className="navbar-item">Biz haqimizda</li>
                        <li className="navbar-item">Kitoblar</li>
                        <li className="navbar-item">Jamoa</li>
                        <li className='navbar-item'>Bog'lanish</li>
                        <li className='navbar-item'>Yangiliklar</li>
                        <li className='navbar-item'>Uzbek</li>

                    </ul>
                </div>
            </nav>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header bg-light">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Main menu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul className="navbar-list d-flex flex-column p-0 mx-auto fw-bold align-items-start justify-content-between gap-3">
                        <li className="navbar-item">Asosiy</li>
                        <li className="navbar-item">Biz haqimizda</li>
                        <li className="navbar-item">Kitoblar</li>
                        <li className="navbar-item">Jamoa</li>
                        <li className='navbar-item'>Bog'lanish</li>
                        <li className='navbar-item'>Yangiliklar</li>
                        <li className='navbar-item'>Uzbek</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;