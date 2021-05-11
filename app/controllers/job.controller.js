const db = require("../models");
const Job = db.job;

exports.insertJob = (req, res) => {
    // Save User to Database
    Job.create({
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      start_date: req.body.start_date,
      end_date: req.body.end_date,

    })
      .then(data =>res.status(200).send({message : "Job insert success",data : data}))
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.getAll = (req,res) => {
    // Delete User to Database
    Job.findAll()
    .then(data =>res.status(200).
      send(data)
    ).
    catch(err=>res.status(500).send({ message: err.message }))
  };

  exports.getOne = (req,res) => {
    // Delete User to Database
    
    let id = req.params.id;
    Job.findByPk(id)
    .then(data =>res.send(data)).
    catch(err=>res.status(500).send({ message: err.message }))
  };
  
