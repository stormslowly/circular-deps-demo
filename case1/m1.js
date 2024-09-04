import { bar } from './m2';
export function y() {
  console.log('y called');
}
export function foo() {
  bar();
}
