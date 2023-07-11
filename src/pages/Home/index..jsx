import axios from 'axios';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Movies from '../../components/Movies/index';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function Home() {
    const [movies, setMovies] = useState([]);
    const pram = useParams();
    const api = `https://appmovie.onrender.com/movie/api/filtertype/${pram.type}`;

    useEffect(() => {
        axios
            .get(pram.type !== undefined ? api : `https://appmovie.onrender.com/movie/api/show`)
            .then((response) => {
                setMovies(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [api, pram.type]);

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>
                {pram.type !== undefined ? pram.type.charAt(0).toUpperCase() + pram.type.slice(1) : 'Phim Mới'}
            </h1>
            <div className={cx('list-movies')}>
                {movies.data?.map((video) => (
                    <Movies key={video._id} data={video} />
                ))}
            </div>
            {/* <h1 className={cx('title')}>Phim lẻ</h1>
            <div className={cx('list-movies')}></div>
            <h1 className={cx('title')}>Phim hoạt hình</h1>
            <div className={cx('list-movies')}></div> */}
        </div>
    );
}

export default Home;
