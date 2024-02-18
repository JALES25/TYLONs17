import mongoose, { Schema, models} from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
})

UserSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12)
  }
  next()
})

UserSchema.methods.verifyPassword = async function(password) {
  return await bcrypt.compare(password, this.password)
}

const Usermodel = mongoose.models.User || mongoose.model('User', UserSchema)
export default Usermodel