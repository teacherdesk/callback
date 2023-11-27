document.addEventListener("DOMContentLoaded", function () {
    // URL에서 매개변수 추출
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    const error = urlParams.get('error');
    const errorDescription = urlParams.get('error_description');

    // 상태 검증
    const isValidState = validateState(state);

    if (isValidState) {
        if (code) {
            // TODO: 권한 부여 코드를 사용하여 액세스 토큰 요청 등의 작업 수행
            // 여기에 실제로 해야 할 작업을 추가하세요
            document.body.innerHTML = '<h1>인증이 완료되었습니다!</h1>';
        } else if (error) {
            // 오류 처리
            console.error(`인증 오류: ${error}. ${errorDescription}`);
            document.body.innerHTML = `<h1>인증 오류: ${error}</h1><p>${errorDescription}</p>`;
        }
    } else {
        // 상태가 유효하지 않은 경우
        console.error('유효하지 않은 상태 매개변수. 가능한 CSRF 공격.');
        document.body.innerHTML = '<h1>인증 오류: 유효하지 않은 상태</h1>';
    }
});

function validateState(state) {
    // TODO: 실제 상태 검증 로직을 구현하세요
    // 예: 세션 또는 서버에서 상태를 확인
    const validState = true; // 간단한 예시로 항상 true를 반환하도록 설정
    return validState;
}
