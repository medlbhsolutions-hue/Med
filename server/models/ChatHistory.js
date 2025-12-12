import mongoose from 'mongoose';

const chatHistorySchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  userMessage: String,
  botResponse: String,
  context: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('ChatHistory', chatHistorySchema);
