import axios from 'axios';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import Movies from '../../components/Movies/index';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function Search() {
    const [movies, setMovies] = useState([]);
    const pram = useParams();

    useEffect(() => {
        axios
            .get(`https://appmovie.onrender.com/movie/api/search/${pram.key}`)
            .then((response) => {
                setMovies(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [pram.key]);

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Phim có từ khóa {pram.key} </h1>
            <div className={cx('list-movies')}>
                {movies.data?.map((video) => (
                    <Movies key={video._id} data={video} />
                ))}
            </div>
        </div>
    );
}

export default Search;
