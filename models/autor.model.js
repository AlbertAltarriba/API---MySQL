const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {
    return executeQueryOne('select * from autores');
}

const create = ({nombre, email, imagen}) => {
    console.log('Holi model')
    return executeQuery('insert into autores(nombre, email, imagen) values ( ?, ?, ?)', [nombre, email, imagen]);
}

const getAutorById = (id) =>{
    return executeQueryOne('select * from autores where idautores = ?', [id]);
}


module.exports = {
    getAll, create, getAutorById
}