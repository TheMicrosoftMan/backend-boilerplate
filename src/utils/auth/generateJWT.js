const jwt = require("jsonwebtoken");
const dayjs = require("dayjs");

const { auth } = require("../../config");

function generateJWT(tokenData) {
	const token = jwt.sign(tokenData, auth.secret, {
		expiresIn: auth.tokenLife,
	});

	const refreshToken = jwt.sign(tokenData, auth.refreshTokenSecret, {
		expiresIn: auth.refreshTokenLife,
	});

	const expirationDate = dayjs().add(auth.tokenLife, "second");

	return {
		token,
		refreshToken,
		expirationDate,
	};
}

module.exports = generateJWT;
