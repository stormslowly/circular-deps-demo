import { y } from './m1';
export function bar() {
  console.log('bar called');
}
export function x() {
  y();
}
