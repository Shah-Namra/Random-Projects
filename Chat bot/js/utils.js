export function scrollToBottom(container) {
    container.scrollTop = container.scrollHeight;
}

export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}