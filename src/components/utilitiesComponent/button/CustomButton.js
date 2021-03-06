import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './CustomButton.css';
class CustomButton extends Component {

    render() {
        return (
            <Button className={this.props.className} as={this.props.as} to={this.props.to}>
                {this.props.title}
                <span>{
                    this.props.arrow === true ? 
                    <span className="arrow-icon">
                        <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.3895 0.270707C17.0377 -0.0902357 16.4522 -0.0902357 16.088 0.270707C15.7362 0.619456 15.7362 1.19989 16.088 1.54783L22.6871 8.08951H0.911093C0.403472 8.09033 0 8.49029 0 8.9935C0 9.4967 0.403472 9.90967 0.911093 9.90967H22.6871L16.088 16.4392C15.7362 16.8001 15.7362 17.3814 16.088 17.7293C16.4522 18.0902 17.0385 18.0902 17.3895 17.7293L25.5508 9.63897C25.9149 9.29022 25.9149 8.70978 25.5508 8.36185L17.3895 0.270707Z" fill="white"/>
                        </svg>

                    </span>
                    : ""
                }</span>
            </Button>
        )
    }
}

export default CustomButton;
