const { log } = require("console");
const fs = require("fs");
const models = require('../models/tareas.js')

module.exports = {
  root: function (req, res) {
    res.render("landing", {
      title: "Landing",
    });
  },

  login: (req, res) => {
    res.redirect("/home");
  },

  home: async (pedido, respuesta) => {
    const listaTareas = await models.getTareas()
    respuesta.render("index", {
      title: "Lista De Tareas",
      lista: listaTareas      
    });
  },

  homePost: (req, res) => {
    res.send(
      `<a href="/tareas/1">Ir al json con el número: ${req.body.numero}</a>`
    );
    // http:misitio.com.ar/tareas/13-15
    // http:misitio.com.ar/tareas/?pag=1&cat=todos&precio=0
  },

  homePut: (req, res) => {
    console.log(req.file);
    const nombreArchivo = req.file.filename;
    // BBDD guarda nombreArchivo
    console.log(nombreArchivo);
    res.send(`Hola desde el PUT de mi Back-End!`);
  },

  tareas: (req, res) => {
    // /tareas/:desde-:hasta
    // const file = fs.readFileSync(__dirname + './../../tareas.json')
    // res.send(JSON.parse(file))
    res.send(`<form action="/home?_method=PUT" method="POST" enctype="multipart/form-data"> 
			<input type="file" name="archivo" id="archivo">
			<button type="submit">Enviar</button>
		</form>`);
  },
};
