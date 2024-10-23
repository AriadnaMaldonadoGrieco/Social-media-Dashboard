import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useRef } from "react";
import PercentageNumbers from "./percentageNumbers";
import downicon from "/images/icon-down.svg";
import upicon from "/images/icon-up.svg";
import facebook from "/images/icon-facebook.svg";
import twitter from "/images/icon-twitter.svg";
import instagram from "/images/icon-instagram.svg";
import youtube from "/images/icon-youtube.svg";

interface OverviewCardProps {
  socialIcon: string;
  viewsOrLikes: string;
  followersToday: string;
  arrowIcon: string;
  cardIndex: number;
  percentage: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  socialIcon,
  viewsOrLikes,
  followersToday,
  arrowIcon,
  cardIndex,
  percentage,
}) => {
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
  const textColorClass = [0, 2, 3, 4, 5].includes(cardIndex)
    ? "text-green"
    : "text-red";

  return (
    <>
      <section
        className="overview socials-card"
        ref={openButtonRef}
        onClick={openModal}
      >
        <div className="overview-row">
          <div className="page-views">{viewsOrLikes}</div>
          <div>
            <img src={socialIcon}></img>
          </div>
        </div>
        <div className="overview-row">
          <div className="overview-number">{followersToday}</div>
          <div className={`overview-green ${textColorClass}`}>
            <div>
              <img src={arrowIcon}></img>
            </div>
            {percentage}
          </div>
        </div>
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
                <h1 className="overview-light">1987</h1>
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

export default OverviewCard;
