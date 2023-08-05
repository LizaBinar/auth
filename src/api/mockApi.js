const validEmail = 'evilmars@gmail.com'
const validPassword = 'password123'

export const loginEmailPassword = async (email, password) => {
    await new Promise((resolve) => setTimeout(() => resolve(1), 1500))
    if (email === validEmail && password === validPassword) {
        return {result: 'success'}
    } else {
        throw {result: 'error', data: {general: 'email or password are incorrect'}}
    }
}

export const loginEmail = async (email) => {
    await new Promise((resolve) => setTimeout(() => resolve(1), 1500))
    if (email === validEmail) {
        return {result: 'success'}
    } else {
        throw {result: 'error', data: {email: 'email not found'}}
    }
}


