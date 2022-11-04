const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {
    return executeQuery('SELECT p.idposts, p.descripcion, p.fecha, p.categoria, a.idautores, a.nombre, a.email, a.imagen FROM act9.posts as p, act9.autores as a WHERE p.autores_idautores = a.idautores;');
}

const create = ({titulo, descripcion, categoria, autores_idautores}) => {
    return executeQuery('insert into posts(titulo, descripcion, categoria, autores_idautores) values ( ?, ?, ?, ?)', [titulo, descripcion, categoria, autores_idautores]);
}

const getPostById = (id) =>{
    return executeQueryOne('select * from posts where idposts = ?', [id]);
}

const getPostsByAutor = (id) => {
    return executeQuery('SELECT * FROM act9.posts WHERE posts.autores_idautores = ?', [id])
}


module.exports = {
    getAll, create, getPostById, getPostsByAutor
}