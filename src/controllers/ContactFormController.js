import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router";
import ContactFormView from '../views/ContactFormView'

const ContactFormController = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const history = useHistory();

    const handleSubmit = () => {
        //e.target.reset();
        history.push({
            pathname: "/thank-you",
            state: {name,email,message}
        })
        //console.log(`Submit con Name: ${name}, Email: ${email}, Message: ${message}`)
    }

    return (
        <ContactFormView>
            <name onChange={(e)=>setName(e.target.value)}/>
            <email onChange={(e)=>setEmail(e.target.value)}/>
            <message onChange={(e)=>setMessage(e.target.value)}/>
            <submit onClick={handleSubmit}/>
        </ContactFormView>
    )
}

export default ContactFormController
