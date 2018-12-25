import Plan from '../../../models/Plan';

export default {
  Query: {
    plan: (root, args) => new Promise((resolve, reject) => {
      Plan.findOne(args)
        .exec((err, res) => (err ? reject(err) : resolve(res)));
    }),
    plans: (root, args) => new Promise((resolve, reject) => {
      Plan.find({})
        .sort({ dateCreated: -1 })
        .populate()
        .exec((err, res) => (err ? reject(err) : resolve(res)));
    }),
  },
  Mutation: {
    createPlan: (root, { title }) => {
      const newPlan = new Plan({
        title,
        scheduled: false,
        dateCreated: new Date(),
      });

      newPlan.id = newPlan._id;

      return new Promise((resolve, reject) => {
        newPlan
          .save((err, res) => (err ? reject(err) : resolve(res)));
      });
    },
    editPlan: (root, { id, title, scheduled = false }) => new Promise((resolve, reject) => {
      Plan
        .findOneAndUpdate({ id }, { $set: { title, scheduled } })
        .exec((err, res) => (err ? reject(err) : resolve(res)));
    }),
    deletePlan: (root, args) => new Promise((resolve, reject) => {
      Plan
        .findOneAndDelete(args)
        .exec((err, res) => (err ? reject(err) : resolve(res)));
    }),
  },
};
