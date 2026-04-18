import axios from 'axios'; //axios 가져오기

const api =axios.create({ //서버와 통신하기 위해서 axios 인스턴스를 생성
    baseURL: import.meta.env.VITE_API_BASE_URL, //env에서 서버 주소 가져오기
});

export default api;//api 내보내서 다른 파일내에서도 사용할수있도록 함

// axios 인스턴스를 따로 만드는 이유는
// 서버 주소, 헤더, 토큰 등 공통 설정을 한 곳에서 관리하고
// 다른 파일에서는 간단하게 API 요청만 하기 위해서이다.