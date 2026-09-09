const crypto=require('crypto'),path=require('path'),{DatabaseSync}=require('node:sqlite');
const db=new DatabaseSync(process.env.DATABASE_PATH||path.join(__dirname,'data','revolt.db'));
const hash=p=>{const salt=crypto.randomBytes(16).toString('hex');return salt+':'+crypto.scryptSync(p,salt,64).toString('hex')};
const login=process.argv[2]||'admin', password=process.argv[3];
if(!password||password.length<8){console.error('Usage: node reset-admin.js <admin-login> <new-password>  (minimum 8 characters)');process.exit(1)}
const x=db.prepare("SELECT * FROM users WHERE (email=? OR name=?) AND role!='customer'").get(login.toLowerCase(),login);
if(!x){console.error('Admin account not found:',login);process.exit(2)}
db.prepare('UPDATE users SET password_hash=? WHERE id=?').run(hash(password),x.id);db.prepare('DELETE FROM sessions WHERE user_id=?').run(x.id);
console.log(`Password reset for ${x.email||x.name}. Existing sessions were signed out.`);
