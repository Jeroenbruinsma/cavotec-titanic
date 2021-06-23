function validateInput(data, type, requiredValue, response){
    if(typeof data !== type){
      response.status(400).end()
      return true
    }
    if(requiredValue){
      if(!requiredValue.includes(data)){
        response.status(400).end()
        return true
      }
    }
    return false
  }

  module.exports = {validateInput}