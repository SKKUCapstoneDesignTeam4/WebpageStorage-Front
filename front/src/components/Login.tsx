import * as React from 'react';
import {Button, Input, Col, Row, Typography} from 'antd';
import './Login.css';

const {Title}=Typography;

/**
 * Login area
 * @returns Render to login
 */

        

export function Login(){
    return(
        <Row>
            <Col flex={3}>
                <div className="Title-area">
                        <Title>Web Pages Storage</Title>
                </div>
            </Col>
          <Col flex={1}>
            <div className="Login-area">
                <Row align='middle' justify='center'>
                    <Col>
                        <Input
                            placeholder="ID" />
                    </Col>
                </Row>

                <Row align='middle' justify='center'>
                    <Col>
                        <Input.Password
                            placeholder="Password"
                        /> 
                    </Col>
                </Row>

                <Row>
                    <Col span={4}>
                        <Button type='primary'>Login</Button>
                    </Col> 
                    
                    <Col span={4} offset={8}>
                        <Button type='primary'>Resister</Button>
                    </Col>
                </Row>
                </div>
          </Col>
        </Row>
    )
}

export default Login;