import range from 'ramda/src/range'
import curry from 'ramda/src/curry'

const always = (x) => () => x
const FALSE = always(false)

export const makeGrid = curry((cell, size) => {
  const r = range(0, size)
  return r.map((y) => r.map((x) => cell(y, x)))
})

export const makeBlankGrid = makeGrid(FALSE)
