const mongoose = require('mongoose');
const Funcionario = mongoose.model('Funcionario');

exports.index = async (req, res)=>{


    try {
        const data = await Funcionario.find({});
        
        res.send(data);
      } catch (error) {
        res.status(500).send(error);
      }
    };

    