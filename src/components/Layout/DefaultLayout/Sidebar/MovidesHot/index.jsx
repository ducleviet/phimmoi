import classNames from 'classnames/bind';
import styles from './MoviesHot.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import avatar from '../../../../../assets/Img/avatae.jpg';

const cx = classNames.bind(styles);

function MoviesHot({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Link to={`/${data.slug}`} className={cx('container')}>
                <div
                    className={cx('img-container')}
                    style={{
                        backgroundImage: `url(${data.image_src || avatar})`,
                    }}
                ></div>

                <h3 className={cx('title')}>{data.name.charAt(0).toUpperCase() + data.name.slice(1) || 'Name Lỗi'}</h3>
            </Link>
        </div>
    );
}

MoviesHot.propTypes = {
    data: PropTypes.object.isRequired,
};

export default MoviesHot;
