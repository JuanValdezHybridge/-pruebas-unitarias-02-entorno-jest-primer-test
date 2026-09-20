import { Request, Response } from 'express';

// Datos en memoria: esta actividad no utiliza una base de datos.
const tareas = [
  { id: 1, titulo: 'Estudiar pruebas', completada: false, descripcion: 'Estudiar pruebas unitarias usando Jest' },
  { id: 2, titulo: 'Hacer ejercicio', completada: true, descripcion: 'Correr 30 minutos a 10km/h' },
];

export function obtenerTareas(_req: Request, res: Response) {
  res.json(tareas);
}

export function crearTarea(req: Request, res: Response) {
  const { titulo, descripcion } = req.body ?? {};

  if (typeof titulo !== 'string' || !titulo.trim() ||
      typeof descripcion !== 'string' || !descripcion.trim()) {
    res.status(400).json({ mensaje: 'El título y la descripción son obligatorios y deben ser textos no vacíos' });
    return;
  }

  const nuevaTarea = {
    id: tareas.length + 1,
    titulo,
    descripcion,
    completada: false,
  };
  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
}
