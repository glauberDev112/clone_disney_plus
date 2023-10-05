document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button[data-tab-id]')
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const target = e.target
            const focus = target.getAttribute('data-tab-id')
            console.log('button',target,focus)

        } )
    })
})