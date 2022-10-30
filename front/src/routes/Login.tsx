import * as React from 'react';
import {Button, Input, Col, Row, Typography} from 'antd';
import './Login.css';

import axios from 'axios'
import Password from 'antd/lib/input/Password';

import Cookies from "universal-cookie";
import {useNavigate } from "react-router-dom";

const cookies = new Cookies();

const {Title}=Typography;


/**
 * Login area
 * @returns Render to login
 */


export function Login(){
    const [id, SetId] = React.useState("");
    const [password, SetPassword] = React.useState("");
    
    const navigate = useNavigate();

    const login = async () => {
        
        const response = await axios({
            url: "http://localhost:4000/api/auth",
            method: "post",
            data: {
                id: id, password: password
            }
        });
        console.log(response.status);
        if(response.status == 200){
            const token = response.data.token;
            cookies.set('access_token', token, {sameSite: 'strict'});
            navigate('/Main');
        }
        //token있을시 token저장
    }

    const register = async () => {
        const response = await axios({
            url: "http://localhost:4000/api/register",
            method: "post",
            data: {
                id: id, password: password
            }
        });
        if(response.status == 200){
            const token = response.data.token;
            cookies.set('access_token', token, {sameSite: 'strict'});
            navigate('/Main');
        }
    }
    
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
                                id="id"
                                placeholder="ID"
                                value={id} 
                                onChange={({ target: { value } }) => SetId(value)} 
                            />
                        </Col>
                    </Row>

                    <Row align='middle' justify='center'>
                        <Col>
                            <Input.Password
                                id="password"
                                placeholder="Password"
                                value={password} 
                                onChange={({ target: { value } }) => SetPassword(value)} 
                            /> 
                        </Col>
                    </Row>

                    <Row>
                        <Col span={4}>
                            <Button type='primary' onClick={login}>Login</Button>
                        </Col> 
                    
                        <Col span={4} offset={8}>
                            <Button type='primary' onClick={register}>Resister</Button>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
}

export default Login;