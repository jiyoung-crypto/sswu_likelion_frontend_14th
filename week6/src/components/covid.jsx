import React, { useEffect, useState } from "react";

function Covid() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    const serviceKey = "aa902a1cceb0daa539c43101cd9f82d1b8dead09ad9eeef29f2864a6e42bafc2";
    
    const url = `http://data.go.kr{serviceKey}&pageNo=1&numOfRows=500&apiType=json&create_dt=2022-01-08`;
    fetch(url)
      .then((response) => response.json()) 
      .then((json) => {
        const items = json.response?.body?.items || [];
        setData(items);
        setLoading(false);
      })
      .catch((error) => {
        console.error("데이터 로드 실패:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>데이터를 불러오는 중</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>코로나19 지역별 확진 현황</h1>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th>날짜</th>
            <th>중구</th>
            <th>동구</th>
            <th>서구</th>
            <th>남구</th>
            <th>북구</th>
            <th>수성구</th>
            <th>달서구</th>
            <th>달성군</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.create_dt}</td>
                <td>{item.junggu_cnt || 0}</td>
                <td>{item.donggu_cnt || 0}</td>
                <td>{item.seogu_cnt || 0}</td>
                <td>{item.namgu_cnt || 0}</td>
                <td>{item.bukgu_cnt || 0}</td>
                <td>{item.suseong_cnt || 0}</td>
                <td>{item.dalseogu_cnt || 0}</td>
                <td>{item.dalseong_cnt || 0}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">데이터가 없습니다. (인증키나 날짜를 확인하세요)</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Covid;
