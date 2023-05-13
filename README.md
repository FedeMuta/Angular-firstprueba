# Portfolio Front-End
## Leal Federico

####Usuarios:

usuario: Fede
contraseña: password

usuario: Agus
contraseña: passworD

**Comentarios**
- Al loguearse por primera vez tener paciencia hasta que carga el back end, una vez cargado pueden probar los distintos usuarios. Es recomendable abrir este link y esperar a que se cargue la pagina para saber que el back ya esta corriendo: https://backend-portfolio-x6j6.onrender.com

- El front-end por ahora solo se comunica con el back-end para el inicio de sesion mediante el AuthService, donde verifica el usuario para habilitar la edicion, son los unicos endpoints operativos por el momento. Desde postman se pueden ver los usuarios, crearlos, actualizarlos y eliminarlos. Me falto tiempo para poder hacerlo bien, es muy simple, pero queria dejarlo funcionando.

- Por el momento los datos los saco de un array que simula la base de datos, se encuentra en el PortfolioDataService, que es el serivicio encargado de manejar los datos. No llegue a modificarlo pero lo voy a hacer, la idea es que este servicio sea el que se comunique con el back una vez obtenido el Id del usuario conectado, capture los elementos de ese usuario en arrays y los demas componentes los pidan. Cualquier modificacion la guarda en su respectivo array y la envia a la base de datos. La otra opcion es que vaya consultando a la base de datos a medida que los componentes los requieran.

- En cuanto a la edicion solo tuve tiempo de empezar a hacer el front de los iconos, una vez logueados van a poder ver que aparece la opcion para editar los iconos, al hacer click se activa el drag and drop y aparecen los iconos para poder eliminarlos, tambien aparece un boton + para abrir el editor de iconos y agregar los que se requieran. Esto todavia no esta actuando sobre la base de datos y cualquier cambio se va al actualizar la pagina. Si bien los endpoints de los iconos ya estan funcionales no llegue a implementarlo. Desde postman pueden crear iconos en la base de datos, eliminarlos, ver los iconos de un usuario en particular o actualizarlos. Pero los iconos que se ven en la aplicacion estan en el array simulado.

- Siguiendo la logica de la edicion de los iconos es que voy a continuar con las demas secciones.

- No estoy protegiendo los datos, se pueden ver en el codigo las claves de Apis, base de datos, etc... Estuve intentando trabajar con las variables de entorno pero es otra cosa que tuve que dejar para mas adelante asi podia avanzar con el proyecto. Es algo que voy a implementar.

- Se que hay cosas que por cuestiones de tiempo no pude hacer mejor o llegar a implementar, como por ejemplo algunas buenas practicas como el nombre del front, o como esta la estructura de archivos del front, son cosas que quedaron asi por falta de tiempo, una vez iniciado el proyecto cuando aprendi las cosas a modificar no me daba el tiempo para volver a empezar o modificar rutas, nombres, etc.  este es mi primer proyecto y la primera vez que programo, indistintamente del resultado del trabajo voy a mejorarlo y terminarlo para que sea mi primer proyecto como programador, agradeceria cualquier tipo de comentario que me ayude.

 #####Muchas gracias
