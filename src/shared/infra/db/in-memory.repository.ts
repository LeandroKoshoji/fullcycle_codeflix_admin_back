import { Entity } from "../../entiity";
import { NotFoundError } from "../../errors/not-found.error";
import { IRepository } from "../../repository/repository-interface";
import { ValueObject } from "../../value-objects";

export abstract class InMemoryRepository<E extends Entity, EntityId extends ValueObject>
    implements IRepository<E, EntityId> {
    items: E[] = []

    async insert(entity: E): Promise<void> {
        this.items.push(entity)
    }

    async bulkInsert(entities: E[]): Promise<void> {
        this.items.push(...entities)
    }

   async update(entity: E): Promise<void> {
        const index = this.items.findIndex(item => item.entity_id.equals(entity.entity_id))

        if (index === -1) {
            throw new NotFoundError(entity.entity_id, this.getEntity())
        }
        this.items[index] = entity
   }

   async delete(entityId: EntityId): Promise<void> {
       const index = this.items.findIndex(item => item.entity_id.equals(entityId))
       if (index === -1) {
           throw new NotFoundError(entityId, this.getEntity())
       }
         this.items.splice(index, 1)
   }

   async findById(entityId: EntityId): Promise<E | null> {
        const item = this.items.find(item => item.entity_id.equals(entityId))
        return item ?? null
   }

    async findAll(): Promise<E[]> {
        return this.items
    }

    abstract getEntity(): new (...args: any[]) => E;
}