import React from 'react'
import PropTypes from 'prop-types';
import s from './Statistics.module.css'
import backgroundColor from './backgroundColor'


const Statistics = ({ title, stats }) => {
    return (
        <section className={s.statistics}>
            {title && (<h2 className={s.title}>{title}</h2>)}

            <ul className={s['stat-list']}>
                {stats.map(stat => {
                    return (<li style={{ backgroundColor: backgroundColor() }} className={s.item} key={stat.id}>
                        <span className="label">{stat.label}</span>
                        <span className="percentage">{stat.percentage}%</span>
                    </li>)
                })}

            </ul>
        </section >
    );
}

Statistics.protoTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Statistics;