export function debounce(callback, wait) {
    let timeout;
    return (...args) => {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => callback.apply(context, args), wait);
    };
}


export function throttle(callback, wait) {
    let timeout;
    return (...args) => {
        if (timeout) return;
        timeout = setTimeout(() => {
            callback.apply(this, args)
            timeout = null;
        }, wait);
    }
}

export function sleep(wait) {
    return new Promise((resolve) => {
        setTimeout(resolve, wait);
    })
}