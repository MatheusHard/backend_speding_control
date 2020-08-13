const mongoose  = require('mongoose');
mongoose.Promise = global.Promise;

const viajemSchema = new mongoose.Schema({


dataInicial: {
        type: Date,
        //required: true,
        default: Date.now
    },
    dataFinal: {
        type: Date,
        //required: true,
        default: Date.now

    },
    saldo: {
        type: Number,
        required: true,
        default: 0
    },
    gasto_total: {
        type: Number,
        required: true,
        default: 0
    },
    cidade_id:{
        type: String,
        trim: true,
        required: true
    },
    funcionario_id:{
        type: String,
        trim: true,
        required: true
    }

    
});

module.exports = mongoose.model('Viajem', viajemSchema, 'viajem');