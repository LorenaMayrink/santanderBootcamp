function getAdmins (maps) {
    let admins = [];
    for([key, value] of maps) {
    if(value === "Adim") {
        getAdmins.push(key);
    }
}
return admins
}

const USUARIOS = new Map();

USUARIOS.set("Lorena", "Admin");
USUARIOS.set("Patricia", "User");
USUARIOS.set("Diego", "Admin");

console.log(getAdmins(USUARIOS));