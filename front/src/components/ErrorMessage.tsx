import Modal from 'react-modal';
import { Button, Col, Row, Typography } from 'antd';

import './design/ErrorMessage.css'
const { Title, Text } = Typography;

type MessageProps ={
    title: string;
    message: string;
    func(): void;
}

export function ErrorMessage({title, message, func} : MessageProps) {
  return (
    <>
      <Modal className='ErrorMessage' isOpen={true}>
        
            <Row>
                <Col>
                    <Title level={3}>{title}</Title>
                </Col>
            </Row>
            <Row >
                <Col>
                    <Text strong>{message}</Text>
                </Col>
            </Row>
            <Row >
                <Col>
                    <Button size="small" onClick={func}>Close</Button>
                </Col>
            </Row>
      </Modal>
    </>
  )
} 

export default ErrorMessage;