import { callbackHell } from "../files/callbacks"

describe('Probando un callback', () => {
    test('Callback', (done) => {
        function otherCallback(data) {
            expect(data).toBe('Hola Mundo')
            // done() le indica a jest que espere a que la funcion asincrona se resuelva
            done()
        }
        callbackHell(otherCallback)
    })
})