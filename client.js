const socket = io();
const messageContainer = document.getElementById('message-container');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

socket.on('message', data => {
  appendMessage(data);
});

sendButton.addEventListener('click', e => {
  e.preventDefault();
  const message = messageInput.value;
  socket.emit('sendMessage', message);
  messageInput.value = '';
});

function appendMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  messageContainer.append(messageElement);
}
