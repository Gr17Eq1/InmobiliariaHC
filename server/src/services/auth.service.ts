import {injectable, /* inject, */ BindingScope} from '@loopback/core';
// const gen = require('generate-password');
// const encrypt = require('crypto-js');
import * as gen from 'generate-password';
import { MD5 } from 'crypto-js';

// Authentication service used by JWT authentication strategy
@injectable({scope: BindingScope.TRANSIENT})
export class AuthService {
  constructor(/* Add @inject to inject parameters */) {}

  /**
   * Genera una contraseña aleatoria de 10 caracteres
   * 
   * @returns Contraseña aleatoria generada
   */
  GeneratePassword() {
    return gen.generate({
      length: 10,
      numbers: true,
    });
  }

  /**
   * Encripta una contraseña
   * 
   * @param password Contraseña a encriptar
   * @returns Contraseña encriptada
   */
  EncryptPassword(password: string) {
    return MD5(password).toString();
  }
}
