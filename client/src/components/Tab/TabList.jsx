import React from 'react';
import { routeTab } from '../../dummy-tab';

const TabList = () => {
    return (
        <div className="w-full py-4">
        {routeTab.map((item, idx) => (
          <div className="route-tab" key={idx}>
            <>{item.icon}</>
            <span className="ml-2 inline-block">{item.name}</span>
          </div>
        ))}
      </div>
    );
};

export default TabList;