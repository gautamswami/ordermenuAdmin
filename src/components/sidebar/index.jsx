import styles from "./sidebar.module.css";
import { FaChartPie, FaQrcode } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import { IoBagHandle } from "react-icons/io5";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const data = useContext(UserContext);
  console.log(data);
  let { selectedTab, setSelectedTab } = useContext(UserContext);

  return (
    <div className={styles.sidebar}>
      <ul>
        <Link to="/reports">
          <li
            className={selectedTab === 0 ? styles.selected : ""}
            onClick={() => setSelectedTab(0)}
          >
            <FaChartPie />
            <span>Reports</span>
          </li>
        </Link>
        <Link to="/menu">
          <li
            onClick={() => setSelectedTab(1)}
            className={selectedTab === 1 ? styles.selected : ""}
          >
            <IoFastFoodSharp />
            <span>Menu</span>
          </li>
        </Link>
        <Link to="/orders">
          <li
            className={selectedTab === 2 ? styles.selected : ""}
            onClick={() => setSelectedTab(2)}
          >
            <IoBagHandle />
            <span>Orders</span>
          </li>
        </Link>
        <Link to="/qr-code">
          <li
            className={selectedTab === 3 ? styles.selected : ""}
            onClick={() => setSelectedTab(3)}
          >
            <FaQrcode />
            <span>QR Code</span>
          </li>
        </Link>
        <Link to="/payments">
          <li
            className={selectedTab === 4 ? styles.selected : ""}
            onClick={() => setSelectedTab(4)}
          >
            <FaMoneyBillTransfer />
            <span>Payments</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}
