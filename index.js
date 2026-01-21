/**
 * TOXIC-MD START SCRIPT
 * This file replaces the corrupted/obfuscated index.js 
 * to allow the bot to start on GitHub Actions.
 */

const { spawn } = require('child_process');
const path = require('path');

function start() {
    console.log("Initializing Toxic-MD...");
    
    // Most bots like this have the real code in the developer folder
    let args = [path.join(__dirname, 'xh_clinton', 'index.js'), ...process.argv.slice(2)];
    
    console.log(`Executing: node ${args[0]}`);
    
    let p = spawn(process.execPath, args, {
        stdio: ['inherit', 'inherit', 'inherit', 'ipc']
    });

    p.on('exit', (code) => {
        console.error(`Bot process exited with code: ${code}`);
        if (code === 0 || code === 1) start(); // Auto-restart on crash
    });
}

start();
