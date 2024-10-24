const promptQRCode = [
    {
        name: 'link',
        description: 'Digite o link para gerar o QR Code'
    },
    {
        name: 'type',
        description: 'Escolha entre o tipo do QR Code (1 - Normal | 2 - Terminal)',
        pattern: /^[1-2]+$/,
        massage: 'Escolha apenas entre 1 e 2',
        required: true
    }
];

export default promptQRCode;