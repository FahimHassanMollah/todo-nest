import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {
   
  }
  create(createTaskDto: CreateTaskDto) {
    return this.taskRepository.save({
      task: createTaskDto.task,
      is_completed: false
    });
  }

  findAll() {
    return  this.taskRepository.find();
  }

  findOne(id: number) {
    return this.taskRepository.findOneBy({ id });
  }

 async update(id: number, updateTaskDto: UpdateTaskDto): Promise<UpdateResult> {
    return await this.taskRepository.update(id, updateTaskDto);
  }

  remove(id: number) {
    return this.taskRepository.delete(id);
    
  }
}
