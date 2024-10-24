import prompt from "prompt";
import promptQRCode from "../../prompts/prompt-qrcode.js";
import handle from "../qr-code/handle.js";

async function createQRCode() {
    prompt.get(promptQRCode, handle);
    prompt.start();
}

export default createQRCode;