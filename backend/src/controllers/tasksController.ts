import { Request, Response, NextFunction } from 'express';
import tasksService from '../service/tasksService';

class tasksController {
  async getTasks(req: Request, res: Response, _next: NextFunction) {
    const userId = req.user?.id;
    const collectionId = req.params.id;
    const tasks = await tasksService.getTasks(userId, collectionId);

    return res.json(tasks);
  }

  async setTask(req: Request, res: Response, _next: NextFunction) {
    const userId = req.user?.id;
    const collectionId = req.params.id;
    const task = await tasksService.setTask({userId, collectionId, ...req.body});

    return res.json(task);
  }

  async updateTask(req: Request, res: Response, _next: NextFunction) {
    const userId = req.user?.id;
    const id = req.params.id;
    const data = req.body;
    const task = await tasksService.updateTask(userId, id, data);

    return res.json(task);
  }

  async deleteTask(req: Request, res: Response, _next: NextFunction) {
    const userId = req.user?.id;
    const id = req.params.id;
    const task = await tasksService.deleteTask(userId, id);

    return res.json(task);
  }
}

export default new tasksController();
