import newsImg from './imges/news-img.png';
const newsFun = () => {
    return (
        <>
            <div className="container">

                <div className="news">
                    <p className="news__text text-center">News</p>
                    <h3 className="news__title text-center">Gerícht updates</h3>
                    <div className="row">
                        <div className='col-12 col-sm-12 col-lg-4 news__item'>
                            <img src={newsImg} />
                            <h4 className='news__item--title'>tips for prepping and caring for your grill</h4>
                            <p className='news__item--text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default newsFun;