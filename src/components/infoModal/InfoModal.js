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
        <section className="align-center">
            <div className="about-container">
                {/* <div className="box d-flex-row space-btw">
                    <h2>About <img id="header_img" src={logo} />Task Ninja</h2>
                    <div onClick={() => dispatch(closeInfoModal())}><AiOutlineCloseCircle size={24} /></div>
                </div> */}
                    <h1>Your Online Todo App</h1>
                    <p>Task Ninja is your smart companion for staying organized — a sleek TODO app that not only helps you manage daily tasks but also keeps a handy record of the essentials you use most often. Stay focused, stay in control.</p>
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
                        {/* <li>Dark Mode</li>
                        <p>With this feature we can switch between light and dark mode.</p> */}

                    </ul>
                    <h3>Where your data will be stored ?</h3>
                    <p>Your data stays with you — always. Task Ninja securely stores all your tasks and important info right in your browser using LocalStorage. Even if you close or refresh the app, everything remains intact — no sign-ups, no servers, no data loss (unless you clear your browser).</p>
                    <h4>Have a Great Day Ahead.. &#128516;</h4>
            </div>
        </section>
    );
}

export default InfoModal;