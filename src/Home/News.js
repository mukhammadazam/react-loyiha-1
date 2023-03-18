import newsImg from './imges/news-img.png';
const newsFun = () => {
    return (
        <>
            <div className="container">

                <div className="news">
                    <p className="news__text text-center">News</p>
                    <h3 className="news__title text-center">Gerícht updates</h3>
                    <div className="row gy-4 news__row justify-content-lg-between justify-content-center">
                        <div className='col-12 p-0 col-sm-12 col-lg-4 news__item'>
                            <div className='d-flex align-items-center justify-content-center'>  <img className='p-0 news__img' src={newsImg} alt="newsimg" /></div>
                            <h4 className='news__item--title pt-3 px-4'>Tips for prepping and caring for your grill</h4>
                            <p className='news__item--text pt-1 px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                            <div className='news__wrapper-btn d-flex align-items-center justify-content-between ps-4 pe-5'><button className='news__btn '>Read More</button><p className='news__btn--text'>16 Apr 2021</p></div>
                        </div>
                        <div className='col-12 p-0 col-sm-12 col-lg-4 news__item'>
                            <div className='d-flex align-items-center justify-content-center'>  <img className='p-0 news__img' src={newsImg} alt="newsimg" /></div>
                            <h4 className='news__item--title pt-3 px-4'>Tips for prepping and caring for your grill</h4>
                            <p className='news__item--text pt-1 px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                            <div className='news__wrapper-btn d-flex align-items-center justify-content-between ps-4 pe-5'><button className='news__btn '>Read More</button><p className='news__btn--text'>16 Apr 2021</p></div>
                        </div>
                        <div className='col-12 p-0 col-sm-12 col-lg-4 news__item'>
                            <div className='d-flex align-items-center justify-content-center'>  <img className='p-0 news__img' src={newsImg} alt="newsimg" /></div>
                            <h4 className='news__item--title pt-3 px-4'>Tips for prepping and caring for your grill</h4>
                            <p className='news__item--text pt-1 px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                            <div className='news__wrapper-btn d-flex align-items-center justify-content-between ps-4 pe-5'><button className='news__btn '>Read More</button><p className='news__btn--text'>16 Apr 2021</p></div>
                        </div>
                    </div>
                    <button className='news__button d-block'>View More</button>
                </div>
            </div>
        </>
    );
}
export default newsFun;