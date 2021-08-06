import { suma } from '../files/math'

describe('Prueba de métodos de números', () => {
    test('toBeGreaterThan', () => {
        expect(suma(2, 2)).toBeGreaterThan(3)   
    })

    test('toBeGreaterThanOrEqual', () => {
        expect(suma(5, 2)).toBeGreaterThanOrEqual(7)
    })

    test('toBeLessThan', () => {
        expect(suma(3, 3)).toBeLessThan(10)   
    })

    test('toBeLessThanOrEqual', () => {
        expect(suma(1, 1)).toBeLessThanOrEqual(3)   
    })

    test('toBeCloseTo', () => {
        expect(suma(1.64, 0.34)).toBeCloseTo(1.98)  
    })
})