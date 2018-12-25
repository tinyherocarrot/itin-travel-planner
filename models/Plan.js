import mongoose from 'mongoose';

const { Schema } = mongoose;

const PlanSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  scheduled: {
    type: Boolean,
    required: true,
  },
  dateCreated: {
    type: Date,
    required: true,
  },
});

const Plan = mongoose.model('Plan', PlanSchema);

export default Plan;
