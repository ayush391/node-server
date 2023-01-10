module.exports = {
    home: (req, res) => {
        res.send('hello kaise ho 💋💋💋💋')
    },
    bakris: (req, res) => {
        const bakris = '🐐'.repeat(req.params.count)
        res.send(' ' + bakris)
    }
}