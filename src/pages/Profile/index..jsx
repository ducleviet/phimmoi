import { useParams } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import Poster from '../../components/Poster/index';
import axios from 'axios';
import Video from '../../components/Video';
import Comment from '../../components/Comment/index';
import BtnPractice from '../../components/BtnPractice';

const cx = classNames.bind(styles);

function Profile() {
    const params = useParams();

    const [video, setVideo] = useState([]);

    useEffect(() => {
        axios
            .get(`https://appmovie.onrender.com/movie/api/getmovie/${params.slug}`)
            .then((response) => {
                setVideo(...response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [params.slug]);

    return (
        <div className={cx('wrapper')}>
            {video.length !== 0 ? <Poster data={video} /> : <Fragment />}

            {params.id ? <Video data={params.id} /> : <Fragment />}
            <div className={cx('list-movie')}>
                {video._id !== undefined ? <BtnPractice data={video._id} link={params.slug} /> : <Fragment />}
            </div>
            <div className={cx('info')}>
                <h2 className={cx('title')}>Tóm Tắt</h2>
                <div className={cx('description')}>
                    <p>{video.describe}</p>
                </div>
            </div>
            {video._id ? <Comment data={video._id} /> : <Fragment />}
        </div>
    );
}

export default Profile;
