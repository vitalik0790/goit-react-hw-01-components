import React from "react";

import user from '../data/user.json';
import Profile from './profile/Profile';

import statisticalData from '../data/statistical-data.json';
import Statistics from './statistics/Statistics';

import friends from '../data/friends.json';
import FriendList from './friendList/FriendList';

import transactions from '../data/transactions.json'
import TransactionHistory from './transactionHistory/TransactionHistory'

// console.log(user)

// slr  стрелка
// rfc  так як Андрій робив
// rafc  стрелка
// rcc  класи

const App = () => {
    return (
        <>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />

            <Statistics title="Upload stats" stats={statisticalData} />
            <Statistics stats={statisticalData} />

            <FriendList friends={friends} />

            <TransactionHistory items={transactions} />
        </>
    );
};

export default App;



