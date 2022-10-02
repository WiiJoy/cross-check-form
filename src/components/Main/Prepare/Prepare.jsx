import React from "react";

export default function Prepare() {
  return (
    <section className='prepare'>
      <div className='content-wrapper'>
        <h2></h2>
        <div className='task-description'>Уважаемые проверяющие!<br/>Проверяются только требования, указанные в критериях.<br/>Если какой-то момент в критериях не описан, его не проверяем и не оцениваем.<br/>Если сомневаетесь вычитать баллы или нет, - не вычитайте.<br/>Все сомнения трактуются в пользу студента!<br/><b>Задание второй недели:</b> <a className="other-link" href="https://github.com/rolling-scopes-school/tasks/blob/master/stage1/stream2/online-zoo/README.md#неделя-2">тык</a><br/><b>Порядок оценки задания третьей недели:</b> <a className="other-link" href="https://github.com/rolling-scopes-school/tasks/blob/master/stage1/stream2/online-zoo/README.md#порядок-оценки-cross-check-неделя-2">тык</a><br/><br/><b>БУДЬТЕ ВНИМАТЕЛЬНЫ: ИТОГОВОЕ КОЛИЧЕСТВО ШТРАФНЫХ БАЛЛОВ ЗА СТРАНИЦУ НЕ ДОЛЖНО БЫТЬ БОЛЬШЕ, ЧЕМ ДАЕТСЯ ЗА ЭТУ СТРАНИЦУ!</b><br/><br/><b>ПРОВЕРЬТЕ АКТУАЛЬНОСТЬ СВОЕГО МАКЕТА ПЕРЕД ПРОВЕРКОЙ! Места макета, где было исправление выравнивания по центру, не оцениваются (см. знак ❗ у критерия)</b><br/><br/>Задание будет оцениваться путем изменения размеров окна в эмуляции устройств через панель разработчика (DevTools - Toogle Device Toolbar).<br/>❗ Убедитесь, что при проверке у вас отсутствует вертикальная полоса прокрутки, т.к. она "съедает" часть пространства отзывчивой верстки своей шириной. Чтобы ее отключить, необходимо выбрать режим эмуляции Responsive, а так же установить тип устройства Mobile. Если тип устройства не отображается, в верхней панели device toolbar нажмите на три точки справа и выберите Add device type.</div>
      </div>
      <img src="./mems.jpg" alt="meme" width="355" height="303"></img>
    </section>
  );
}
