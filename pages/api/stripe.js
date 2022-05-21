import Stripe from 'stripe';
import { GraphQLClient, gql } from 'graphql-request';
const graphqlAPI = process.env.NEXT_PUBLIC_MATBLOGS_ENDPOINT;
const graphcmsToken = process.env.MATBLOGS_TOKEN

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {

  if (req.method === 'POST') {
    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        // shipping_options: [
          //   { shipping_rate: 'shr_1Kn3IaEnylLNWUqj5rqhg9oV' },
          // ],
          line_items: req.body.map( (item) => {
              
            // const {
            //     product: { images }
            //   } = await getImages(item.id)

            return {
              price_data: {
                currency: 'pkr',
                product_data: {
                  name: item.name,
                  images: item.image.url
                },
                unit_amount: item.price * 100,
              },
              adjustable_quantity: {
                enabled:true,
                minimum: 1,
              },
              quantity: item.quantity
            }
          }),
          success_url: `${req.headers.origin}/success`,
          cancel_url: `${req.headers.origin}/canceled`,
        }

        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create(params);

        res.status(200).json(session);
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  }