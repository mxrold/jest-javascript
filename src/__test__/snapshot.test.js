import { getCharacter } from "../files/snapshot"
import rick from '../../rick.json'

describe('Test snapshot', () => {
    test('Snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot()
    })

    test('Always failed the snapshot', () => {
        const user = {
            createAt: new Date(),
            id: Math.floor(Math.random() * 20)
        }

        expect(user).toMatchSnapshot()
    })

    test('We have an exception', () => {
        const user = {
            id: Math.floor(Math.random() * 20),
            name: 'Martin Roldan'
        }
        expect(user).toMatchSnapshot({
            id: expect.any(Number)
        })
    })
})