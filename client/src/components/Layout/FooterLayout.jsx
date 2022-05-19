import React from 'react';
import Footer from '../Footer/Footer';

const FooterLayout = ({children}) => {
    return (
        <div className='min-h-screen'>
            {children}
            <Footer />
        </div>
    );
};

export default FooterLayout;