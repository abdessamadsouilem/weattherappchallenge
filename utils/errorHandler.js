exports.handleError = (res, error) => {
    console.error(error);

    // Determine status code based on the type of error
    const statusCode = error.message === 'City not found' ? 404 : 500;

    res.status(statusCode).send({ error: error.message || 'An error occurred' });
};