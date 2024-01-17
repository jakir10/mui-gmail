import pen from "../assets/pen.png";
import draft from "../assets/draft.png";
import inbox from "../assets/inbox.png";
import star from "../assets/star.png";
import snooze from "../assets/snooze.png";
import send from "../assets/send.png";

const Sidebar = () => {
  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        width: "19.6vw",
        paddingTop: "1vw",
      }}
    >
      <div
        style={{
          width: "12vw",
          height: "4vw",
          display: "flex",
          alignItems: "center",
          borderRadius: "20px",
          backgroundColor: "#BEE0FF",
          marginLeft: "1vw",
        }}
      >
        <img src={pen} style={{ width: "1.2vw", marginLeft: "2vw" }} />
        <h4 style={{ marginLeft: "2vw", fontSize: "1vw" }}>Compose</h4>
      </div>
      <div
        style={{
          width: "12vw",
          display: "flex",
          alignItems: "center",
          marginLeft: "0.8vw",
          marginTop: "1vw",
          fontSize: "1vw",
        }}
      >
        <img src={inbox} style={{ width: "1.2vw", marginLeft: "2vw" }} />
        <span style={{ marginLeft: "2vw" }}>Inbox</span>
      </div>
      <div
        style={{
          width: "12vw",
          display: "flex",
          alignItems: "center",
          marginLeft: "0.8vw",
          marginTop: "1vw",
          fontSize: "1vw",
        }}
      >
        <img src={star} style={{ width: "1.2vw", marginLeft: "2vw" }} />
        <span style={{ marginLeft: "2vw" }}>Starred</span>
      </div>
      <div
        style={{
          width: "12vw",
          display: "flex",
          alignItems: "center",
          marginLeft: "0.8vw",
          marginTop: "1vw",
          fontSize: "1vw",
        }}
      >
        <img src={snooze} style={{ width: "1.2vw", marginLeft: "2vw" }} />
        <span style={{ marginLeft: "2vw" }}>Snoozed</span>
      </div>
      <div
        style={{
          width: "12vw",
          display: "flex",
          alignItems: "center",
          marginLeft: "0.8vw",
          marginTop: "1vw",
          fontSize: "1vw",
        }}
      >
        <img src={send} style={{ width: "1.2vw", marginLeft: "2vw" }} />
        <span style={{ marginLeft: "2vw" }}>Sent</span>
      </div>
      <div
        style={{
          width: "12vw",
          display: "flex",
          alignItems: "center",
          marginLeft: "0.8vw",
          marginTop: "1vw",
          fontSize: "1vw",
        }}
      >
        <img src={draft} style={{ width: "1.2vw", marginLeft: "2vw" }} />
        <span style={{ marginLeft: "2vw" }}>Drafts</span>
      </div>
    </div>
  );
};

export default Sidebar;
