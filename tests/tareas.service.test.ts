import { crearTarea, limpiarTareas, obtenerTodasLasTareas } from '../src/services/tareas.service';

describe('Servicio de tareas', () => {
  beforeEach(() => limpiarTareas());

  it('Permite consultar una lista vacia y limpiar las tareas guardadas', () => {
    expect(obtenerTodasLasTareas()).toEqual([]);
    crearTarea({ titulo: 'Temporal', descripcion: 'Prueba de limpieza', completada: false });
    limpiarTareas();
    expect(obtenerTodasLasTareas()).toEqual([]);
  });

  it('Guarda los datos y asigna identificadores consecutivos a nuevas tareas', () => {
    const datos = { titulo: 'Estudiar', descripcion: 'Servicios', completada: false };
    const primera = crearTarea(datos);
    const segunda = crearTarea({ ...datos, titulo: 'Practicar' });
    expect(primera).toEqual({ id: 1, ...datos });
    expect(segunda).toEqual({ id: 2, ...datos, titulo: 'Practicar' });
    expect(obtenerTodasLasTareas()).toEqual([primera, segunda]);
  });
});
