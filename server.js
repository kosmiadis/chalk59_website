const { sendEmailResponse, newMessageEmail } = require('./sendEmail')

const express = require('express')

const app = express();
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.static('public'))
app.use(express.static('public/styles'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', {page: 'Home'})
})

app.get('/contact', (req, res) => {
    res.render('contact', {page: 'Επικοινωνία'})
})

app.get('/services', (req, res) => {
    res.render('services', {page: 'Υπηρεσίες'})
})

app.get('/gallery', (req, res) => {
    res.render('gallery', {page: 'Gallery'})
})

app.post('/contact', async (req, res) => {

    const response = {
        owner_email_success: undefined, 
        client_email_success: undefined, 
        client_email_message: ''
    }

    const { name, surname, email, message } = req.body

    //send email to customer
    try {
        const client_res = await sendEmailResponse(name, email)    
        console.log(client_res)
        if (client_res.message === 'client email sent') {
            response.client_email_success = true
            response.client_email_message = 'Το μήνυμα στάλθηκε επιτυχώς!'
        }
    } catch (error) {
        if (error.message !== 'client email not sent') {
            console.log(error)
        }
        response.client_email_success = false
        response.client_email_message = 'Ωχ! Κάτι πήγε στραβά δοκίμασε πάλι αργότερα.'
    }

    //send email to owner
    try {
        const owner_res = await newMessageEmail(name, surname, email, message)
        console.log(owner_res)
        if (owner_res.message === 'email recieved') {
            response.owner_email_success = true
        }
    } catch (error) {
        if (error.message !== 'email not recieved') {
            console.log(error)
        }
        response.owner_email_success = false
    }

    //check if both operations have finished
    if (response.owner_email_success === true && response.client_email_success === true) {
        res.status(200).json({success: true, message: response.client_email_message})
    }
    else {
        res.status(500).json({success: false, message: response.client_email_message})
    }
})


app.listen(PORT, () => {
    console.log('server running on http://localhost:' + PORT)
})