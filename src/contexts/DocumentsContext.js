import React, {useState, useEffect} from 'react'

const data = [
    {
    "id": 1,    
    "name": "Document 1",
    "type": "PDF",
    "category": "Invoice",
    "src": "http://www.a-pdf.com/watermark/examples/sample(background).pdf",
    "selected": false
    },
    {
    "id": 2,    
    "name": "Document 2",
    "type": "JPG",
    "category": "Invoice",
    "src": "http://www.a-pdf.com/watermark/examples/sample(Datetime).pdf",
    "selected": false
    },
    {
    "id": 3,    
    "name": "Document 3",
    "type": "PDF",
    "category": "Scan",
    "src": "http://www.a-pdf.com/watermark/examples/sample(logo-picture).pdf",
    "selected": false
    },
    {
    "id": 4,
    "name": "Document 4",
    "type": "JPG",
    "category": "Contract ",
    "src": "http://www.a-pdf.com/watermark/examples/sample(logo-stretch-pic).pdf",
    "selected": false
    },
    {
    "id": 5,
    "name": "Document 5",
    "type": "PDF",
    "category": "Admin",
    "src": "http://www.a-pdf.com/watermark/examples/sample(Title).pdf",
    "selected": false
    },
    {
    "id": 6,
    "name": "Document 6",
    "type": "PDF",
    "category": "Contract",
    "src": "http://www.a-pdf.com/watermark/examples/sample(Glob).pdf",
    "selected": false
    },
    {
    "id": 7,
    "name": "Document 7",
    "type": "PNG",
    "category": "Scan",
    "src": "http://www.a-pdf.com/watermark/examples/sample(Secrect).pdf",
    "selected": false
    },
    {
    "id": 8,
    "name": "Document 8",
    "type": "PNG",
    "category": "Admin",
    "src": "http://www.a-pdf.com/watermark/examples/sample(shape&text).pdf",
    "selected": false
    }
]
const allRecipients = [
    {"id": 1, "name" : "Robert Smith", "email": "rob@domain.com"},
    {"id": 2, "name" : "Tony Smith", "email": "tony@domain.com"},
    {"id": 3, "name" : "Luke Smith", "email": "luke@domain.com"},
    {"id": 4, "name" : "Mark Smith", "email": "mark@domain.com"},
    {"id": 5, "name" : "Paul Smith", "email": "paul@domain.com"},
    {"id": 6, "name" : "John Smith", "email": "john@domain.com"},
    {"id": 7, "name" : "Ben Smith", "email": "ben@domain.com"},
]
const Context = React.createContext()

function DocumentsContextProvider(props){    

    const [documentsList, setDocumentsList] = useState(data)
    const [sendList, setSendList] = useState([])

    
    const updateSendList = (id) => {
        setDocumentsList((prevList => {
            const updatedList = prevList.map((doc)=>{
                if(doc.id === id) {                
                    return  {...doc, selected: !doc.selected }
                }
                return doc 
            })
            return updatedList
        }))
    }

    const clearSendList = () => {
        setDocumentsList((prevList) => {
            const updatedList = prevList.map((doc)=>{
                return {...doc, selected: false}
            })
            return updatedList
        })
    }
    
    useEffect(()=>{
        const updatedSendList = documentsList.filter(doc => doc.selected)
        setSendList(updatedSendList)
    },[documentsList])

    return(
        <Context.Provider value={{
            documentsList, 
            sendList, 
            updateSendList, 
            clearSendList,
            allRecipients
            }}>
            {props.children}
        </Context.Provider>
    )
}
export {DocumentsContextProvider, Context as DocumentsContext}