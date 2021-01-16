import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除するアロー関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li生成 valueを変数から設定
  const li = document.createElement("li");
  li.innerText = text;

  //button(完了)タグを生成、イベントの設定
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグを取得して削除
    deleteFromIncompleteList(completeButton.parentNode);
    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    //ToDo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    //完了したToDoに要素を追加する処理(未完了リストで取得した内容を再利用)
    //div以下を初期化
    addTarget.textContent = null;
    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;
    //buttonタグを生成(戻す)
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    //戻すボタンにイベント設定
    backButton.addEventListener("click", () => {
      // 完了したToDoから親要素ごと削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      // 未完了のToDoに追加するために関数を実行
      createIncompleteList(text);
    });

    //作成した要素をdiv配下に加える
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    //上記で作成したaddTargetを追加する先を取得
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)タグを生成、イベントの設定
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(div)を取得して削除する関数を実行
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリスト(ul)に追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
