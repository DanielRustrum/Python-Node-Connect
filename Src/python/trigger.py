import bytes

instanceMap = {}

class TriggerInstance:
    def __init__(self, signature):
        genID = uuid.getnode()
        instanceMap[genID] = signature
        self.id = hex(genID)

def getSignature(instance):
    return instanceMap[str(instance.id)]

def removeInstance(instance):
    del instanceMap[str(instance.id)]