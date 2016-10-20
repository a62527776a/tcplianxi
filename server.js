const net = require('net');
const server = net.createServer((c) => {
    console.log('client connected');
    c.on('end', () => {
        console.log('client disconnected');
    })
    c.write('hello\r\n');//发送数据
    c.on('data', (data) => {
        c.write(data);//将接受的数据发送
        console.log(data);
    })
})

server.on('error', (err) => {
    throw err;
});

server.listen(8124, () => {
    console.log('server bound');
})