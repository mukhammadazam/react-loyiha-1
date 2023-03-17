import img1 from './imges/chevron-left.svg';
import img2 from './imges/chevron-right.svg';
// import img3 from './imges/klipartz1.png';
// import img4 from './imges/klipartz2.png';
// import img5 from './imges/klipartz3.png';
// import img6 from './imges/klipartz4.png';
function BasicExample() {
    return (
        <div className='container'>
            <div className='popular'>
                <div className='popular__enner d-flex align-items-center justify-content-between  '>
                    <h2 className='popular__enner--title'>
                        Popular Dishes
                    </h2>
                    <ul className="d-flex align-items-center justify-content-center">
                        <li className=" pe-3 popular__img"><img src={img1}/></li>
                        <li className=" popular__img"><img src={img2} /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default BasicExample;