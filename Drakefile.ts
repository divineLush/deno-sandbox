// deno run -A Drakefile.ts hello
import { desc, run, task, sh } from "https://deno.land/x/drake@v1.5.0/mod.ts";

desc("Minimal Drake task");
task("hello", [], async function() {
  console.log("Hell(o) from Drake!");
  // run shell script using sh()
  await sh("deno run --allow-env env.ts");
});

run()
