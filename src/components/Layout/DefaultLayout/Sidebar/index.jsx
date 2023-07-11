import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Search from '../../../Search';
import MoviesHot from './MovidesHot';
import { useState, useEffect } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function Sidebar() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get(`https://appmovie.onrender.com/movie/api/show`)
            .then((response) => {
                setMovies(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Search />
            <span className={cx('title')}>Xem nhiều</span>
            <div className={cx('scroll')}>
                {movies.data?.map((movie) => (
                    <MoviesHot key={movie._id} data={movie} />
                ))}
            </div>
        </aside>
    );
}

export default Sidebar;
