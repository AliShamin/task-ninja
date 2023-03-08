import "./EmptyBucketStatus.css";
import logo from "../../static/todo-icon.png";
import { useSelector } from 'react-redux'

function EmptyBucketStatus() {
    const item = useSelector((state) => state.card.item)
    return (
        <>
            {item.length == 0 &&
                <section className="empty-bucket-container">
                    <div className="align-center">
                        <img src={logo} width='100' height='120' />
                        No items added
                    </div>
                </section>
            }
        </>
    )
}

export default EmptyBucketStatus;
