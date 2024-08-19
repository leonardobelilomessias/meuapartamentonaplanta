export function iteratorObject(meuObjeto:Object){

    let resultArray =[]
    for (const chave in meuObjeto) {
        if (meuObjeto.hasOwnProperty(chave)) {
            const valor = meuObjeto[chave as keyof typeof meuObjeto];
            console.log(`Chave: ${chave}, Valor: ${valor}`);
            resultArray.push({chave:chave,valor:valor})
        }
    }
    resultArray
}