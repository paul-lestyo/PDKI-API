import { Request, Response } from 'express';
import PDKIService from '../service/pdki.service';;

class PDKIController {
  async getTrademarks(req: Request, res: Response): Promise<void> {
		const search = req.query.search as string || '';

    try {
      const users = await PDKIService.fetchTrademark(search);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new PDKIController();