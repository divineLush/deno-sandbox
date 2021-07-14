// deno run deno.js 'hello world!'
const a = Deno.args[0];
const b = Deno.args[1];
console.log(a + b);
console.log(window);
console.table(Deno.metrics());

setTimeout(() => {
  console.log('check');
}, 2000);

setTimeout(() => {
  console.table(Deno.metrics());
}, 4000);
