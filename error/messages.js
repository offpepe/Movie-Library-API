module.exports = {
    someFieldEmpty: {
        error: 'invalid_fields',
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
    invalidUserType: {
        error: 'invalid_data',
        code: 422,
        message: 'o tipo deve ser "Creator"(criador) ou "Reader"(leitor)',
    },
    newMovieData: {
        error: 'invalid_data',
        code: 422,
        message: 'Todos os campos precisam ser preenchidos',
    },
    fileTypeNotAcceptable: {
        error: 'file_type_not_acceptable',
        code: 406,
        message: 'O tipo do arquivo deve ser JPEG'
    },
    notLoggedIn: {
        error: 'not_logged',
        code: 401,
        message: 'É necessário login para este tipo de requisição',
    },
    fileNotFoundCover: {
        error: 'file_not_found',
        code: 422,
        message: 'É necessário uma imagem para a capa'
    },
    idNotFound : {
        error: 'not_found',
        code: 404,
        message: 'Não foi encontrado nenhum resultado com este ID'
    },
    invalidId : {
        error: 'invalid_id',
        code: 422,
        message: 'O id precisa ser válido(em BSON)',
    },
    invalidReleaseYear: {
        error: 'invalid_data',
        code: 406,
        message: 'Data inválida.'
    },
    invalidRate: {
        error: 'invalid_data',
        code: 406,
        message: 'O rate deve ser de 1 a 5',
    },
};