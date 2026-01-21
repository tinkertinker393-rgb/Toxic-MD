/**
 * TOXIC-MD UNIVERSAL LOADER
 * This file fixes the "Invalid Token" error and starts the real bot.
 */

const { spawn } = require('child_process');
const path = require('path');

function start() {
    console.log("Starting Toxic-MD from lib/toxic.js...");
    
    // We point directly to the file found in your 'lib' folder
    const targetFile = path.join(__dirname, 'lib', 'toxic.js');
    
    const p = spawn(process.execPath, [targetFile, ...process.argv.slice(2)], {
        stdio: ['inherit', 'inherit', 'inherit', 'ipc']
    });

    p.on('exit', (code) => {
        console.error(`Bot process stopped (Code: ${code}). Restarting in 5 seconds...`);
        setTimeout(start, 5000);
    });
}

start();
