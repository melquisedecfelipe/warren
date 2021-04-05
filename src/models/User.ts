import mongoose from 'mongoose'

const TransactionSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  type: String,
  value: String
})

const UserSchema = new mongoose.Schema({
  email: String,
  input: Number,
  output: Number,
  total: Number,
  transactions: { type: [TransactionSchema] }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
