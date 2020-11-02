const uuid = require('uuid')

instanceMap = {}

class TriggerInstance {
    constructor(signature) {
        genID = uuid.v4()
        instanceMap[genID] = signature
        this.id = uuid.parse(genID)
    }
}

getSignature = (instance) => {
    return instanceMap[uuid.stringify(instance.id)]
}

removeInstance = (instance) => {
    instanceMap[uuid.stringify(instance.id)] = undefined
}