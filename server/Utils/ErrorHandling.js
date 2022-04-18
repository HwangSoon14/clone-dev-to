module.exports = function ErrorHandling (err, req, res) {
    res.json(err)
}