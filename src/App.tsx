import "./styles/App.scss";
import SocialCard from "./components/socialCard";
import OverviewCard from "./components/overviewCard";
import ThemeToggle from "./components/themeToggle";
import downicon from "/images/icon-down.svg";
import upicon from "/images/icon-up.svg";
import facebook from "/images/icon-facebook.svg";
import twitter from "/images/icon-twitter.svg";
import instagram from "/images/icon-instagram.svg";
import youtube from "/images/icon-youtube.svg";

function App() {
  const socialCardsData = [
    { socialIcon: facebook, followers: "1987", followersToday: "12", arrowIcon: upicon, username: "@nathanf" },
    { socialIcon: twitter, followers: "1044", followersToday: "99", arrowIcon: upicon, username: "@nathanf" },
    { socialIcon: instagram, followers: "11k", followersToday: "1099", arrowIcon: upicon, username: "@realnathanf"  },
    { socialIcon: youtube, followers: "8239", followersToday: "144", arrowIcon: downicon, username: "Nathan F." },
  ];

  const overviewCardsData = [
    { socialIcon: facebook, viewsOrLikes: "Page Views", followersToday: "87", arrowIcon: upicon, percentage: "3%" },
    { socialIcon: facebook, viewsOrLikes: "Likes", followersToday: "52", arrowIcon: downicon, percentage: "2%" },
    { socialIcon: instagram, viewsOrLikes: "Likes", followersToday: "5462", arrowIcon: upicon, percentage: "2257%"  },
    { socialIcon: instagram, viewsOrLikes: "Profile Views", followersToday: "52k", arrowIcon: upicon, percentage: "1375%" },
    { socialIcon: twitter, viewsOrLikes: "Retweets", followersToday: "117", arrowIcon: upicon, percentage: "303%" },
    { socialIcon: twitter, viewsOrLikes: "Likes", followersToday: "507", arrowIcon: upicon, percentage: "553%" },
    { socialIcon: youtube, viewsOrLikes: "Likes", followersToday: "107", arrowIcon: downicon, percentage: "19%" },
    { socialIcon: youtube, viewsOrLikes: "Total Views", followersToday: "1407", arrowIcon: downicon, percentage: "12%" },
  ];

  return (
    <>
      <main>
        <div className="top-background"></div>
        <header className="section-dash-title">
          <div className="main-title">
            <h1>Social Media Dashboard</h1>
            <p> Total Followers: 23,004</p>
          </div>
          <div className="toggle-wrapper">
            <div className="toggle-text">
              <p>Dark or Light Mode</p>
            </div>
            <ThemeToggle />
          </div>
        </header>
        <section className="App">
          <div className="socials-grid">
          {socialCardsData.map((card, index) => {
              return (
                <SocialCard
                  key={index}
                  socialIcon={card.socialIcon}
                  followers={card.followers}
                  followersToday={card.followersToday}
                  arrowIcon={card.arrowIcon}
                  cardIndex={index}
                  username={card.username}
                />
              );
            })}
          </div>

          <section className="overview-container">
            <h2 className="secondary-titles">Overview - Today</h2>
            <div className="socials-grid">
            {overviewCardsData.map((card, index) => {
              return (
                <OverviewCard
                  key={index}
                  socialIcon={card.socialIcon}
                  viewsOrLikes={card.viewsOrLikes}
                  followersToday={card.followersToday}
                  arrowIcon={card.arrowIcon}
                  cardIndex={index}
                  percentage={card.percentage}
                />
              );
            })}
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
