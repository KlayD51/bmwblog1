import { FaFacebookSquare, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import SideBar from './components/SideBar'
import Footer from './components/Footer'

const Builds = () => {
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

            <div className='imgBox-b'>
               
            <img src='eurofighterbmwf.jpg' alt='falken eurofighter bmw' className='headerImg-b'/>
            </div>
            <div className='imgTextBox'>
            <h3 style={{fontSize:'35px', color:'#81c4ff'}}>Welcome to Our Build Page</h3>
            <p style={{fontSize:'20px', paddingTop:'-5px'}}>Follow our Instagram and Twitter to see the<br></br> hottest builds and our most 
                current submissions<br></br> from around our community.
            </p></div>

            <div className='lgImgContainer-b'>
                <img src='bmwrearlight.jpg' alt='bmw left'/>
                <img src='bmwmiddle.jpg' alt='bmw middle'/>
                <img src='bmwfrontlight.jpg' alt='bmw right'/>
            </div>

            <br></br>

            <div className='lgImgContainer-bOne'>
                <img src='silvere36r.jpg' alt='e36 right'/></div>
               <div className='creditLink-b'><h4><a href='https://www.stancenation.com/around-the-web/extremely-clean-bmw-e36/' 
                >Damien Olksinski</a></h4>
            </div>

            <div className='lgImgContainer-bTwo'>
                <img src='miniCooper.jpg' alt='mini cooper'/>
                <img src='miniCooperhood.jpg' alt='mini hood up'/></div>
                <div className='creditLink-b'><h4><a href='https://linkecu.com/mini-cooper-xt-r53/' 
                >Link ECU</a></h4></div>
           

            <div className='lgImgContainer-bThree'>
            <img src='jsutaie30.jpg' alt='jsutai e30 front'/>
                <img src='jsutaibbs1.jpg' alt='jsutai e30 bbs wheels'/>
                <img src='jsutaiInterior.jpg' alt='jsutai e30 interior'/>
                <img src='jsutaiRear.jpg' alt='jsutai e30 rear'/></div>
                <div className='creditLink-b'><h4><a href='https://stanceworks.com/2014/03/jsutai-miro-sutais-1988-bmw-e30-m3/' 
                >Miro Sutai</a></h4></div>
            

            <div className='lgImgContainer-bFour'>
            <img src='e92eurofighter.jpg' alt='e92 Eurofighter'/>
                <img src='e92eurofighterside.jpg' alt='e92 Eurofighter side view'/>
            </div>
            <div className='creditLink-b'><h4><a href='http://www.speedhunters.com/2017/10/hgk-motorsport-bmw-e92-eurofighter/' 
                >Larry Chen</a></h4></div>

            <div className='lgImgContainer-bFive'>
            <img src='stanceMini.jpg' alt='Mini'/>
                <img src='stanceMiniFront.jpg' alt='Mini Front'/>
                <img src='stanceMiniRear.jpg' alt='Mini Rear'/>
            </div>
            <div className='creditLink-b'><h4><a href='https://www.stancenation.com/car-features/slammed/the-clubby-that-could-james-mini-clubman/' 
            >James Olley</a></h4></div>
        
            <br></br><br></br><br></br>
        <div classname='footer' style={{display:'flex', flexDirection:'collumn', justifyContent:'center'}}>
            <Footer />
            </div>


        </div>
    )
}

export default Builds
