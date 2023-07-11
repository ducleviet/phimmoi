import classNames from 'classnames/bind';
import styles from './FromRegister.module.scss';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const cx = classNames.bind(styles);

function FromRegister() {
    const [use, setUse] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        const info = {
            username: use,
            password: pass,
        };
        try {
            const account = await axios.post('https://appmovie.onrender.com/user/api/add', info);
            if (account.data.success === true) {
                localStorage.setItem('account', account.data.data);
                alert('Đăng ký thành công');
                navigate('/');
            } else {
                alert('Chưa đăng ký thành công');
            }
            return account;
        } catch (error) {
            return error.message;
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('login-box')}>
                <h2>Đăng ký</h2>
                <form>
                    <div className={cx('user-box')}>
                        <input
                            type="text"
                            name="username"
                            required=""
                            value={use}
                            onChange={(e) => setUse(e.target.value)}
                        />
                        <label>Tên người dùng</label>
                    </div>
                    <div className={cx('user-box')}>
                        <input
                            type="password"
                            name="password"
                            required=""
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                        />
                        <label>Mật khẩu</label>
                    </div>

                    <Link to={'#'} onClick={handleLogin}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Đăng ký
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default FromRegister;
