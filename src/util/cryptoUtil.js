import bcrypt from 'bcrypt';

const saltRounds = 10;
const hash = async (text) => bcrypt.hash(text, saltRounds);
const compare = async (text, hashed) => bcrypt.compare(text, hashed);

export default { compare, hash };
