import bcrypt from 'bcrypt';

export default function passwordDecrypter(password, ecryptedPassword){
    const decryptPassword = bcrypt.compareSync(password, ecryptedPassword);
    return decryptPassword;
}