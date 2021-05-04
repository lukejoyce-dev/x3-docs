import React from 'react'
import {CheckCircleOutlined, CheckCircleFilled, FilePdfOutlined, FileJpgOutlined, FilePptOutlined, FileOutlined } from '@ant-design/icons';
import './DocumentItem.css'
import { Tag } from 'antd';
function DocumentItem(props) {
    const {id, name, category, type, selected} = props.data
    function displayFileTypeIcon(){
        if(type === "PDF"){
           return(<FilePdfOutlined  style={{ fontSize: '60px', color: '#153A62' }} />) 
        } else if(type === "JPG") {
            return(<FileJpgOutlined style={{ fontSize: '60px', color: '#153A62' }}/>)
        } else if(type === "PNG"){
            return (<FilePptOutlined style={{ fontSize: '60px', color: '#153A62' }}/>)
        } else {
            return(<FileOutlined style={{ fontSize: '60px', color: '#153A62' }}/>)
        }
    }
    function displaySelectedIcon() {
        if(selected){
            return (<CheckCircleFilled style={{ color: '#153A62' }}/>)
        } else {
            return (<CheckCircleOutlined style={{ color: '#153A62'}}/>) 
        }
    }
    return(
        <div className="document-item" onClick={() => props.updateSendList(id)}>
            <div className="thumbnail-wrap">
                <div className="thumbnail">
                    {displayFileTypeIcon()}                    
                    <div className="selected-ico">
                        {displaySelectedIcon()}
                    </div>
                </div>
            </div>
            <h4>{name}</h4>
            <p>Category: <Tag>{category}</Tag> | Type: {type}</p>
        </div>
    )
}
export default DocumentItem