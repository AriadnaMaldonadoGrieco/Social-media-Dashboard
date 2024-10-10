"use client";
import { useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


interface SocialCardProps {
  socialIcon: string; 
  followers: string;   
  followersToday: string;
  arrowIcon: string;
  cardIndex: number;
  username: string;
}

const SocialCard: React.FC<SocialCardProps> = ({socialIcon, followers, followersToday, arrowIcon, cardIndex, username }) => {
  const data = [
    {
      name: "4",
      followers: 3,
    },
    {
      name: "5",
      followers: 2,
    },
    {
      name: "6",
      followers: 6,
    },
    {
      name: "7",
      followers: 8,
    },
    {
      name: "8",
      followers: 9,
    },
    {
      name: "9",
      followers: 10,
    },
    {
      name: "10",
      followers: 9,
    },
    {
      name: "11",
      followers: 10,
    },
    {
      name: "12",
      followers: 12,
    },
    {
      name: "13",
      followers: 12,
    },
  ];

  const modalRef = useRef<HTMLDialogElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);

  

  const openModal = () => {
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  //Changing the text color depending on the index
  const textColorClass = cardIndex < 3 ? "text-green" : "text-red";

  const borderClass = (() => {
    switch (cardIndex) {
      case 0:
        return "border-facebook";
      case 1:
        return "border-twitter";
      case 2:
        return "border-instagram";
      case 3:
        return "border-youtube";
      default:
        return "";
    }
  })();

  return (
    <>
      <section className={`socials-card ${borderClass}`} ref={openButtonRef} onClick={openModal}>
        <article className="icons-row">
          <img src={socialIcon}></img>
          <div className="">{username}</div>
        </article>
        <article className="followers-container">
          <p className="subs-number">{followers}</p>
          <p className="followers">FOLLOWERS</p>
        </article>
        <article className={textColorClass}>
          <div className="icons-row">
            <img src={arrowIcon}></img>
          </div>
          <div className="">{followersToday} Today</div>
        </article>
      </section>

      <dialog ref={modalRef} className="modal" id="modal">
        <div className="top-background"></div>
        <div className="close-btn">
          <h2>Facebook Followers</h2>
          <button onClick={closeModal}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div>
          <section className="icons-row">
            <img src="/images/icon-facebook.svg" alt="Facebook icon" />
            <div className="">@nathanf</div>
          </section>
          <section className="grid-modal-container">
            <article className="grid-modal">
              <div className="total-followers">
                <h1 className=".overview-light">1987</h1>
                <p>Total followers</p>
              </div>
              <div className="text-followers">
                <div>
                  <img src="/images/icon-up.svg" alt="Up arrow icon" />
                </div>
                <h1 className="dialog-number .overview-light">81</h1>
                <div className=" .overview-light">
                  New followers in the past 10 days
                </div>
              </div>
              <div className="text-followers">
                <div>
                  <img src="/images/icon-up.svg" alt="Up arrow icon" />
                </div>
                <h1 className="dialog-number .overview-light">12</h1>
                <div className=" .overview-light">New followers TODAY</div>
              </div>
            </article>
          </section>
        </div>

        <section className="chart-container">
          <div className="chart-months">
            <p>May 4 - May 13</p>
          </div>
          <ResponsiveContainer>
            <LineChart
              width={850}
              height={200}
              data={data}
              margin={{ top: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
              <YAxis ticks={[0, 2, 4, 6, 8, 10, 12]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="followers"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </section>
      </dialog>
    </>
  );
};
export default SocialCard;
