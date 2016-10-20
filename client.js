const net = require('net');
const readline = require('readline');

console.log('type "exit" or "quit" to quit.');

const socket = net.connect({port:8124}, () => {
    console.log('server connected');
    socket.write('hello world');
})

socket.on('end', () => {
    console.log('client disconnected');
})

socket.on('error', () => {
    console.log('socket error', err);
})

socket.on('close', () => {
  console.log('echo client was closed');
  process.exit(0);
});

const rl = readline.createInterface({
    input:process.stdin
});

rl.on('line', (cmd) => {
    socket.write(cmd + '\r\n');
})