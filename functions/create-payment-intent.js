require("dotenv").config()

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)


exports.handler = async (event, context) => {

    if(event.body) {
        const { name, shippingFee, totalAmount } = JSON.parse(event.body)
        const calculateOrderAmount = () => {
            return shippingFee + totalAmount
        }
        try {
            const paymentIntent = await stripe.paymentIntents.create({
                description: 'Furniture Products',
                shipping: {
                    name,
                    address: {
                        line1: '510 Townsend St',
                        postal_code: '98140',
                        city: 'San Francisco',
                        state: 'CA',
                        country: 'US',
                    },
                },
                amount: calculateOrderAmount(),
                currency: "usd",
                payment_method_types: ['card'],
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