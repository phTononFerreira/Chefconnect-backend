import prismaClient from "../../prisma";

interface CreateItemRequest {
    amount: number;
    order_id: string;
    product_id: string;
}

class AddItemService {
    async execute({ amount, order_id, product_id }: CreateItemRequest) {
        try {
            const item = await prismaClient.item.create({
                data: {
                    amount: amount,
                    order_id: order_id,
                    product_id: product_id,
                },
                select: {
                    id: true,
                    amount: true,
                    order_id: true,
                    product_id: true,
                    created_at: true
                }
            });

            return item;
        } catch {
            throw new Error("Invalid data entry")
        }
    }
}

export { AddItemService };

