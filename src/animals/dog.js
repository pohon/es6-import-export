// bisa import dan namain apa aja
import Animal from './animal';

export default () => (
    Object.assign(Animal, { kind : 'Dog' })
)