import prismaClient from "../../prisma"


class ListByCategoryService {
    async execute(filterName: string, filterID: string) {
        let listProducts = []

        if (filterName || filterID) {
            const category = await prismaClient.category.findFirst({
                where: {
                    OR: [
                        {
                            id: filterID
                        },
                        {
                            name: filterName
                        }
                    ],
                },
                select: {
                    id: true
                }
            })
            if (category) {
                listProducts = await prismaClient.product.findMany({
                    where: {
                        category_id: category.id
                    },
                    select: {
                        id: true,
                        name: true,
                        price: true,
                        description: true,
                        banner: true,
                        category_id: true
                    }
                })
            }
        } else {
            listProducts = await prismaClient.product.findMany({
                select: {
                    id: true,
                    name: true,
                    price: true,
                    description: true,
                    banner: true,
                    category_id: true
                }
            })
        }

        return listProducts
    }
}

export { ListByCategoryService }

