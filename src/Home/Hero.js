
import './scss/main.css'
import shashlik from './imges/takoyshashhlik.png'
function MenuAlignResponsiveExample() {
    return (
        <>
            <div className='bg-danger wrapper' >
                <div className='container d-flex align-items-center justify-content-center'>
                    <div className='hero-site d-flex  justify-content-center  align-items-start justify-content-between'>
                        <div className='hero'>
                            <span className='d-block text-white  text-center hero__leni '>Chase the new Flavour</span>
                            <h1 className='text-white hero__title text-center ' >The key to Fine dining</h1>
                            <p className='text-white hero__text text-center ' >Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                            <button className='hero__btn d-block ' >Explore Menu</button>
                        </div>
                        <div className='pt-5 '> <img className='pt-5 hero__img d-none d-lg-block position-relative' src={shashlik} alt="shashlik" /></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MenuAlignResponsiveExample;