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