import api from './apiClient'; //apiClient에서 만든 api 인스턴스 가져오는거

export const getPosts = async () => { //게시글을 가져오는 함수 async을 쓰는 이유는 api 요청은 비동기적으로 처리되기 때문에 await을 사용하기 위해서
    const res = await api.get('/users'); //api 인스터스를 사용해서 /users 엔드포인트로 get 요청을 보냄. 이때 res는 서버로 부터 받은 응답을 await로 기다리고 있음
    return res.data; // 응답에서 data 속성을 반환. 지금 data 서버에서 받은 데이터를 담고있음
}
// api 인스턴스를 사용해서 /users로 GET 요청을 보내고,
// 서버로부터 응답이 올 때까지 await로 기다린 후,
// 응답 객체에서 실제 데이터인 res.data를 반환한다.