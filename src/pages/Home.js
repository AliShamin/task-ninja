import Cards from "../components/cards/Cards"
import EditCard from "../components/editCard/EditCard"
import EmptyBucketStatus from "../components/emptyBucketStatus/EmptyBucketStatus"
import FeatureGrid from "../components/featureGrid/FeatureGrid"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import InfoModal from "../components/infoModal/InfoModal"
import Modal from "../components/modal/Modal"
import ExistingNotificationModal from "../components/notification/ExistingNotificationModal"
import NotificationModal from "../components/notification/NotificationModal"
import OpenDashboard from "../components/openDashboard/OpenDashboard"
import ViewCard from "../components/viewCard/ViewCard"
import { useSelector } from "react-redux";

const Home = () => {
    return (
        <div className="App">
            <section>
                <Header />
                {/* <Cards /> */}
                <OpenDashboard/>
                <InfoModal />
                <FeatureGrid/>
                <Footer />
            </section>
        </div>
    )
}

export default Home;