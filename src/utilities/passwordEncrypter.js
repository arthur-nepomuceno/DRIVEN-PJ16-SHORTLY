import bcrypt from 'bcrypt';

export default function passwordEncrypter(password){
    const encryptPassword = bcrypt.hashSync(password, 11);
    return encryptPassword;
}