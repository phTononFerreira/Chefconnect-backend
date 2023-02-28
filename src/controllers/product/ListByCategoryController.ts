import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

class ListByCategoryController {
    async handle(req: Request, res: Response) {
        const filter = req.query.filter as string ?? ""
        const filter_id = req.query.filter_id as string ?? ""
        
        const listByCategoryService = new ListByCategoryService()
        const productsList = await listByCategoryService.execute(filter, filter_id)

        return res.json(productsList)
    }
}

export { ListByCategoryController };

