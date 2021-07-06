import SideBar from './components/SideBar'
import { FaFacebookSquare, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import ForumBrick from './components/ForumBrick'
import Footer from './components/Footer'

const Community = () => {
    return (
        <div className='Community'>
            <div className='topBar-c'>
            <div className='header-c'>
                 <div className='social-icons-c'>
            <FaFacebookSquare />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
            </div>
            <SideBar />
            </ div>
            </div>


            <div className='MCcontainer-c'>

                <div className='MCcontainer-cleft'>
                <h2 style={{marginLeft:'300px', color:'#81C4FF', fontSize:'35px'}}>Community Updates</h2>
                <img src='bmwMeetup.jpg' style={{marginLeft:'80px'}}/>
                    <div className='forum-section'>
                        <ForumBrick className='communityp-one' Title={<a href='https://www.roadandtrack.com/reviews/a35781476/2021-bmw-m4-review-is-excellent-behind-awful-grille/'>2021 BMW M4 Overview</a>} 
                        Description='"Yes, it has a hideous nose. The M4 that BMW 
                        loaned us was painted a nauseating chartreuse, marketed as 
                        Sao Paulo yellow presumably because it kinda-sorta looks like a
                         Brazilian World Cup jersey. It also had far too much carbon fiber
                          frippery, was full of the electronic nonsense that seems to 
                          compel people to sign low-mileage two-year leases, and carried a
                           sticker within a snot rocket of $100,000. But none of those 
                           things mattered, because at the M4’s essential core is a 
                           473-horsepower twin-turbocharged inline six-cylinder engine,
                            a poised and aggressive rear-drive chassis, and the superstar 
                            275/35ZR19 front and 285/30ZR20 rear Michelin Pilot Sport 4S
                             tires it wears. It’s the mechanical substance, not the
                              electronics and not the decorations, that makes this car so good."' 
                              PubDate='March 9, 2021' Publisher='Written by: John Pearley Huffman: Road and Track'/>
                        <hr></hr>
                        <br></br>
                        <ForumBrick Title={<a href='https://www.bmwblog.com/2021/07/01/video-aircar-is-a-bmw-powered-flying-car-and-it-just-completed-its-first-inner-city-flight/'>BMW Powered Flying Car</a>} 
                        Description='"It’s quite interesting to see a BMW engine used for a prototype 
                        that can drive a car on the road and also allow it to soar in the sky,
                         especially since BMW actually started off by making aircraft engines. 
                         In the future, AirCar could have a 300 HP engine which would allow it
                         to cruise at 160 knots and have a range of over 600 miles. According to the
                          inventor, this version would have a variable-pitch propeller and will 
                          achieve full commuter certification from the European aviation regulators 
                          while also being street legal."' 
                              PubDate='July 1, 2021' Publisher='Written By: Gabriel Nica'/>
                        <hr></hr>
                        <br></br>
                        <ForumBrick Title={<a href='https://www.motor1.com/news/515178/bmw-m4-drift-car/'>M4 Red Bull Driftbrothers</a>} 
                        Description='"The new G80 BMW M4 Competition may be the perfect drift 
                        car platform. Don’t believe us? Well then maybe these two purpose-built 
                        BMW M4 Competitions will change your mind. The Redbull Driftbrothers 
                        are ready to take on the Drift Masters European Championship with their
                         brand new BMW M4 Competition-based drift cars.  The stock G80 BMW M4 
                         Competition is the perfect platform to build a drift car. Thanks to 
                         its powerful engine, rear-wheel-drive layout, and long-wheelbase the
                          BMW M4 is a stable and capable platform. "' 
                              PubDate='June 20, 2021' Publisher='Written by: Chris Okula'/>    
                            <hr></hr>
                            <br></br>
                              <ForumBrick Title={<a href='https://www.bimmerworld.com/E36-Hillclimb-Car/'>Pikes Peak Climb</a>} 
                        Description='"Following our inaugural Pikes Peak Hill Climb in 2017 - 
                        sixth in class, 11:02.966 - we approach our next hillclimb effort with a
                         renewed appreciation for what it takes to go really, really fast up a
                          mountain. They call it a "hill climb" but the hills are way below us.
                           Dont mistake Pikes Peak as anything but a mountain. This course is 12.42 
                           miles and 156 turns, with a starting line at 9,100 feet above sea level,
                            and an elevation change of 4,720 feet!"' 
                              PubDate='May 5, 2021' Publisher='Written by: Bimmerworld'/>                                
                        <hr></hr>
                        <br></br>
                        <ForumBrick Title={<a href='https://www.caradvice.com.au/925749/2021-mini-paddy-hopkirk-edition-price-and-specs-classic-rally-inspired-edition-available-in-cooper-s-jcw-bodies/'>2021 Mini Paddy Hopkirk Edition</a>} 
                        Description='"Built to honour Irish rally driver Patrick "Paddy" Hopkirk 
                        and his win behind the wheel of a classic Mini Cooper S at the 1964 Monte
                         Carlo Rally, the Paddy Hopkirk Edition is now available to order in
                          Australia, with a choice of three body styles and engine combinations. 
                           Finished in Chilli Red with a white contrast roof and black mirror caps,
                            the Paddy Hopkirk Edition features black rally-inspired auxiliary lights,
                             Piano Black exterior trim, a "37" decal on the doors and a 
                                drivers-side white bonnet stripe with "33 EJB" insignia and Paddy 
                                Hopkirks signature."' 
                              PubDate='February 17, 2021' Publisher='Written by: Alex Misoyannis'/>     
                    </div>
                </div>

                
                <div className='MCcontainer-cright'>
                    <h2 style={{marginLeft:'140px', color:'#81C4FF', fontSize:'35px'}}>About Us</h2>
                    <img src='multibmw.jpg' alt='car meet' style={{paddingTop:'20px', marginLeft:'35px'}}/>
                    <p className='contentWriting-cabout'>
                        Founded in 2021 we started as a small community of like
                        minded individuals with a shared interest in BMW and
                        other things of the sort.  We offer a forum that keeps our 
                        following up to date on the happenings of the community.  
                        Join our community, keep up to date, and see the best builds 
                        from around the world.  Our Community is global and we like 
                        to show what our following enjoys seeing.  On our home page we
                        have our "Featured Builds" sectoin which show our favotie of 
                        recant submissions.  Send in you build and you may be featured 
                        on our page, whether it be your daily drive car or a race build. 
                       
                    </p>
                       
                    <div className='submissions-c'>
                    <h2 style={{marginLeft:'55px', color:'#81C4FF', fontSize:'35px'}}>Build Submissions</h2>
                    <img src='bmwengine.jpg' style={{paddingTop:'20px'}}/>
                    <p>Send us an email at _______ to have your build considered 
                        to be featured on our blog each month.  The top 3 builds 
                        will be placed on our home page and the runner up's will 
                        be placed on our builds page.  Attach pictures of your car
                         ,"from your favotie angles," and send them in with a short 
                         piece to be featured.
                        
                    </p>
                    </div>

                    </div>

            </div>



            <div classname='footer' style={{display:'flex', flexDirection:'collumn', justifyContent:'center'}}>
            <Footer />
            </div>

        </div>
    )
}

export default Community
