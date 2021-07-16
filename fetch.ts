import * as log from "https://deno.land/std/log/mod.ts";

const fetchLaunchData = async () => {
  const res = await fetch("https://api.spacexdata.com/v3/launches");
  const data = await res.json();
  log.info(res.ok);
  console.log(data);
};

fetchLaunchData();
