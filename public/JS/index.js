let mostrar = false

let usuarios = [
	{nombre: "Vlad",
	apellido: "Del Cid",
	ocupacion: "Instructor"
	},
	{nombre: "Nikolai",
	apellido: "Vidovic",
	ocupacion: "Estudiante"
	},
	{nombre: "Matias",
	apellido: "Stebé",
	ocupacion: "Estudiante"
	},
]

const verificar = () => {
	nombre = prompt("Dime tu nombre")
	apellido = prompt("Dime tu apellido")
	usuarios.forEach(usuario => {
		if (nombre == usuario.nombre && apellido == usuario.apellido){
			mostrar = true
		}
	})
}

let i = 0
do{
	verificar()
	if(mostrar){
		document.querySelector('h2').textContent = `Lista de Tareas de ${nombre} ${apellido}`
		document.body.style.display = 'block'
	} else {
		alert('usuario no reconocido')
	}
	i++
} while ((nombre == null || nombre == undefined || nombre == "") && i<3)




const zebra = () =>{
	const listaTempTareas = document.querySelectorAll(`li:not([style^= "display"])`)
	listaTempTareas.forEach(tarea => tarea.classList.remove('zebra'))
	listaTempTareas.forEach((tarea, i) => {
		if((i%2) == 0){tarea.classList.add('zebra')}
	})
}

/*const listaTareasExistentes = document.querySelectorAll(`li`)
listaTareasExistentes.forEach(tarea =>{
	const span = document.createElement(`span`) //<span></span>
	const cruz = document.createTextNode('x') // 'x'
	span.appendChild(cruz) //<span>x</span>
	tarea.appendChild(span) // <li>bla<span>x</span></li>
	span.classList.add(`cerrar`)
	span.addEventListener(`click`, function(){ocultarTarea(this)})
})

function ocultarTarea(tarea){
	tarea.parentElement.style.display = 'none'
	zebra()
}*/

const ocultar = (evento) =>{
	evento.target.parentElement.style.display = 'none'
	zebra()
}

const listado = document.querySelectorAll(`ul`)
listado.forEach(lista => {
	lista.addEventListener('click', function(evento){
		if(evento.target.tagName == 'LI'){
			evento.target.classList.toggle(`listo`)
		}
	})
})

document.querySelector(`.btn-outline-primary`).onclick = function() {
	const textNuevaTarea = document.querySelector(`input`).value
	if(textNuevaTarea == '' || textNuevaTarea == ' '){
		document.querySelector(`#añadirTareaLabel`).innerText = 'Debes escribir una tarea'
		document.querySelector(`.btn-primary`).style.display = 'none'
		document.querySelector(`.modal-body`).style.display = 'none'
	} else {
		document.querySelector(`#añadirTareaLabel`).innerText = `${textNuevaTarea}`
		const html = `<li>${textNuevaTarea}<span class="cerrar">\u00D7</span></li>`
		listado[1].insertAdjacentHTML("beforeend", html)
	}
	listado[1].lastElementChild.lastElementChild.addEventListener(`click`, ocultar)
	zebra()
}

document.body.onload = function() {
	// fetch(`https://tareas.vladimirdelcid.repl.co/tareas/${nombre}`)
	// .then(res => res.json())
	// .then(tareas => {
	// 	tareas.ayer.forEach(tarea => {
	// 		const html = `<li>${tarea}<span class="cerrar">\u00D7</span></li>`
	// 		listado[0].insertAdjacentHTML("beforeend", html)
	// 		listado[0].lastElementChild.lastElementChild.addEventListener(`click`, ocultar)
	// 	})
	// 	tareas.hoy.forEach(tarea => {
	// 		const html = `<li>${tarea}<span class="cerrar">\u00D7</span></li>`
	// 		listado[1].insertAdjacentHTML("beforeend", html)
	// 		listado[1].lastElementChild.lastElementChild.addEventListener(`click`, ocultar)
	// 	})
	// 	tareas.maniana.forEach(tarea => {
	// 		const html = `<li>${tarea}<span class="cerrar">\u00D7</span></li>`
	// 		listado[2].insertAdjacentHTML("beforeend", html)
	// 		listado[2].lastElementChild.lastElementChild.addEventListener(`click`, ocultar)
	// 	})
		zebra()
	// })
	// .catch(err => console.error(err))
}


/* COMENTARIOS ADICIONALES 
//document.write("Hola " + nombre)

let saludo = (nombre == "Vlad" || nombre == "Romeli") ? `Hola ${nombre}` : "Hola desconocido"
alert(saludo)

function prueba(){
	return "Hola desde la función declarada"
}

const prueba = function () {
    return "Hola desde la función expresada"
}

const prueba = (param1, param2) => *return* "Hola desde la función de flecha"

const prueba = param => {
	console.log(param)
	return param
}


*/