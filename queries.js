const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Julian',
  password: 'password',
  database : 'webassigment4'

});

const getAnimal = (request, response) => {
    connection.query('SELECT * FROM animal', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results)
    })
}
const getAnimalById = (request, response) => {
    const id = parseInt(request.params.id)
    connection.query('SELECT * FROM animal WHERE id = ' + id, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(results);
    })
}
const addAnimal = (request, response) => {
    const id = parseInt(request.params.id)
    const name = request.params.name
    const species = request.params.species
    connection.query("INSERT INTO animal VALUES (" + id + ", '" + name + "', '" + species + "')", (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Animal added : ` + id + ' ' + name + ' ' + species);
    })
}
const updateAnimal = (request, response) => {
    const id = parseInt(request.params.id)
    const name = request.params.name
    connection.query(
        "UPDATE animal SET name = '" + name + "' WHERE id =" + id,
        [name, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Individual with ID : ` + id + ` new name: ` + name);
        }
    )
}
const removeAnimal = (request, response) => {
    const id = parseInt(request.params.id)
    connection.query('DELETE FROM animal WHERE id = ' + id, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send('Individual with ID: ' + id + ' deleted')
    })
}
module.exports = {
    getAnimal,
    getAnimalById,
    addAnimal,
    updateAnimal,
    removeAnimal,
}