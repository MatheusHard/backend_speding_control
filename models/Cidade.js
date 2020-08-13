const mongoose  = require('mongoose');
mongoose.Promise = global.Promise;

const cidadeSchema = new mongoose.Schema({

    descricao_cidade: {
        type: String,
        trim: true,
        required: 'Descrição Cidade é campo obrigatório'
    },
    uf_id: {
        type: String,
        required: 'Uf é campo obrigatório'
    }

});

module.exports = mongoose.model('Cidade', cidadeSchema, 'cidade');