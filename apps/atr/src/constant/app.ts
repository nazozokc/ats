import { homedir } from "os";
import { join } from "path";

export const CLI_COMMAND_NAME = "atr";
export const ATR_ROOT_DIR = join(`${homedir()}`, ".config", "atr");
export const ATR_SETTING_DIR = join(`${homedir()}`, ".config", "atr", "tomls");
