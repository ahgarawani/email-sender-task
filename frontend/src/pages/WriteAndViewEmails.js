import React from "react"
import useFetch from "../components/useFetch";
import CreateEmail from "../components/CreateEmail";
import EmailList from "../components/EmailList";

const WriteAndViewEmails = () => {
    const { error, isPending, data: emails } = useFetch(`${process.env.REACT_APP_BACKEND_API_URL}/emails`)
    return(
        <div className="home">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { emails && (
            <div>
                <CreateEmail />
                <EmailList emails={emails} />
            </div>
        ) }
      </div>
        
    );
}

export default WriteAndViewEmails;