const operaciones = require('./aritmetica.js')
const express = require('express') //const http = require('http')
const path = require('path')
const mainRoutes = require('./src/routes/mainRoutes.js')
const method = require('method-override')

const port = process.env.PORT || 3000
const resu = operaciones.suma(5, 8)

const servidor = express()

servidor.set('view engine', 'ejs')
servidor.set('views', path.join(__dirname, '/src/views'))

servidor.use(express.static(__dirname + '/public'))
servidor.use(express.urlencoded())
servidor.use(express.json())
servidor.use(method('_method'))
servidor.use('/', mainRoutes) // / o /home o /contacto
//servidor.use('/admin', adminRoutes) // /admin/detalles o /admin/actualizar /admin/bla

servidor.use((req, res, next) => {
	res.status(404).send(`<h1 style="color:red">No se encuentra el recurso pedido</h1>`)
})

/*const server = http.createServer((pedido, respuesta) =>{
	if(pedido.url == '/'){
	const file = fs.readFileSync(__dirname + '/index.html')
	respuesta.writeHead(200, {'Content-Type' : 'text/html; charset = UTF-8'})
	respuesta.end(file) //`<h1 style="color:red">Hola desde el archivo BE ejecutado en NodeJs, el resultado es: ${resu}</h1>
	} else if(pedido.url == '/nosotros'){
		...
	}
})*/

servidor.listen(port, () => console.log(`Estoy funcionando en el puerto ${port}`))