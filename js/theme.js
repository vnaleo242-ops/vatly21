// === DARK/LIGHT MODE TOGGLE ===

/**
 * Thiết lập chủ đề giao diện (light/dark)
 * @param {string} theme - 'light' hoặc 'dark'
 */
function setTheme(theme) {
    const html = document.documentElement;
    const icon = document.getElementById('theme-icon');
    const status = document.getElementById('theme-status');

    if (theme === 'dark') {
        html.classList.add('dark');
        if (icon) icon.setAttribute('data-lucide', 'sun');
        if (status) status.textContent = 'Dark';
        localStorage.setItem('theme', 'dark');
    } else {
        html.classList.remove('dark');
        if (icon) icon.setAttribute('data-lucide', 'moon');
        if (status) status.textContent = 'Light';
        localStorage.setItem('theme', 'light');
    }
    // Dispatch custom event for complex components (Canvas/P5.js) to react
    const event = new CustomEvent('theme-changed', { detail: { theme: theme } });
    window.dispatchEvent(event);

    // Update icons (Sun/Moon)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Synchronize theme across tabs
window.addEventListener('storage', (event) => {
    if (event.key === 'theme') {
        const newTheme = event.newValue || 'light';
        // Only update if the current class doesn't match the new theme
        const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        if (newTheme !== currentTheme) {
            setTheme(newTheme);
        }
    }
});

/**
 * Chuyển đổi giữa hai chế độ light và dark
 */
function toggleDarkMode() {
    const currentTheme = localStorage.getItem('theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

/**
 * Áp dụng chủ đề ban đầu dựa trên Local Storage, ưu tiên Light Mode
 */
function applyInitialTheme() {
    const storedTheme = localStorage.getItem('theme');

    // Mặc định luôn là 'light' khi không có cài đặt nào được lưu.
    let initialTheme = 'light';

    // Nếu có theme đã lưu trong Local Storage, sử dụng nó.
    if (storedTheme) {
        initialTheme = storedTheme;
    }
    // Nếu không, nó sẽ giữ nguyên 'light', bỏ qua tùy chọn hệ thống (prefers-color-scheme).

    setTheme(initialTheme);
}

// Chạy các hàm khởi tạo khi cửa sổ tải xong
window.addEventListener('load', function () {
    applyInitialTheme(); // Áp dụng chế độ sáng/tối
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
