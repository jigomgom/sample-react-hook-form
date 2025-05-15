import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Router from "router";

const Root = () => {
  const [position, setPosition] = useState({lat:0, lng:0})
  const getLocation = () => {
  // 브라우저가 geolocation을 지원하는지 확인
  if (!navigator.geolocation) {
    alert("이 브라우저는 위치 정보를 지원하지 않습니다.");
    return;
  }

  // 옵션 설정
  const options = {
    enableHighAccuracy: true,  // 높은 정확도 사용
    timeout: 10000,            // 10초 타임아웃
    maximumAge: 0              // 캐시된 위치를 사용하지 않음
  };

  // 위치 정보 요청
  navigator.geolocation.getCurrentPosition(
    // 성공 콜백
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
       setPosition({lat:latitude, lng:longitude})
    },
    // 에러 콜백
    (error) => {
      let errorMessage;
      switch(error.code) {
        case error.PERMISSION_DENIED:
          errorMessage = "위치 정보 접근이 거부되었습니다. (코드: " + error.code + ")";
          // 추가 해결책 안내
          errorMessage += "<br>설정 > Safari > 웹사이트 설정 > 위치에서 권한을 확인해보세요.";
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage = "위치 정보를 사용할 수 없습니다. (코드: " + error.code + ")";
          break;
        case error.TIMEOUT:
          errorMessage = "위치 정보 요청 시간이 초과되었습니다. (코드: " + error.code + ")";
          break;
      }
     alert( errorMessage);
      console.error('위치 정보 오류:', error);
    },
    options
  );
}

  return (
    <Router>
      <button>테스트</button>
      <Outlet />
    </Router>
  );
};

export default Root;
