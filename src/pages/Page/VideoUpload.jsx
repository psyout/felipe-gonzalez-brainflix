import thumb from '../../assets/images/Upload-video-preview.jpg';
import './VideoUpload.scss';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const { v4: uuidv4 } = require('uuid');
export const apiUrl = 'http://localhost:3001';

function VideoUpload() {
    const formRef = useRef();
    const [videos, setVideos] = useState([]);
    const backHome = useNavigate();

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get(`${apiUrl}/videos`).then((response) => {
            setVideos(response.data);
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { title, description } = formRef.current;

        const newVideo = {
            id: uuidv4(),
            title: title.value,
            channel: 'Felipe Gonzalez',
            image: 'https://picsum.photos/2000/1000',
            description: description.value,
            views: '400',
            likes: '10',
            duration: '0:00',
            video: 'https://project-2-api.herokuapp.com/stream',
            timestamp: Date.now(),
            comments: [],
        };

        axios
            .post(`${apiUrl}/videos`, newVideo)
            .then((response) => {
                setVideos([...videos, newVideo]);
                window.alert('Video posted successfully!');
                backHome('/');
            })
            .catch((err) => {
                console.log(err);
            });

        event.target.reset();
    };

    return (
        <div className='video-container'>
            <h1 className='video-container__title'>Upload Video</h1>
            <h4 className='video-container__subtitle'>Video Thumbnail</h4>
            <form ref={formRef} onSubmit={handleSubmit} className='video-form'>
                <img className='input-container__thumb' src={thumb} alt='upload thumbnail' />
                <div className='input-container'>
                    <label className='input-container__label'>Title your video</label>
                    <input className='input-container__input' type='text' name='title' placeholder='Add a title to your video' />
                    <label className='input-container__label'>Add a video description</label>
                    <textarea
                        className='input-container__textarea'
                        type='text'
                        name='description'
                        id='comment'
                        required
                        placeholder='Add a description to your video'></textarea>
                </div>
                <div className='video-footer'>
                    <button className='video-footer__button video-footer__button--title' type='submit'>
                        Publish
                    </button>
                    <button className='video-footer__button video-footer__button--cancel' type='button'>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default VideoUpload;
