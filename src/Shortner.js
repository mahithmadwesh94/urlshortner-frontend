import { Card, Col, Container, Row, Form, InputGroup } from 'react-bootstrap';
import FloatingLabel from "react-bootstrap-floating-label";
import React, { useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

function Shortner() {
    const [urlResult, setUrl] = useState('');
    const [inputUrl, setinputUrl] = useState('');
    const generateUrl = (event) => {
        axios.post(`https://mahith-url-shortner.herokuapp.com/shortner`, {
            "url": inputUrl
        }).then(response => {
            setUrl(response.data)
            toast.dark('New Url Generated', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        }).catch(err => {
            // toast.dark(err.response.data, {
            //     position: "top-center",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            // })
            console.log(err)
            // setUrl(err.response.data.split('site: ')[1])
        });
    }
    return (

        <Container fluid>
            <Row>
                <Col className="mx-auto" sm={8} md={8} lg={8}>
                    <Card className="rounded-3 shadow-lg p-3 mb-5 bg-body rounded verticle-center">
                        <Card.Body className="">
                            <Card.Title>Enter Website URL to shorten</Card.Title>
                            <FloatingLabel controlId="floatingTextarea" onChange={(event) => setinputUrl(event.target.value)} value={inputUrl} label="URL to Shorten" className="mb-3">

                                <Form.Control as="text" placeholder="URL to shorten" />
                            </FloatingLabel>
                            <Button onClick={generateUrl}>Generate Short URL</Button>
                        </Card.Body>
                        <Card.Body className="mx-auto">
                            <Card.Title >Shortened URL</Card.Title>
                        </Card.Body>
                        <Card.Body>
                            <Form.Group as={Col} md="4" className="mx-auto" controlId="validationFormikUsername">
                                <InputGroup>

                                    <Form.Control
                                        type="text"
                                        readOnly
                                        placeholder="Shortened URL"
                                        aria-describedby="inputGroupPrepend"
                                        name="username"
                                        value={urlResult}

                                    />
                                </InputGroup>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>

                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

            </Row>
        </Container>

    );
}

export default Shortner
