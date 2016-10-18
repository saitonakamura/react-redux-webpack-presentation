# Live coding presentation of react redux and webpack integration

Live coding presentation of react redux and webpack integration with hot module replacement and time travel

[Demo](https://saitonakamura.github.io/react-redux-webpack-presentation/)

## План

### HelloSlide

Краткий рассказ о себе

Эта презентация не столько об очередных новых и модных инструментах, но скорее о подходах которые вы можете применять вне завимости от конкретных реализаций

О том как можно сделать лучше нелегкую жизнь разработчика

### MotivationFeedbackSlide

В программировании пользовательских интерефейсов очень важен фидбек, также как для бэкенда нужны быстрые тесты

### BackInMvcSlide

Давным-давно во времена MVC я писал веб на ASP.NET и мой процесс разработки выглядел так

Write-Save-Compile-Reload-Check

Сейчас у нас есть старый проект на ASP.NET Webforms где между нужно ждать полторы(sic!) минуты чтобы увидеть результат своей работы
(тут надо сохранить точку к которой я возвращусь из следующих слайдов)

### SuddenlySpaSlide

Затем в моей жизни появились SPA

И я обнаружил что код можно не перекомпилировать!

Write-Save-Reload-Check

И вообще приложение гораздо легче

Справедливости ради надо сказать что это, конечно, достоинство вовсе не SPA, а динамических языков, но уж так сложилось

### WhyNotAutoreloadSlide

Почему бы не пойти дальше и не авторелоадить страницу после изменения файлов?

Write-Save-*AutoReload*-Check

Так появились live-reload и lite-server

### ComplexWorkflowSlide

Но что если у меня какой-то сложный воркфлоу, и мне приходится проделывать дополнительные действия после автоматической перезагрузки страницы?

Write-Save-*AutoReload*-Routine-Check (тут я перезагружу страницу и слайд сбросится на первый)

### WebpackHmrSlide

Тут в презентацию врывается webpack с его hot module replacement!

Работает это за счет того что render в React-е — чистая функция и её новую реализацию можно просто перезапустить со старыми данными

Write-Save-*hot module replacement*-*state stays untouched*-Check (тут я исправляю какую-нибудь ошибку на слайде, например грамматическую)

### WhatIfErrorIsInWorkflowSlide

Но это работает только для визуального отображения, а что если мы допустили ошибку в логике, например забыли сохранить данные пришедшие с сервера?

Здесь вступает в дело Redux

### ReduxSlide

#### Что такое Redux?

(кто слышал про flux?)

Store-Dispatcher-Subscribers-ActionCreators

Redux это прежде всего реализация Flux

State-Dispatch-Reducers-Actions

### StateSlide

#### State

* Единый источник правды
* Меняется иммутабельно
* Желательно чтобы был сериализуем

Т.е. в state хранится все что оказывает влияние на визуальное отображение вашего приложения, например то, что сейчас идет асинхронный запрос, может выражатся в булевом поле isLoading, по которому можно отобразить крутилку

### ActionsSlide

#### Actions

* Выражают намерение изменить состояние
* Представляют собой простые объекты

#### ActionCreators

* Представляют собой функции возвращающие Action
* Могут быть не чистыми и не идемпотентными

(показать примеры кода из actions)

### ReducersSlide

#### Reducers

* Функции принимающие текущий state и action
* Чистые функции
* Иммутабельно меняют state возвращая новый

(показать примеры кода из reducers)

### ApplyReduxToHMRSlide

#### Но как Redux нам поможет?
Самое важное для нас это то что состояние в нём меняется иммутабельно и мы можем хранить каждое предыдущее состояние чтобы возвратиться к нему и попробовать применить action еще раз (Вернуться на action назад)

Фактически мы можем путешествовать во времени! (возвращаемся к слайду про MVC)

Также мы можем сериализовать наше состояние и сохранить его в оффлайн хранилище

Или мы можем сериализовать состояние при ошибке в продакшене и загрузив его себе отдебажить

### DisadvantagesSlide

#### Минусы вышеозначенных инструментов

* Много boilerplate кода ибо мало магии, это вам не ember и не RubyOnRails
* Высокий порог вхождения, много нового, flux, immutable etc.

### EndSlide

Ссылки на код, на меня, на документацию

## Можно добавить

### ReduxAsyncSlide

Как делать асинхронную активность? Redux-thunk

### NormalizrSlide

#### Normalizr — Хранение реляционных данных на клиенте
