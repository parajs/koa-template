const { login } = require('../services/user')


exports.login = async(ctx) => {
    const body = ctx.request.body
    try {
        const user_name = body.user_name
        const password = body.password
        if (user_name && password) {
            await login(user_name, password).then((data)=>{
                console.log(data)
            })
          
        } else {
            
        }
    } catch (error) {
        
    }
    
  
}