const uuid = require('uuid')

//* Instances
let instanceMap = {}

const triggerInstance = (signature) => {
    let id  = uuid.v4()
    instanceMap[id] = signature
    return id
}

const removeInstance = (instance_id) => {
    instanceMap[instance_id] = undefined
}

const checkInstance = async (instance_id) => {
    if (instanceMap[instance_id].completed === true) {
        let result = await instanceMap[instance_id].promise
        removeInstance(instance_id)
        return result
    } else {
        return instance_id
    }
}

//* Triggers
let triggerMap = {}

const addTrigger = (name, callback) => {
    if (name in triggerMap) {
        throw Error(`${name} is already a trigger`)
    } else {
        triggerMap[name] = {
            callback: callback,
            options: {
                async: callback.constructor.name === "AsyncFunction",
                parameters: callback.args
            }
        }
    }
}

const callTrigger = async (name, args) => {
    if (triggerMap[name].options.async) {
        callbackObject = {
            completed: false,
            promise: new Promise(async (resolve, reject) => {
                let data = await triggerMap[name].callback(args)
                callbackObject.completed = true
                resolve(data)
            }),
        }
        instance_id = triggerInstance(callbackObject)
        return {
            type: "instance",
            id: instance_id
        }
    } else {
        return {
            type: "result",
            result: triggerMap[name].callback(args)
        }
    }
}

module.exports = {
    addTrigger: addTrigger,
    callTrigger: callTrigger,
    checkInstance: checkInstance
}