let handler = function (m) {
  // this.sendContact(m.chat, '6289531724196', 'Riski Gans', m)
  conn.sendContact(m.chat, '6281269361609' , 'kanaya Cans', m)
  conn.reply(m.chat, `Tuh Pacar Ku Jangan Galak² Ya >_<, Nanti Ku Banned Nanges`, m) 
}
handler.help = ['pacarowner']
handler.tags = ['info']

handler.command = /^(pacarowner)$/i

module.exports = handler
