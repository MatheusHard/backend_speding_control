const mongoose = require('mongoose');
const Viajem = mongoose.model('Viajem');

exports.index = async (req, res)=>{


    try {
        const data = await Viajem.find({});
        
        res.send(data);
      } catch (error) {
        res.status(500).send(error);
      }
    };

    exports.add = async (req, res) =>{

      const viajem = new Viajem(req.body);

      const v = await viajem.save();

      res.json(v);
      };


    