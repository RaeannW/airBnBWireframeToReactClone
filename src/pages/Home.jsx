import { useEffect, useState } from "react";
import Listings from "../components/Listings";
import { getListings } from "../data/listing";
import Nav from "../components/Nav";
import BottomNav from "../components/BottomNav";
import ChatButton from "../components/ChatButton";
import ChatComponent from "../components/ChatComponent";

export default function Home() {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    getListings().then(setListings);
  }, []);

  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => setIsChatOpen(true);
  const closeChat = () => setIsChatOpen(false);

  return (
    <>
      <Nav />
      <Listings listings={listings} city="Branson" />
      <Listings listings={listings} city="Kansas City" />
      {!isChatOpen && <ChatButton onClick={openChat} />}

      {isChatOpen && (
        <div className="chatModalContainer">
          <span className="topOfChatModal">AI TRAVEL AGENT</span>
          <div className="chatModalOverlay" onClick={closeChat}>
            <div className="chatModal" onClick={(e) => e.stopPropagation()}>
              <button className="closeChatButton" onClick={closeChat}>
                ✖
              </button>
              <span>Ask a question</span>
              <ChatComponent />
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </>
  );
}
