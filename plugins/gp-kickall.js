let handler = async (m, {conn, participants, usedPrefix, command}) => {

  let users = participants.map(u => u.id).filter(v => (v !== conn.user.jid && v !== m.sender))

  await conn.groupParticipantsUpdate(m.chat, users, 'remove')

  m.reply(`✅ Kicked everyone out except us 🙂`)

}

handler.help = ['kickall']
handler.tags = ['group']
handler.command = ['kickall', 'ka']
handler.rowner = true
handler.group = true
handler.botAdmin = true

export default handler
