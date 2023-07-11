import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import FromLogin from '../../../pages/FromLogin';
import FromRegister from '../../../pages/FromRegister';
import Search from '../../Search';

const cx = classNames.bind(styles);
// eslint-disable-next-line react/prop-types
function DefaultLayout({ children }) {
    const pram = useParams();
    const Layout = pram.login ? FromLogin : FromRegister;
    return (
        <div className={cx('wrapper')}>
            {pram.login || pram.register ? (
                <Layout />
            ) : (
                <>
                    <Header />
                    <div className={cx('search')}>
                        <Search />
                    </div>
                    <div className={cx('container')}>
                        <div className={cx('content')}>{children}</div>
                        <Sidebar />
                    </div>
                    <Footer />
                </>
            )}
        </div>
    );
}

export default DefaultLayout;
