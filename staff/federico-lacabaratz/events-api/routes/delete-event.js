const { deleteEvent } = require('../logic')
const { NotFoundError } = require('../errors')

module.exports = (req, res) => {
    const { payload: { sub: userId }, body: {eventId} } = req

    try {
        deleteEvent(userId, eventId)
            .then(() =>
                res.status(200).json({ message: "You've successfully deleted this event" })
            )
            .catch(({ message }) =>
                res
                    .status(401)
                    .json({
                        error: message
                    })
            )
    } catch (error) {
        let status = 400

        switch (true) {
            case error instanceof NotFoundError:
                status = 404 // not found
                break
        }

        const { message } = error

        res
            .status(status)
            .json({
                error: message
            })
    }
}