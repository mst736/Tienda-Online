// Para poder utilizar un módulo externo debemos importarlo en nuestro
// archivo principal. En este caso, el archivo principal es "app.js".
// En nodejs podemos utilizar la palabra "require" en vez 
// de "import" para importar un módulo. Entre las llaves debemos
// escribir el nombre del módulo que queremos importar. Finalmennte utilizamos
// "from" para indicar el nombre del archivo que contiene el módulo. 

import {plus_minus_button} from '/javascript/modules/plus_minus_button.js';

plus_minus_button();