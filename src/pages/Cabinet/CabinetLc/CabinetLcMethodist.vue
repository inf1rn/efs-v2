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
      
        <h1 class="section-title mb-50">Учителя</h1>
        <div class="profile__wrapper wrapper-max_width-m">
            <div class="profile__row profile__top top-profile">                
                <div class="top-profile__images">
                    <img :src="imageSrc" alt="user-ava">
                </div>
                <div class="top-profile__name">Иванова Светлана Геннадьевна</div>                
            </div>
            <div class="profile__row profile__bottom bottom-profile">
                <div class="tabs profile__tabs _tabs">
                    <nav class="tabs__navigation">
                        <button type="submit" class="tabs__title _tabs-item _active">Личные данные</button>
                        <button type="submit" class="tabs__title _tabs-item">Профессиональные данные</button>
                        <button type="submit" class="tabs__title _tabs-item">Расписание</button>
                        <button type="submit" class="tabs__title _tabs-item">Посещение занятий</button>
                        <button type="submit" class="tabs__title _tabs-item">Консультации</button>
                    </nav>
                    <div class="tabs__content">
                        <div class="tabs__body _tabs-block _active">
                          <form class="tabs__body-form form profile_tabs-form profile_tabs-form--one">
                            <div class="profile_tabs-form-wrap">
								<div class="profile_tabs-form__row">
									<div class="profile_tabs-form__line form__item">
										<label class="form__label">Email</label>
										<span>goytrehh@gmail.com</span>
									</div>
									<div class="profile_tabs-form__line form__item">
										<label class="form__label">Фамилия</label>
										<span>Иванова</span>
									</div>
									<div class="profile_tabs-form__line form__item">
										<label class="form__label">Имя</label>
										<span>Светлана</span>
									</div>
									<div class="profile_tabs-form__line form__item">
										<label class="form__label">Отчество</label>
										<span>Геннадьевна</span>
									</div>									
								</div>
								
								<div class="profile_tabs-form__row">
									<div class="profile_tabs-form__line form__item">
										<label class="form__label">Регион, Город</label>
										<span>Республика Саха (Якутия), г. Мирный</span>
									</div>
									<div class="profile_tabs-form__line form__item">
										<label class="form__label">Дата рождения</label>
										<span>22.08.1974</span>
									</div>
									<div class="profile_tabs-form__line form__item">
										<label class="form__label">Мобильный телефон</label>
										<span>+7 926 767 9644 </span>
									</div>
									<div class="profile_tabs-form__line form__item">
										<label class="form__label">Рабочий телефон</label>
										<span>+7 926 767 9644</span>
									</div>
								</div>
                            </div>
							<div class="profile_tabs-form__adinfo">
								<label for="profileTabsInfo" class="form__label">Дополнительная информация</label>
								<textarea class="profile_tabs-form__adinfo-box adinfo" id="profileTabsInfo"></textarea>
							</div>
                            <div class="profile_tabs-form__btn">
                              <button type="submit" class="button button_theme_green button_border_small form__submit">Сохранить изменения</button>
                            </div>
                          </form> 
                        </div>
                        <div class="tabs__body tabs__body_full _tabs-block">
                          	<form class="tabs__body-form form profile_tabs-form profile_tabs-form--width-full">
								<div class="profile_tabs-form-inner">
									<div class="profile_tabs-form-name">Повышение квалификации/<br>профессиональная подготовка</div>
									<div class="profile_tabs-form-wrap profile_tabs-form-wrap_width720">										
										<div class="profile_tabs-form__aggregate">
											<div class="profile_tabs-form__aggregate-row">
												<div class="profile_tabs-form__aggregate-date">20.02.2022</div>
												<div class="profile_tabs-form__aggregate-text">
													<p class="aggregate-link">Деятельность педагогического работника в социальной сети интернет</p>
													<p class="aggregate-link aggregate-link--grey">(Корпоративный университет)</p>
												</div>
												<div class="profile_tabs-form__aggregate-btn form__item-btn">
													<div class="form__item-close"></div>
													<div class="form__item-pen"></div>
												</div>
											</div>
											<div class="profile_tabs-form__aggregate-row">
												<div class="profile_tabs-form__aggregate-date">20.02.2022</div>
												<div class="profile_tabs-form__aggregate-text">
													<p class="aggregate-link">Деятельность педагогического работника в социальной сети интернет</p>
													<p class="aggregate-link aggregate-link--grey">(Корпоративный университет)</p>
												</div>
												<div class="profile_tabs-form__aggregate-btn form__item-btn">
													<div class="form__item-close"></div>
													<div class="form__item-pen"></div>
												</div>
											</div>
											<div class="profile_tabs-form__aggregate-row">
												<div class="profile_tabs-form__aggregate-date">20.02.2022</div>
												<div class="profile_tabs-form__aggregate-text">
													<p class="aggregate-link">Деятельность педагогического работника в социальной сети интернет</p>
													<p class="aggregate-link aggregate-link--grey">(Корпоративный университет)</p>
												</div>
												<div class="profile_tabs-form__aggregate-btn form__item-btn">
													<div class="form__item-close"></div>
													<div class="form__item-pen"></div>
												</div>
											</div>
										</div>
									</div>									
								</div>
								<div class="profile_tabs-form-inner-line"></div>
								<div class="profile_tabs-form-inner">
									<div class="profile_tabs-form-name">Образование</div>
									<div class="profile_tabs-form-wrap profile_tabs-form-wrap_width720 profile_tabs-form-wrap_row">
										<div class="profile_tabs-form__box profile_tabs-form__box_width">
											<div class="profile_tabs-form__line form__item">
												<label class="form__label">Учебное заведение</label>
												<span>Высший колледж связи г. Москва</span>
											</div>								  
											<div class="profile_tabs-form__line form__item">
												<label class="form__label">Квалификациооная категория</label>
												<span>молодой специалист</span>
											</div>		 
										</div>
										<div class="profile_tabs-form__box profile_tabs-form__box_width">								  
											<div class="profile_tabs-form__line form__item">
												<label class="form__label">Специальность</label>
												<span>учитель начальных классов</span>
											</div>								  
											<div class="profile_tabs-form__line form__item">
												<label class="form__label">Стаж общий/педагогический</label>
												<span>4/1</span>
											</div>                               
										</div>										
									</div>									
								</div>
								<div class="profile_tabs-form-inner-line"></div>
								<div class="profile_tabs-form-inner">
									<div class="profile_tabs-form-name">Место работы</div>
									<div class="profile_tabs-form-wrap profile_tabs-form-wrap_width720 profile_tabs-form-wrap_row">
										<div class="profile_tabs-form__box profile_tabs-form__box_width">
											<div class="profile_tabs-form__line form__item">
												<label class="form__label">Наименование организация</label>
												<span>Средняя шола №11</span>
											</div> 								  
											<div class="profile_tabs-form__line form__item">
												<label class="form__label">Должность</label>
												<span>учитель</span>
											</div> 
											<div class="profile_tabs-form__line form__item">
												<label class="form__label">Нагрузка</label>
												<span>20 часов</span>
											</div> 			  											
										</div>
										<div class="profile_tabs-form__box profile_tabs-form__box_width">
											<div class="profile_tabs-form__line form__item">
												<label class="form__label">Адрес организации</label>
												<span>Ломоносовский проспект, д.13</span>
											</div>  								  
											<div class="profile_tabs-form__line form__item">
												<label class="form__label">Предмет</label>
												<span>русский язык, русская литература</span>
											</div> 											                               
										</div>										
									</div>									
								</div>
								<div class="profile_tabs-form-inner-line"></div>
								<div class="profile_tabs-form-inner">
									<div class="profile_tabs-form-name">Дополнительная информация</div>
									<div class="profile_tabs-form-wrap profile_tabs-form-wrap_width720 profile_tabs-form-wrap_row">
										<div class="profile_tabs-form__box profile_tabs-form__box_width">
											<div class="profile_tabs-form__line form__item">
												<label class="form__label">Диагностика ФИОКО</label>
												<span>да</span>
											</div> 								  
											<div class="profile_tabs-form__line form__item">
												<label class="form__label">Дополнительные сведения</label>
												<span>тьютер</span>
											</div> 																							  											
										</div>
										<div class="profile_tabs-form__box profile_tabs-form__box_width">											 								  
											<div class="profile_tabs-form__line form__item">
												<label class="form__label">Уровень</label>
												<span>3 уровень</span>
											</div> 																				                               
										</div>										
									</div>									
								</div>										
							</form>
                        </div>
						<div class="tabs__body tabs__body_full _tabs-block">
							<div class="schedule">
								<div class="schedule-row schedule-row--center">
									<div class="schedule-row__month month-item">
										<div class="month-item__arrow month-item__arrow-left"><img loading='lazy' width='12' height='30' src='./images/month_arrow_left.svg' alt='стелка'></div>
										<div class="month-item__row">
											<div class="month-item__row-day row-day">
												<div class="row-day__text">15 ноября – 21 ноября</div>												
											</div>
											<div class="month-itme__row-year">2022</div>
										</div>
										<div class="month-item__arrow month-item__arrow-right"><img loading='lazy' width='12' height='30' src='./images/month_arrow_right.svg' alt='стелка'></div>
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
													<td class="table__cell table__cell--flex">203
														<img loading='lazy' width='12' height='12' src='./images/list_pen.svg' alt='иконка'>
													</td>																	
												</tr>
												<tr class="table__row">
													<td class="table__cell">9:00</td>
													<td class="table__cell">Русская литература</td>
													<td class="table__cell">7 класс</td>
													<td class="table__cell table__cell--flex">203
														<img loading='lazy' width='12' height='12' src='./images/list_pen.svg' alt='иконка'>
													</td>																	
												</tr>
												<tr class="table__row">
													<td class="table__cell">9:00</td>
													<td class="table__cell">Русская литература</td>
													<td class="table__cell">7 класс</td>
													<td class="table__cell table__cell--flex">203
														<img loading='lazy' width='12' height='12' src='./images/list_pen.svg' alt='иконка'>
													</td>																	
												</tr>						
											</tbody>
										</table>
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
													<td class="table__cell table__cell--active">203
														<img loading='lazy' width='12' height='12' src='./images/close_small_grey.svg' alt='иконка'>
														<span class="table__cell-widget">online</span>
													</td>																	
												</tr>
												<tr class="table__row">
													<td class="table__cell">9:00</td>
													<td class="table__cell">Русская литература</td>
													<td class="table__cell">7 класс</td>
													<td class="table__cell table__cell--flex">203
														<img loading='lazy' width='12' height='12' src='./images/list_pen.svg' alt='иконка'>
													</td>																	
												</tr>
												
											</tbody>
										</table>
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
													<td class="table__cell table__cell--active">														
													</td>																	
												</tr>																		
											</tbody>
										</table>
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
													<td class="table__cell table__cell--flex">203
														<img loading='lazy' width='12' height='12' src='./images/list_pen.svg' alt='иконка'>
													</td>																	
												</tr>
												<tr class="table__row">
													<td class="table__cell">9:00</td>
													<td class="table__cell">Русская литература</td>
													<td class="table__cell">7 класс</td>
													<td class="table__cell table__cell--flex">203
														<img loading='lazy' width='12' height='12' src='./images/list_pen.svg' alt='иконка'>
													</td>																	
												</tr>
												<tr class="table__row table__row--orange">
													<td class="table__cell">9:00</td>
													<td class="table__cell">Русская литература</td>
													<td class="table__cell">7 класс</td>
													<td class="table__cell table__cell--active">
														<img loading='lazy' width='12' height='12' src='./images/close_small_grey.svg' alt='иконка'>
														<span class="table__cell-widget">online</span>
													</td>																	
												</tr>						
											</tbody>
										</table>
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
													<td class="table__cell table__cell--active">
														<img loading='lazy' width='12' height='12' src='./images/close_small_grey.svg' alt='иконка'>
														<span class="table__cell-widget">online</span>
													</td>																	
												</tr>
												<tr class="table__row">
													<td class="table__cell">9:00</td>
													<td class="table__cell">Русская литература</td>
													<td class="table__cell">7 класс</td>
													<td class="table__cell table__cell--flex">203
														<img loading='lazy' width='12' height='12' src='./images/list_pen.svg' alt='иконка'>
													</td>																	
												</tr>
												
											</tbody>
										</table>
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
													<td class="table__cell table__cell--active">														
													</td>																	
												</tr>																		
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						<div class="tabs__body tabs__body_full _tabs-block">
							<div class="users__row-table-wr">
								<table class="table users__table">
									<tbody>
										<tr class="table__row table__row_head">
											<th class="table__header">
												<div class="events__filter-item events__filter-item--jc">
												<div class="events__filter-box-arrow box-arrow">
													<div class="arrow arrow-up"><img loading='lazy' width='7' height='5' src='./images/arrow_up.svg' alt='стрелка вверх'></div>
													<div class="arrow arrow-do"><img loading='lazy' width='7' height='5' src='./images/arrow_down.svg' alt='стрелка вниз'></div>
												</div>
												<div class="events__filter-name">Дата</div>
												</div>
											</th>
											<th class="table__header">
												<div class="events__filter-item events__filter-item--jc">
												<div class="events__filter-box-arrow box-arrow">
													<div class="arrow arrow-up"><img loading='lazy' width='7' height='5' src='./images/arrow_up.svg' alt='стрелка вверх'></div>
													<div class="arrow arrow-do"><img loading='lazy' width='7' height='5' src='./images/arrow_down.svg' alt='стрелка вниз'></div>
												</div>
												<div class="events__filter-name">Предмет</div>
												</div>
											</th>
											<th class="table__header">Класс</th>							
											<th class="table__header">
												<div class="events__filter-item events__filter-item--jc">
												<div class="events__filter-box-arrow box-arrow">
													<div class="arrow arrow-up"><img loading='lazy' width='7' height='5' src='./images/arrow_up.svg' alt='стрелка вверх'></div>
													<div class="arrow arrow-do"><img loading='lazy' width='7' height='5' src='./images/arrow_down.svg' alt='стрелка вниз'></div>
												</div>
												<div class="events__filter-name">Форма посещения</div>
												</div>
											</th>							
											<th class="table__header table__cell--pl">
												<div class="events__filter-item">
												<div class="events__filter-box-arrow box-arrow">
													<div class="arrow arrow-up"><img loading='lazy' width='7' height='5' src='./images/arrow_up.svg' alt='стрелка вверх'></div>
													<div class="arrow arrow-do"><img loading='lazy' width='7' height='5' src='./images/arrow_down.svg' alt='стрелка вниз'></div>
												</div>
												<div class="events__filter-name">Комментарий</div>
												</div>
											</th>							
										</tr>
										<tr class="table__row">
											<td class="table__cell">20.03.2021</td>
											<td class="table__cell">Русский язык</td>
											<td class="table__cell">5 класс</td>
											<td class="table__cell">Дистанционно</td>
											<td class="table__cell table__cell--tl table__cell--pl"><a href="#">+ Добавить</a></td>							
										</tr>
										<tr class="table__row">
											<td class="table__cell">03.02.2022</td>
											<td class="table__cell">Русская литература</td>
											<td class="table__cell">7 класс</td>
											<td class="table__cell">Очная</td>
											<td class="table__cell">Урок проведен корректно, введены новые методические пособия</td>																	
										</tr>
										<tr class="table__row">
											<td class="table__cell">20.03.2021</td>
											<td class="table__cell">Русский язык</td>
											<td class="table__cell">5 класс</td>
											<td class="table__cell">Дистанционно</td>
											<td class="table__cell table__cell--tl table__cell--pl"><a href="#">+ Добавить</a></td>							
										</tr>
										<tr class="table__row">
											<td class="table__cell">03.02.2022</td>
											<td class="table__cell">Русская литература</td>
											<td class="table__cell">7 класс</td>
											<td class="table__cell">Очная</td>
											<td class="table__cell">Урок проведен корректно, введены новые методические пособия</td>																	
										</tr>
										<tr class="table__row">
											<td class="table__cell">20.03.2021</td>
											<td class="table__cell">Русский язык</td>
											<td class="table__cell">5 класс</td>
											<td class="table__cell">Дистанционно</td>
											<td class="table__cell table__cell--tl table__cell--pl"><a href="#">+ Добавить</a></td>							
										</tr>
										<tr class="table__row">
											<td class="table__cell">03.02.2022</td>
											<td class="table__cell">Русская литература</td>
											<td class="table__cell">7 класс</td>
											<td class="table__cell">Очная</td>
											<td class="table__cell">Урок проведен корректно, введены новые методические пособия</td>																	
										</tr>
										
																			  
									  </tbody>
								</table>
								<div class="table-pagination table-pagination_nopadd">
									<div class="table-pagination__count">
										1-10 из 1240
									</div>
									<div class="table-pagination__bullets">
										<button class="bullets-left _disabled">
											<img src="images/table-pagination/left.svg" alt="left">
										</button>
										<button class="bullets-right">
											<img src="images/table-pagination/right.svg" alt="right">
										</button>
									</div>
								</div>
							</div>
						</div>
						<div class="tabs__body tabs__body_full _tabs-block">
							<div class="users__row-table-wr">
								<table class="table users__table">
									<tbody>
										<tr class="table__row table__row_head">
											<th class="table__header">
												<div class="events__filter-item events__filter-item--jc">
												<div class="events__filter-box-arrow box-arrow">
													<div class="arrow arrow-up"><img loading='lazy' width='7' height='5' src='./images/arrow_up.svg' alt='стрелка вверх'></div>
													<div class="arrow arrow-do"><img loading='lazy' width='7' height='5' src='./images/arrow_down.svg' alt='стрелка вниз'></div>
												</div>
												<div class="events__filter-name">Дата</div>
												</div>
											</th>											
											<th class="table__header">Тема</th>																					
											<th class="table__header table__cell--pl">
												<div class="events__filter-item">
												<div class="events__filter-box-arrow box-arrow">
													<div class="arrow arrow-up"><img loading='lazy' width='7' height='5' src='./images/arrow_up.svg' alt='стрелка вверх'></div>
													<div class="arrow arrow-do"><img loading='lazy' width='7' height='5' src='./images/arrow_down.svg' alt='стрелка вниз'></div>
												</div>
												<div class="events__filter-name ">Комментарий</div>
												</div>
											</th>							
										</tr>
										<tr class="table__row">
											<td class="table__cell ">20.03.2021</td>
											<td class="table__cell">Русский язык</td>											
											<td class="table__cell table__cell--tl table__cell--pl"><a href="#">+ Добавить</a></td>							
										</tr>
										<tr class="table__row">
											<td class="table__cell">03.02.2022</td>
											<td class="table__cell">Русская литература</td>											
											<td class="table__cell table__cell--tl table__cell--pl">Урок проведен корректно, введены новые методические пособия</td>							
										</tr>
										<tr class="table__row">
											<td class="table__cell">20.03.2021</td>
											<td class="table__cell">Русский язык</td>											
											<td class="table__cell table__cell--tl table__cell--pl"><a href="#">+ Добавить</a></td>							
										</tr>
										<tr class="table__row">
											<td class="table__cell">03.02.2022</td>
											<td class="table__cell">Русская литература</td>											
											<td class="table__cell table__cell--tl table__cell--pl">Урок проведен корректно, введены новые методические пособия</td>							
										</tr>
										<tr class="table__row">
											<td class="table__cell">20.03.2021</td>
											<td class="table__cell">Русский язык</td>											
											<td class="table__cell table__cell--tl table__cell--pl"><a href="#">+ Добавить</a></td>							
										</tr>
										<tr class="table__row">
											<td class="table__cell">03.02.2022</td>
											<td class="table__cell">Русская литература</td>											
											<td class="table__cell table__cell--tl table__cell--pl">Урок проведен корректно, введены новые методические пособия</td>							
										</tr>																											  
									  </tbody>
								</table>
								<div class="table-pagination table-pagination_nopadd">
									<div class="table-pagination__count">
										1-10 из 1240
									</div>
									<div class="table-pagination__bullets">
										<button class="bullets-left _disabled">
											<img src="images/table-pagination/left.svg" alt="left">
										</button>
										<button class="bullets-right">
											<img src="images/table-pagination/right.svg" alt="right">
										</button>
									</div>
								</div>
							</div>
						</div>
                    </div>
                </div>
            </div>
        </form>
      </section>
    </main>
    
</template>

<script>
import avatar from "@/assets/images/avatar.jpg"
export default {
  computed: {
    imageSrc: function () {
      const image = this.userData?.image;
      return image && image !== 'null' ? image : avatar;
    },
  }
}
</script>
