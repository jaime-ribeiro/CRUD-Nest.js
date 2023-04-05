import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import {v4 as uuid} from 'uuid';

@Controller('/usuarios')
export class UsuarioController {
  //private usuarioRepository = new UsuarioRepository()

  constructor (private usuarioRepository: UsuarioRepository) {}
  @Post()
  async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO){
    const usuarioEntity = new UsuarioEntity();
    const {email, senha, nome } = dadosDoUsuario;

    usuarioEntity.email = email;
    usuarioEntity.senha = senha;
    usuarioEntity.nome = nome;
    usuarioEntity.id = uuid();

    this.usuarioRepository.salvar(usuarioEntity)
    return { id: usuarioEntity.id, message: "Usuario Criado Com Sucesso"}
  }

  @Get()
  async listaUsuario(){
    return this.usuarioRepository.listar()
  }
}