import React from "react";

import user from './data/user.json'
import Profile from './components/profile/Profile'

import statisticalData from './data/statistical-data.json'
import Statistics from './components/statistics/Statistics'

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

        </>
    );
};

export default App;



