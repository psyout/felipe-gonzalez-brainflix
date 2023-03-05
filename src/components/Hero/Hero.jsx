import './Hero.scss';

function Hero({ selectedVideo }) {

    return (
        <div className='hero-container'>
            <video className="hero-container__video" src={selectedVideo.image} controls poster={selectedVideo.image}></video>
        </div>
    );
}

export default Hero;