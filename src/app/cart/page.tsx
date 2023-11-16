import Container from "@/components/Container";
import CartClient from "./CartClient";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const Cart = () => {
    return(
        <div className="pt-8">
            <Container>
                <CartClient />
            </Container>
        </div>
    )
}

export default Cart;