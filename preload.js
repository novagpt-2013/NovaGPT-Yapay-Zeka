
const { contextBridge } = require('electron');


contextBridge.exposeInMainWorld('novaAPI', {
  ping: () => "NovaGPT hazır 🚀"
});
