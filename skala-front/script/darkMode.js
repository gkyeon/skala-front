// 저장된 테마 확인 후 적용
const toggleBtn = document.querySelector('#dark-mode-toggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleBtn.textContent = '☀️ 라이트 모드';
}

// 클릭 시 테마 전환 + 저장
toggleBtn.addEventListener('click', function() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = '🌙 다크 모드';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = '☀️ 라이트 모드';
    }
});