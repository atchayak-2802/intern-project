const logger = (req, res, next) => {

  try {

    console.log(
      `${req.method} request made to ${req.url}`
    );

    next();

  } catch (error) {

    res.status(500).json({
      message: "Middleware Error",
      error: error.message
    });

  }

};

module.exports = logger;