import classNames from 'classnames/bind';
import styles from './Poster.module.scss';
import avate from '../../assets/Img/avatae.jpg';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function Poster({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('poster')}>
                <img src={data.image_src || avate} className={cx('img')} alt={data.name}></img>
            </div>
            <div className={cx('info')}>
                <h1 className={cx('name')}>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h1>
                <div className={cx('extra')}>
                    <span>{data.country}</span>
                </div>
                <div className={cx('extra')}>
                    <span>{data.category}</span>
                </div>
                {/* <div className={cx('extra')}>
                    <span className={cx('btn')}>Tập</span>
                </div> */}
            </div>
        </div>
    );
}

Poster.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Poster;
