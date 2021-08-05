import { suma, resta, multiplicacion, division } from '../files/math'

describe('Calculos matematicos', () => {
    test('Suma', () => {
        expect(suma(1, 1)).toBe(2)
    })
    test('Resta', () => {
        expect(resta(5, 4)).toEqual(1)
    })
    test('Multiplicacion', () => {
        expect(multiplicacion(2, 4)).toBe(8)
    })
    test('Division', () => {
        expect(division(10, 2)).toEqual(5)
    })
})