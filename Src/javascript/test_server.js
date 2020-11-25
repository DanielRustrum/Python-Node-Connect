const netfunc = require("./index")

netfunc.add_trigger("test1", (args) => {
    return "done"
})

netfunc.add_trigger("no-arg", (args) => {
    return "done"
})

netfunc.start(9012)