import { getAllProducts } from '../services'
import { Navbar } from '../components'
import { MainTextnImage, MapnConnect, Trending, ProductCard, Reviews, Footer } from '../components'
import 'tw-elements';

export default function Home({ products }) {
  return (
    <>

      <div class="bg-green-960 sm:min-h-screen">
        <Navbar products={products} />
        <MainTextnImage />
      </div>

      {/* <MainBanner /> */}
      <Trending products={products} />
      <div className="product-banner">
        <ProductCard category="Men" products={products} />
        <ProductCard category="Women" products={products} />
        <ProductCard category="Kids" products={products} />
      </div>

      <Reviews />
      <MapnConnect />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const data = await getAllProducts();
  console.log("dtat --> ", data)
  return {
    props: { products: data }
  }
}