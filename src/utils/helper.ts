export const checkRegiPass = (pass1: string, pass2:string|undefined) => {
    if(pass1.length < 6){
        throw new Error("Passwords need to at least 6 characters")
    }
    if(pass1 !== pass2){
        throw new Error("Passwords do not match")
    }
}