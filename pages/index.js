import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Script from 'next/script'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Living with Chris</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://www.paypal.com/sdk/js?client-id=AdmE03bjZ3MWYmIEk_3dlqeJ4xc6fCia1SCJBmn9RAz_STEgdTcuThpbO942ENSwJtTfzQ3bYVniDfNI&vault=true&intent=subscription" data-sdk-integration-source="button-factory"/>
      </Head>

      <main>
        <Header title="Welcome to 10226 Stratford Ave" />
        <p className="description">
          Never miss a rent payment again. Subscribe below
        </p>
        <div id="paypal-button-container-P-8A254628MV0166352MWGL2XQ"></div>
        <script dangerouslySetInnerHTML={{__html: `
        paypal.Buttons({
          style: {
              shape: 'rect',
              color: 'gold',
              layout: 'vertical',
              label: 'subscribe'
          },
          createSubscription: function(data, actions) {
            return actions.subscription.create({
              /* Creates the subscription */
              plan_id: 'P-8A254628MV0166352MWGL2XQ'
            });
          },
          onApprove: function(data, actions) {
            alert(data.subscriptionID); // You can add optional success message for the subscriber here
          }
      }).render('#paypal-button-container-P-8A254628MV0166352MWGL2XQ');
        
        `}}></script>

      </main>

    </div>
  )
}
