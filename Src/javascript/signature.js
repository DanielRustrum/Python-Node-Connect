//* Trigger Signature for internal calls
class TriggerSignature {
    constructor(target, id) {
        this.id = id
        this.target = target
    }
}

module.exports = {
    TriggerSignature: TriggerSignature
}