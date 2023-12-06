//ERROR MIDDLEWARE | NEXT

// Error Middleware
const errorMiddleware = (err, req, res, next) => {
  let defaultError = {
    statusCode: 500,
    success: "failed",
    message: "Internal Server Error",
  };

  if (err.name === "ValidationError") {
    defaultError.statusCode = 400;
    defaultError.message = Object.values(err.errors)
      .map((el) => el.message)
      .join(", ");
  } else if (err.code && err.code === 11000) {
    defaultError.statusCode = 400;
    defaultError.message = `${Object.values(
      err.keyValue
    )} field must be unique`;
  } else if (typeof err === "string") {
    // Handle specific email existence check
    defaultError.statusCode = 400;
    defaultError.message = err;
  }

  res.status(defaultError.statusCode).json({
    success: defaultError.success,
    message: defaultError.message,
  });
};

export default errorMiddleware;
