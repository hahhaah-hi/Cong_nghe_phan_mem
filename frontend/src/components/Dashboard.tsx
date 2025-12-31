import React from 'react';
import Sidebar from '././Sidebar';

const Dashboard: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '20px' }}>
        <h2>Bảng điều khiển Doanh nghiệp</h2>
        {/* Nội dung chính sẽ được render ở đây */}
      </div>
    </div>
  );
};

export default Dashboard;