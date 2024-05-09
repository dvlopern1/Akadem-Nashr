import './Contact.css';

function Contact() {
    return (
        <div className="contact">
            <div className="container p-0">
                <div className="contact-inner p-0">
                    <div className="contact-about ps-2 bg-light-subtle d-flex flex-column align-items-center align-items-sm-start justify-content-center gap-3">
                        <h2 className="contact-title fs-1">Biz bilan bog'lanish</h2>
                        <div className="contact-box fs-2 d-flex align-items-start justify-content-center gap-3">
                            <span className="contact-btn">
                                <i class="bi bi-telephone-fill"></i>
                            </span>
                            <span className="contact-btn">
                                <i class="bi bi-telegram"></i>
                            </span>
                            <span className="contact-btn">
                                <i class="bi bi-instagram"></i>
                            </span>
                        </div>
                    </div>
                    <div className="contact-info d-flex flex-column align-items-start ms-5 ms-sm-0 justify-content-center gap-1 my-5">
                        <h3 className="contact-title">Markaziy ofis</h3>
                        <span className="contact-info-text">
                            <i class="contact-info-icon bi bi-geo-alt-fill fs-4"></i> Toshkent shahri
                        </span>
                        <span className="contact-info-text">
                            <i class="contact-info-icon bi bi-telephone-fill fs-4"></i> +998 99 777 33 55
                        </span>
                        <span className="contact-info-text">
                            <i class="contact-info-icon bi bi-envelope-fill fs-4"></i> info@mrdi.uz
                        </span>
                    </div>
                    <div className="contact-location mb-3">
                        <div style={{'position':'relative', 'overflow':'hidden'}}><a href="https://yandex.uz/maps/org/107341046187/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee','font-size':'12px',position:'absolute',top:'0px',}}>Kamoliddin Behzod nomidagi Milliy rassomlik va dizayn instituti</a><a href="https://yandex.uz/maps/10335/tashkent/category/university/184106140/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee','font-size':'12px',position:'absolute',top:'14px'}}>OO‘Yu  Toshkentda</a><iframe src="https://yandex.uz/map-widget/v1/?ll=69.268211%2C41.281579&mode=search&oid=107341046187&ol=biz&z=16.74" frameborder="1" allowfullscreen="true" style={{width: '100%',height: '50vh',position:'relative'}}></iframe></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;