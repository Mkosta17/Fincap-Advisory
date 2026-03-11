import { motion } from 'framer-motion';

export default function LegalNoticePage() {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AVISO LEGAL Y CONDICIONES GENERALES DE USO</h1>
          <p className="text-blue-600 font-medium mb-12">https://fincap-advisory.vercel.app/</p>

          <div className="prose prose-blue max-w-none text-gray-600 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">I. INFORMACIÓN GENERAL</h2>
              <p>
                En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de
                la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los siguientes
                datos de información general de este sitio web:
              </p>
              <p className="mt-4">
                La titularidad de este sitio web, https://fincap-advisory.vercel.app/, (en adelante, Sitio Web) la ostenta:
                <strong> Marc Costa Solé</strong>, con NIF: 24558556F, y cuyos datos de contacto son:
              </p>
              <p className="mt-4">
                Dirección: Passeig de Manuel Girona 73<br />
                Teléfono de contacto: 609766383<br />
                Email de contacto: mkosta2505@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">II. TÉRMINOS Y CONDICIONES GENERALES DE USO</h2>
              <h3 className="text-xl font-bold text-gray-900 mb-4">El objeto de las condiciones: El Sitio Web</h3>
              <p>
                El objeto de las presentes Condiciones Generales de Uso (en adelante, Condiciones) es regular el acceso y
                la utilización del Sitio Web. A los efectos de las presentes Condiciones se entenderá como Sitio Web: la
                apariencia externa de los interfaces de pantalla, tanto de forma estática como de forma dinámica, es
                decir, el árbol de navegación; y todos los elementos integrados tanto en los interfaces de pantalla como en
                el árbol de navegación (en adelante, Contenidos) y todos aquellos servicios o recursos en línea que en su
                caso ofrezca a los Usuarios (en adelante, Servicios).
              </p>
              <p className="mt-4">
                Fincap Advisory se reserva la facultad de modificar, en cualquier momento, y sin aviso previo, la
                presentación y configuración del Sitio Web y de los Contenidos y Servicios que en él pudieran estar
                incorporados. El Usuario reconoce y acepta que en cualquier momento Fincap Advisory pueda interrumpir,
                desactivar y/o cancelar cualquiera de estos elementos que se integran en el Sitio Web o el acceso a los
                mismos.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">El Usuario</h3>
              <p>
                El acceso, la navegación y uso del Sitio Web, confiere la condición de Usuario, por lo que se aceptan,
                desde que se inicia la navegación por el Sitio Web, todas las Condiciones aquí establecidas, así como sus
                ulteriores modificaciones, sin perjuicio de la aplicación de la correspondiente normativa legal de obligado
                cumplimiento según el caso.
              </p>
              <p className="mt-4">
                El Usuario asume su responsabilidad para realizar un uso correcto del Sitio Web. Esta responsabilidad se extenderá a:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Un uso de la información, Contenidos y/o Servicios y datos ofrecidos por Fincap Advisory sin que sea contrario a lo dispuesto por las presentes Condiciones, la Ley, la moral o el orden público.</li>
                <li>La veracidad y licitud de las informaciones aportadas por el Usuario en los formularios extendidos por Fincap Advisory.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">III. ACCESO Y NAVEGACIÓN EN EL SITIO WEB: EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</h2>
              <p>
                Fincap Advisory no garantiza la continuidad, disponibilidad y utilidad del Sitio Web, ni de los Contenidos o
                Servicios. Fincap Advisory hará todo lo posible por el buen funcionamiento del Sitio Web, sin embargo, no
                se responsabiliza ni garantiza que el acceso a este Sitio Web no vaya a ser ininterrumpido o que esté libre
                de error.
              </p>
              <p className="mt-4">
                Tampoco se responsabiliza o garantiza que el contenido o software al que pueda accederse a través de
                este Sitio Web, esté libre de error o cause un daño al sistema informático (software y hardware) del
                Usuario.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">IV. POLÍTICA DE ENLACES</h2>
              <p>
                Se informa que el Sitio Web de Fincap Advisory pone o puede poner a disposición de los Usuarios medios de enlace (como, entre otros, links, banners, botones), directorios y motores de búsqueda que permiten a los Usuarios acceder a sitios web pertenecientes y/o gestionados por terceros.
              </p>
              <p className="mt-4">
                Fincap Advisory no ofrece ni comercializa por sí ni por medio de terceros los productos y/o servicios disponibles en dichos sitios enlazados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">V. PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
              <p>
                Fincap Advisory por sí o como parte cesionaria, es titular de todos los derechos de propiedad intelectual e
                industrial del Sitio Web, así como de los elementos contenidos en el mismo (a título enunciativo y no
                exhaustivo, imágenes, sonido, audio, vídeo, software o textos, marcas o logotipos, combinaciones de
                colores, estructura y diseño, etc.).
              </p>
              <p className="mt-4">
                Todos los derechos reservados. En virtud de lo dispuesto en la Ley de Propiedad Intelectual, quedan
                expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad
                de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines
                comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Fincap Advisory.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">VI. ACCIONES LEGALES, LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h2>
              <p>
                Fincap Advisory se reserva la facultad de presentar las acciones civiles o penales que considere necesarias
                por la utilización indebida del Sitio Web y Contenidos, o por el incumplimiento de las presentes
                Condiciones.
              </p>
              <p className="mt-4">
                La relación entre el Usuario y Fincap Advisory se regirá por la normativa vigente y de aplicación en el
                territorio español. De surgir cualquier controversia en relación con la interpretación y/o a la aplicación de
                estas Condiciones las partes someterán sus conflictos a la jurisdicción ordinaria sometiéndose a los jueces
                y tribunales que correspondan conforme a derecho.
              </p>
              <p className="mt-8 italic">
                Este documento de Aviso Legal y Condiciones Generales de uso fue actualizado el día 01/03/2026.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
