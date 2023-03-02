import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SendEmailsForm = () => {
    const [emailAddress, setEmailAddress] = useState('')
    const [emailAddressesList, setEmailAddressesList] = useState([]);
    const navigate = useNavigate()
    return (
        <>
            <div className="forms">
                <form id="send-emails-form" onSubmit={(e) => {
                    e.preventDefault();
                    if (emailAddressesList.length > 0) {
                        navigate('/');
                    }
                    
                }}></form>
                <form id="add-emails-form" onSubmit={(e) => {
                    e.preventDefault();
                    setEmailAddress('');
                    setEmailAddressesList([...emailAddressesList, emailAddress]);
                }}></form>
            </div>
            
            <div className="send-emails-form">
            <h4>Enter email adresses to the send the previous message to</h4>
                <div className='add-emails-form'>
                    <label form="add-emails-form">Enter an email address:</label>
                    <input 
                        type="text" 
                        required
                        value = {emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        form="add-emails-form"
                    />
                    <button form="add-emails-form">Add</button>
                </div>
                <ul>
                    {emailAddressesList.map(address => (
                        <li key={address}>{address}</li>
                    ))}
                </ul>
                <button form="send-emails-form">Send Emails</button>
            </div>
        </>
    );
}

export default SendEmailsForm;