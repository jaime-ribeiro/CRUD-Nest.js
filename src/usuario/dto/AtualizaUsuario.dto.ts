import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength,} from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";

export class AtualizaUsuarioDTO{

  @IsString({message: 'O nome tem que ser uma String'})
  @IsNotEmpty({message: 'O nome não pode ser vazio'})
  @IsOptional()
  nome: string;

  @IsEmail(undefined, {message: 'O e-mail informado é inválido'})
  @EmailEhUnico({message: "Este e-mail já está cadastrado"})
  @IsOptional()
  email: string;
  
  @MinLength(6, {message: 'A senha precisa ter pelo menos 6 Caracteres'})
  @IsOptional()
  senha: string;
}