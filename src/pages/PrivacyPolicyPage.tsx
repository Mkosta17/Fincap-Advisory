import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">POLÍTICA DE PRIVACIDAD DEL SITIO WEB</h1>
          <p className="text-blue-600 font-medium mb-12">https://fincap-advisory.vercel.app/</p>

          <div className="prose prose-blue max-w-none text-gray-600 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">I. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS</h2>
              <p>
                Respetando lo establecido en la legislación vigente, Fincap Advisory (en adelante, también Sitio Web) se
                compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad
                adecuado al riesgo de los datos recogidos.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Leyes que incorpora esta política de privacidad</h3>
              <p>
                Esta política de privacidad está adaptada a la normativa española y europea vigente en materia de
                protección de datos personales en internet. En concreto, la misma respeta las siguientes normas:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD).</li>
                <li>La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD).</li>
                <li>El Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (RDLOPD).</li>
                <li>La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Identidad del responsable del tratamiento de los datos personales</h3>
              <p>
                El responsable del tratamiento de los datos personales recogidos en Fincap Advisory es: <strong>Marc Costa Solé</strong>,
                con NIF: 24558556F (en adelante, Responsable del tratamiento). Sus datos de contacto son los siguientes:
              </p>
              <p className="mt-4">
                Dirección: Passeig de Manuel Girona 73<br />
                Teléfono de contacto: 609766383<br />
                Email de contacto: mkosta2505@gmail.com
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Registro de Datos de Carácter Personal</h3>
              <p>
                En cumplimiento de lo establecido en el RGPD y la LOPD-GDD, le informamos que los datos personales
                recabados por Fincap Advisory, mediante los formularios extendidos en sus páginas quedarán
                incorporados y serán tratados en nuestro fichero con el fin de poder facilitar, agilizar y cumplir los
                compromisos establecidos entre Fincap Advisory y el Usuario o el mantenimiento de la relación que se
                establezca en los formularios que este rellene, o para atender una solicitud o consulta del mismo.
              </p>
              <p className="mt-4">
                Asimismo, de conformidad con lo previsto en el RGPD y la LOPD-GDD, salvo que sea de aplicación la
                excepción prevista en el artículo 30.5 del RGPD, se mantiene un registro de actividades de tratamiento
                que especifica, según sus finalidades, las actividades de tratamiento llevadas a cabo y las demás
                circunstancias establecidas en el RGPD.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Principios aplicables al tratamiento de los datos personales</h3>
              <p>
                El tratamiento de los datos personales del Usuario se someterá a los siguientes principios recogidos en el
                artículo 5 del RGPD y en el artículo 4 y siguientes de la Ley Orgánica 3/2018, de 5 de diciembre, de
                Protección de Datos Personales y garantía de los derechos digitales:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Principio de licitud, lealtad y transparencia:</strong> se requerirá en todo momento el consentimiento del Usuario previa información completamente transparente de los fines para los cuales se recogen los datos personales.</li>
                <li><strong>Principio de limitación de la finalidad:</strong> los datos personales serán recogidos con fines determinados, explícitos y legítimos.</li>
                <li><strong>Principio de minimización de datos:</strong> los datos personales recogidos serán únicamente los estrictamente necesarios en relación con los fines para los que son tratados.</li>
                <li><strong>Principio de exactitud:</strong> los datos personales deben ser exactos y estar siempre actualizados.</li>
                <li><strong>Principio de limitación del plazo de conservación:</strong> los datos personales solo serán mantenidos de forma que se permita la identificación del Usuario durante el tiempo necesario para los fines de su tratamiento.</li>
                <li><strong>Principio de integridad y confidencialidad:</strong> los datos personales serán tratados de manera que se garantice su seguridad y confidencialidad.</li>
                <li><strong>Principio de responsabilidad proactiva:</strong> el Responsable del tratamiento será responsable de asegurar que los principios anteriores se cumplen.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Categorías de datos personales</h3>
              <p>
                Las categorías de datos que se tratan en Fincap Advisory son tanto datos identificativos como categorías
                especiales de datos personales en el sentido del artículo 9 del RGPD.
              </p>
              <p className="mt-4">
                Se entienden como categorías especiales de datos personales aquellos que revelen el origen étnico o
                racial, las opiniones políticas, las convicciones religiosas o filosóficas, o la afiliación sindical, y el
                tratamiento de datos genéticos, datos biométricos dirigidos a identificar de manera unívoca a una persona
                física, datos relativos a la salud o datos relativos a la vida sexual o la orientación sexual de una persona
                física.
              </p>
              <p className="mt-4">
                Para el tratamiento de las categorías especiales de datos personales, será necesario en todo caso el
                consentimiento explícito del Usuario para uno o varios fines específicos.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Base legal para el tratamiento de los datos personales</h3>
              <p>
                La base legal para el tratamiento de los datos personales es el consentimiento. Fincap Advisory se
                compromete a recabar el consentimiento expreso y verificable del Usuario para el tratamiento de sus
                datos personales para uno o varios fines específicos.
              </p>
              <p className="mt-4">
                El Usuario tendrá derecho a retirar su consentimiento en cualquier momento. Será tan fácil retirar el
                consentimiento como darlo. Como regla general, la retirada del consentimiento no condicionará el uso del
                Sitio Web.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fines del tratamiento a que se destinan los datos personales</h3>
              <p>
                Los datos personales son recabados y gestionados por Fincap Advisory con la finalidad de poder facilitar,
                agilizar y cumplir los compromisos establecidos entre el Sitio Web y el Usuario o el mantenimiento de la
                relación que se establezca en los formularios que este último rellene o para atender una solicitud o
                consulta.
              </p>
              <p className="mt-4">
                Igualmente, los datos podrán ser utilizados con una finalidad comercial de personalización, operativa y
                estadística, y actividades propias del objeto social de Fincap Advisory, así como para la extracción,
                almacenamiento de datos y estudios de marketing para adecuar el Contenido ofertado al Usuario, así
                como mejorar la calidad, funcionamiento y navegación por el Sitio Web.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Períodos de retención de los datos personales</h3>
              <p>
                Los datos personales solo serán retenidos durante el tiempo mínimo necesario para los fines de su
                tratamiento y, en todo caso, únicamente durante el siguiente plazo: 3 mes, o hasta que el Usuario solicite
                su supresión.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Destinatarios de los datos personales</h3>
              <p>
                Los datos personales del Usuario serán compartidos con los siguientes destinatarios o categorías de
                destinatarios: Marc Costa Solé, con domicilio en Passeig de Manuel Girona 73, Barcelona.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secreto y seguridad de los datos personales</h3>
              <p>
                Fincap Advisory se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel
                de seguridad adecuado al riesgo de los datos recogidos, de forma que se garantice la seguridad de los
                datos de carácter personal y se evite la destrucción, pérdida o alteración accidental o ilícita de datos
                personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados
                a dichos datos.
              </p>
              <p className="mt-4">
                El Sitio Web cuenta con un certificado SSL (Secure Socket Layer), que asegura que los datos personales se
                transmiten de forma segura y confidencial, al ser la transmisión de los datos entre el servidor y el Usuario,
                y en retroalimentación, totalmente cifrada o encriptada.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Derechos derivados del tratamiento de los datos personales</h3>
              <p>
                El Usuario podrá ejercer frente al Responsable del tratamiento los siguientes derechos reconocidos en el RGPD y la Ley Orgánica 3/2018:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Derecho de acceso:</strong> Obtener confirmación de si se están tratando sus datos.</li>
                <li><strong>Derecho de rectificación:</strong> Modificar datos inexactos o incompletos.</li>
                <li><strong>Derecho de supresión:</strong> Obtener la eliminación de sus datos cuando ya no sean necesarios.</li>
                <li><strong>Derecho a la limitación del tratamiento:</strong> Limitar el uso de sus datos en ciertos supuestos.</li>
                <li><strong>Derecho a la portabilidad:</strong> Recibir sus datos en un formato estructurado.</li>
                <li><strong>Derecho de oposición:</strong> Oponerse al tratamiento de sus datos.</li>
              </ul>
              <p className="mt-6">
                Podrá ejercitar sus derechos mediante comunicación escrita dirigida al Responsable del tratamiento con la referencia "RGPD-https://fincap-advisory.vercel.app/", especificando su nombre, apellidos y copia del DNI a:
              </p>
              <p className="mt-4">
                Dirección postal: Passeig de Manuel Girona 73<br />
                Correo electrónico: mkosta2505@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">II. ACEPTACIÓN Y CAMBIOS EN ESTA POLÍTICA DE PRIVACIDAD</h2>
              <p>
                El uso del Sitio Web implicará la aceptación de la Política de Privacidad del mismo. Fincap Advisory se reserva el derecho a modificar su Política de Privacidad, de acuerdo a su propio criterio, o motivado por un cambio legislativo.
              </p>
              <p className="mt-4 italic">
                Esta Política de Privacidad fue actualizada el día 01/03/2026.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
