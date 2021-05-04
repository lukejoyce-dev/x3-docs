import React, {useState, useContext} from 'react'
import { SendOutlined, FileOutlined} from '@ant-design/icons'
import { Modal, Button, Form, Select } from 'antd'
import {DocumentsContext} from '../../../../contexts/DocumentsContext'
import './CtaBar.css'
function CtaBar(){
    const {sendList, allRecipients, clearSendList} = useContext(DocumentsContext);
    const [size] = useState('large')
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [recipientSelected, setRecipientSelected] = useState(false)

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
    const handleSubmit = () => {
        setIsModalVisible(false);
        clearSendList();
      };

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const handleSelectRecipient = (e) => {
        setRecipientSelected(true)
    };

    const [componentSize, setComponentSize] = useState('default');

    return(
        <>
        <div className={sendList.length > 0?"Cta-bar active": "Cta-bar"}>
            <div className="cta-bar-inner">
                <Button size={size} icon={<SendOutlined/>} onClick={showModal}>Send</Button>
            </div>
        </div>
        <Modal title="Select Recipient" 
            visible={isModalVisible} 
            onOk={handleOk} 
            onCancel={handleCancel}
            footer={[
                <Button key="submit" icon={<SendOutlined/>}  type="primary" disabled={recipientSelected?false:true} onClick={handleSubmit}>
                    Send
                </Button>
                ]}      
            >         
            <Form
            labelCol={{
            span: 4,
            }}
            wrapperCol={{
            span: 14,
            }}
            layout="horizontal"
            initialValues={{
            size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
            >
            <Select onChange={handleSelectRecipient}>   
            {
                allRecipients.map(function(recipient){
                    return(
                        <Select.Option value={recipient.name} id={recipient.id}>{recipient.name} - {recipient.email}</Select.Option>
                    )
                })
            }
            </Select>
            </Form>
            <div className="documents-list">      
                {sendList.map((doc)=>{
                    return(<p><FileOutlined style={{ fontSize: '12px', color: '#153A62', marginRight: '4px' }}/> {doc.name} - {doc.type}</p>)
                })}
            </div>
        </Modal>
        </>
    )
}
export default CtaBar