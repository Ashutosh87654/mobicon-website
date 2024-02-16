import './App.css';
import { Route } from 'react-router-dom'
import RouterComponent from './Component/Basics/RouterComponent';
import ProviderComponent from './Component/Basics/ProviderComponent';
import { HomePage } from './Component/HomePage/HomePage';
import NavBar from './Component/HomePage/NavBar/NavBar';
import Footer from './Component/HomePage/Footer/Footer';
import BackgroundStar from './Component/BackgroundStar/BackgroundStar';
import Privacy from './Component/Privacy/Privacy';
import Cosplay from './Component/Cosplay/Cosplay';
import MusicConcert from './Component/MusicConcert/MusicConcert';
import Esports from './Component/Esports/Esports';
import BookAStand from './Component/BookAStand/BookAStand';
import BecomeAPartner from './Component/BecomeAPartner/BecomeAPartner';
import HoverContent from './Component/HomePage/HoverContent/HoverContent';

const XAyz =()=>{

    return(<main>
      <ProviderComponent>
    <BackgroundStar/>

    <HoverContent/>

        <RouterComponent>
              <Route path='/' element={<RouteLayout element={<HomePage/>}/>} />
              <Route path='/privacy' element={<RouteLayout element={<Privacy/>}/>}></Route>
              <Route path='/cosplay' element={<RouteLayout element={<Cosplay/>}/>}></Route>
              <Route path='/MusicConcert' element={<RouteLayout element={<MusicConcert/>}/>}></Route>
              <Route path='/Esports' element={<RouteLayout element={<Esports/>}/>}></Route>
              <Route path='/Book_A_Stand' element={<RouteLayout element={<BookAStand/>}/>}></Route>
              <Route path='/Become_A_Partner' element={<RouteLayout element={<BecomeAPartner/>}/>}></Route>
              <Route path='*' element={<RouteLayout element={<HomePage/>}/>} />
          </RouterComponent>
      </ProviderComponent>
    </main>
    )
}

export default XAyz

const RouteLayout=({path, element})=>{
  return(
    <>
      <NavBar/>
      {element}
      <Footer/>
    </>
  )
}
