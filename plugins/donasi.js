let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *Indosat:* [085723813401]
┣➥ *Tri:* [089531724196]
┣➥ *Dana:* [089531724196]
┣➥ *
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6289531724196*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
