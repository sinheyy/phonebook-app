import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const ContactItem = ({ item }) => {
    return (
        <Row id='contact-item'>
            <Col lg={1}>
                <img width={50} src={"https://cdn-icons-png.flaticon.com/128/847/847969.png"} />
            </Col>
            <Col lg={11}>
                <div>{item.name}</div>
                <div>{item.phoneNumber}</div>
                <div>{item.email}</div>
                <div>{item.memo}</div>
            </Col>
        </Row>
    )
}

export default ContactItem
