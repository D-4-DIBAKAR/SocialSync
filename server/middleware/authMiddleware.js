import JWT from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log(
      "Authentication failed: Missing or invalid Authorization header"
    );
    return res.status(401).json({ message: "Authentication failed" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const userToken = JWT.verify(token, process.env.JWT_SECRET_KEY);

    req.body.user = {
      userId: userToken.userId,
    };

    console.log("Authentication successful. User ID:", userToken.userId);

    next();
  } catch (error) {
    console.error("Authentication failed:", error.message);

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }

    return res.status(401).json({ message: "Authentication failed" });
  }
};

export default userAuth;
