const { createDefaultPreset } = require('ts-jest');

/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  verbose: true,
  preset: 'ts-jest',
  transform: { ...createDefaultPreset().transform },
};
