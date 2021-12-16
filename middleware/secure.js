/** @format */

export const secure = (req, res, next) => {
	const token = req.params.token;
	// res.send('Senf');
	// const para = req.params.name
	if (token.length > 3) {
		next();
	} else res.status(403).send('Läuft nicht, oder vielleicht doch?');
};
// Inside the secure function, inspect if there is a param with the name token and a value
// Create a route to manage the case when the token doesn’t exist and send back a response with the HTTP code 403.
