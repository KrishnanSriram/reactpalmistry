import logo from './logo.svg';
import './App.css';
import { NavigationBar } from './component/navigationbar';
import { AppFooter } from './component/appfooter';
import CardLeftImage from './component/cardleftimage';
import CardRightImage from './component/cardrightimage';
import { ContactForm } from './component/conactme';
import AppHeader from './component/appheader';
import { TripleCards } from './component/triplecards';
import ScrollAnimation from 'react-animate-on-scroll';

function App() {
  return (
    <div>
      <NavigationBar />
      <AppHeader />
      <ScrollAnimation animateIn="fadeIn">
        <CardLeftImage />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <CardRightImage />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <TripleCards />
      </ScrollAnimation>
      <ScrollAnimation animateIn="zoomIn">
        <ContactForm />
      </ScrollAnimation>
      <AppFooter />
    </div>
  );
}

export default App;
