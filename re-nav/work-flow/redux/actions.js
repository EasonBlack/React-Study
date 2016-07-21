export function nextStep(step) {
    return {
        type: 'NEXT_STEP',
        step: step
    }
}

export function confirm(info) {
    return {
        type: 'CONFIRM',
        info: info
    }
}

export function setInfo(info) {
    return {
        type: 'SETINFO',
        info: info
    }
}








