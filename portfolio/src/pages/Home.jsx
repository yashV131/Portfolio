import Header from '../components/Header'
import './Home.css'
import profileImg from '../assets/Yashvi Professional.jpeg';

function Home(){
    return(
        <>
       
        <div className='header'>
            <Header/>
        </div>
        <div className='columns'>
            <div className='column1'>
                <div className='title'>
                    YASHVI MEHTA: ENTERING THE WORLD OF COMPUTER ENGINEERING
                </div>
                 
            </div>
            <div className='column2'>
                <div className='title'>
                    Title 2 current placeholder
                </div>
              
            </div>
             
            {/* <img id="profile-image" src={profileImg} alt="Profile" /> */}
            
        </div>
        
        </>
    );
}
export default Home