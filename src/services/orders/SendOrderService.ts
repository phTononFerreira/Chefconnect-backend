import prismaClient from '../../prisma';

interface OrderRequest {
    id: string;
}

class SendOrderService {
    async execute({ id }: OrderRequest) {
        // busca order no banco
        const order = await prismaClient.order.findFirst({
            where: {
                id
            }
        });

        if (!order) {
            throw new Error("Order not found");
        }

        // atualiza order
        await prismaClient.order.update({
            where: {
                id
            },
            data: {
                draft: false
            }
        });

        return order;
    }
}

export { SendOrderService };
