import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Movies.module.scss';
import { Link } from 'react-router-dom';
import avatar from '../../assets/Img/avatae.jpg';

const cx = classNames.bind(styles);

function Movies({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Link to={`/${data.slug}`} className={cx('link')}>
                <div className={cx('halim-item')}>
                    <figure className={cx('container-img')}>
                        <img className={cx('img')} src={data.image_src || avatar} alt={data.name}></img>
                    </figure>
                    {/* <span className={cx('status')}>Tập</span> */}
                </div>
                <h3 className={cx('title')}>
                    <span>{data.name.charAt(0).toUpperCase() + data.name.slice(1) || 'Tên bị lỗi'}</span>
                </h3>
            </Link>
        </div>
    );
}

Movies.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Movies;
