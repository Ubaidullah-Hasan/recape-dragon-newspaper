import React from 'react';
import { Container } from 'react-bootstrap';
import MainHeader from '../../shared/Header/MainHeader/MainHeader';
import NavigationBar from '../../shared/Header/NavigationBar/NavigationBar';

const MainLayout = () => {
    return (
        <Container>
            <MainHeader />
            <NavigationBar />
            
        </Container>
    );
};

export default MainLayout;