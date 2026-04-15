import { describe, it, expect, beforeEach } from 'vitest';
import { validateTitle, createTask, addTask, toggleTask, resetId } from '../src/taskManager.js';

// ... (códigos anteriores omitidos para brevidade no comando cat)
// Adicionando o novo describe:
describe('toggleTask', () => {
  it('deve marcar uma tarefa pendente como concluída', () => {
    const task = { id: 1, title: 'Teste', completed: false };
    const toggled = toggleTask(task);
    expect(toggled.completed).toBe(true);
  });
  it('deve retornar um NOVO objeto (imutabilidade)', () => {
    const task = { id: 1, title: 'Teste', completed: false };
    const toggled = toggleTask(task);
    expect(toggled).not.toBe(task);
  });
});

describe('removeTask', () => {
  it('deve remover uma tarefa pelo ID', () => {
    const tasks = [{ id: 1, title: 'T1' }, { id: 2, title: 'T2' }];
    const updated = removeTask(tasks, 1);
    expect(updated).toHaveLength(1);
    expect(updated[0].id).toBe(2);
  });
});

describe('filterTasks', () => {
  it('deve filtrar apenas concluídas', () => {
    const tasks = [
      { id: 1, completed: true },
      { id: 2, completed: false }
    ];
    const result = filterTasks(tasks, 'completed');
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
  });
});

describe('Contagens', () => {
  const tasks = [
    { completed: true },
    { completed: true },
    { completed: false }
  ];
  it('countTasks deve retornar o total', () => {
    expect(countTasks(tasks)).toBe(3);
  });
  it('countCompleted deve retornar apenas concluídas', () => {
    expect(countCompleted(tasks)).toBe(2);
  });
});
