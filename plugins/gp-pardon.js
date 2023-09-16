
let handler = async (m, { conn, text, usedPrefix, command }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
  else who = m.chat
  if (!who) throw `✳️ Tag or mention someone`
  if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
  let warn = global.db.data.users[who].warn
  if (warn > 0) {
  global.db.data.users[who].warn = 0
  conn.reply(m.chat, `
✅ PARDONED

───────────
@${who.split`@`[0]} warns has been reset to 0`, m, { mentions: [who] })
    m.reply(`✳️ An admin reset your warnings, now you have *0* 😋`, who)
    } else if (warn == 0) {
        m.reply('✳️ The user has no warning')
    }

}
handler.help = ['pardon @user']
handler.tags = ['group']
handler.command = ['pardon'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
