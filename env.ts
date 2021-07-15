console.log('hello ' + Deno.env.get('USER'))

// deno run --allow-env env.ts
// ENABLE ALL PERMISSIONS!
// deno run --allow-all env.ts
// deno run -A env.ts

// deno install --allow-env env.ts to install the program with all needed permissions
