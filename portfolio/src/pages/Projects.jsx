import Header from '../components/Header'

function Projects({ showHeader = true }){
    return(
        <>
        {showHeader && (
        <div className='header'>
            <Header/>
        </div>
        )}
      
        
        ARE YOU WORKING PROJECTS?
        </>
    );
}
export default Projects