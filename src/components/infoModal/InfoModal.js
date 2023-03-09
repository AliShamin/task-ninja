import "./InfoModal.css";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { closeInfoModal } from "../../core/redux/modalSlice";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector } from 'react-redux'
import logo from "../../static/task-logo.png";

function InfoModal() {
    const isModalOpen = useSelector((state) => state.modal.infoModal.isModalOpen)
    const dispatch = useDispatch();

    return (
        <> {
            isModalOpen &&
            <section className="align-center">
                <div className="modal-container sticky">
                    <div className="box d-flex-row space-btw">
                        <h3>About <img id="header_img" src={logo} />Task Ninja</h3>
                        <div onClick={() => dispatch(closeInfoModal())}><AiOutlineCloseCircle size={24} /></div>
                    </div>
                    <div className="box">
                        <p>Task Ninja is created to for all those who feels the need of a Todo app which allows them to manage their todo list along with maintaining the record of most important items used in their day to day use case. </p>
                        <h3>Basic Features</h3>
                        <ul>
                            <li>Create a ticket</li>
                            <li>Edit/Update ticket</li>
                            <li>Delete ticket</li>
                            <li>View a ticket</li>
                        </ul>
                        <h3>Cool Features</h3>
                        <ul>
                            <li>Reminder/Notification to a ticket</li>
                            <p>With this feature you can add a reminder/notification to your ticket and browser will notify you once the timeline exceeds.</p>
                            <li>Filters</li>
                            <ul>
                                <li><b>Important</b></li>
                                <p>Tickets assigned with star mark will be considered as important so we can apply the filter to highlight only important once.</p>
                                <li><b>Most/Least</b> recently created</li>
                                <p>We can also sort the tickets based on the creation date so that we can see the most and least recently created tickets easily.</p>
                            </ul>
                            <li>Dark Mode</li>
                            <p>With this feature we can switch between light and dark mode.</p>

                        </ul>
                        <h3>Where your data will be stored ?</h3>
                        <p>All of your data will be captured in the browser's LocalStorage. You can close the Task Ninja app and reopen it again and your data will remain persisted until and unless your localstorage is not deleted.</p>
                        <h4>Have a Great Day Ahead.. &#128516;</h4>
                    </div>
                </div>
            </section>
        }
        </>
    );
}

export default InfoModal;