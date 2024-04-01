import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ContactItem = ({ item }) => {
    const phoneFormat = (phoneNumber) => {
        const value = phoneNumber.replace(/[^0-9]/g, '');
        const firstNumber = value.length > 9 ? 3 : 2;

        return [
            value.slice(0, firstNumber),
            value.slice(firstNumber, value.length - 4),
            value.slice(value.length - 4),
        ].join('-');
    }
    return (
        <Row id='contact-item'>
            <Col lg={1}>
                <img width={50} src={"https://cdn-icons-png.flaticon.com/128/847/847969.png"} />
            </Col>
            <Col lg={11}>
                <div>{item.name}</div>
                <div>{phoneFormat(item.phoneNumber)}</div>
                <div>{item.email}</div>
                <div>{item.memo}</div>
            </Col>
        </Row>
    )
}

export default ContactItem
