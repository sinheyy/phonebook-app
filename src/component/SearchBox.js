import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const SearchBox = () => {
    const [searchName, setsearchName] = useState("");
    const dispatch = useDispatch();

    // 찾으려는 연락처 검색
    const searchContact = () => {
        dispatch({ type: "SEARCH_CONTACT", payload: { searchName } });
    }

    const enter = (event) => {
        if (event.key == "Enter")
            searchContact();
    }

    return (
        <Row id="form">
            <Col lg={10}>
                <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={(event) => setsearchName(event.target.value)} onKeyPress={(event) => enter(event)} />
            </Col>
            <Col lg={2}>
                <Button variant="none" onClick={searchContact}>
                    찾기
                </Button>
            </Col>
        </Row>
    )
}

export default SearchBox
