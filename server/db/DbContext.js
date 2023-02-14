import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { HouseSchema } from '../models/House';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  House = mongoose.model('House', HouseSchema)
}

export const dbContext = new DbContext()
