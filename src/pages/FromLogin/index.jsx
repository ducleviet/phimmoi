import classNames from 'classnames/bind';
import styles from './FromLogin.module.scss';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const cx = classNames.bind(styles);

function FromLogin() {
    const [use, setUse] = useState('');
    const [pass, setPass] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [login, setLogin] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async () => {
        const info = {
            username: use,
            password: pass,
        };
        try {
            const account = await axios.post('https://appmovie.onrender.com/user/api/login', info);
            console.log(account);
            if (account.data.success === true) {
                localStorage.setItem('account', account.data.data);
                setLogin(true);
                alert('Đăng nhập thành công');
                navigate('/');
            } else {
                alert('Tài khoản hoặc mật khẩu không chính xác');
            }
        } catch (error) {
            return error.message;
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('login-box')}>
                <h2>Đắng nhập</h2>
                <form>
                    <div className={cx('user-box')}>
                        <input type="text" name="" required="" value={use} onChange={(e) => setUse(e.target.value)} />
                        <label>Tên</label>
                    </div>
                    <div className={cx('user-box')}>
                        <input
                            type="password"
                            name=""
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
                        Đăng nhập
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default FromLogin;
