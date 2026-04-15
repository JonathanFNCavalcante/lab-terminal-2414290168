import { describe, it, expect, beforeEach } from 'vitest';
import { 
  validateTitle, 
  createTask, 
  addTask, 
  resetId 
} from '../src/taskManager.js';

describe('validateTitle', () => {
  it('deve retornar true para um título válido', () => {
    expect(validateTitle('Estudar Vitest')).toBe(true);
  });
  it('deve retornar false para string vazia', () => {
    expect(validateTitle('')).toBe(false);
  });
});

describe('createTask', () => {
  beforeEach(() => { resetId(); });
  it('deve criar uma tarefa com as propriedades corretas', () => {
    const task = createTask('Estudar TDD');
    expect(task).toHaveProperty('title', 'Estudar TDD');
    expect(task.completed).toBe(false);
  });
});

describe('addTask', () => {
  beforeEach(() => { resetId(); });
  it('deve adicionar uma tarefa a uma lista vazia', () => {
    const tasks = addTask([], 'Primeira tarefa');
    expect(tasks).toHaveLength(1);
    expect(tasks[0].title).toBe('Primeira tarefa');
  });
  it('deve lançar erro para título inválido', () => {
    expect(() => addTask([], 'ab')).toThrow('Título inválido');
  });
});
