describe('Test strings', () => {
    const text = "Un texto de ejemplo"

    test('Debe contener el siguiente texto', () => {
        expect(text).toMatch(/texto/)
    })

    test('Debe contener una longitud', () => {
        expect(text).toHaveLength(19)
    })
})