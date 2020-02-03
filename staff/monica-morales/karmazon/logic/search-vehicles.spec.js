describe('searchVehicles', () => {
    it('should succeed on matching query', (done) => {
        searchVehicle('batman', (results) => {
            expect(results).toBeDefined()
            expect(results.length).toBeGreaterThan(0)

            results.forEach((result) => {
                expect(typeof result.id).toBe('string')
                expect(typeof result.name).toBe('string')
                expect(typeof result.thumbnail).toBe('string')
                expect(typeof result.price).toBe('number')
            })

            done()
        })
    })

    it('should succeed on non-matching query returning an empty array', (done) => {
        searchVehicle('asdasdfñlajsfklasldñkfjañlsjflasjflasjfñladjs', (results) => {
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('should fail on non-string query', () => {
        expect(() => {
            searchVehicle(undefined, () => { })
        }).toThrowError(TypeError, 'undefined is not a string')

        expect(() => {
            searchVehicle(1, () => { })
        }).toThrowError(TypeError, '1 is not a string')

        expect(() => {
            searchVehicle(true, () => { })
        }).toThrowError(TypeError, 'true is not a string')

        expect(() => {
            searchVehicle({}, () => { })
        }).toThrowError(TypeError, '[object Object] is not a string')
    })

    it('should fail on non-function callback', () => {
        expect(() => {
            searchVehicle('', undefined)
        }).toThrowError(TypeError, 'undefined is not a function')

        expect(() => {
            searchVehicle('', 1)
        }).toThrowError(TypeError, '1 is not a function')

        expect(() => {
            searchVehicle('', true)
        }).toThrowError(TypeError, 'true is not a function')

        expect(() => {
            searchVehicle('', {});
        }).toThrowError(TypeError, '[object Object] is not a function')
    })
})