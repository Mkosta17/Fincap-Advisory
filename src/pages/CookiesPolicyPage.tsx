import { motion } from 'framer-motion';

export default function CookiesPolicyPage() {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">POLÍTICA DE COOKIES</h1>
          <p className="text-blue-600 font-medium mb-12">https://fincap-advisory.vercel.app/</p>

          <div className="prose prose-blue max-w-none text-gray-600 space-y-8">
            <section>
              <p>
                El acceso a este Sitio Web puede implicar la utilización de cookies. Las cookies son pequeñas cantidades
                de información que se almacenan en el navegador utilizado por cada Usuario —en los distintos dispositivos
                que pueda utilizar para navegar— para que el servidor recuerde cierta información que posteriormente y
                únicamente el servidor que la implementó leerá. Las cookies facilitan la navegación, la hacen más
                amigable, y no dañan el dispositivo de navegación.
              </p>
              <p className="mt-4">
                Las cookies son procedimientos automáticos de recogida de información relativa a las preferencias
                determinadas por el Usuario durante su visita al Sitio Web con el fin de reconocerlo como Usuario, y
                personalizar su experiencia y el uso del Sitio Web, y pueden también, por ejemplo, ayudar a identificar y
                resolver errores.
              </p>
              <p className="mt-4">
                La información recabada a través de las cookies puede incluir la fecha y hora de visitas al Sitio Web, las
                páginas visionadas, el tiempo que ha estado en el Sitio Web y los sitios visitados justo antes y después del
                mismo. Sin embargo, ninguna cookie permite que esta misma pueda contactarse con el número de
                teléfono del Usuario o con cualquier otro medio de contacto personal. Ninguna cookie puede extraer
                información del disco duro del Usuario o robar información personal. La única manera de que la
                información privada del Usuario forme parte del archivo Cookie es que el usuario dé personalmente esa
                información al servidor.
              </p>
              <p className="mt-4">
                Las cookies que permiten identificar a una persona se consideran datos personales. Por tanto, a las
                mismas les será de aplicación la Política de Privacidad anteriormente descrita. En este sentido, para la
                utilización de las mismas será necesario el consentimiento del Usuario. Este consentimiento será
                comunicado, en base a una elección auténtica, ofrecido mediante una decisión afirmativa y positiva, antes
                del tratamiento inicial, removible y documentado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies de redes sociales</h2>
              <p>
                Fincap Advisory incorpora plugins de redes sociales, que permiten acceder a las mismas a partir del Sitio
                Web. Por esta razón, las cookies de redes sociales pueden almacenarse en el navegador del Usuario. Los
                titulares de dichas redes sociales disponen de sus propias políticas de protección de datos y de cookies,
                siendo ellos mismos, en cada caso, responsables de sus propios ficheros y de sus propias prácticas de
                privacidad. El Usuario debe referirse a las mismas para informarse acerca de dichas cookies y, en su caso,
                del tratamiento de sus datos personales. Únicamente a título informativo se indican a continuación los
                enlaces en los que se pueden consultar dichas políticas de privacidad y/o de cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Facebook: <a href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.facebook.com/policies/cookies/</a></li>
                <li>Twitter: <a href="https://twitter.com/es/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://twitter.com/es/privacy</a></li>
                <li>Instagram: <a href="https://help.instagram.com/1896641480634370?ref=ig" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://help.instagram.com/1896641480634370?ref=ig</a></li>
                <li>YouTube: <a href="https://policies.google.com/privacy?hl=es-419&gl=mx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://policies.google.com/privacy?hl=es-419&gl=mx</a></li>
                <li>Pinterest: <a href="https://policy.pinterest.com/es/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://policy.pinterest.com/es/privacy-policy</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/legal/cookie-policy?trk=hp-cookies" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.linkedin.com/legal/cookie-policy?trk=hp-cookies</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Deshabilitar, rechazar y eliminar cookies</h2>
              <p>
                El Usuario puede deshabilitar, rechazar y eliminar las cookies —total o parcialmente— instaladas en su
                dispositivo mediante la configuración de su navegador (entre los que se encuentran, por ejemplo, Chrome,
                Firefox, Safari, Explorer). En este sentido, los procedimientos para rechazar y eliminar las cookies pueden
                diferir de un navegador de Internet a otro. En consecuencia, el Usuario debe acudir a las instrucciones
                facilitadas por el propio navegador de Internet que esté utilizando. En el supuesto de que rechace el uso
                de cookies —total o parcialmente— podrá seguir usando el Sitio Web, si bien podrá tener limitada la
                utilización de algunas de las prestaciones del mismo.
              </p>
            </section>

            <section>
              <p className="mt-8 italic">
                Este documento de Política de Cookies fue actualizado el día 01/03/2026.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
