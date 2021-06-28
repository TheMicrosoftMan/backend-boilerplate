const expressJwt = require("express-jwt");

const { getTokenFromHeader } = require("../utils/auth");

const { auth } = require("../config");

const publicPaths = [
	{ url: "/api/v1/docs/" },
	{ url: /\/files\/.+/, methods: ["GET"] },
	{ url: "/api/v1/auth/send-code" },
	{ url: "/api/v1/auth/signin" },
	// { url: "/api/v1/auth/update-token" },
];

module.exports = {
	isAuth: expressJwt({
		secret: auth.secret,
		algorithms: ["HS256"],
		userProperty: "token",
		getToken: getTokenFromHeader,
	}).unless({
		path: publicPaths,
	}),
};
