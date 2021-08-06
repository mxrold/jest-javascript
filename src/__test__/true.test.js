import { beNull, beUndefined, beDefined, beTruthy, beFalsy } from '../files/true'

describe('Prueba de métodos verdaderos', () => {
    test('beNull', () => {
        expect(beNull()).toBeNull()
    })

    test('beUndefined', () => {
        expect(beUndefined()).toBeUndefined()
    })

    test('beDefined', () => {
        expect(beDefined()).toBeDefined()
    })

    test('beTruthy', () => {
        expect(beTruthy()).toBeTruthy()
    })

    test('beFalsy', () => {
        expect(beFalsy()).toBeFalsy()
    })

    test('', () => {
        expect(beNull()).not.toBeUndefined()
    })
})