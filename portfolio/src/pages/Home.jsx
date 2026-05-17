import Header from '../components/Header'
import './Home.css'
import profileImg from '../assets/Yashvi Professional.jpeg';
import Crossword from '../components/Crossword';
function Home(){
    return(
        <>
       
        <div className='header'>
            <Header/>
        </div>

        <div className='container'>
            <div className='title-frame'>
                <div className='title'>
                    ABOUT THE DEVELOPER
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
            <div className='columns'>
                <div className='column-about'>

                </div>
                <div className='column-newspaper-items'>
                    <Crossword/>
                </div>
                
            </div>
        </div>
        
        </>
    );
}
export default Home