import { ValueObject } from "./value-objects";

export abstract class Entity {
    abstract toJSON(): any;
    abstract get entity_id(): ValueObject
}