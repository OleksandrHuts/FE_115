document.addEventListener('mousemove', function (event) {
    document.body.style.cssText = `--move-x: ${event.clientX}px; --move-y: ${event.clientY}px;`
})