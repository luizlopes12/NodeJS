const mom = require('moment')
function say(name){
    console.log(name)
    console.log(mom().format('HH:mm'))
}
say('Opa')