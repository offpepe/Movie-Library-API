module.exports = {
    someFieldEmpty: {
        error: 'invalid_new_user',
        code: 422,
        message: 'Todos os campos precisam ser preenchidos corretamente.'
    },
    emailNotValid: {
        error: 'invalid_email',
        code: 422,
        message: 'Email invalido!'    
    },
    usernameOrPasswordInvalid: {
        error: 'invalid_username_or_email',
        code: 422,
        message: 'O seu nome deve conter mais de 5 letras e sua senha deve conter mais do que 8 caracteres',
    },
    emailAlreadyExist: {
        error: 'email_already_registered',
        code: 409,
        message: 'Este email já foi cadastrado'
    },
    emailOrPasswordInvalid: {
        error: 'invalid_email_or_password',
        code: 422,
        message: 'Email ou a senha incorreto.'
    },
};