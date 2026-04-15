import { describe, it, expect, beforeEach } from 'vitest';
import { validateTitle, createTask, resetId } from '../src/taskManager.js';

describe('validateTitle', () => {
  it('deve retornar true para um título válido', () => {
    expect(validateTitle('Estudar Vitest')).toBe(true);
  });
  it('deve retornar false para string vazia', () => {
    expect(validateTitle('')).toBe(false);
  });
});

describe('createTask', () => {
  beforeEach(() => {
    resetId();
  });

  it('deve criar uma tarefa com as propriedades corretas', () => {
    const task = createTask('Estudar TDD');
    expect(task).toHaveProperty('id');
    expect(task).toHaveProperty('title', 'Estudar TDD');
    expect(task).toHaveProperty('completed', false);
  });
});
