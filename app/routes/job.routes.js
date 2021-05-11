const controller = require("../controllers/job.controller");

module.exports = function(app) {
    // app.use(function(req, res, next) {
    //     res.header(
    //       "Access-Control-Allow-Headers",
    //       "x-access-token, Origin, Content-Type, Accept"
    //     );
    //     next();
    //   });
    app.post("/api/job/insert", controller.insertJob);
    app.get("/api/job/get/all", controller.getAll);
    app.get("/api/job/get/:id", controller.getOne);
}