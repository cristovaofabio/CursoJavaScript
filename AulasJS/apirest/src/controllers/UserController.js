import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);

      /**
      const newUser = await User.create(
        {
          firstname: 'User01',
          email: 'user01@gmail.com',
          password: '123456',
        },
      );
      */

      res.json(newUser);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
