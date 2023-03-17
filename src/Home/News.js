import newsImg from './imges/news-img.png';
const newsFun = () => {
    return (
        <>
            <div className="container">

                <div className="news">
                    <p className="news__text text-center">News</p>
                    <h3 className="news__title text-center">Gerícht updates</h3>
                    <div className="row justify-content-lg-between justify-content-center">
                        <div className='col-12 p-0 col-sm-12 col-lg-4 news__item'>
                            <img className='p-0' src={newsImg} />
                            <h4 className='news__item--title pt-3 px-4'>Tips for prepping and caring for your grill</h4>
                            <p className='news__item--text pt-1 px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                            <button className='news__btn ps-4'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default newsFun;