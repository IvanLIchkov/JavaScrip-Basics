function passwordGuess(input){
    let passForCheck = input[0];
    let rightPassword = "s3cr3t!P@ssw0rd";
    if(passForCheck == rightPassword){
        console.log("Welcome");
    }else{
        console.log("Wrong password!");
    }
}
passwordGuess(["s3cr3t!P@ssw0rd"]);