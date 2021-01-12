import React from 'react'
import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={s.item}>
            <span className={isOnline ? s.statusGreen : s.statusRed}></span>
            <img className={s.avatar} src={avatar} alt="" width="48" />
            <p className={s.name}>{name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};

FriendListItem.defaultProps = {
    isOnline: true,
};

export default FriendListItem;