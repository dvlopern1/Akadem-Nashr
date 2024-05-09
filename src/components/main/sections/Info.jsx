import '../Main.css';

function Info() {
    return (
        <section className="info p-5">
            <ul className="info-list d-flex flex-wrap flex-grow align-items-center justify-content-between gap-3 gap-sm-4 gap-md-5">
                <li className="info-item d-flex flex-column flex-sm-row text-center text-md-left align-items-center justify-content-start gap-4 border rounded-5 p-3 p-sm-4 p-md-5">
                    <div className="info-item-img">
                        <i class="bi bi-book fs-1"></i>
                    </div>
                    <div className="info-item-body">
                        <h3 className="info-item-title">15,321</h3>
                        <p className="info-item-text">Jami kitoblar</p>
                    </div>
                </li>
                <li className="info-item d-flex flex-column flex-sm-row text-center text-md-left align-items-center justify-content-start gap-4 border rounded-5 p-3 p-sm-4 p-md-5">
                    <div className="info-item-img">
                        <i class="bi bi-bookmarks fs-1"></i>
                    </div>
                    <div className="info-item-body">
                        <h3 className="info-item-title">2,341</h3>
                        <p className="info-item-text">Janrlar</p>
                    </div>
                </li>
                <li className="info-item d-flex flex-column flex-sm-row text-center text-md-left align-items-center justify-content-start gap-4 border rounded-5 p-3 p-sm-4 p-md-5">
                    <div className="info-item-img">
                        <i class="bi bi-people fs-1"></i>
                    </div>
                    <div className="info-item-body">
                        <h3 className="info-item-title">1,379</h3>
                        <p className="info-item-text">Mualliflar</p>
                    </div>
                </li>
                <li className="info-item d-flex flex-column flex-sm-row text-center text-md-left align-items-center justify-content-start gap-4 border rounded-5 p-3 p-sm-4 p-md-5">
                    <div className="info-item-img">
                        <i class="bi bi-emoji-smile fs-1"></i>
                    </div>
                    <div className="info-item-body">
                        <h3 className="info-item-title">5,654</h3>
                        <p className="info-item-text">O'quvchilar</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Info;