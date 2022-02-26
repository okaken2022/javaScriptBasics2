'use strict'
//------------------------------要素の操作--------------------------------
// {
//   function update() {
//     // document. querySelector('h1').textContent = 'Changed!';
//     // document. querySelector('p').textContent = 'Changed!';
//     // document. querySelectorAll('p')[1].textContent = 'Changed!';
//     document.querySelectorAll('p').forEach((p, index) => {
//       p.textContent = `${index}番目のpです!`;
//     });
//     // document. getElementById('target').textContent = 'Changed!';
//   }

//   setTimeout(update, 1000);
// }

//------------------------------要素の取得方法--------------------------------

// {
  
//   document.querySelector('button') .addEventListener('click', () => {
//     document. getElementById('target').textContent = 'Changed!';
    
//   });
// }

//------------------------------要素の属性の操作--------------------------------
// {
  
//   document.querySelector('button') .addEventListener('click', () => {
//     const targetNode = document. getElementById('target');

//     targetNode.textContent = 'Changed!';
//     targetNode.title = 'This is title!';
//     targetNode.style.color = 'red';
//     targetNode.style.backgroundColor = 'skyblue';
    
//   });
// }

//------------------------------class nameの操作--------------------------------
// {
  
//   document.querySelector('button') .addEventListener('click', () => {
//     const targetNode = document. getElementById('target');


//     targetNode.className ='my-color my-border';
//   });
// }

//------------------------------classList--------------------------------
// {
  
//   document.querySelector('button') .addEventListener('click', () => {
//     const targetNode = document. getElementById('target');


//     // targetNode.className ='my-color my-border';
//     // targetNode.classList.add('my-color');
    
//     // if (targetNode.classList.contains('my-color') === true) {
//     //   targetNode.classList.remove('my-color');
//     // } else {
//     //   targetNode.classList.add('my-color');
//     // }
//     targetNode.classList.toggle('my-color');
//   });
// }

//------------------------------カスタムデータ属性--------------------------------
// {
  
//   document.querySelector('button') .addEventListener('click', () => {
//     const targetNode = document. getElementById('target');

//     // targetNode.textContent = 'Dotinstall';
//     targetNode.textContent = targetNode.dataset.translation;
//   });
// }

//------------------------------要素の追加--------------------------------
// {
  
//   document.querySelector('button') .addEventListener('click', () => {
//     const item2 = document.createElement('li');
//     item2.textContent = 'item 2';

//     // const ulNode = document.querySelector('ul');
//     const ul = document.querySelector('ul');
//     ul.appendChild(item2);
//   });
// }

//------------------------------要素の複製、挿入--------------------------------
// {
  
//   document.querySelector('button') .addEventListener('click', () => {
//     const item0 = document.querySelectorAll('li')[0];
//     const copy = item0.cloneNode(true);//falseにすると、要素をコピーしないので空のli要素が作られる

//     const ul = document.querySelector('ul');//親要素取得
//     const item2 = document.querySelectorAll('li')[2];//三番目の子要素(item2)を取得
//     ul.insertBefore(copy, item2);
//   });
// }
//------------------------------要素の削除--------------------------------
// {
  
//   document.querySelector('button') .addEventListener('click', () => {
//     const item1 = document.querySelectorAll('li')[1];

//     // item1.remove();
//     //親Node.removeChild(削除するNode)
//     document.querySelector('ul').removeChild(item1);
//   });
// }
//------------------------------input要素の操作--------------------------------
// {
  
//   document.querySelector('button') .addEventListener('click', () => {
//     const li = document.createElement('li');
//     const text = document.querySelector('input');
//     li.textContent = text.value;
//     document.querySelector('ul').appendChild(li);

//     text.value = '';
//     text.focus();
//   });
// }
//------------------------------セレクトボックスの操作--------------------------------
{
  
  document.querySelector('button') .addEventListener('click', () => {
    const li = document.createElement('li');
    const color = document.querySelector('select');
    li.textContent = `${color.value} - ${color.selectedIndex}`;//ここが分からん
    document.querySelector('ul').appendChild(li);
  });
}