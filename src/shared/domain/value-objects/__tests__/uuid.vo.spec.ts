import { Uuid } from "../uuid.vo"

describe('UUID Value Object Unit Tests', () => {
    const validateSpy = jest.spyOn(Uuid.prototype as  any, 'validate')

    it('should throw an error if id is not a valid UUID', () => {
        expect(() => new Uuid('invalid-uuid')).toThrow('ID must be a valid UUID.')
        expect(validateSpy).toHaveBeenCalledTimes(1)
    })

    it('should create a UUID with a valid UUID', () => {
        const uuid = new Uuid()

        expect(uuid.id).toBeDefined()
        expect(validateSpy).toHaveBeenCalledTimes(1)
    })

    it('should create a UUID with a valid UUID', () => {
        const uuid = new Uuid('d0c8d0f8-3c4e-4b6e-8e0f-9e4c9e5d0c8d')

        expect(uuid.id).toBe('d0c8d0f8-3c4e-4b6e-8e0f-9e4c9e5d0c8d')
        expect(validateSpy).toHaveBeenCalledTimes(1)
    })
})