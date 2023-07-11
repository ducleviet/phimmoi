import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { memo } from 'react';

const cx = classNames.bind(styles);

// eslint-disable-next-line react-refresh/only-export-components
function Search() {
    const [name, setName] = useState('');

    const handleSearch = () => {
        if (name == '') {
            alert('Bạn chưa nhập từ khóa');
        }
    };

    const handleSubmit = (e) => {
        if (name == '') {
            e.preventDefault();
        }
    };

    return (
        <form className={cx('form-search')} onSubmit={handleSubmit}>
            <input
                type="search"
                placeholder="Nhập từ khóa"
                className={cx('search')}
                value={name}
                onChange={(e) => setName(e.target.value)}
            ></input>
            <button className={cx('btn')} onClick={handleSearch}>
                {name !== '' ? (
                    <Link to={`/search/${name.trim()}`}>
                        <span className={cx('title')}>Tìm kiếm</span>
                    </Link>
                ) : (
                    <span className={cx('title')}>Tìm kiếm</span>
                )}
            </button>
        </form>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Search);
