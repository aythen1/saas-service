// This is your test secret API key.
// 'sk_test_51Ncu4UF0YK5c4Ih51TFFlCmu8i84l2KmnRMI2El3nBq6XMa9CyTDgGv1Tb4ASKznzHN35s36FebICMZLMd4AIKpa00hTZSBu7w'


export const strikeConfig = async (stripe, domain, price_id, quantity) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: '{{PRICE_ID}}',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${domain}?success=true`,
        cancel_url: `${domain}?canceled=true`,
      });
}




 

