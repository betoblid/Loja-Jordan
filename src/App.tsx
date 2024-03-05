import { CardProduct } from "./Componets/CardProduct/CardProduct"
import { Footer } from "./Componets/Footer/Footer"
import { ListProducts } from "./Componets/ListProducts/ListProducts"
import { Header } from "./Componets/header/header"


function App() {

  return (
    <>
      <Header />

      <main>
        <section>
          <div className="xl:max-w-[593px] lg:max-w-[520px] w-full mx-auto my-10">
            <h2 className="xl:text-3xl font-semibold md:text-2xl text-xl text-center mb-7">
              Os melhores em só lugar
            </h2>
            <p className="xl:text-2xl font-normal md:text-base text-sm text-center">
              A marca Jordan na JordanShoes é a escolha certa para os amantes de sneakers que buscam estilo e conforto.
            </p>
          </div>

        </section>
        <section>
          
            <ListProducts />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
