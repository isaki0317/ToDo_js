import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  //li生成 valueを変数から設定
  const li = document.createElement("li");
  li.innerText = inputText;
  //divタグの子要素に各要素設定
  div.appendChild(li);
  //未完了のリスト(ul)に追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
