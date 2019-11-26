const User  = require('../models/user');

exports.login = async(user_name, password) => {
   return await User.findOne({ where: { user_name, password } }).then((result)=>{
      return Promise.resolve(result)
   })
}