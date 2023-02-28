import prismaClient from '../../prisma';

class ListAllOrdersService {
    async execute() {
        // busca todas as orders que não são rascunhos
        const orders = await prismaClient.order.findMany({
            where: {
                draft: false
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        return orders;
    }
}

export { ListAllOrdersService };

