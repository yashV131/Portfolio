import Header from '../components/Header'
import './Home.css'
import profileImg from '../assets/Yashvi Professional.jpeg';
import Crossword from '../components/Crossword';
import Projects from './Projects';
function Home(){
    return(
        <>
       
        <div className='header'>
            <Header/>
        </div>

        <div className='container'>
            <div className='title-frame'>
                <div className='title'>
                    INSIDE TODAY’S ISSUE
                </div>
            </div>
            <div className='columns'>    
                <div className='column1'>
                    <div className='frame-frame'>
                        <div className='image-frame'>
                            <div className='image-crop'>
                                <img id="profile-image" src={profileImg} alt="USER PROFILE"/>
                            </div>

                            <div className="image-caption">
                                PICTURE TAKEN BY YASHVI MEHTA
                            </div>

                            </div>
                        </div>               
                </div>
                
                <div className='column2'>
                    <div className='description'>
                        Aspiring Computer Engineer and Honors Student at Texas A&M University, Class of 2029
 
                    </div>
                    
                </div>     
            </div>
            {/* <div className='columns'>
                <div className='column-about'>
                   Hi, I’m Yashvi Mehta, a Computer Engineering student at Texas A&M University. 
                   I build projects in AI, software, and hardware, with a focus on solving real-world problems.
                    I'm currently a research intern at Aggies Lab and spend my time on robotics, computer vision, and research projects. 
                    I’m open to collaboration and internship opportunities.

                </div>
        
                
            </div> */}
            <div className='projects'>
                <Projects showHeader={false}/>
            </div>
        </div>
        
        </>
    );
}
export default Home