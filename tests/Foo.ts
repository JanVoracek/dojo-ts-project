import { expect } from 'chai';
import * as Foo from '../src/Foo';

describe('Foo', () => {
    it('fails', () => {
        expect(Foo.getFalse()).to.equal(false);
    })
});
