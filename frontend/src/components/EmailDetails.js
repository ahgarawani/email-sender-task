const EmailDetails = ({email}) => {

    return (
        <div className="email-details">
            <div>
                <h2>{ email.subject }</h2>
                <p>{ email.message }</p>
            </div>
        </div>
    );
}

export default EmailDetails;