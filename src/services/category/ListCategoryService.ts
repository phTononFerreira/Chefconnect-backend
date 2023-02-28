import prismaClient from "../../prisma"

class ListCategoryService {
    async execute(key: string) {
        let listOfCategories = []
        if(key){
            listOfCategories = await prismaClient.category.findMany({
                where:{
                    name: key
                },
                select: {
                    id: true,
                    name: true,
                }
            })
        }else{
            listOfCategories = await prismaClient.category.findMany({
                select: {
                    id: true,
                    name: true,
                }
            })
        }

        return listOfCategories
    }
}

export { ListCategoryService }

