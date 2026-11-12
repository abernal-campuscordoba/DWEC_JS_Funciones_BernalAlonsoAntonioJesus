/*
 * ============================================================
 *  EJERCICIO 8 · Declaración frente a expresión
 *  Referencia: diapositivas 26 a 30 · Nivel: Medio
 * ============================================================
 *
 * ENUNCIADO
 *
 * En el fichero .js hay un código que FALLA. Fíjate en el error que aparece en
 * la Salida, descubre por qué y arréglalo SIN mover las dos llamadas de sitio
 * (solo cambiando cómo se crea una de las funciones).
 *
 * Después responde con tus palabras, en comentarios (//) dentro del .js:
 *   a) ¿Por qué una de las dos llamadas funciona antes de la definición?
 *   b) ¿Cuándo se crea una declaración de función y cuándo una expresión?
 *
 * RESULTADO ESPERADO en la Salida, ya arreglado:
 *     Hola, Ana
 *     Adiós, Ana
 *
 * Escribe tu código debajo, guarda el fichero y recarga la página
 * del ejercicio en el navegador para ver la Salida y las comprobaciones.
 */

// ===== TU CÓDIGO =====
function saludar(nombre) { console.log("Hola, " + nombre); }

saludar("Ana");

const despedir = function (nombre) {
  console.log("Adiós, " + nombre);
};

despedir("Ana");

// a) La primera llamada funciona porque saludar es una declaración de función,
//    que se crea al principio del ámbito antes de ejecutar el código.
// b) Una declaración de función se crea durante la fase de inicialización del
//    contexto de ejecución, antes de que se ejecute el script. En cambio, una
//    expresión de función se crea solo cuando esa línea se ejecuta, es decir,
//    después de asignarla a la constante.
