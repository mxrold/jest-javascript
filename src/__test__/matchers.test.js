describe('Comparadores comunes', () => {
    const cities = {
        argentina: 'Rosario', 
        brasil: 'San Pablo',
        colombia: 'Bogota',
        chile: 'Santiago'
    }

    const cities2 = {
        argentina: 'Rosario', 
        brasil: 'San Pablo',
        colombia: 'Bogota',
        chile: 'Santiago'
    }
    
    test('Verificando un elemento del objeto', () => {
        expect(cities.argentina).toEqual('Rosario')
    })

    test('Comparando objetos', () => {
        expect(cities).toEqual(cities2)
    })

    test('Los objetos no son iguales', () => {
        expect(cities).toEqual(cities2)
    })
})