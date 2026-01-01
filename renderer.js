// src/renderer.js

const input = document.getElementById('input');
const send = document.getElementById('send');
const chat = document.getElementById('chat');

let emojiMode = 'normal'; // seçenekler: 'az', 'normal', 'çok'

// Gönder butonuna tıklayınca çalışır
send.addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) return;
  addMsg(text, 'user');          // kullanıcı mesajını ekle
  const reply = respond(text);   // NovaGPT cevabı üret
  addMsg(reply, 'ai');           // cevabı ekle
  input.value = '';
});

// Mesaj balonunu ekleme
function addMsg(text, who) {
  const div = document.createElement('div');
  div.className = `msg ${who}`;
  div.textContent = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight; //
