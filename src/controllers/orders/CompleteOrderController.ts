import { Request, Response } from "express";
import { CompleteOrderService } from "../../services/orders/CompleteOrderService";

class CompleteOrderController{
    async handle(req: Request, res: Response){
        const order_id = req.query.order_id as string
        
        const completeOrderService = new CompleteOrderService()
        const order = completeOrderService.execute({order_id})
        
        return res.json()
    }
}