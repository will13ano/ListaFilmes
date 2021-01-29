export default{
    save(email, lista){
        localStorage.setItem(`_listfilmes${email}`, JSON.stringify(lista));
    },
    load(email){
        return JSON.parse(localStorage.getItem(`_listfilmes${email}`) || '[]')
    }
}