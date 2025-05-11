import "./styles/Common.css";
import 'react-tooltip/dist/react-tooltip.css'
import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";
import ViewCard from "./components/viewCard/ViewCard";
import EditCard from "./components/editCard/EditCard";
import Cards from "./components/cards/Cards";
import NotificationModal from "./components/notification/NotificationModal";
import ExistingNotificationModal from "./components/notification/ExistingNotificationModal";
import Footer from "./components/footer/Footer";
import InfoModal from "./components/infoModal/InfoModal";
import { useSelector } from "react-redux";

function App() {
  const showEditCard = useSelector((state) => state.editCard.showEditCard)
  const isViewCardOpen = useSelector(state => state.viewCard.showViewCard)

  return (
    <div className="App">
      <section>
        <Header />
        <Cards />
        <Modal />
        {isViewCardOpen && <ViewCard />}
        {showEditCard && <EditCard />}
        <NotificationModal />
        <InfoModal />
        <ExistingNotificationModal />
        <Footer />
      </section>
    </div>
  );
}

export default App;
