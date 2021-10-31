import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {

    tasks: Task[] = [
        { id: 1, description: 'Tafarefa 1', completed: true},
        { id: 2, description: 'Tafarefa 2', completed: true},
        { id: 3, description: 'Tafarefa 3', completed: true},
        { id: 4, description: 'Tafarefa 4', completed: true},
        { id: 5, description: 'Tafarefa 5', completed: true},
    ];

    getAll() {
        return this.tasks;
    }

    getById(id: number) {
        const task = this.tasks.find(x => x.id == id);
        return task;
    }

    create(task: Task) {

    }

    update(task: Task) {

    }

    delete(id: number) {

    }
}
