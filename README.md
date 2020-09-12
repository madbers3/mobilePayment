В <a href="https://github.com/Xaz16/mobilePayment">шаблоне</a> проекта уже было реализованно несколько требований \
Первым делом я обновил angular с шестой до 10 версии, чтобы использовать фичи асинхронных функций, что сделало бы код более читаемым. \
Далее я изменил несколько функций `src/app/operator/operator.component.ts:50` `src/app/services/operators.service.ts:20` по своему усмотрению.

Улучшение проекта:
- для будущего расширения проекта и оптимизации начальной загрузки страницы, нужно будет разделить фронтенд на lazy-loading модули(сейчас это не нужно) 
- далее нужна серверная часть проекта которая будет раздавать production build проекта, реализовывать функционал API для проекта, хранение данных, кеширование, если нужна оптимизация SEO использовать Angular Universal
- код, который будет использоваться на сервеной и клиентской стороне перенести в общую директорию проекта
- можно было бы разработать административную часть проекта в виде Angular приложения, между фронтом и админкой можно иметь общие компоненты
- хранение состояний, например Redux
- некоторые части проекта, например валидаторы, можно вынести с помощью npm пакетов (или найти уже готовую реализацию или создать пакет, что увеличит переиспользуемость кода между проектами)
- для мультиплатформиной реализации можно использовать PWA
- использование Service Worker(+ используется PWA) для кеширования JS, CSS, медиаконтента
- автоматизация разработки с помощью CI/CD
- CI, некоторые вещи такие как линтеры и тесты у нас уже есть
- чтобы не забывать запускать тесты можно использовать Git Hooks
- CD использование версионирования проекта, автоматической заливки проекта на сервер
- использования пайплайнов, например с помощью GitLab
- если реализовать выше описанные фичи, то проект будет разделен на серверное приложение, фронтенд и админку, по этому есть смысл задуматся о мульти или моно репозитории, учитывая связанность кода проекта было бы сложно использовать мультирепо, если задумываться об огромном проекте над которым работают сотни человек, то есть смысл использования мультирепозитория и микросервистой архитектуры проекта, так как у меня довольно мало опыта в таких вещах, то я пожалуй не буду комментировать как можно это сделать.
- использовать в cypress TypeScprit

Если говорить о командной разработке, то возможно было бы эффективно использование одной из методологий разработки и использование инструмента управления проектами(например YouTrack)

UPD: \
Cтиль Angular:
https://angular.io/guide/styleguide
