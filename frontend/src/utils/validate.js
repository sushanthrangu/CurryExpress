
export const checkValidData = (fullName, password)=>{
    
    if(fullName!=null){
        const isNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fullName);
        if(!isNameValid) return "Full Name is not valid";
    }
        
    // const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    
    // if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not Valid";

    return null;
}