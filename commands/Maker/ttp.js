'use strict';

export default {
    views: ['ttp < text >'], // view for message in  menu
    command: /^ttp$/i, //another command.
    description: 'Create Text To Pictures',
    usage: '%cmd% xcoders',
    query: true,
    text: true,
    execute: async ({ xcoders, m, x, apikeys, query, waitingMessage, errorMessage, host, getBuffer, createSticker, addHitCommand }) => {
        try {
            const data = await getBuffer(`${host}/api/maker/ttp?text=${query}&apikey=${apikeys}`);
            const result = await createSticker(data, {});
            await waitingMessage(m.chat);
            addHitCommand('Text To Picture', true);
            return xcoders.sendMessage(m.chat, { sticker: result, caption: response.success, contextInfo: { forwardingScore: 9999999, isForwarded: true } }, { quoted: x });
        } catch (error) {
            return errorMessage(m.chat, error, 'Text To Picture');
        }
    }
};