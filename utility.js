const hideById = (elementId) => {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

const showById = (elementId) => {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}