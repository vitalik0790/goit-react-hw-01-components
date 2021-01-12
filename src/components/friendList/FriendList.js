import React from 'react'
import PropTypes from 'prop-types';
import FriendListItem from './friendListItem/FriendListItem'


const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map((friend) => (
                <FriendListItem {...friend} key={friend.id} />
            ))}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};

export default FriendList;