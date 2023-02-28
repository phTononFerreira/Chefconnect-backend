import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
    async handle(req: Request, res: Response) {
        const { name, price, description, category_id } = req.body;

        const { originalname, filename: banner } = req.file

        if (!req.file) {
            throw new Error("File is undefined")
        } else {

            const createProductService = new CreateProductService();
            const product = await createProductService.execute({
                name,
                price,
                description,
                banner,
                category_id
            });
            
            return res.json(product);
        }


        
    }
}

export { CreateProductController };

