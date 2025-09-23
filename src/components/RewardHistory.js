"use client";
import { useState } from "react";

export default function RewardHistory() {
  // Example data
  const [rows, setRows] = useState([
    {
      date: "2025-09-22",
      action: "Purchase at store Fanfuel",
      points: "+50.00",
      type: "EARNED_BY_PURCHASE",
      status: "Pending",
      orderId: "323232321",
      screenshot: null,
    },
    {
      date: "2025-09-22",
      action: "Purchase at store 01baby",
      points: "+50.00",
      type: "EARNED_BY_PURCHASE",
      status: "Pending",
      orderId: "",
      screenshot: null,
    },
  ]);

  const handleFileChange = (index, file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const newRows = [...rows];
      newRows[index].screenshot = e.target.result;
      setRows(newRows);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = (index) => {
    const newRows = [...rows];
    newRows[index].screenshot = null;
    setRows(newRows);
  };

  const handleOrderChange = (index, value) => {
    const newRows = [...rows];
    newRows[index].orderId = value;
    setRows(newRows);
  };

  return (
    <div className="historyTable">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Action</th>
            <th>Points</th>
            <th>Type</th>
            <th>Status</th>
            <th>
              Checkout Screenshot
              <br />
              <small>(Upload only if coupon code does not work)</small>
            </th>
            <th>Order ID</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.action}</td>
              <td>{row.points}</td>
              <td>{row.type}</td>
              <td>
                <span className="status pending">{row.status}</span>
              </td>
              <td>
                <div className="upload-wrapper">
                  {!row.screenshot ? (
                    <>
                      <input
                        type="file"
                        accept="image/*"
                        id={`file-${index}`}
                        hidden
                        onChange={(e) =>
                          handleFileChange(index, e.target.files[0])
                        }
                      />
                      <button
                        className="upload-btn"
                        onClick={() =>
                          document.getElementById(`file-${index}`).click()
                        }
                      >
                        Upload screenshot
                      </button>
                    </>
                  ) : (
                    <div className="preview">
                      <img
                        src={row.screenshot}
                        alt="Screenshot Preview"
                      />
                      <button
                        className="remove-img"
                        onClick={() => handleRemove(index)}
                      >
                        &times;
                      </button>
                    </div>
                  )}
                </div>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Enter order ID"
                  value={row.orderId}
                  onChange={(e) => handleOrderChange(index, e.target.value)}
                />
                <button className="save-btn">Save</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
