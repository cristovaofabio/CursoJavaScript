import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const students = await Student.findAll();
    res.json(students);
  }

  async store(req, res) {
    try {
      const student = await Student.create(req.body);
      return res.json(student);
    } catch (e) {
      return res.status(400).json(
        {
          errors: e.errors.map((err) => err.message),
        },
      );
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json(
          {
            errors: ['missing id'],
          },
        );
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json(
          {
            errors: ['studant not found'],
          },
        );
      }

      return res.json(student);
    } catch (e) {
      return res.status(400).json(
        {
          errors: e.errors.map((err) => err.message),
        },
      );
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json(
          {
            errors: ['missing id'],
          },
        );
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json(
          {
            errors: ['studant not found'],
          },
        );
      }

      const newStudent = await student.update(req.body);

      return res.json(newStudent);
    } catch (e) {
      return res.status(400).json(
        {
          errors: e.errors.map((err) => err.message),
        },
      );
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json(
          {
            errors: ['missing id'],
          },
        );
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json(
          {
            errors: ['student not found'],
          },
        );
      }

      await student.destroy();

      return res.json({
        message: 'student deleted ',
      });
    } catch (e) {
      return res.status(400).json(
        {
          errors: e.errors.map((err) => err.message),
        },
      );
    }
  }
}

export default new StudentController();
