import { getDataFromApi } from "../files/promise"

describe('Test promise', () => {
    test('Api request', (done) => {
        const api = 'https://rickandmortyapi.com/api/character/'
        getDataFromApi(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0)
            done()
        })
    })

    test('Resuelve un texto', () => {
        return expect(Promise.resolve('Hola')).resolves.toBe('Hola')
    })

    test('Reject', () => {
        return expect(Promise.reject('Error')).rejects.toBe('Error')
    })

    test('Rechaza con un error', () => {
        return expect(Promise.reject(new Error('Error'))).rejects.toThrow('Error')
    })
})