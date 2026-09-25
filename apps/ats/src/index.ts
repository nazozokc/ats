import { cli, define } from "gunshi";
import { CLI_COMMAND_NAME } from "./constant/app.ts";
import { version } from "./version.ts";

const mainCommand = define({
  name: CLI_COMMAND_NAME,
  description: "A agent task scheduler cli",
});

await cli(process.argv.slice(2), mainCommand, {
  name: CLI_COMMAND_NAME,
  version: await version(),
  subCommands: {},
});
