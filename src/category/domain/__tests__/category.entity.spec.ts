import { Uuid } from "../../../shared/domain/value-objects/uuid.vo"
import { Category } from "../categort.entity"

describe('Category Entity unit tests', () => {
    describe('contructor', () => {
        it('should create a category passing name only', ()=> {
            const category = new Category({ name: 'category'})

            expect(category.category_id).toBeInstanceOf(Uuid)
            expect(category.name).toBe('category')
            expect(category.description).toBeNull()
            expect(category.is_active).toBe(true)
            expect(category.created_at).toBeInstanceOf(Date)
        })

        it('should create a category passing description', ()=> {
            const category = new Category({ name: 'category', description: 'description'})

            expect(category.category_id).toBeInstanceOf(Uuid)
            expect(category.name).toBe('category')
            expect(category.description).toBe('description')
            expect(category.is_active).toBe(true)
            expect(category.created_at).toBeInstanceOf(Date)
        })

        it('should create a category passing all props', ()=> {
            const date = new Date()
            const category = new Category({ 
                name: 'category',
                description: 'description',
                is_active: false,
                created_at: date
            })

            expect(category.category_id).toBeInstanceOf(Uuid)
            expect(category.name).toBe('category')
            expect(category.description).toBe('description')
            expect(category.is_active).toBeFalsy()
            expect(category.created_at).toBe(date)
        })
    })

    describe('Category create command', () => {
        it('should create a category passing name only', ()=> {
            const category = Category.create({ name: 'category'})

            expect(category.category_id).toBeInstanceOf(Uuid)
            expect(category.name).toBe('category')
            expect(category.description).toBeNull()
            expect(category.is_active).toBe(true)
            expect(category.created_at).toBeInstanceOf(Date)
        })

        it('should create a category passing description', ()=> {
            const category = Category.create({ name: 'category', description: 'description'})

            expect(category.category_id).toBeInstanceOf(Uuid)
            expect(category.name).toBe('category')
            expect(category.description).toBe('description')
            expect(category.is_active).toBe(true)
            expect(category.created_at).toBeInstanceOf(Date)
        })

        it('should create a category passing all props', ()=> {
            const category = Category.create({ 
                name: 'category',
                description: 'description',
                is_active: false,
            })

            expect(category.category_id).toBeInstanceOf(Uuid)
            expect(category.name).toBe('category')
            expect(category.description).toBe('description')
            expect(category.is_active).toBeFalsy()
            expect(category.created_at).toBeInstanceOf(Date)
        })
    })

    it('should change name', () => {
        const category = new Category({ name: 'category'})
        category.changeName('new category')

        expect(category.name).toBe('new category')
    })

    it('should change description', () => {
        const category = new Category({ name: 'category'})
        category.changeDescription('new description')

        expect(category.description).toBe('new description')
    })

    it('should activate', () => {
        const category = new Category({ name: 'category'})
        category.deactivate()
        category.activate()

        expect(category.is_active).toBeTruthy()
    })

    it('should deactivate', () => {
        const category = new Category({ name: 'category'})
        category.deactivate()

        expect(category.is_active).toBeFalsy()
    })
})

describe('Category Validator', () => {
    describe('Create Category Command', () => {
        it('should validate name property', () => {
            expect(() => Category.create({ name: null })).containsErrorsMessage({
                name: [
                    'name should not be empty',
                    'name must be a string',
                    'name must be shorter than or equal to 255 characters'
                ]
            })

            expect(() => Category.create({ name: '' })).containsErrorsMessage({
                name: [
                    'name should not be empty',
                ]
            })

            expect(() => Category.create({ name: 5 as any })).containsErrorsMessage({
                name: [
                    'name must be a string',
                    'name must be shorter than or equal to 255 characters'
                ]
            })

            expect(() => Category.create({ name: 'a'.repeat(256) })).containsErrorsMessage({
                name: [
                    'name must be shorter than or equal to 255 characters'
                ]
            })
        })

        it('should validate description property', () => {
            expect(() => Category.create({ name: 'category', description: 5 as any })).containsErrorsMessage({
                description: [
                    'description must be a string'
                ]
            })
        })

        it('should validate is_active property', () => {
            expect(() => Category.create({ name: 'category', is_active: 5 as any })).containsErrorsMessage({
                is_active: [
                    'is_active must be a boolean value'
                ]
            })
        })
    })

    describe('changeName method', () => {
        it('should validate name property', () => {
            const category = new Category({ name: 'category'})
            expect(() => category.changeName(null)).containsErrorsMessage({
                name: [
                    'name should not be empty',
                    'name must be a string',
                    'name must be shorter than or equal to 255 characters'
                ]
            })

            expect(() => category.changeName('')).containsErrorsMessage({
                name: [
                    'name should not be empty',
                ]
            })

            expect(() => category.changeName(5 as any)).containsErrorsMessage({
                name: [
                    'name must be a string',
                    'name must be shorter than or equal to 255 characters'
                ]
            })

            expect(() => category.changeName('a'.repeat(256))).containsErrorsMessage({
                name: [
                    'name must be shorter than or equal to 255 characters'
                ]
            })
        })
    })

    describe('changeDescription method', () => {
        it('should validate description property', () => {
            const category = new Category({ name: 'category'})
            expect(() => category.changeDescription(5 as any)).containsErrorsMessage({
                description: [
                    'description must be a string'
                ]
            })
        })
    })
})