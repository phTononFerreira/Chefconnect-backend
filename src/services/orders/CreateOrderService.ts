import prismaClient from "../../prisma";

interface CreateOrderRequest {
    table: number;
    name: string;
}

class CreateOrderService {
    async execute({ table, name }: CreateOrderRequest) {
        const order = await prismaClient.order.create({
            data: {
                table,
                name
            },
            select: {
                id: true,
                name: true,
                table: true,
                status: true,
                draft: true,
            }
        });

        return order;
    }
}

export { CreateOrderService };

