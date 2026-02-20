import { ValidationPipeOptions } from '@nestjs/common';

export const VALIDATION_PIPE_OPTIONS: ValidationPipeOptions = {
  whitelist: true,
  transform: true,
};

export const SWAGGER_CONFIG = {
  title: 'Perform API',
  description: 'Core API for the Perform - Global Petanque Platform',
  version: '1.0',
  path: 'api',
};
