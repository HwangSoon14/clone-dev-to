import React from 'react';
import { Link } from 'react-router-dom';
import { routeTab } from '../../dummy-tab';

const TabList = () => {
    return (
        <div className="w-full py-4">
        {routeTab.map((item, idx) => (
          <Link to={item.route} key={idx}>
          <div className="route-tab" >
            <>{item.icon}</>
            <span className="ml-2 inline-block">{item.name}</span>
          </div>
          </Link>
        ))}
      </div>
    );
};

export default TabList;