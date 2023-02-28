import prismaClient from '../../prisma';

interface TableRequest {
    table: number;
}

class TableDetailsService {
    async execute({ table }: TableRequest) {
        // busca order pelo numero da table
        try {
            const order = await prismaClient.order.findMany({
                where: {
                    table
                }
            });

            return order;
        }catch{
            throw new Error("Invalid table value")
        }
    }
}

export { TableDetailsService };

