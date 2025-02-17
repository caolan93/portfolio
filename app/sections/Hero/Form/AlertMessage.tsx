const AlertMessage = ({
	status,
	message,
}: {
	status: string;
	message: string;
}) => {
	return (
		<div className={`alert-message ${status}`}>
			<p>{message}</p>
		</div>
	);
};

export default AlertMessage;
