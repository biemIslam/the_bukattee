import React, { useState } from 'react'
import { heroImages } from '../Components'
import { 
        Container, Row, Col, 
        Navbar, NavbarBrand, NavbarToggler,
        Nav, NavItem, NavLink, Collapse, 
        UncontrolledCarousel,
           
        } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => {
    const [collapsed, setCollapsed] = useState(false)
    // const [currentImage, setCurrentImage] = useState(0)

    const toggleNavbar = () => {
        setCollapsed(!collapsed)
    }
   

    return (
        <>
            <Container fluid={true} className="d-none d-lg-block container-topbar nav-container">
                <Row>
                    <Col lg="8">
                        <p>
                            Phone no: +2348088376911 or Email us: eat_here@bukattee.com
                        </p>
                    </Col>
                    <Col lg="4">
                        <span> Mon - Fri / 8am - 9pm / </span>
                        <span className="social-icons">
                            <a href="https://wa.me/send?phone=2348088376911&amp;text=Hi there!, I love your bukattee app"> 
                                <FontAwesomeIcon icon={['fab', 'whatsapp']} /> 
                            </a>
                            <a href="https://www.linkedin.com/in/bellomaryam/"> <FontAwesomeIcon icon={['fab', 'linkedin-in']} /> </a>
                            <a href="https://twitter.com/codyBiem"> <FontAwesomeIcon icon={['fab', 'twitter']} /> </a>
                        </span>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true}  className="nav-container">
                <Row>
                    <Col>
                        <Navbar color="dark" dark expand="md" sticky="top">
                            <NavbarBrand href="/">da_bukattee</NavbarBrand>
                            <NavbarToggler onClick={toggleNavbar} />
                            <Collapse isOpen={collapsed} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink href="/">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/about">About</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">How It Works</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">Menu</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">Order</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">Reservation</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true}  className="homepage-container">
                <Row id="heroImg-wrapper">
                    <Col className="imageSlider" id="heroImg">
                        <UncontrolledCarousel items={heroImages} interval={4000} indicators={false} controls={false} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Header