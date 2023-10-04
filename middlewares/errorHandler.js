const errorHandler = (error, req, res, next) => {
    console.log(error);
  
    switch (error.name) {
      case "IncompleteData":
        res.status(400).json({ message: "Incomplete data!" });
        break;
      case "EmailAlreadyExists":
        res.status(400).json({ message: "Email already exists!" });
        break;
    case "UsernameAlreadyExists":
        res.status(400).json({ message: "Username already exists!" });
        break;
      case "RegisterFailed":
        res.status(400).json({ message: "Register failed!" });
        break;
      case "IncorrectEmailOrPassword":
        res.status(400).json({ message: "Incorrect email or password!" });
        break;
      case "EmailNotFound":
        res.status(400).json({ message: "Email not found!" });
        break;
      case "DataNotFound":
        res.status(400).json({ message: "Data not found!" });
        break;
      case "PasswordUpdateFailed":
        res.status(400).json({ message: "Password update failed!" });
        break;
      case "UpdateFailed":
        res.status(400).json({ message: "Update failed!" });
        break;
      case "CreateFailed":
        res.status(400).json({ message: "Create failed!" });
        break;
      case "DeleteFailed":
        res.status(400).json({ message: "Delete failed!" });
        break;
      case "Unautorized":
        res.status(400).json({ message: "Unautorized!" });
        break;
      default:
        res.status(500).json({ message: "Internal server error!" });
        break;
    }
  };
  
  module.exports = errorHandler;