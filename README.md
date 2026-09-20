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
