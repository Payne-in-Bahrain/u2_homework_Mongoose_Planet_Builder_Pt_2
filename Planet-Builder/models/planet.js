const mongoose = require('mongoose')
const plantSchema = mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  poisonous: { type: String, enum: [true, false] }
})

const planetSchema = mongoose.Schema({
  name: { type: String, required: true },
  climate: {
    type: String,
    required: true,
    enum: ['Oceanic', 'Tropical', 'Arctic', 'Desert', 'Rainforest'],
    default: 'Desert',
    validate(value) {
      //throw new Error('Please select climate.')
      if (value === undefined) {
        throw new Error('Please select climate.')
      }
    }
  },
  population: { type: Number, required: true },
  plants: [plantSchema]
})

module.exports = mongoose.model('Planet', planetSchema)
