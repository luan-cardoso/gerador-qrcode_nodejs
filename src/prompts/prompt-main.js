const mainPrompt = [
    {
        name: "select",
        description: "Escolha a ferramenta (1 - QRCode | 2 - Password)",
        pattern: /^[1-2]+$/,
        massage: "Escolha apenas entre 1 e 2",
        required: true,
    },
];

export default mainPrompt;