const countElement = document.querySelector('#count');
const usersElement = document.querySelector('#users');
const statusElement = document.querySelector('#status');

const params = new URLSearchParams(window.location.search);
const channel = params.get('channel') || 'roryau_';
const client = new tmi.Client({
    connection: {
    secure: true,
    reconnect: true,
    },
    channels: [channel],
});

client.connect().then(() => {
    statusElement.textContent = `Listening for messages in ${channel}...`;
});

let listeningForCount = false;
let users = {};

client.on('message', (wat, tags, message, self) => {
    if (self) return;
    const { username } = tags;
    if (username.toLowerCase() === channel.toLowerCase()) {
    if (message === '!g-start') {
        listeningForCount = true;
    } else if (message === '!g-end') {
        listeningForCount = false;
    } else if (message === '!g-clear') {
        countElement.textContent = 'Waiting for count...';
        usersElement.textContent = '';
        users = {};
    }
    } else if (listeningForCount && message === '!join') {
    users[tags.username] = true;
    // display current count page.
    countElement.textContent = Object.keys(users).length;
    usersElement.textContent = Object.keys(users).join(', ');
    }
});