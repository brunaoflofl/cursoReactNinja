'use strict'

import {expect} from 'chai'
import div from './div'

it('sum should be a function', () => {
    expect(div).to.be.a('function')
})
it('div(10, 2) should return 5', () => {
    expect(div(10, 2)).to.be.equals(5)

})