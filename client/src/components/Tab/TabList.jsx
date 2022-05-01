import React from 'react';
import { Link } from 'react-router-dom';
import { authTab, routeTab } from '../../dummy-tab';
import { routeOtherTab } from '../../dummy-tab';




const TabList = () => {
    return (
        <div className="w-full pt-4 pb-8">
        {routeTab.map((item, idx) => (
          <Link to={item.route} key={idx}>
          <div className="route-tab" >
            <>{item.icon}</>
            <span className="ml-2 inline-block">{item.name}</span>
          </div>
          </Link>
        ))}
        <div className='mt-4'>
        <span className='block mb-4 font-bold'>Other</span>
        {routeOtherTab.map((item, idx) => (
          <Link to={item.route} key={idx}>
          <div className="route-tab" >
            <>{item.icon}</>
            <span className="ml-2 inline-block">{item.name}</span>
          </div>
          </Link>
        ))}
         </div>
         <span className='block my-4 font-bold'>Contact</span>
         <div className='mt-4 flex items-center gap-x-2'>

         {authTab.map((item, idx) => (
          <a href={item.route} key={idx}>
          <div className="route-tab" >
            <>{item.icon}</>
          </div>
          </a>
        ))}
         </div>
      </div>
    );
};

export default TabList;