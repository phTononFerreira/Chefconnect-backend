import { Request, Response } from "express";
import { TableDetailsService } from "../../services/orders/TableDetailsService";

class TableDetailsController {
    async handle(req: Request, res: Response) {
        const table = req.query.table as string;

        const tableDetailsService = new TableDetailsService();
        const order = await tableDetailsService.execute({
            table: Number(table)
        });

        return res.json(order);
    }
}

export { TableDetailsController };

