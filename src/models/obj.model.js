module.exports = class Obj {
    // variables
    Id;
    username;
    password;

    // constructor
    constructor(id, username, password){
        this.Id = id;
        this.username = username;
        this.password = password;
    }

    getId(){
        return this.Id;
    }

    getUsername(){
        return this.username;
    }

    getPassword(){
        return this.password;
    }

    setUsername(un){
        this.username = un; 
    }

    setPassword(pw){
        this.password = pw; 
    }

}