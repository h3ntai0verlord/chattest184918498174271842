const io = require('socket.io')(https://h3ntai0verlord.github.io/chattest184918498174271842/?);

io.on('connection', socket => {
  console.log('New user connected');

  socket.on('sendMessage', message => {
    io.emit('message', message);
  });
});
