import { Request, Response } from "express";
import { SendOrderService } from "../../services/orders/SendOrderService";

class SendOrderController {
    async handle(req: Request, res: Response) {
        const id = req.query.order_id as string;

        const sendOrderService = new SendOrderService();
        const order = await sendOrderService.execute({
            id
        });

        return res.json(order);
    }
}

export { SendOrderController };

