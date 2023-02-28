import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController {
    async handle(req: Request, res: Response) {
        const { key } = req.body

        const listCategoryService = new ListCategoryService()
        const listCategory = await listCategoryService.execute(key)

        return res.json(listCategory)
    }
}

export { ListCategoryController };

