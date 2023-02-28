import prismaClient from "../../prisma";

interface RemoveItemRequest {
    item_id: string
}

class RemoveItemService {
    async execute({ item_id }: RemoveItemRequest) {
        try {
            const removedItem = await prismaClient.item.delete({
                where: {
                    id: item_id
                }
            })

            return removedItem
        } catch {
            throw new Error("Item not found")
        }
    }
}

export { RemoveItemService };

