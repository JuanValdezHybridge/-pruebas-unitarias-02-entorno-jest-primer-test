# 02 Entorno, Jest y primer test

Sigue las instrucciones delineadas en el [documento de la lección](https://hub.hybridge.education/doc/2-entorno-jest-y-primer-test-unitario-Vq9XIyWdew). Deberás crear los archivos necesarios y escribir la prueba unitaria que pruebe el endpoint `/tareas`.

Al terminar, toma una captura de pantalla de tu terminal con el resultado de la ejecución. Finalmente, sube tus cambios a tu repositorio de Github.
## Ejecutar el proyecto

```powershell
npm.cmd ci
npm.cmd test
npm.cmd start
```

Con el servidor activo, consultar desde otra terminal:

```powershell
curl.exe http://localhost:3000/tareas
```

`npm.cmd run build` compila TypeScript en `dist/`.

## Implementación y validación

- Express con rutas y controlador separados; dos tareas almacenadas en memoria.
- Jest, ts-jest y Supertest para comprobar HTTP 200, un arreglo no vacío y las propiedades `titulo`, `completada` y `descripcion` de la primera tarea.
- Se ejecutó la prueba falsa inicial y luego se sustituyó por la prueba del endpoint.
- Se comprobó el fallo esperado al exigir `descripcion` antes de agregarla a las tareas. Tras agregarla, la prueba pasó.
- Se verificó la compilación y una petición HTTP real con respuesta 200 y las dos tareas.

Aunque la lección la llama prueba unitaria, la prueba con Supertest integra la aplicación, la ruta y el controlador.

Para la entrega, ejecutar `npm.cmd test` y capturar el resultado de la terminal.

## Checkpoint 3: POST /tareas

Se continúa sobre este mismo proyecto. El endpoint crea una tarea en memoria y devuelve HTTP 201 con `id`, `titulo`, `descripcion` y `completada: false`.

El título y la descripción deben ser textos no vacíos. Si falta alguno, contiene solo espacios o tiene un tipo incorrecto, devuelve HTTP 400 sin modificar las tareas. También se contempla una petición sin cuerpo.

Ejecutar `npm.cmd test`: la salida detallada identifica el caso feliz y los casos de error. Hay ocho pruebas en total, incluida la consulta GET del checkpoint anterior. `npm.cmd run build` comprueba la compilación de TypeScript.

La captura `evidencias/npm-test.png` corresponde al Checkpoint 2; la evidencia del Checkpoint 3 debe mostrar las pruebas de POST.

## Checkpoint 4: cobertura y refactor

La arquitectura queda separada en rutas, controlador y servicio. `src/services/tareas.service.ts` contiene el tipo Tarea, el almacenamiento en memoria y las funciones para consultar, crear y limpiar tareas. El controlador conserva la validación HTTP y las respuestas anteriores.

Las ocho pruebas del endpoint pasaron antes y después del refactor sin modificarlas. Se agregaron dos pruebas unitarias del servicio para comprobar almacenamiento, identificadores y limpieza. Resultado: diez pruebas aprobadas, dos suites y compilación correcta.

```powershell
npm.cmd test -- --coverage
npm.cmd run build
```

Cobertura: 100 % de declaraciones, ramas, funciones y líneas de los archivos medidos. Se incluyen todos los archivos TypeScript de `src`, excepto `server.ts` (arranque del servidor). Este porcentaje no garantiza ausencia de errores.

### Evidencias para entregar

1. Captura del explorador de archivos del editor con `src` y `tests` expandidos, incluyendo `src/services/tareas.service.ts` y los archivos de configuración. Mantener `node_modules`, `.git` y `dist` contraídos.
2. `coverage/lcov-report/index.html`, generado por Jest. Se conserva una copia con sus recursos y páginas enlazadas en `evidencias/checkpoint-4/cobertura/`.
3. Captura de la terminal tras ejecutar `npm.cmd test -- --coverage`, mostrando las diez pruebas aprobadas.

Las capturas recibidas están guardadas en `evidencias/checkpoint-4/`. La entrega en la plataforma se realiza por separado.

