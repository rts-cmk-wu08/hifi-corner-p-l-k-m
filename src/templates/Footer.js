import FooterContact from "../components/FooterContact"
import FooterLicensing from "../components/FooterLicensing"
import FooterPaymentCards from "../components/FooterPaymentCards"
import FooterReturns from "../components/FooterReturns"

const Footer = () => {
    return (
        <footer>
            <FooterContact></FooterContact>
            <FooterLicensing></FooterLicensing>
            <FooterPaymentCards></FooterPaymentCards>
            <FooterReturns></FooterReturns>
        </footer>
     );
}

export default Footer;