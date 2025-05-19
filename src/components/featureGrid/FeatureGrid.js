import React from "react";
import { FaDownload, FaUpload, FaCheckSquare, FaSearch, FaPuzzlePiece, FaFont } from "react-icons/fa";
import { VscBell } from "react-icons/vsc";

const features = [
  {
    icon: <FaCheckSquare size='70' />,
    title: "Create Tasks",
    desc: "Turn your notes into todos and filter them easily.",
  },
  {
    icon: <FaDownload size='70' />,
    title: "Save Your TODO List",
    desc: "All your notes can be saved safely in yoor local device in .csv format",
  },
  {
    icon: <FaUpload size='70' />,
    title: "Add your TODO List",
    desc: "You can add your pre-saved todo list in .csv format into your app.",
  },
  {
    icon: <VscBell size='70' />,
    title: "Add Notifications",
    desc: "Create notifications for your important todo items.",
  }
];

const FeatureGrid = () => {
  return (
    <div className="align-center p2">
      <div className="w60 container mtb2 d-flex-wrap">
        {features.map((feature, index) => (
          <div
            key={index}
            className="align-center d-flex-column w30"
          >
            <div>{feature.icon}</div>
            <div>
              <p className="feature-detail"><strong>{feature.title}</strong> {feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
