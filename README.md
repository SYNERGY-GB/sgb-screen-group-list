SGB-screen-group-list

Propósito

Esta pantalla es una vista que permite visualizar una lista de elementos subdivididos por secciones, donde cada elemento tiene al menos un campo de información (título),  por ejemplo se puede visualizar una clasificación de contactos, productos, etc.  Cada elemento es a su vez, un enlace a una vista detallada de dicho elemento.   Cada ítem puede tener su propia vista, en la sección de diseño se encuentran las instrucciones para lograr esta funcionalidad. 

Datos esperados

Se debe recibir una lista de secciones (sections) donde obligatoriamente todas las secciones deben tener los siguientes campos

Datos obligatorios


- header: encabezado de la sección 
- items: lista de ítems donde cada ítem debe tener: 

    	1. id: id del ítem
    	2. title: título del ítem

Datos opcionales

Cada ítem puede tener los siguientes campos opcionales


- image: enlace a una imágen correspondiente al ítem
- detail\_1: subtitulo con información del ítem
- detail\_2: subtitulo con información del ítem
- date: fecha de interés 
- desc: descripcion extensa del ítem
- url: enlace a más información o detalles


Adicionalmente para cada ítem, se puede proveer una lista de máximo tres recursos para indicar si el item tiene otros enlaces (por ejemplo alguna persona que tenga perfil en Linkedin, Twitter y Facebook. Cada recurso será un pequeño ícono con el enlace correspondiente. Estos recursos se identifican por resources, cada resource es un registro que tiene dos campos. El primer campo se identifica por url, que es el enlace a donde se direcciona al hacer click en cada imágen. El segundo campo es src, que es donde se encuentra la imágen (en el proyecto o dirección remota).  Estos recursos se podrán visualizar unícamente en la vista detallada del ítem

Ejemplo JSON

![Alt Text](https://s3.amazonaws.com/megazord-framework/json+screenshots/json-group-list.png)



Diseño

Para que cada ítem se muestre de forma distinta, se debe proveer una función en los parámetros de la pantalla bajo el nombre de templateFunc que recibe un ítem y retorna un valor entero que indica la opción a utilizar de las vistas existentes. Por ejemplo:

![Alt Text](https://s3.amazonaws.com/megazord-framework/json+screenshots/json-templateFunc.png)

Actualmente se cuentan con las siguientes opciones

Opción 0

![Alt Text](https://s3.amazonaws.com/megazord-framework/balsamiq+mockups/sgb-screen-group-list-option-0.png)

Opción 1

![Alt Text](https://s3.amazonaws.com/megazord-framework/balsamiq+mockups/sgb-screen-group-list-option-1.png)

Para esta vista existe la posibilidad de incluir un ićono a la derecha del texto.  Para lograr esto se debe proveer un parámetro (\textit{showIcon}) en la pantalla que indique que ícono de ionic se va a desplegar, por ejemplo \textit{icon ion-chevron-right}.  En caso de no proveer dicho parámetro no se mostrará ningún ícono

Opción 2

![Alt Text](https://s3.amazonaws.com/megazord-framework/balsamiq+mockups/sgb-screen-group-list-option-2.png)

En caso de no recibir una función, los elementos se mostrarán según la opcion 1. 
