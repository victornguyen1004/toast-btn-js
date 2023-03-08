// Show toast function //
function toast({
    title = '',
message = '',
type = '',
duration = 3000
})
{
const main = document.getElementById('toast');
if (main){
    const toast = document.createElement('div');
    
    // Auto remove toast //
    const autoRemoveID = setTimeout(function() {
        main.removeChild(toast);
    }, duration + 1000);
    // Remove toast on click // 
    toast.onclick = function(e){
        if (e.target.closest('.toast__close')){
            main.removeChild(toast);
            clearTimeout(autoRemoveID);
        }
    }


    const icons = {
        success: 'fas fa-check',
        info: 'fas fa-info',
        warning: 'fas fa-exclamation',
        error: 'fas fa-bug'
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);
    toast.classList.add('toast', `toast--${type}`);
    toast.style.animation = `slideInFromLeft 0.3s linear, fadeOut 1s ${delay}s linear forwards`;
    toast.innerHTML = 
    `
    <div class="toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close">
            <i class="fas fa-times"></i>
        </div>
    `;
    main.appendChild(toast);
}
}

function showSuccessToast() {
toast({
title: "Thành công!",
message: "Hiển thị thành công Success Toast!",
type: "success",
duration: 5000
});
}
function showInfoToast() {
toast({
title: "Thông tin",
message: "Hiển thị thành công Info Toast!",
type: "info",
duration: 5000
});
}
function showWarningToast() {
toast({
title: "Cảnh báo!",
message: "Hiển thị thành công Warning Toast!",
type: "warning",
duration: 5000
});
}
function showErrorToast() {
toast({
title: "Lỗi: Có bug!",
message: "Bug là hiển thị thành công Error Toast!",
type: "error",
duration: 5000
});
}
