
// Xây dựng Editor
"use strict";
const content = document.querySelector(".text-content");
const uppercaseBtn = document.getElementById("btn-uppercase");
const charCountEl = document.querySelector(".char-count");
const wordCountEl = document.querySelector(".word-count");
const newBtn = document.getElementById("new-btn");
const txtBtn = document.getElementById("txt-btn");
const pdfBtn = document.getElementById("pdf-btn");
const fileName = document.getElementById("filename-input");
const initialValue = fileName.value;
const btn = document.querySelector(".dropdown-toggle");
const listBtn = document.querySelector(".dropdown-menu");

const uppercase = () => {
    const content = document.querySelector(".text-content");
    const contentTextTransform = content.style.textTransform;
    if (contentTextTransform === "uppercase") {
        content.style.textTransform = "";
    } else {
        content.style.textTransform = "uppercase";
    }
};

btn.addEventListener("click", function (e) {
    e.preventDefault();
    listBtn.classList.toggle("show");
});
window.addEventListener("DOMContentLoaded", function () {
    content.focus();
    this.document.execCommand("styleWithCss", false, true);
    uppercaseBtn.addEventListener("click", uppercase);
    content.addEventListener("input", function () {
        const contentText = this.innerText;

        const charLength = contentText.trim().length;
        charCountEl.children[0].innerText = charLength;
    });
    newBtn.addEventListener("click", function () {
        content.innerText = "";
        fileName.value = initialValue;
        content.focus();
    });
    txtBtn.addEventListener("click", function () {
        const fileNameTxt = fileName.value;
        const contentTxt = content.innerText.trim();
        const blob = new Blob([contentTxt]);
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${fileNameTxt}.txt`;
        a.click();
    });
    pdfBtn.addEventListener("click", function () {
        const fileNamePdf = fileName.value;
        html2pdf().from(content).save(`${fileNamePdf}.pdf`);
    });
    content.addEventListener("paste", function (e) {
        e.preventDefault();
        const data = e.clipboardData;
        const plainText = data.getData("text");
        content.innerText = plainText;
    });
});