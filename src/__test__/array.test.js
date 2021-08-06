import { arrayFruits, arrayColors } from "../files/array"

describe('Test arrays', () => {
    test('toContain', () => {
        expect(arrayFruits()).toContain('banana')
    })

    test('not.toContain', () => {
        expect(arrayFruits()).not.toContain('platano')
    })

    test('toHaveLength', () => {
        expect(arrayColors()).toHaveLength(5)
    })
})