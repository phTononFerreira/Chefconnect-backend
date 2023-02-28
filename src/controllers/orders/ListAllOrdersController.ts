import { Request, Response } from "express";
import { ListAllOrdersService } from "../../services/orders/ListAllOrdersService";

class ListAllOrdersController {
    async handle(req: Request, res: Response) {
        const listAllOrdersService = new ListAllOrdersService();
        const orders = await listAllOrdersService.execute();

        return res.json(orders);
    }
}

export { ListAllOrdersController };
