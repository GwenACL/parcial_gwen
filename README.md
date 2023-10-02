# 1 - Iniciar applicaciones 

## Instalaciones previas
- `npm install`
- `npm install react-icons`
- `npm install react-bootstrap bootstrap`
- `npm install react-router-dom`
- `npm install react-intl`

## Iniciar aplicación
`npm start`

## Enlaces
- [Jenkins](http://157.253.238.75:8080/jenkins-isis2603/)
- [Sonar](http://157.253.238.75:8080/sonar-isis2603/)

# 2 - Utilización paso a paso

En la primer pagina que aparece, verificar que la langua selectionada le vaya bien o cambiarla utilizando el dropdown. Despues, ingresar un correo electronico con un format correcto y hacer click en el boton 'siguiente'.

En la segunda pagina, ingresar su contraseña, que debe tener al menos 6 caracteres y hacer click en "siguiente".

En la pagina suiguiente, puedes ver la lista de todos los carros (utilizando el scroll) y hacer click en la que le interese. 

Una pagina con los detalles del carro se abre. Si tienes el role "administrador", ve los detalles actuales del carro y los pueden cambiar. Si eres un utilizator normal, solo ve los detalles del carro sin posibilidad de cambiarlos. Para volver a la lista de los carros, utilizas la flecha de retorno o la URL : "http://localhost:3000/parts".

# 3 - Proceso de desarollo 

## Login

Empezé el desarollo con la pagina de autentificación. En primer lugar, hicé todo en una pagina y después intenté separlo en dos paginas (una pagina que cambia de componentes cuando se recarge). Para hacer eso, utilizé variables de estado con el hook UseState para modificar de manera dinamica lo que se ve en la pagina. Como tenia problema con la verificacion (que siempre parecia invalida), cambié lo que hicé para no utilizar variables para todos los campos del formulario y en vez utilizar dos formularios staticos diferentes, que se mostraron en function de solo una variable de estado. Para hacer el formulario con verificacion dinamica y el buton, utilizé los componentes "Form" y "Button" de Bootstrap.
Después, agregué una variable "role" en App y pasé sur setter a Login para agregar un role al usario de manera aleatoria utilizando "Math.random()".


 ## List y Indivudal

Continué con la List, inspirandome de lo que utizamos en la tareo con las Mascotas. Para recuperar los datos de los carros, utilizé el hook "UseEffect" llamando al documento Json en my GitHub (durante el parcial no functiono, despues, agregué el /raw/ en la URL). 
Como el URL debe utilizar un ID, agregué un id a cada carro que puedo pasar como parametro. Despues, utilizo la function "map" para mostrar un componente "Individual" por cada carro.
En Individual, utilizo el componente Card de Bootstrap para crear las cartas que se ven en la lista.


## Navigacion

Para hacer la navigacion, utilizé las librerias BrowserRouter, Routes y Route de "react-router-dom".
En el componente App, definé las diferentas routas con el componente "Route" por cada una, dentro de un componente "Routas" que define todas la routas de la aplicacion, dentro del componente "BrowerRoute". 
Definé la routa inicial para que llegue a Login.
En Individual, agruegué une componente "Link" de router-dom para que un click en una carta hace una redireccion a la pagina Detail correspondiente. 
En Login, utilizé useNavigate de react-router-dom para hacer que el click final en el boton "Siguiente" redirige a la pagina "List".  

## Detail

Despues del parcial, desarollé el En Detail, utilizo tambien el UseEffect para recuperar a los datos de GitHub hiciendo un mapping en el ID para recuperar los datos del carro del click. Para saber cual fue el carro del click, utilizé el hook "UseParams" para recuperer el id que esta en el URL, que agregué al "Link" en Individual.
Utilizé "condiciones ternarias" (no sé como se llama en español) basadas en el estado de la variable global  "role" para que se ve "inputs" o "p" para cada campo del detalle del carro. 

##Internalizacion 

Empezé con definir todas las cadenas de palabras que deben cambiar con la lengua del usario y hicé tres json que contienen los ID y las traduciones apropriadas. 
Despues, utilizé el componente "IntlProvider" de "react-intl" para definir la lengua del usario, basado en la lengua de su navigador, por toda la applicacion. 
En las paginas, utilizé "FormattedMessage" de "react-intl" con un mapping basado en los ID para trasformar cada cadena de palabra statica a una cadina que cambia con la lengua. Para las cadenas que deben ser parte de una variable (placeholders, classnames, ...) utilizé "useIntl" de "react-intl" y su funcion "formatMessage()" para recuperar las traducciones y ponerlas en variables. 

Por fin, agregué un componente "LanguageSelector" que permite cambiar de lengua, usando los componentes "Form" y "Dropdown" de Bootstrap. Ahora necesité que la langua del usario se puede cambiar (a.k.a una variable) entonces creé un componente "Intl" para utilizar el hook UseState para la lengua del usario (lo que no se puede hacer en el componente principal index). 

## Estilo

Para que las paginas se parecen a las del mockup, deberia agregar documentos CSS a cada componente. 

--> no sé lo que es un "reporte de decisiones" entonces espero que el proceso de desarollo explica de manera suficiente mis decisiones. 
Si no, mis decisiones fueron teribles porqué decidio hacer las paginas en el orden del parcial y perdi mucho tiempo en la autentificacion mientras que sabia hacer el resto. Entonces, una proxima vez empezara con lo que sé hacer (navigacion, lista y detalle), solo creando componente functionales para el resto (ejemplo : autentificacion en una sola pagina) si no tengo el tiempo. 
