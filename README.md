# Calendar Of Events

## Общее
### Используемый стек технологий :package::
 - react js;
 - recoil;
 - material-ui;
 - styled module;

### Старт приложения :checkered_flag::
 - rename the file ***.env.dist*** ->***.env***;
 - `npm i` -- установка всех пакетов;
 - `npm run start` -- запуск приложения в режиме dev;  
 (Чтобы события на странице отображались, нужно ввести дату 10(октябрь) месяц и 2021 год. Пример ниже :arrow_heading_down: ***'Screen: Page /'***);

### Основные страницы приложения :page_facing_up::
 - страница "Все события" находится в папке ***components/Pages/EventList***, путь ***'/'***;
    - функция получения данных с бека находится  ***api***;
- страница "Мои события" находится в папке ***components/Pages/Calendar***, путь ***'/[id]'***;
- страница "Конкретное событие" находится в папке ***components/Pages/Event***, путь ***'/calendar'***;

### Screen :shipit: :rainbow::
*(desktop & mobile)*
#### Page ***/*** : 
![1](https://user-images.githubusercontent.com/63366248/172924316-1fce97a8-c9e8-4b84-82d1-8b2cd8c23b79.png)

#### Page ***/[id]***: 
![2](https://user-images.githubusercontent.com/63366248/172922103-a1bf6ca7-8f1c-434d-a037-fa5c76764114.png)

#### Page ***/calendar***: 
![3](https://user-images.githubusercontent.com/63366248/172922110-57e13aed-fa5a-44d7-8964-e5f96e741494.png)
#### Page ***/[id] & /calendar popup***: 
![4](https://user-images.githubusercontent.com/63366248/172922111-71149a28-5dcc-45e4-8bb2-c77f1672f3d7.png)
![5](https://user-images.githubusercontent.com/63366248/172922113-80547aba-1700-44a4-a34e-ae42c3af5394.png)
