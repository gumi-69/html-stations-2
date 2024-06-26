function displayList() {
    const fruitsDiv = document.getElementById('fruits');
    const paragraphs = fruitsDiv.querySelectorAll('p');

    // 新しい<ul>要素を作成
    const ul = document.createElement('ul');

    // 各<p>要素を<li>要素に変換して<ul>に追加
    paragraphs.forEach(p => {
        const li = document.createElement('li');
        li.textContent = p.textContent;
        ul.appendChild(li);
    });

    // fruitsDivの内容を置き換える
    fruitsDiv.innerHTML = '';
    fruitsDiv.appendChild(ul);
}
