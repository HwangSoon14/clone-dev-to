import React from 'react';
import Footer from '../Footer/Footer';

const FooterLayout = ({children}) => {
    return (
        <>
            {children}
            <Footer />
        </>
    );
};

export default FooterLayout;