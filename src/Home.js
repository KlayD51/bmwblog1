import MainContent from './components/MainContent'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import { FaFacebookSquare, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Home = () => {
    return (
        <div>
             <div className='header'>
                 <div className='social-icons'>
            <FaFacebookSquare />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
            </div>
            <SideBar />
            </ div>
           
            <img src='bmwlogo.jpg' alt='2021 BMW M4'/>
            
            
            <div className='mainContent-containerone'>
            <MainContent />
            </div>

            <div classname='footer' style={{display:'flex', flexDirection:'collumn', justifyContent:'center'}}>
            <Footer />
            
            </div>

            
        </div>
    )
}

export default Home
