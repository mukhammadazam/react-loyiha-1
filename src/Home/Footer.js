

const foterFun = () => {
    return (
        <div className="letter-site">
            <div className="container">
                <div className="letter">
                    <p className="letter__text text-center">Newsletter</p>
                    <p className="letter__title text-center">Subscribe to Our Newsletter</p>
                    <p className="letter__text1">And never miss latest Updates!</p>
                    <form className="d-flex align-items-center justify-content-center gap-5 ">
                        <input className="d-block letter__input text-white" type={"email"} placeholder="Email Address" />
                        <button className="letter__btn">Subscribe</button>
                    </form>

                </div>
                <div className="contact">
                    <div className="row">
                        <div className="col-12 col-md-4 justify-content-center justify-content-md-between">
                            <p className="contact__title">Contact Us</p>
                            <p className="contact__text">9 W 53rd St, London, NY 10019, UK</p>
                            <a className='text-decoration-none d-block' href="tel:+9989199509001">+1 212-344-1230</a>
                            <a className='text-decoration-none d-block' href="tel:+9989199509001">+1 212-555-1230</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}




export default foterFun;