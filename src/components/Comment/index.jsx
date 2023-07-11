import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
import PropTypes from 'prop-types';
import { Fragment, useEffect, useState } from 'react';

import avatar from '../../assets/Img/avatae.jpg';
import PostComment from '../PostComment';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../redux/features/comment/commentsApi';

const cx = classNames.bind(styles);

const limitDefaults = 5;

function Comment({ data }) {
    const [limitComment, setLimitComment] = useState(limitDefaults);
    const comments = useSelector((state) => state.comments.allComments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getComments({ data, limitComment }));
    }, [dispatch, data, limitComment]);

    const handleComment = () => {
        setLimitComment(limitComment + 5);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <p>Bình luận</p>
            </div>
            <div className={cx('block-comment')}>
                {localStorage.getItem('account') ? (
                    <div className={cx('input-comment')}>
                        <div className={cx('containe')}>
                            <img className={cx('avatar')} src={avatar}></img>
                        </div>
                        <PostComment data={data} />
                    </div>
                ) : (
                    <Fragment />
                )}
                <div className={cx('list-comment')}>
                    {comments?.length > 0 ? (
                        comments.map((com, index) => (
                            <div className={cx('use-block')} key={index}>
                                <div className={cx('avatar-block')}>
                                    <img className={cx('avatar')} src={avatar}></img>
                                </div>
                                <div className={cx('block-conten')}>
                                    <span className={cx('name')}>
                                        {com.email || com.e ? com.email || com.e : 'User'}
                                    </span>
                                    <span className={cx('comment')}>{com.content || com.c}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <Fragment />
                    )}
                </div>
                {comments?.length > 0 ? (
                    <button className={cx('btn-comment')} onClick={handleComment}>
                        <span>Tải thêm bình luận nữa</span>
                    </button>
                ) : (
                    <Fragment />
                )}
            </div>
        </div>
    );
}

Comment.propTypes = {
    data: PropTypes.string.isRequired,
};

export default Comment;
