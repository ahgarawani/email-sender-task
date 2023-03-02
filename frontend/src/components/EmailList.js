import { Link } from 'react-router-dom';

const EmailList = ({ emails }) => {
  return (
      <div className="email-list">
      <h2>All Emails</h2>
      {emails.length===0? (<h3>No Emails Yet!</h3>) : emails.map(email => (
        <div className="email-preview" key={email.id} >
          <Link to={`/send_email/${email.id}`}>
            <h3>{ email.subject }</h3>
            <p>{email.message}</p>
          </Link>
        </div>
      ))}

    </div>
    
  );
}
 
export default EmailList;