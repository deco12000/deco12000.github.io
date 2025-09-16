
document.addEventListener('DOMContentLoaded', SetFooterBottom);
window.addEventListener('resize', SetFooterBottom);
function SetFooterBottom() 
{
    // 화면의 전체 높이를 가져옵니다.
    const viewportHeight = window.innerHeight;
    // 현재 문서의 전체 높이를 가져옵니다.
    const documentHeight = document.documentElement.scrollHeight;
    // 푸터를 찾습니다.
    const footer = document.querySelector('footer');
    // 뷰포트 높이가 문서의 전체 높이보다 크거나 같으면 푸터를 페이지 하단에 고정합니다.
    if (documentHeight <= viewportHeight) {
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
        footer.style.left = '0';
        footer.style.width = '100%';
        footer.style.marginTop = '0'; // HTML에서 `margin-top: 30px`이 적용될 수 있으므로 제거
    } else {
        // 그렇지 않으면 푸터의 위치를 원래대로 되돌립니다.
        footer.style.position = 'static';
        footer.style.marginTop = '30px'; // HTML에 정의된 원래 마진으로 복구
    }
}
