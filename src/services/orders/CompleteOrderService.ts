import prismaClient from "../../prisma";


interface CompleteOrderRequest {
    order_id: string
}

class CompleteOrderService {
    async execute({ order_id }: CompleteOrderRequest) {
        const order = prismaClient.order.update({
            where: {
                id: order_id
            },
            data: {
                status: true
            }
        })

        return order
    }
}

export { CompleteOrderService };

