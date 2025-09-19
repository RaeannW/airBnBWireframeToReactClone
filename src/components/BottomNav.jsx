import explore from "../assets/explore.png";
import wishlists from "../assets/wishlists.png";
import trips from "../assets/trips.png";
import messages from "../assets/messages.png";
import profile from "../assets/profile.png";

export default function BottomNav() {
  return (
    <div className="bottomNav">
      <div>
        <img src={explore} alt="explore" />
        <h4 className="bottomNavIcon activeIcon">Explore</h4>
      </div>
      <div>
        <img src={wishlists} alt="wishlists" />
        <h4 className="bottomNavIcon">Wishlist</h4>
      </div>
      <div>
        <img src={trips} alt="trips" />
        <h4 className="bottomNavIcon">Trips</h4>
      </div>
      <div>
        <img src={messages} alt="messages" />
        <h4 className="bottomNavIcon">Messages</h4>
      </div>
      <div>
        <img src={profile} alt="profile" />
        <h4 className="bottomNavIcon">Profile</h4>
      </div>
    </div>
  );
}
