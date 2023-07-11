import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Menu from './Menu';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import avatar from '../../../../assets/Img/avatae.jpg';
import { AlignJustify } from 'react-feather';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function Header() {
    // eslint-disable-next-line no-unused-vars
    const [log, setLog] = useState(true);
    const [isCloser, setIsCloser] = useState(true);
    const ref = useRef();

    const handleLogOut = () => {
        localStorage.removeItem('account');
        setLog(false);
    };

    const hadlleMenu = () => {
        setIsCloser(!isCloser);
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={'/'} className={cx('link-home')}>
                    <div className={cx('logo')}>
                        <img src="https://subnhanh.vip/logo1.png" alt="" className={cx('logo-img')}></img>
                    </div>
                </Link>
                <nav className={cx('container-menu')}>
                    <ul className={cx('list-menu')}>
                        <Menu title="Trang chủ" to="/" />
                        <Menu title="Phim lẻ" to="/type/phim lẻ" />
                        <Menu title="Phim bộ" to="/type/phim bộ" />
                        {localStorage.getItem('account') ? (
                            <Tippy
                                interactive
                                placement="bottom-end"
                                render={(attrs) => (
                                    <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                                        <div className={cx('logout')}>
                                            <Link className={cx('btn-out')} onClick={handleLogOut}>
                                                <span className={cx('out')}>Đăng xuất</span>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            >
                                <div className={cx('user')}>
                                    <img className={cx('avatar')} src={avatar}></img>
                                </div>
                            </Tippy>
                        ) : (
                            <>
                                <Menu title="Đăng nhập" to="/account/login" />
                                <Menu title="Đăng ký" to="/register/register" />
                            </>
                        )}
                    </ul>
                </nav>
                <div className={cx('nav-btn')} onClick={hadlleMenu}>
                    <AlignJustify size={28} />
                </div>
                <div className={cx('nav-mobile--containe')}>
                    <div
                        className={cx('nav-ovelay')}
                        style={{ display: `${isCloser ? 'none' : 'block'}` }}
                        onClick={hadlleMenu}
                    >
                        <nav className={cx('menu-mobile')} ref={ref} onClick={(e) => e.stopPropagation()}>
                            {localStorage.getItem('account') ? (
                                <div className={cx('mobile-user')}>
                                    <div className={cx('mobile_avatar')}>
                                        <div className={cx('fallback_avatar')}>
                                            <img src={avatar}></img>
                                        </div>
                                    </div>
                                    <div className={cx('mobile_name')}>
                                        <span>{localStorage.getItem('account')}</span>
                                    </div>
                                </div>
                            ) : (
                                <Fragment />
                            )}

                            <ul className={cx('list-mobile--menu')}>
                                <Menu title="Trang chủ" to="/" />
                                <Menu title="Phim lẻ" to="/type/phim lẻ" />
                                <Menu title="Phim bộ" to="/type/phim bộ" />
                            </ul>
                            <ul className={cx('list-mobile--menu')}>
                                {localStorage.getItem('account') ? (
                                    <li className={cx('logout_mobile')}>
                                        <span onClick={handleLogOut}>Đăng xuất</span>
                                    </li>
                                ) : (
                                    <>
                                        <Menu title="Đăng nhập" to="/account/login" />
                                        <Menu title="Đăng ký" to="/register/register" />
                                    </>
                                )}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
