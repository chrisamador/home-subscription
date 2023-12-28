import Head from 'next/head'
import Header from '@components/Header'
import { useEffect, useRef } from 'react'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function Home() {
  
  return (
    <div className="container">
      <Head>
        <title>Living with Chris</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to 10226 Stratford Ave" />
        <p className="description">
          Never miss a rent payment again. Subscribe below
        </p>

        <div dangerouslySetInnerHTML={{ __html: `<div id="paypal-button-container-P-8A254628MV0166352MWGL2XQ"></div>` }} />
        <PayPalScriptProvider options={{ "client-id": "AdmE03bjZ3MWYmIEk_3dlqeJ4xc6fCia1SCJBmn9RAz_STEgdTcuThpbO942ENSwJtTfzQ3bYVniDfNI&vault=true&intent=subscription" }}>
          <PayPal />
        </PayPalScriptProvider>
      </main>

    </div>
  )
}

function PayPal() {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) return;
    setTimeout(() => {
      paypal.Buttons({
        style: {
          shape: 'rect',
          color: 'gold',
          layout: 'vertical',
          label: 'subscribe'
        },
        createSubscription: function (data, actions) {
          return actions.subscription.create({
            /* Creates the subscription */
            plan_id: 'P-8A254628MV0166352MWGL2XQ'
          });
        },
        onApprove: function (data, actions) {
          alert(data.subscriptionID); // You can add optional success message for the subscriber here
        }
      }).render('#paypal-button-container-P-8A254628MV0166352MWGL2XQ');
    }, 500)
    
    ref.current = true;
  }, [])
  return null
}
