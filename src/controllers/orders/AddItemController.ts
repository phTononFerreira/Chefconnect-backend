import { Request, Response } from "express";
import { AddItemService } from "../../services/orders/AddItemService";

class AddItemController {
    async handle(req: Request, res: Response) {
        const { amount, order_id, product_id } = req.body
        
        const addItemService = new AddItemService()
        const newItem = await addItemService.execute({amount, order_id, product_id})

        return res.json(newItem)
    }
}

export { AddItemController };

