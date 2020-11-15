import './styles/styles.scss';
import Curso from './components/Curso'

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" src="https://images7.alphacoders.com/442/thumb-1920-442794.jpg" alt="Banner"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Curos de Edteam</p>
        <p>Tu futuro te esta esperando</p>
        <a href="/" class="button">Suscribirse</a>
      </div>
    </div>
  </div>
</div>
<Curso />
  </>
)

export default App