process.on('message', (m, server) => {
  if(m === 'server') {
    server.on('connection', (socket) => {
      socket.end('work2处理处理')
    })
  }
})