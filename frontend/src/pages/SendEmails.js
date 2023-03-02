import { useParams } from "react-router-dom";
import EmailDetails from "../components/EmailDetails";
import SendEmailsForm from "../components/SendEmailsForm";
import useFetch from "../components/useFetch";

const SendEmails = () => {
  const { id } = useParams();
  const { data: email, error, isPending } = useFetch(`${process.env.REACT_APP_BACKEND_API_URL}/emails/` + id);

  return (
    <div className="email-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { email && (
        <div className="send-emails-page">
            <h1>Send Emails</h1>
            <EmailDetails email={email}/>
            <SendEmailsForm/>
        </div>
      )}
    </div>
  );
}
 
export default SendEmails;