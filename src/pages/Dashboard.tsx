import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="add-icon">
        <div className="plus">+</div>
        <h4>Add New QR Code</h4>
      </div>

      <div className="recent">
        <div className="items"></div>
      </div>
    </div>
  );
};

export default Dashboard;
