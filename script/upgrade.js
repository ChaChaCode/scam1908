function updateModalSize(modalContent) {
    var width = window.innerWidth;
    var scale;
    var bottom;

    if (width <= 360) {
        scale = 0.78;
        bottom = '-65px';
    } else if (width <= 375) {
        scale = 0.82;
        bottom = '-53px';
    } else if (width <= 390) {
        scale = 0.85;
        bottom = '-43px';
    } else if (width <= 412) {
        scale = 0.90;
        bottom = '-30px';
    } else if (width <= 414) {
        scale = 0.90;
        bottom = '-10px';
    } else if (width <= 430) {
        scale = 0.94;
        bottom = '-17px';
    } else if (width <= 450) {
        scale = 0.95;
        bottom = '-15px';
    } else {
        scale = 1;
        bottom = '0';
    }

    modalContent.style.transform = 'translateX(-50%) scale(' + scale + ')';
    modalContent.style.bottom = bottom;
}
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    var modalContent = modal.querySelector(".modal-content");

    if (modal) {
        modal.classList.remove('hide');
        modal.style.display = "block";
        // Небольшая задержка перед добавлением класса 'show' для плавного эффекта
        setTimeout(function() {
            modal.classList.add('show');
        }, 10);

        gsap.fromTo(modalContent, 
            { y: window.innerHeight }, // Начало анимации снизу
            { y: 0, duration: 0.4, ease: 'power2.out' } // Плавное движение вверх
        );
    }

    updateModalSize(modalContent);

    window.addEventListener('resize', function() {
        updateModalSize(modalContent);
    });
}

function closeModal(modal) {
    var modalContent = modal.querySelector(".modal-content");

    if (modal) {
        gsap.to(modalContent, 
            { y: window.innerHeight, duration: 0.4, ease: 'power2.in', onComplete: function() {
                modal.classList.remove('show');
                modal.classList.add('hide');
                setTimeout(function() {
                    modal.style.display = "none"; // Скрываем после завершения анимации
                }, 400); // Ожидание завершения анимации скрытия
            } }
        );
    }
}

// Привязка обработчиков событий к кнопкам и модальным окнам
var modals = [
    { buttonId: "multitapGroupContainer", modalId: "multitapModal" },
    { buttonId: "energyGroupContainer", modalId: "energyModal" },
    { buttonId: "tapbotGroupContainer", modalId: "tapbotModal" }
];

modals.forEach(function(entry) {
    var btn = document.getElementById(entry.buttonId);
    btn.onclick = function() {
        openModal(entry.modalId);
    };
});

document.querySelectorAll(".modal").forEach(function(modal) {
    var span = modal.querySelector(".close");
    span.onclick = function() {
        closeModal(modal);
    };
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
});

// Закрытие модального окна при касании экрана
window.addEventListener('touchend', function(event) {
    if (event.target.classList.contains("modal")) {
        closeModal(event.target);
    }
});



window.addEventListener('load', function() {
    var blurElements = document.querySelectorAll('.blur');
    blurElements.forEach(function(el) {
        el.style.filter = 'none'; // Убираем размытие после загрузки
    });

        // Проверка и установка поддержки вибрации
        if (Telegram.WebApp.HapticFeedback) {
            function handleButtonClick(url) {
                return function (e) {
                    e.preventDefault();
                    // Запуск вибрации
                    Telegram.WebApp.HapticFeedback.impactOccurred('medium');
                    // Переход по ссылке
                    window.location.href = url;
                };
            }
        
            function setupButton(id, url) {
                var button = document.getElementById(id);
                if (button) {
                    button.addEventListener("click", handleButtonClick(url));
                }
            }
        
            setupButton("faceBattonContainer", "./invite.html");
            setupButton("groupInfoTextContainer", "./info.html");
            setupButton("TaskBattonContainer", "./task.html");
            setupButton("TopStarsBattonContainer", "./leadersbord.html");
            setupButton("rukaBattonContainer", "./main.html");
        
        }
});
