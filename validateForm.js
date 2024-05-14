module.exports.validateForm = async (name, surname, email, message) => {
    return new Promise((resolve, reject) => {
        if (name.trim() === '' | surname.trim() === '' | email.trim() === '' | message.trim() === '') {
            reject(new Error({message: 'Ένα ή περισσότερα πεδία είναι κενά!', passed: false}))
        }
        else {
            resolve({message: 'validation passed', passed: true})
        }
    })
}