import {ElMessage} from "element-plus";

function showError(msg) {
    ElMessage.error(msg)
}

function showWarning(msg){
    ElMessage({
        message: msg,
        type: 'warning',
    })
}

export {
    showError,
    showWarning
}