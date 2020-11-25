const fetch = require("./fetch")


const target = (port) => {
    fetch.change_target(port)
}

const call_trigger = async (call, arguments={}) => {
    return fetch.communicate(call, arguments)
}

//* -------------- Can be in a different process -------------

const add_trigger = (name, callback = () => {}) => {
    require("./server/trigger").addTrigger(name, callback)
}

const start = (port) => {
    require("./server/server").start(port)
}


module.exports = {
    add_trigger: add_trigger,
    call_trigger: call_trigger,
    start: start,
    target: target
}