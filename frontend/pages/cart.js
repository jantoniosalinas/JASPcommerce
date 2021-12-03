import Cart from "../components/Pages/Cart"
import Footer from "../components/Layout/Footer"
import Header from "../components/Layout/Header"

export default function cart () {
    const classBook = "SPbook"
    return (
        <>
        <Header />
            <Cart classBook={classBook} />
        <Footer />
        </>
    )
}
