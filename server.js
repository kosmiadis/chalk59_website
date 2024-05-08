const { sendEmailResponse, newMessageEmail } = require('./sendEmail')

const express = require('express')
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 8080
const emailCheck = require('email-check')

/*This changes automatically the copyright year date. */
let date
let year

app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use(express.static('public/styles'))
app.use(express.static('public/scripts'))
app.use(express.static('public/forCarousel'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.locals.page_descr = 'Αρχική'
    date = new Date()
    year = date.getFullYear()

    res.render('index', {page: 'Home', year: year, page_descr: res.locals.page_descr})
})

app.get('/contact', (req, res) => {
    date = new Date()
    year = date.getFullYear()
    res.render('contact', {page: 'Επικοινωνία', year: year})
})

app.get('/services', (req, res) => {
    date = new Date()
    year = date.getFullYear()
    res.render('services', {page: 'Υπηρεσίες', year: year})
})

app.get('/gallery', (req, res) => {
    res.locals.page_descr = 'Gallery'
    date = new Date()
    year = date.getFullYear()
    res.render('gallery', {page: 'Gallery', year: year, page_descr: res.locals.page_descr})
})

app.post('/contact', async (req, res) => {

    const response = {
        owner_email_success: undefined, 
        client_email_success: undefined, 
        client_email_message: ''
    }

    const { name, surname, email, message } = req.body

    try {
        const email_exists = await emailCheck(email)
        if (!email_exists) {
            response.owner_email_success = false
            response.client_email_success = false
            response.client_email_message = 'Το Email δεν υπάρχει. Προσπαθήστε ξανά.'
            res.status(400).json({success: false, message: response.client_email_message})
        }
        else {
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
        }
    }
    catch (e) {
        console.log(e)
        response.client_email_success = false
        response.owner_email_success = false
        response.client_email_message = 'Ωχ! Κάτι πήγε στραβά δοκίμασε πάλι αργότερα.'
        res.status(400).json({success: false, message: response.client_email_message})
    }
})

app.use((req, res) => {
    res.render('404', {page: 'Σφάλμα 404', year: year})
})


app.listen(PORT, () => {
    console.log('server running on http://localhost:' + PORT)
})