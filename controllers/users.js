module.exports = {
  signUp: async (req, res, next) => {
    console.log('Contents of req value', req.value.body);
    console.log('UsersController.SignUp() called..');
  },

signIn: async (req, res, next) => {
  console.log('UsersController.SignIn() called..');
  },

secret: async (req, res, next) => {
    console.log('UsersController.secret() called..');
  }
}
