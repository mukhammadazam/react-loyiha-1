
import './scss/main.css'
import shashlik from './imges/takoyshashhlik.png'
function MenuAlignResponsiveExample() {
    return (
        <>
            <div className='bg-danger' >
                <div className='container'>
                    <div className='hero-site d-flex align-items-start justify-content-between'>
                        <div className='hero'>
                            <span className='d-block text-white  hero__leni '>Chase the new Flavour</span>
                            <h1 className='text-white hero__title ' >The key to Fine dining</h1>
                            <p className='text-white hero__text ' >Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                            <button className='text-white hero__btn bg-transparent' >Explore Menu</button>
                        </div>
                        <div className='pt-5 '> <img className='pt-5' src={shashlik} /></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MenuAlignResponsiveExample;