import './Hero.scss';

function Hero() {

    return (
        <div className='hero-container'>
            <video className="hero-container__video" src="https://project-2-api.herokuapp.com/stream" controls poster="https://i.imgur.com/l2Xfgpl.jpg"></video>
        </div>
    );
}

export default Hero;