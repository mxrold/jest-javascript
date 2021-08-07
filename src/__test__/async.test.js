import { getDataFromApi } from "../files/promise"

describe('Test async/await', () => {
    test('API request', async () => {
        const api = 'https://rickandmortyapi.com/api/character/'
        const getRick = 'https://rickandmortyapi.com/api/character/1'

        const generalData = await getDataFromApi(api)
        expect(generalData.results.length).toBeGreaterThan(0)

        const dataName = await getDataFromApi(getRick)
        expect(dataName.name).toEqual('Rick Sanchez')
    })

    test('Error API request', async () => {
        const apiError = 'http://httpstat.us/404'
        
        try {
           await getDataFromApi(apiError)
        } catch(error) {
            expect(error).toEqual(new Error('Request failed with status code 404'))
        }
    })
})