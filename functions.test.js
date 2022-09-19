let funcs = require('./functions')

test('Return Two test', () => {
    expect(funcs.returnTwo()).toBe(2)
})

test('Greeting Test', () => {
     expect(funcs.greeting('James')).toBe('Hello James.')
 })

 test('Adding Test', () => {
     expect(funcs.add(13, 2)).toBe(15)
 })
