import './Hero.scss';

function Hero({ selectedVideo }) {
    console.log(selectedVideo);
    return (
      <div className='hero-container'>
        {selectedVideo && (
          <video className='hero-container__video' src={selectedVideo.image} controls poster={selectedVideo.image}></video>
        )}
      </div>
    );
  }
  
export default Hero;