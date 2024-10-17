function getBaseEmail(sernderName:string) {
    let base = `Ola ${sernderName}, quero me candidatar para a vaga`;

    base+= "\n Estou deixando o meu curriculo";

    return base;
}

export {getBaseEmail};