
import headerImgMobile from '../assets/image-header-mobile.jpg'
import headerImgDesktop from '../assets/image-header-desktop.jpg'
export default function Container() {
    return (
        <div className="container_app">
            <div className='image-container'>
                <div className='overlay'></div>
                <img className='imgMobile' src={headerImgMobile} />
                <img className='imgDesktop' src={headerImgDesktop} />
            </div>

            <div className="info-card">
                <h1>Get <span className="accent">insights</span> that help your business grow.</h1>
                <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
                <div className="status-container">
                    <span className='status-item'>
                        <h2>10k+</h2>
                        <p>companies </p>
                    </span>
                    <span className='status-item'>
                        <h2>314</h2>
                        <p>templates</p>
                    </span>
                    <span className='status-item'>
                        <h2>12M+</h2>
                        <p>queries</p>
                    </span>
                </div>
            </div>
        </div>
    )
}