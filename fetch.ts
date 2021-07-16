import * as log from "https://deno.land/std/log/mod.ts";

interface Launch {
  flightNumber: number;
  mission: number;
}

const launches = new Map<number, Launch>();

const fetchLaunchData = async () => {
  const res = await fetch("https://api.spacexdata.com/v3/launches");
  const data = await res.json();
  log.info(res.ok);
  console.log(data);

  for (const launch of data) {
    const flightData = {
      flightNumber: launch["flight_number"],
      mission: launch["mission_name"],
    };

    launches.set(flightData.flightNumber, flightData);

    log.info(JSON.stringify(flightData));
  }
};

fetchLaunchData();
