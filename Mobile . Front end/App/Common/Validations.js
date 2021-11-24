import { showToast } from "./CommonMethods"


const validationempty = (value) => {
    if (value === '') {
    } else if (value === undefined) {
    } else if (value === null) {
    } else if (value.length < 1) {
    } else if (value === 'null') {
    } else if (value === 'NULL') {
    } else if (value === NaN) {
    } else {
        return true
    }
}



export {
    validationempty
}