import classNames from 'classnames/bind';
import styles from './PostComment.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCommet } from '../../redux/features/comment/commentsApi';

const cx = classNames.bind(styles);

function PostComment({ data }) {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handlePost = (e) => {
        e.preventDefault();

        if (text.trim() !== '') {
            dispatch(addCommet({ data, text }));
            setText('');
        }
    };
    return (
        <form className={cx('input-title')} onSubmit={handlePost}>
            <textarea
                onChange={(e) => {
                    setText(e.target.value);
                }}
                value={text}
                className={cx('input')}
                placeholder="Viết bình luân..."
            ></textarea>
            <button className={cx('btn-summit')}>
                <span className={cx('title-summit')}>Bình luận</span>
            </button>
        </form>
    );
}

PostComment.propTypes = {
    data: PropTypes.string.isRequired,
};

export default PostComment;
