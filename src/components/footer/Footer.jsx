import './Footer.css'
import image from '../image.png';

function Footer() {
  return (
    <footer className="footer bg-dark pt-5">
      <div className="container d-flex flex-wrap align-items-start justify-content-between justify-content-md-around gap-5 pb-5 pt-0 p-5 p-md-0 pb-md-5">
        <div className="footer-left d-flex flex-column align-items-start justify-content-center gap-4 border-lg-end border-lg-1 pe-5">
          <a href="#">
            <img width={200} src={image} alt="IMG" />
          </a>
          <address className="text-light m-0 p-0">Toshkent shahar Mirobod tumani <br /> Abdulla Qahhor ko'chasi</address>
          <div className="header-top-socials d-flex align-items-center justify-content-between gap-3">
            <a className="text-light link-hover" href="https://telegram.org/mrdi"><i class="bi bi-telegram"></i></a>
            <a className="text-light link-hover" href="https://facebook.com/mrdi"><i class="bi bi-facebook"></i></a>
            <a className="text-light link-hover" href="https://x.com/mrdi"><i class="bi bi-twitter-x"></i></a>
            <a className="text-light link-hover" href="https://instagram.com/mrdi"><i class="bi bi-instagram"></i></a>
          </div>
        </div>
        <div className="footer-center">
          <h4 className="footer-title text-light">Biz Bilan Bog'lanish</h4>
          <a className="text-danger fw-bold fs-2" href="tel:+998997773355">+998 99 777 33 55</a>
          <p className="text-light">Duyshanba - Juma: 09:00 - 20:00</p>
          <a className="text-light fw-bold fs-2" href="mailto:info@mrdi.uz">info@mrdi.uz</a>
        </div>
        <ul className="footer-menu text-light">
          <h4 className="footer-menu-title">Menu</h4>
          <li className="footer-item">Ilmiy</li>
          <li className="footer-item">Ilmiy-adabiy</li>
          <li className="footer-item">Ilmiy-marifiy</li>
          <li className="footer-item">Ilmiy</li>
        </ul>
      </div>
      <div className="footer-bottom border-top py-3">
        <p className="text-center fw-bold text-light p-0 m-0 p-2 p-xs-0">MRDI 2024. Barcha huquqlar himoyalangan</p>
      </div>
    </footer>
  )
}

export default Footer;