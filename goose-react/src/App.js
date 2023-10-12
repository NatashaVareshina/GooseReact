import Marquee from './marquee/marquee'
import Header from './header/header'
import Main from './main/main'
import Footer from './footer/footer'
import './App.css'

export default function App() {
  return (
    <>
      <Marquee className='header_marquee' />
      <Header />
      <Main />
      <Footer />
    </>
  );
}