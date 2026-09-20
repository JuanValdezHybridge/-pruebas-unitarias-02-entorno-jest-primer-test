import request from 'supertest';
import app from '../src/app';

describe('GET /tareas', () => {
  it('Debe responder con un arreglo de tareas', async () => {
    const response = await request(app).get('/tareas');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('titulo');
    expect(response.body[0]).toHaveProperty('completada');
    expect(response.body[0]).toHaveProperty('descripcion');
  });
});


describe('POST /tareas', () => {
  it('Caso feliz: crea y guarda una tarea con titulo y descripcion (201)', async () => {
    const nuevaTarea = {
      titulo: 'Aprender mocks',
      descripcion: 'Estudiar mocks y stubs en Jest',
    };
    const response = await request(app).post('/tareas').send(nuevaTarea);

    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      id: expect.any(Number),
      ...nuevaTarea,
      completada: false,
    });
    const listado = await request(app).get('/tareas');
    expect(listado.body).toContainEqual(response.body);
  });

  it.each([
    ['falta descripcion', { titulo: 'Tarea sin descripcion' }],
    ['falta titulo', { descripcion: 'Tarea sin titulo' }],
    ['campos vacios', { titulo: '', descripcion: '' }],
    ['solo espacios', { titulo: '   ', descripcion: '   ' }],
    ['tipos invalidos', { titulo: 123, descripcion: true }],
    ['sin cuerpo', undefined],
  ])('Caso de error: %s responde 400 y no crea tareas', async (_caso, datos) => {
    const antes = await request(app).get('/tareas');
    const peticion = request(app).post('/tareas');
    const response = await (datos === undefined ? peticion : peticion.send(datos));

    expect(response.status).toBe(400);
    expect(response.body.mensaje).toMatch(/obligatorios/i);
    const despues = await request(app).get('/tareas');
    expect(despues.body).toEqual(antes.body);
  });
});
