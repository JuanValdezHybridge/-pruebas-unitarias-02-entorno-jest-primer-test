const { createDefaultPreset } = require('ts-jest');

/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  verbose: true,
  // Se excluye solo el arranque del servidor; Supertest utiliza app directamente.
  collectCoverageFrom: ['src/**/*.ts', '!src/server.ts'],
  preset: 'ts-jest',
  transform: { ...createDefaultPreset().transform },
};
