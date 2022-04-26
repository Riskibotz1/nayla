let handler = async m => m.reply(`
╭─「 RENT BOT 」
│
│ > Harga :
│• 5K / Minggu
│• 20K / Bulan
│• 30K / Permanent
│
│ > Pembayaran :
│• DANA : 089531724196
│• TRI : 089531724196
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^se(wa|wabot)$/i

module.exports = handler
