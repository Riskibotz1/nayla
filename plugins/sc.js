let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hayo ngapain mau pasang ya?*
*Nih w kasi, kasian amat lu tekan y itu link*
*https://github.com/ItzLighting9332/nayla*
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*NIH KASIAN LU*', 'status@broadcast')
}
handler.help = ['sc']
handler.tags = ['tutor']
handler.command = /^(sc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
 
