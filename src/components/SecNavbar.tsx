import Link from 'next/link';
import React from 'react'

const SecNavbar = () => {
    return (
        <div className='hidden lg:block'>
            <div className='container'>
                <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-black'>
                    <Link className='navbar__link relative' href="#">
                    HOME
                    </Link>
                    <Link className='navbar__link relative' href="#">
                    EVENTS
                    </Link>
                    <Link className='navbar__link relative' href="#">
                    UPCOMING
                    </Link>
                    <Link className='navbar__link relative' href="#">
                    BOOK NOW
                    </Link>
                    <Link className='navbar__link relative' href="#">
                    INFO
                    </Link>
                    <Link className='navbar__link relative' href="#">
                    CONTACT
                    </Link>
                    <Link className='navbar__link relative' href="#">
                    HOT OFFERS
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SecNavbar;