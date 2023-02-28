import { Request, Response } from "express";
import { DeleteOrderService } from "../../services/orders/DeleteOrderService";

class DeleteOrderController{
    async handle(req: Request, res: Response){
        const order_id = req.query.order_id as string

        const deleteOrderService = new DeleteOrderService()
        const deletedOrder = await deleteOrderService.execute({order_id})

        return res.json(deletedOrder)
    }
}

export { DeleteOrderController };
