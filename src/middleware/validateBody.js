import createHttpError from 'http-errors';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, {
      abortEarly: false,
    });
    next();
  } catch (error) {
    const errors = error.details.map((details) => details.message);

    next(new createHttpError.BadRequest(errors));
    // const error = createHttpError(400, 'Bad Request', {
    //   error: err.details,
    // });
    // next(error);
  }
};
