const { Users } = require("../database/models");
const bcrypt = require("bcryptjs");
const { idUser, name, email, password, apartment } = require("../database/models/users");

const UserController = {
  async create(req, res) {
    try {
      const { name, email, apartment, password } = req.body;
      const newPass = bcrypt.hashSync(password, 10);
      const newUser = await Users.create({
        name,
        email,
        apartment,
        password: newPass,
        status: true,
      });
      return res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json("Erro ao criar usuário");
    }
  },

  async listar(req, res) {
    try {
      const allUsers = await Users.findAll({
        attributes: { exclude: "password" },
      });
      if (!allUsers) {
        return res.status(200).json("Nenhum usuário cadastrado!");
      }
      return res.status(200).json(allUsers);
    } catch (error) {
      console.log(error);
      return res.status(400).json("Ocorreu um erro ao listar usuários");
    }
  },

  async alterar(req, res) {
    const { id: idUser } = req.params;
    const localizaUsuario = await Users.findOne({ where: { idUser} });
    console.log(localizaUsuario, idUser);

    try {
      
      const atualizaUsuario = req.body;

      if (localizaUsuario == null) {
        return res.status(400).json({ message: "Usuário não encontrado" });
      }

      const query = {};

      if (req.body.password != null) {
        const newpassword = bcrypt.hashSync(req.body.password, 10);
        query.password = newpassword;
      }

      if (req.body.name != null) {
        query.name = req.body.name;
      }

      if (req.body.email != null) {
        query.email = req.body.email;
      }

      if (req.body.apartment != null) {
        query.apartment = req.body.apartment;
      }
      const usuarioAtualizado = await Users.update(query, {where: {idUser}});

      return res.status(200).json({...localizaUsuario, ...query});
    } catch (error) {
      console.log(error);
      res.status(400).json("Não foi possivel atualizar os dados do usuário");
    }
  },

  async apagarUser(req, res) {
    try {
      const { id } = req.params;
      const user = await Users.findOne({
        where: {
          status: 1,
          idUser: id
        }
      });

    if (user) {
      await Users.update({ status: 0 }, { where: { idUser: id } });

      return res.status(204);
    }

    res.status(404).json("usuario não encontrado!");
  } catch (error) {
    return res.status(500).json("Erro ao tentar apagar usuario!");
  }
  }

};

    
module.exports = UserController;
