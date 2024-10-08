async function conectToDB(user,password) {
    if(user == process.env.USERDATABASE &&
         password == process.env.PASSWORDDATABASE){
        console.log("conecção com o banco de dados estabelecida")
    }else{
        console.log("Nao foi possivel efetuar o login. Fala ao conectar ao DB!")
    }
}

export default conectToDB