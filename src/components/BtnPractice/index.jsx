import classNames from 'classnames/bind';
import styles from './BtnPractice.module.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

// eslint-disable-next-line react/prop-types
function BtnPractice({ data, link }) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios
            .get(`https://appmovie.onrender.com/detailmovie/api/idshow/${data}`)
            .then((response) => {
                setMovie(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [data]);

    return (
        <div className={cx('wrapper')}>
            {movie.length > 0 ? (
                movie.map((m) => (
                    <NavLink
                        to={`/${link}/${m.slug}`}
                        className={(nav) => cx('btn-movie', { active: nav.isActive })}
                        key={m._id}
                    >
                        <span className={cx('practice')}>{m.part.toUpperCase()}</span>
                    </NavLink>
                ))
            ) : (
                <Fragment />
            )}
        </div>
    );
}

BtnPractice.propTypes = {
    data: PropTypes.string.isRequired,
};

export default BtnPractice;
