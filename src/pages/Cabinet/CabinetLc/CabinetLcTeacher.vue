<template>
  <main class="content content_cabinet">
    <section class="profile page__section">
      <!-- <ul class="breadcrumbs page__breadcrumbs">
			<li class="breadcrumbs__item">
				<a href="#" class="breadcrumbs__link">Организации</a>
			</li>
			<li class="breadcrumbs__item">
				<a href="#" class="breadcrumbs__link">Регионы</a>
			</li>
			<li class="breadcrumbs__item">
				<span href="#" class="breadcrumbs__link breadcrumbs__link_current">Республика Адыгея (Адыгея)</span>
			</li>
			</ul> -->

      <div class="users__top">
        <h1 class="section-title">расписание</h1>
        <a href="#" class="users__add">+ пригласить методиста</a>
      </div>
      <div class="schedule">
        <div class="schedule-row schedule-row--center">
          <div class="schedule-row__month month-item">
            <div class="month-item__arrow month-item__arrow-left">
              <img
                loading="lazy"
                width="12"
                height="30"
                src="./images/month_arrow_left.svg"
                alt="стелка"
              />
            </div>
            <div class="month-item__row">
              <div class="month-item__row-day row-day">
                <div class="row-day__text">15 ноября – 21 ноября</div>
                <div class="row-day__icons">
                  <div class="row-day__icon row-day__icon--green">1</div>
                  <div class="row-day__icon row-day__icon--orange">1</div>
                </div>
              </div>
              <div class="month-itme__row-year">2022</div>
            </div>
            <div class="month-item__arrow month-item__arrow-right">
              <img
                loading="lazy"
                width="12"
                height="30"
                src="./images/month_arrow_right.svg"
                alt="стелка"
              />
            </div>
          </div>
        </div>
        <div class="schedule-row schedule-row--wrap">
          <div class="schedule-row__table">
            <div class="table__day">
              <div class="table__day-num">15.11</div>
              <div class="table__day-title">Понедельник</div>
            </div>
            <table class="table">
              <tbody>
                <tr class="table__row table__row_head table__header-bnone">
                  <th class="table__header">Время</th>
                  <th class="table__header">Предмет</th>
                  <th class="table__header">Класс</th>
                  <th class="table__header">Кабинет</th>
                </tr>
                <tr class="table__row">
                  <td class="table__cell">9:00</td>
                  <td class="table__cell">Русская литература</td>
                  <td class="table__cell">7 класс</td>
                  <td class="table__cell table__cell--flex">
                    203
                    <img
                      loading="lazy"
                      width="4"
                      height="13"
                      src="./images/circles.svg"
                      alt="иконка"
                    />
                    <div class="table__cell-hide">
                      <div class="table__cell-hide-btn">Пригласить</div>
                      <div class="table__cell-hide-btn">Редактировать</div>
                      <div class="table__cell-hide-btn">Удалить</div>
                    </div>
                  </td>
                </tr>
                <tr class="table__row">
                  <td class="table__cell">9:00</td>
                  <td class="table__cell">Русская литература</td>
                  <td class="table__cell">7 класс</td>
                  <td class="table__cell table__cell--flex">
                    203
                    <img
                      loading="lazy"
                      width="4"
                      height="13"
                      src="./images/circles.svg"
                      alt="иконка"
                    />
                    <div class="table__cell-hide">
                      <div class="table__cell-hide-btn">Пригласить</div>
                      <div class="table__cell-hide-btn">Редактировать</div>
                      <div class="table__cell-hide-btn">Удалить</div>
                    </div>
                  </td>
                </tr>
                <tr class="table__row">
                  <td class="table__cell">9:00</td>
                  <td class="table__cell">Русская литература</td>
                  <td class="table__cell">7 класс</td>
                  <td class="table__cell table__cell--flex">
                    203
                    <img
                      loading="lazy"
                      width="4"
                      height="13"
                      src="./images/circles.svg"
                      alt="иконка"
                    />
                    <div class="table__cell-hide">
                      <div class="table__cell-hide-btn">Пригласить</div>
                      <div class="table__cell-hide-btn">Редактировать</div>
                      <div class="table__cell-hide-btn">Удалить</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="schedule-row__table-box-btn">
              <a href="#" class="schedule-row__table-btn">+ добавить урок</a>
            </div>
          </div>
          <div class="schedule-row__table">
            <div class="table__day">
              <div class="table__day-num">16.11</div>
              <div class="table__day-title">Вторник</div>
            </div>
            <table class="table">
              <tbody>
                <tr class="table__row table__row_head table__header-bnone">
                  <th class="table__header">Время</th>
                  <th class="table__header">Предмет</th>
                  <th class="table__header">Класс</th>
                  <th class="table__header">Кабинет</th>
                </tr>
                <tr class="table__row table__row--orange">
                  <td class="table__cell">9:00</td>
                  <td class="table__cell">Русская литература</td>
                  <td class="table__cell">7 класс</td>
                  <td class="table__cell table__cell--flex table__cell--active">
                    203
                    <img
                      loading="lazy"
                      width="4"
                      height="13"
                      src="./images/circles.svg"
                      alt="иконка"
                    />
                    <div class="table__cell-hide">
                      <div class="table__cell-hide-btn">Пригласить</div>
                      <div class="table__cell-hide-btn">Редактировать</div>
                      <div class="table__cell-hide-btn">Удалить</div>
                    </div>
                    <span class="table__cell-widget">ОЧНО</span>
                  </td>
                </tr>
                <tr class="table__row">
                  <td class="table__cell">9:00</td>
                  <td class="table__cell">Русская литература</td>
                  <td class="table__cell">7 класс</td>
                  <td class="table__cell table__cell--flex">
                    203
                    <img
                      loading="lazy"
                      width="4"
                      height="13"
                      src="./images/circles.svg"
                      alt="иконка"
                    />
                    <div class="table__cell-hide">
                      <div class="table__cell-hide-btn">Пригласить</div>
                      <div class="table__cell-hide-btn">Редактировать</div>
                      <div class="table__cell-hide-btn">Удалить</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="schedule-row__table-box-btn">
              <a href="#" class="schedule-row__table-btn">+ добавить урок</a>
            </div>
          </div>
          <div class="schedule-row__table">
            <div class="table__day">
              <div class="table__day-num">17.11</div>
              <div class="table__day-title">Среда</div>
            </div>
            <table class="table">
              <tbody>
                <tr class="table__row table__row_head table__header-bnone">
                  <th class="table__header">Время</th>
                  <th class="table__header">Предмет</th>
                  <th class="table__header">Класс</th>
                  <th class="table__header">Кабинет</th>
                </tr>
                <tr class="table__row">
                  <td class="table__cell"></td>
                  <td class="table__cell"></td>
                  <td class="table__cell"></td>
                  <td class="table__cell table__cell--active"></td>
                </tr>
              </tbody>
            </table>
            <div class="schedule-row__table-box-btn">
              <a href="#" class="schedule-row__table-btn">+ добавить урок</a>
            </div>
          </div>
          <div class="schedule-row__table">
            <div class="table__day">
              <div class="table__day-num">18.11</div>
              <div class="table__day-title">Четверг</div>
            </div>
            <table class="table">
              <tbody>
                <tr class="table__row table__row_head table__header-bnone">
                  <th class="table__header">Время</th>
                  <th class="table__header">Предмет</th>
                  <th class="table__header">Класс</th>
                  <th class="table__header">Кабинет</th>
                </tr>
                <tr class="table__row">
                  <td class="table__cell">9:00</td>
                  <td class="table__cell">Русская литература</td>
                  <td class="table__cell">7 класс</td>
                  <td class="table__cell table__cell--flex">
                    203
                    <img
                      loading="lazy"
                      width="4"
                      height="13"
                      src="./images/circles.svg"
                      alt="иконка"
                    />
                    <div class="table__cell-hide">
                      <div class="table__cell-hide-btn">Пригласить</div>
                      <div class="table__cell-hide-btn">Редактировать</div>
                      <div class="table__cell-hide-btn">Удалить</div>
                    </div>
                  </td>
                </tr>
                <tr class="table__row">
                  <td class="table__cell">9:00</td>
                  <td class="table__cell">Русская литература</td>
                  <td class="table__cell">7 класс</td>
                  <td class="table__cell table__cell--flex">
                    203
                    <img
                      loading="lazy"
                      width="4"
                      height="13"
                      src="./images/circles.svg"
                      alt="иконка"
                    />
                    <div class="table__cell-hide">
                      <div class="table__cell-hide-btn">Пригласить</div>
                      <div class="table__cell-hide-btn">Редактировать</div>
                      <div class="table__cell-hide-btn">Удалить</div>
                    </div>
                  </td>
                </tr>
                <tr class="table__row table__row--orange">
                  <td class="table__cell">9:00</td>
                  <td class="table__cell">Русская литература</td>
                  <td class="table__cell">7 класс</td>
                  <td class="table__cell table__cell--flex table__cell--active">
                    <img
                      loading="lazy"
                      width="4"
                      height="13"
                      src="./images/circles.svg"
                      alt="иконка"
                    />
                    <div class="table__cell-hide">
                      <div class="table__cell-hide-btn">Пригласить</div>
                      <div class="table__cell-hide-btn">Редактировать</div>
                      <div class="table__cell-hide-btn">Удалить</div>
                    </div>
                    <span class="table__cell-widget">online</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="schedule-row__table-box-btn">
              <a href="#" class="schedule-row__table-btn">+ добавить урок</a>
            </div>
          </div>
          <div class="schedule-row__table">
            <div class="table__day">
              <div class="table__day-num">19.11</div>
              <div class="table__day-title">Пятница</div>
            </div>
            <table class="table">
              <tbody>
                <tr class="table__row table__row_head table__header-bnone">
                  <th class="table__header">Время</th>
                  <th class="table__header">Предмет</th>
                  <th class="table__header">Класс</th>
                  <th class="table__header">Кабинет</th>
                </tr>
                <tr class="table__row table__row--green">
                  <td class="table__cell">9:00</td>
                  <td class="table__cell">Русская литература</td>
                  <td class="table__cell">7 класс</td>
                  <td class="table__cell table__cell--flex table__cell--active">
                    <img
                      loading="lazy"
                      width="4"
                      height="13"
                      src="./images/circles.svg"
                      alt="иконка"
                    />
                    <div class="table__cell-hide">
                      <div class="table__cell-hide-btn">Пригласить</div>
                      <div class="table__cell-hide-btn">Редактировать</div>
                      <div class="table__cell-hide-btn">Удалить</div>
                    </div>
                    <span class="table__cell-widget">online</span>
                  </td>
                </tr>
                <tr class="table__row">
                  <td class="table__cell">9:00</td>
                  <td class="table__cell">Русская литература</td>
                  <td class="table__cell">7 класс</td>
                  <td class="table__cell table__cell--flex">
                    203
                    <img
                      loading="lazy"
                      width="4"
                      height="13"
                      src="./images/circles.svg"
                      alt="иконка"
                    />
                    <div class="table__cell-hide">
                      <div class="table__cell-hide-btn">Пригласить</div>
                      <div class="table__cell-hide-btn">Редактировать</div>
                      <div class="table__cell-hide-btn">Удалить</div>
                    </div>
                  </td>
                </tr>
                <tr class="">
                  <td class="table__cell">
                    <input type="text" class="table__input" />
                  </td>
                  <td class="table__cell">
                    <input
                      type="text"
                      class="table__input table__input--width120"
                    />
                  </td>
                  <td class="table__cell">
                    <input type="text" class="table__input" />
                  </td>
                  <td class="table__cell">
                    <input type="text" class="table__input" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="schedule-row__table-box-btn">
              <button
                class="
                  schedule-row__table-check schedule-row__table-check--green
                "
              >
                <svg
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 1L6 12L1 7"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button
                class="
                  schedule-row__table-check schedule-row__table-check--clouse
                "
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="#BDBDBD"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="#BDBDBD"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="schedule-row__table">
            <div class="table__day">
              <div class="table__day-num">20.11</div>
              <div class="table__day-title">Суббота</div>
            </div>
            <table class="table">
              <tbody>
                <tr class="table__row table__row_head table__header-bnone">
                  <th class="table__header">Время</th>
                  <th class="table__header">Предмет</th>
                  <th class="table__header">Класс</th>
                  <th class="table__header">Кабинет</th>
                </tr>
                <tr class="table__row">
                  <td class="table__cell"></td>
                  <td class="table__cell"></td>
                  <td class="table__cell"></td>
                  <td class="table__cell table__cell--active"></td>
                </tr>
              </tbody>
            </table>
            <div class="schedule-row__table-box-btn">
              <a href="#" class="schedule-row__table-btn">+ добавить урок</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
