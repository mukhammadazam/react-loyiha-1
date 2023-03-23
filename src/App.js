
import Home from './Home/Home';
import Hero from './Home/Hero';
import Popular from './Home/Popular';
import Regular from './Home/Regular';
import Happy from './Home/Happy';
import News from './Home/News';
import Player from './Home/Player';
import Swper from './Home/Swper';
import Footer from './Home/Footer';
import Todo from './Lesson3/Todo';
import Lesson4 from './lesson4/Lesson4';
import Til from './lesson4/Til';
function App() {
  const { t, i18n } = useTranslation();

  const handleChangeLaguage = (language) => {
    i18n.changeLanguage(language)
  }
  return (
    <div>
      <Home />
      <Hero />
      <Popular />
      <Regular />
      <Happy />
      <News />
      <Player />
      <Swper />
      <Footer />
      <Todo />
      <Lesson4 />
      <Til />
      
    <div>
  
    </div>
    </div>

  );
}

export default App;
