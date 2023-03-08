import Header from '../components/Header/Header';
import VideoUpload from '../pages/Page/VideoUpload';

function VideoPage(){
    return (
        <>
        <div className='container'>
            <Header />
            </div>
            <hr />
            <div className='container'>
            <VideoUpload />
            </div>
        </>
    );
}

export default VideoPage;