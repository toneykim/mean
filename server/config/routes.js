let controller = require('../controllers/controllers.js');

module.exports = app => {
	// enter routes here. [Format is app.<app/get/post/delete>('url', callback)]

	app.get('/api/users', controller.getusers)
	app.post('/api/users', controller.adduser)
	app.post('/api/checkuser', controller.checkuser)
	app.get('/access', controller.access)
	app.post('/api/session', controller.session)

	
	app.all("*", (req,res,next)=> {

		res.sendfile(path.resolve("./public/dist/index.html"))
	});


}