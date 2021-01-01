import { conf } from '../index.js'
conf.set('margin', { frickity: 'flop' })
console.log(conf.get('margin.frickity'))