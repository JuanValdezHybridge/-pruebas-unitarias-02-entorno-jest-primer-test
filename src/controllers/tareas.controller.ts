import { Request, Response } from 'express';
import { obtenerTodasLasTareas, crearTarea } from '../services/tareas.service';

export function getTareas(_req: Request, res: Response): void {
  res.json(obtenerTodasLasTareas());
}

export function postTarea(req: Request, res: Response): void {
  const { titulo, descripcion } = req.body ?? {};

  if (typeof titulo !== 'string' || !titulo.trim() ||
      typeof descripcion !== 'string' || !descripcion.trim()) {
    res.status(400).json({ mensaje: 'El título y la descripción son obligatorios y deben ser textos no vacíos' });
    return;
  }

  const nueva = crearTarea({ titulo, descripcion, completada: false });
  res.status(201).json(nueva);
}
