import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { UseDispatch, useDispatch } from 'react-redux';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [memo, setMemo] = useState("");
    const dispatch = useDispatch();

    const addContact = (event) => {
        event.preventDefault();
        dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber, email, memo } });
        setName("");
        setPhoneNumber("");
        setEmail("");
        setMemo("");
    }

    return (
        <div id="form">
            <Form onSubmit={(event) => addContact(event)}>

                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>이름</Form.Label>
                    <Form.Control type="text" placeholder="이름을 입력해주세요" value={name} onChange={(event) => setName(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContact">
                    <Form.Label>전화번호</Form.Label>
                    <Form.Control type="number" placeholder="전화번호를 입력해주세요" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContact">
                    <Form.Label>이메일</Form.Label>
                    <Form.Control type="email" placeholder="이메일을 입력해주세요" value={email} onChange={(event) => setEmail(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContact">
                    <Form.Label>메모</Form.Label>
                    <Form.Control type="text" placeholder="memo" value={memo} onChange={(event) => setMemo(event.target.value)} />
                </Form.Group>

                <Button variant="none" type="submit">
                    추가
                </Button>
            </Form>
        </div>
    )
}

export default ContactForm
