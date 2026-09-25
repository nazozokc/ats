import { homedir } from "os";
import { join } from "path";

export const CLI_COMMAND_NAME = "ats";
export const ATS_ROOT_DIR = join(`${homedir()}`, ".config", "ats");
export const ATS_SETTING_DIR = join(`${homedir()}`, ".config", "ats", "tomls");
