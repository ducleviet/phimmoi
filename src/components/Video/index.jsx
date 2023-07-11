import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import PropTypes from 'prop-types';
import { useLayoutEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function Video({ data }) {
    const [movie, setMovide] = useState([]);

    useLayoutEffect(() => {
        axios
            .get(`https://appmovie.onrender.com/detailmovie/api/slugshow/${data}`)
            .then((response) => {
                setMovide(...response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [data]);
    return (
        <div className={cx('wrapper')}>
            {console.log(movie.movie_src)}
            <video className={cx('video')} src={movie.movie_src} controls></video>
        </div>
    );
}

Video.propTypes = {
    data: PropTypes.string.isRequired,
};

export default Video;
