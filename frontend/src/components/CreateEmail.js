import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateEmail = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = { subject, message };

    fetch(`${process.env.REACT_APP_BACKEND_API_URL}/emails`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(email)
    }).then(() => {
        navigate(0);
    })
  }

  return (
    <div className="create">
      <h2>Create a New Email</h2>
      <form onSubmit={handleSubmit}>
        <label>Subject:</label>
        <input 
          type="text" 
          required 
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <label>Message:</label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button>Create Email</button>
      </form>
    </div>
  );
}
 
export default CreateEmail;