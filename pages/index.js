import { useState } from 'react'
import Head from 'next/head'
import { Navbar } from '../components'
import {  MainTextnImage, MapnConnect, Trending, ProductCard, Reviews, Footer } from '../components'

export default function Home() {
  const [cart, setCart] = useState(0)
  const menz = [{ img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" }, { img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" }, { img: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" }, { img: "https://lh3.googleusercontent.com/p/AF1QipOn4IfCcul6NAiYMHJTsVck_Nf3kPFD98DkO4XF=w284-h284-n-k-rw-no-v1" }, { img: "https://cdn.shopify.com/s/files/1/0450/4331/8939/files/DSC_0036_394x.jpg?v=1634026105" },{ img: "https://www.next.us/nxtcms/resource/image/4263646/portrait_ratio2x3/320/480/fbb8ed9cbbfd4ff53ca19f90949b623d/nH/19.jpg" }, { img: "https://www.next.us/nxtcms/resource/image/4436010/portrait_ratio2x3/320/480/57ae26d50c743a30165f244214f83477/Jb/sic-9---sportswear.jpg" }, { img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" }, { img: "https://www.next.us/nxtcms/resource/image/4436022/portrait_ratio2x3/320/480/de368fdf0276eda9ca30f95fa90f63aa/oE/sic-15---pyjamas.jpg" }]
  const womenz = [{ img: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" }, { img: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" }, { img: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"},{ img: "https://imgv2.staticdj.com/3d5bfd3d794b8e3ebc7429535d9ac396_540x.jpeg" },{ img: "https://imgv2.staticdj.com/5a5826a4e7f81f7e22c75ded66f1d7be_540x.jpeg" },{ img: "https://imgv2.staticdj.com/14c258d1bc6afef3bf39a2596d55b8c0_540x.jpeg" }]
  const kidz = [{ img: "https://cdn11.bigcommerce.com/s-4wjqlc/images/stencil/500x659/products/10878/24614/8S22P517_6441__08534.1637696216.jpg?c=2" }, { img: "https://cdn11.bigcommerce.com/s-4wjqlc/images/stencil/500x659/products/10875/24598/8S22P511_6443__22355.1637697236.jpg?c=2" }, { img: "https://cdn11.bigcommerce.com/s-4wjqlc/images/stencil/500x659/products/10872/24581/8S22P203_7585__77933.1637695312.jpg?c=2"},{ img: "https://cdn11.bigcommerce.com/s-4wjqlc/images/stencil/500x659/products/10867/24557/8S22P205_0099__25288.1637694011.jpg?c=2" },{ img: "https://cdn11.bigcommerce.com/s-4wjqlc/images/stencil/500x659/products/10870/24573/8S22P406_0099__72874.1637694689.jpg?c=2" }]
  const trends = [ { img: "https://media.kohlsimg.com/is/image/kohls/wo-dp-20211219-gifts-for-women-1?scl=1&fmt=pjpeg" }, { img: "https://uniworthdress.com/uploads/product/webp/35bcb8783c85a9f059bdc5734a450fb8.webp"},{ img: "https://cdn.shopify.com/s/files/1/0590/0058/6412/products/llamwubb__17200.1632926147.1280.1280_3b459ecc-a462-4e75-8098-62dc369d0520_360x.jpg?v=1634101556" }]
  // { img: "https://imgv2.staticdj.com/e9308c027704520cb407eeb5575aa82d_540x.jpeg" },
  return (
    <div>
      <Head>
        <title>ShopnStich</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
      </Head>
      
      <div class="bg-green-960 sm:min-h-screen">
        <Navbar cart={cart}/>
        <MainTextnImage />
      </div>

      {/* <MainBanner /> */}
      <Trending trends={trends}/>
      <div className="product-banner">
        <ProductCard setCart={setCart} cart={cart} category="Men" cloths={menz}/>
        <ProductCard setCart={setCart} cart={cart} category="Women" cloths={womenz}/>
        <ProductCard setCart={setCart} cart={cart} category="Kids" cloths={kidz}/>
      </div>

      <Reviews />
      <MapnConnect/>
      <Footer />
    </div>
  )
}
