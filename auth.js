const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    // 권한 부여 코드가 있는 경우 처리
    if (code) {
        // TODO: 권한 부여 코드를 사용하여 액세스 토큰 요청 등의 작업 수행
        // 여기에 실제로 해야 할 작업을 추가하세요
        document.body.innerHTML = '<h1>인증이 완료되었습니다!</h1>';
    } else {
        // 권한 부여 코드가 없는 경우 에러 처리 또는 다른 작업 수행
        document.body.innerHTML = '<h1>인증이 실패했습니다.</h1>';
    }
