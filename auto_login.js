// ==UserScript==
// @name THU网络学堂自动登录
// @namespace https://github.com/pioet/
// @version 1.1
// @description 自动点击登录，自动填写用户名和密码，并提供设置功能
// @match https://learn.tsinghua.edu.cn/f/login
// @match https://learn.tsinghua.edu.cn/f/wlxt/index/course/student/*
// @grant GM_setValue
// @grant GM_getValue
// ==/UserScript==

(function() {
    // 检查页面是否加载完成
    window.onload = function() {
        // 获取脚本状态
        var isEnabled = GM_getValue("isEnabled", true);

        // 创建开启/关闭按钮
        const toggleButton = document.createElement("button");
        toggleButton.innerText = isEnabled ? "已启动" : "已禁用";
        toggleButton.style.position = "absolute";
        toggleButton.style.top = "20px";
        toggleButton.style.left = "520px"; // 调整位置以避免重叠
        document.body.appendChild(toggleButton);

        toggleButton.onclick = function() {
            isEnabled = !isEnabled;
            GM_setValue("isEnabled", isEnabled); // 更新脚本状态
            toggleButton.innerText = isEnabled ? "已启动" : "已禁用"; // 更新按钮文本
            alert(isEnabled ? "THU网络学堂自动登录脚本已启用!" : "THU网络学堂自动登录脚本已禁用!");
        };

        // 创建设置按钮
        const settingsButton = document.createElement("button");
        settingsButton.innerText = "THU登录助手设置";
        settingsButton.style.position = "absolute";
        settingsButton.style.top = "20px";
        settingsButton.style.left = "400px";
        document.body.appendChild(settingsButton);

        settingsButton.onclick = function() {
            const newUsername = prompt("请输入用户名:", GM_getValue("username", ""));
            const newPassword = prompt("请输入密码:", GM_getValue("password", ""));
            if (newUsername !== null) GM_setValue("username", newUsername); // 保存用户名
            if (newPassword !== null) GM_setValue("password", newPassword); // 保存密码
            alert("用户名和密码已更新!");
        };

        if (!isEnabled) {
            return; // 如果脚本被禁用，直接返回
        }

        // 点击进入网络学堂
        const link = document.querySelector("body > div > div.wenzi > p.re_log > a.chongxin");
        if (link) {
            link.click();
            // After clicking the link, check for the login button
            // setTimeout(checkAndClickLoginButton, 10); // Delay to allow for loading
        }

        // 获取用户名和密码输入框
        const usernameInput = document.querySelector("#loginDivId > div.item.user > input[type=text]");
        const passwordInput = document.querySelector("#loginDivId > div.item.pwd > input[type=password]");

        // 如果输入框存在，自动填写用户名和密码
        if (usernameInput && passwordInput) {
            const username = GM_getValue("username", ""); // 从存储中获取用户名
            const password = GM_getValue("password", ""); // 从存储中获取密码

            // 设置延迟以避免自动填充覆盖
            setTimeout(() => {
                usernameInput.value = username; // 填入用户名
                passwordInput.value = password; // 填入密码

                // 触发输入事件，确保值被正确设置
                usernameInput.dispatchEvent(new Event('input', { bubbles: true }));
                passwordInput.dispatchEvent(new Event('input', { bubbles: true }));

                // 点击登录按钮
                const loginButton = document.querySelector("#loginButtonId");
                if (loginButton) {
                    console.log("find");
                    loginButton.click();
                }
            }, 500); // 延迟500毫秒（可以根据需要调整）
        }



    };
})();