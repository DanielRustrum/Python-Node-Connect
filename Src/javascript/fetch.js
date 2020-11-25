const { response } = require('express')
const axios = require('axios')
const signiture = require("./signature")

let target_port = 3000

const send_request = async (call, args) => {
    let request = await axios.get(
        `http://localhost:${target_port}/?call=${call}&args=${args}"`
    )
    return request.data
}

const communicate = async (trigger, args) => {
    if (trigger instanceof signiture.TriggerSignature) {
        if (trigger.target != target_port) 
            throw Error("Target Doesn't Match With Signature");        
        response = send_request(`i!${trigger.id}`)
        if (trigger.id === response)
            return trigger;
        else 
            return response;
    } else {
        data = send_request(`t!${trigger.id}`, args)
        if (data.type === "instance")
            return signiture.TriggerSignature(target_port, data.id);
        else
            return data.result
    }
}

const change_target = (port) => {
    target_port = port
}

module.exports = {
    change_target: change_target,
    communicate: communicate
}