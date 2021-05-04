import React, {useContext} from 'react'
import {DocumentsContext} from '../../../../contexts/DocumentsContext'
import DocumentItem from '../documentItem/DocumentItem';
import './Results.css'
function Results() {
    const {documentsList,updateSendList} = useContext(DocumentsContext)
    return(
        <div className="results">
            {
                documentsList.map((doc)=>{
                    return(<DocumentItem data={doc} updateSendList={updateSendList}/>)
                })
            }
        </div>
    )
}
export default Results