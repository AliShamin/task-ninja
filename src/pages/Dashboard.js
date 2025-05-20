import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Cards from '../components/cards/Cards';
import ViewCard from '../components/viewCard/ViewCard';
import EditCard from '../components/editCard/EditCard';
import NotificationModal from '../components/notification/NotificationModal';
import ExistingNotificationModal from '../components/notification/ExistingNotificationModal';
import { useSelector } from "react-redux";
import Modal from '../components/modal/Modal';

const Dashboard = () => {
    const showEditCard = useSelector((state) => state.editCard.showEditCard)
    const isViewCardOpen = useSelector(state => state.viewCard.showViewCard)

    return (
        <section className="w-100">
            <Header />
            <Cards />
            <Modal />
            {isViewCardOpen && <ViewCard />}
            {showEditCard && <EditCard />}
            <NotificationModal />
            <ExistingNotificationModal />
            <Footer />
        </section>
    )
}

export default Dashboard;