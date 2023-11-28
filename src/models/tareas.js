const { conn } = require('./conn.js')

const getTareas = async () => {
	try {
		// const [rows] = await conn.query('SELECT * FROM tareas WHERE iduser = ' + iduser + ';')
		const [rows] = await conn.query('SELECT * FROM tareas;')           
		return rows
	} catch (error) {
		throw error
	} finally {
		conn.releaseConnection()
	}
}

const verificarUser = async (nombre, apellido) => {
	try {
		const [verificado] = await conn.query(`SELECT * FROM users WHERE nombre = '${nombre}' AND apellido = '${apellido}';`)
		return verificado
	} catch (error) {
		throw error
	} finally {
		conn.releaseConnection()
	}
}

const crearTarea = async (tareaNueva) => {
	try {
		const [creado] = await conn.query('INSERT INTO tareas SET ?;', tareaNueva)
		return creado
	} catch (error) {
		throw error
	} finally {
		conn.releaseConnection()
	}
}

module.exports = {
	getTareas,
	verificarUser,
	crearTarea,
}