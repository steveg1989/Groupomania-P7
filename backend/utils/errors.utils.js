module.exports  = (err) => {
	let errors = {
		firstname: "",
		lastname: "",
		email: "",
		password: "",
	};
	if (err.message.includes("firstname")) errors.firstname = "Incorrect first name ";
	if (err.message.includes("lastname")) errors.lastname = "Incorrect name ";
	if (err.message.includes("email")) errors.email = "Email incorrect";
	if (err.message.includes("password")) errors.password = "incorrect password";
	if (err.code == 11000 && Object.keys(err.keyValue)[0].includes("email")) errors.email = "This email is already taken";
	return errors;
};