const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const helmet = require("helmet");
const compression = require("compression");

const {signup, login} = require('./server/controllers')

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();


const mongooseOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(process.env.MONGO_DB, mongooseOptions)
	.then(() => {
		console.log("> DB connected");
	})
	.catch((err) => {
		console.log(err);
	});

app.prepare().then(() => {
	const server = express();

	server.use(helmet());
    server.use(compression());
    server.use(express.json())

	server.get("/_next/*", (req, res) => {
		handle(req, res);
	});

	server.get("/static/*", (req, res) => {
		handle(req, res);
    });
    
    
	server.post('/api/signup', signup)
	
	server.post('/api/login', login)

    server.use((err, req, res, next)=>{
        const {status=500, message} = err
        res.status(status).json(message)
    })

	server.all("*", (req, res) => {
		return handle(req, res);
	});

	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
