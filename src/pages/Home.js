import Cards from "../components/cards/Cards"
import EditCard from "../components/editCard/EditCard"
import EmptyBucketStatus from "../components/emptyBucketStatus/EmptyBucketStatus"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import InfoModal from "../components/infoModal/InfoModal"
import Modal from "../components/modal/Modal"
import ExistingNotificationModal from "../components/notification/ExistingNotificationModal"
import NotificationModal from "../components/notification/NotificationModal"
import ViewCard from "../components/viewCard/ViewCard"
import { useSelector } from "react-redux";

const Home = () => {
    const showEditCard = useSelector((state) => state.editCard.showEditCard)
    const isViewCardOpen = useSelector(state => state.viewCard.showViewCard)
    return (
        <div className="App">
            <section>
                <Header />
                <Cards />
                <InfoModal />
                <Modal />
                {isViewCardOpen && <ViewCard />}
                {showEditCard && <EditCard />}
                <NotificationModal />
                <ExistingNotificationModal />
                <Footer />
            </section>
        </div>
    )
}

export default Home;