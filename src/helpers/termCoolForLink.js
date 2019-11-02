export default term => term.replace(/[^\ba-zA-Z.]+/g, '-').toLowerCase()
