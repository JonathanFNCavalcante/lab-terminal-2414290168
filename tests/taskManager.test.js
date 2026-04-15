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
