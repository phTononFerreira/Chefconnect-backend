import prismaClient from "../../prisma";

interface OrderRequest {
    order_id: string
}

class DeleteOrderService {
    async execute({ order_id }: OrderRequest) {
        try {
            const deletedOrder = await prismaClient.order.delete({
                where: {
                    id: order_id
                }
            })

            return deletedOrder
        } catch {
            throw new Error("Order not found")
        }
    }
}

export { DeleteOrderService };

