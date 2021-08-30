require("dotenv").config()

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)


exports.handler = async (event, context) => {

    if(event.body) {
        const { shippingFee, totalAmount } = JSON.parse(event.body)
        const calculateOrderAmount = () => {
            return shippingFee + totalAmount
        }
        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: calculateOrderAmount(),
                currency: "usd",
            })
            return {
                statusCode: 200,
                body: JSON.stringify({ clientSecret: paymentIntent.client_secret })
            }
        } 
        catch (error) {
            return {
                statusCode: 500,
                body: JSON.stringify({ message: error.message })
            }
        }
    }

    return {
        statusCode: 200,
        body: 'Create Payment Intent',
    }

}