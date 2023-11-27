document.addEventListener("DOMContentLoaded", function () {
    // 현재 URL에서 해시 이후의 파라미터 추출
    const hashParams = new URLSearchParams(window.location.hash.substring(1));

    const accessToken = hashParams.get('access_token');
    const expiresIn = hashParams.get('expires_in');
    const providerRefreshToken = hashParams.get('provider_refresh_token');
    const providerToken = hashParams.get('provider_token');
    const refreshToken = hashParams.get('refresh_token');
    const tokenType = hashParams.get('token_type');

    if (accessToken) {
        // TODO: 액세스 토큰을 사용하여 필요한 작업 수행
        console.log('Access Token:', accessToken);
        console.log('Expires In:', expiresIn);
        console.log('Provider Refresh Token:', providerRefreshToken);
        console.log('Provider Token:', providerToken);
        console.log('Refresh Token:', refreshToken);
        console.log('Token Type:', tokenType);
    } else {
        // 액세스 토큰이 없는 경우 오류 처리 또는 다른 작업 수행
        console.error('Access token not found in the URL hash.');
    }
});
