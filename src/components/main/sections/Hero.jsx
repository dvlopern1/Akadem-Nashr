import '../Main.css';

function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-inner d-flex align-items-center justify-content-around">
                    <div className="hero-box d-none d-md-block"></div>
                    <div className="hero-info d-flex align-items-center justify-content-center">
                        <h2 className="hero-title text-left fs-1">Siz izlayotgan <br /> kitoblar shu yerda</h2>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Hero;