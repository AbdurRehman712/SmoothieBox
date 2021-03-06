import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../../../utilitiesComponent/button/CustomButton';
import { NavLink } from 'react-router-dom';

import './slider.css';

class Slider extends Component {
    render() {
        return (
            <section className="slider">
                <img className="slider-img" src="/assets/images/smoothie-slide.jpg" alt="smoothiebox slide" />
                <Container>
                    <Row className="m-0">
                        <Col md={12} className="slider-content">
                            <div >
                                <h2 className="main-heading txt-red pb-md-3 pb-lg-4">Byrjaðu daginn á
                                    <br /><span> gómsætum drykk </span>
                                </h2>
                                <p className="txt-red pb-md-4 mb-md-4 pb-lg-5 mb-lg-5">Verð frá <b> 399 kr </b> hver skammtur</p>
                                <Button arrow={true} className="bgprimary btn-arrow" as={NavLink} to="/" title="Áfram" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Slider
