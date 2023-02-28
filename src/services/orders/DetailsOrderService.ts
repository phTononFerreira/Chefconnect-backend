import prismaClient from "../../prisma";

interface DetailsOrderRequest {
    order_id: string
}

class DetailsOrderService {
    async execute({ order_id }: DetailsOrderRequest) {
        const details = await prismaClient.item.findMany({
            where: {
                order_id: order_id
            },
            include: {
                product: true,
                order: true
            }
        })

        return details
    }
}

export { DetailsOrderService };

