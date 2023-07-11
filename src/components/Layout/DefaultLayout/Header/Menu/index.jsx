import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
function Menu({ title, to }) {
    return (
        <li>
            <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
                <span className={cx('title')}>{title}</span>
            </NavLink>
        </li>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export default Menu;
