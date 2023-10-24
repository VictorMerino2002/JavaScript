//Crear Usuarios
let usuarios = [];
//Crear Biblioteca
let biblioteca = [];

class Libro{
  constructor(titulo,autor,id){
    this.titulo = titulo;
    this.autor = autor;
    this.id = id;
    this.disponible = "Sí";
  }
}

class Usuario{
  constructor(nombre){
    this.nombre = nombre;
    this.id = usuarios.length +1;
  }
  agregarLibro(titulo){
    const libro = new Libro(titulo,this.nombre,biblioteca.length+1);
    biblioteca.push(libro);
  }
  prestarLibro(idLibro){
    const libro = biblioteca[idLibro-1];
    libro.disponible = "No";
  }
  devolverLibro(idLibro){
    const libro = biblioteca[idLibro-1];
    libro.disponible = "Sí";
  }
}

function mostrarLibros(){
  for(let i = 0;i<biblioteca.length;i++){
    console.table(biblioteca[i]);
  }
}

function buscarLibros(key){
  let resultado = biblioteca.filter((libro) => key == libro.titulo || key == libro.autor || key == libro.id);
  console.log(resultado);
}
//Crear Usuario
const victor = new Usuario("Victor");
//Añadir Libros
victor.agregarLibro("Lluvia de agosto");
victor.agregarLibro("Lluvia de agosto");
victor.agregarLibro("Lluvia de agosto");
victor.agregarLibro("Lluvia de agosto");
victor.agregarLibro("Lluvia de agosto");

//Mostrar Todos los libros de la Biblioteca
//mostrarLibros();
//Buscar Libro
//buscarLibros(3);
victor.prestarLibro(3);
victor.devolverLibro(3);
mostrarLibros();


