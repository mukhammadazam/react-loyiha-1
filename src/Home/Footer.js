

const foterFun = () => {
    return (
        <div className="letter-site">
            <div className="container">
                <div className="letter">
                    <p className="letter__text text-center">Newsletter</p>
                    <p className="letter__title text-center">Subscribe to Our Newsletter</p>
                    <form className="d-flex align-items-center justify-content-center gap-5 ">
                        <input className="d-block letter__input text-white" type={"email"} placeholder="Email Address" />
                        <button className="letter__btn">Subscribe</button>
                    </form>
                    <div className="contact"></div>
                </div>
            </div>

        </div>
    );
}




export default foterFun;