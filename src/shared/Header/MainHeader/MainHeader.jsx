import moment from 'moment';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import logo from "../../../assets/logo.png";
import Marquee from "react-fast-marquee";


const MainHeader = () => {
    return (
        <div>
            <div className='text-center'>
                <img src={logo} alt="Logo Image" />
                <p className='mb-2 mt-4 text-muted'>Journalism Without Fear or Favour</p>
                <p className='mb-4' style={{ fontSize: "20px" }}>{moment().format('dddd, MMMM D, YYYY')}</p>
            </div>
            <div className='p-3 bg-light d-flex'>
                <Button variant='danger rounded-0' className='me-3'>Latest</Button>
                <Marquee pauseOnHover speed={100} >
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </div>
    );
};

export default MainHeader;