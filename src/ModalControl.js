document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const modalDetailContent = document.getElementById("modal-detail-content");
    const closeButton = document.querySelector(".close");

    // 「詳細を見る」リンクのクリックイベント設定
    const modalButtons = document.querySelectorAll("a.open-modal");
    modalButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const project = event.target.closest("article");
            const detailId = project.getAttribute("data-detail-id");
            const detailContent = document.getElementById(detailId + "-detail") || document.getElementById(detailId);
            if (detailContent) {
                // 隠しコンテンツの innerHTML をモーダルに流し込む
                modalDetailContent.innerHTML = detailContent.innerHTML;
                // 矢印ボタンによるスクリーンショット切り替えを初期化
                initializeNavigation(modalDetailContent);
            }
            modal.style.display = "block";
        });
    });

    // 閉じるボタン、背景クリックでモーダルを閉じる
    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // 矢印ボタンによるスクリーンショット切り替えを初期化する関数
    function initializeNavigation(container) {
        const screenshotContainer = container.querySelector(".modal-screenshots");
        if (!screenshotContainer) return;
        const mainScreenshotImg = screenshotContainer.querySelector(".main-screenshot img");
        const screenshotsData = screenshotContainer.getAttribute("data-screenshots");
        let screenshots = [];
        if (screenshotsData) {
            screenshots = screenshotsData.split(",").map(s => s.trim()).filter(s => s !== "");
        }
        console.log(screenshots);
        let currentIndex = 0;
        if (screenshots.length > 0) {
            mainScreenshotImg.src = screenshots[0];
        }
        const prevBtn = screenshotContainer.querySelector(".prev-btn");
        const nextBtn = screenshotContainer.querySelector(".next-btn");
        if (prevBtn && nextBtn && screenshots.length > 1) {
            prevBtn.addEventListener("click", function() {
                currentIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
                mainScreenshotImg.src = screenshots[currentIndex];
            });
            nextBtn.addEventListener("click", function() {
                currentIndex = (currentIndex + 1) % screenshots.length;
                mainScreenshotImg.src = screenshots[currentIndex];
            });
        }
    }
});