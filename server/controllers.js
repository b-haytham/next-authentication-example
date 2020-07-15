const jwt = require("jsonwebtoken");
const bcryt = require("bcrypt");

const User = require("./User.model");

exports.signup = async (req, res, next) => {
	const { username, email, password } = req.body;

	const isExist = await User.findOne({ email: email });

	if (isExist) {
		return next({ status: 400, message: "user exist" });
	}

	bcryt.hash(password, 12, (err, hash) => {
		if (err) return next(err);
		const user = new User({
			username,
			email,
			password: hash,
		});
		user.save()
			.then(() => {
				return res
					.status(200)
					.json({ message: "User successfully created" });
			})
			.catch((err) => {
				return next(err);
			});
	});
};

exports.login = async (req, res, next) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email: email });
		if (!user) throw { status: 422, message: "user don't exist" };
		bcryt.compare(password, user.password, (err, result) => {
			if (err) return next(err);
			if (!result)
				return next( { status: 422, message: "wrong password or email" });
			jwt.sign(
				{_id: user._id, email: user.email},
				process.env.JWT_SECRET,
				{ expiresIn: "1h" },
				(err, token) => {
                    if(err) throw err
                    res.status(200).json({token})
                }
			);
		});
	} catch (error) {
		return next(error);
	}
};

exports.profile = (req, res, next) => {};
