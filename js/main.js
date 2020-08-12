// Группы объектов
var groups =[


{name: "Москва",
preset: "islands#redDotIcon",
items:[{center:[55.893278, 37.396838], name: "Студия косметологии «Вектор стиля», улица Родионовская, дом 5", description: "Адрес: Москва, улица Родионовская, дом 5 <br> Сайт: <a href='http://www.vectorstyle.ru/' target='_blank'>www.vectorstyle.ru</a>"},{center:[55.765113, 37.615237], name: "Центр медицинской косметологии «Петровка бьюти», улица Петровка, дом 19, строение 5", description: "Адрес: Москва, улица Петровка, дом 19 строение 5 <br> Сайт: <a href='http://petrovka-beauty.ru/' target='_blank'>petrovka-beauty.ru</a>"},{center:[55.632357, 37.516377], name: "Студия красоты «Эстетика лайн», улица Профсоюзная, дом 124, корпус А", description: "Адрес: Москва, Метро КОНЬКОВО, улица Профсоюзная, дом 124, корпус А <br> Сайт: <a href='https://estetikaline.ru/' target='_blank'>estetikaline.ru</a>"},{center:[55.799350, 37.274406], name: "Салон красоты «Whitе Fox», Новорижское шоссе, 5 км, ТРЦ Рига-Молл", description: "Адрес:  Москва, Новорижское шоссе, 5 км, ТРЦ Рига-Молл, 3-й этаж <br> Сайт: <a href='http://www.whitefox.ru' target='_blank'>www.whitefox.ru</a> <br> Email: <a href='mailto:info3@whitefox.ru'>info3@whitefox.ru</a> <br> Телефон: +7 (495) 150-70-16 <br> Часы работы: С 10:00 до 22:00"},{center:[55.780102, 37.559164], name: "Клиника ЛИНЛАЙН на Беговой, улица Беговая, дом 24", description: "Адрес:  125284, г. Москва, улица Беговая, дом 24 <br> Сайт: <a href='https://www.linline-clinic.ru' target='_blank'>www.linline-clinic.ru</a> <br>  Телефон: +7 (495) 374-59-99 <br> Часы работы: С 09:00 до 21:00"},{center:[55.828046, 37.491170], name: "Клиника ЛИНЛАЙН на Ленинградском шоссе, Ленинградское шоссе, дом 26, корпус 1", description: "Адрес:  125212, Москва, Ленинградское шоссе, дом 26, кор. 1 <br> Сайт: <a href='https://www.linline-clinic.ru' target='_blank'>www.linline-clinic.ru</a> <br>  Телефон: +7 (495) 374-59-99 <br> Часы работы: С 09:00 до 21:00"},{center:[55.769474, 37.647729], name: "Клиника ЛИНЛАЙН на Садовой-Спасской, улица Садовая-Спасская, дом 19/1, помещение 2", description: "Адрес:  107078, Москва, улица Садовая-Спасская, дом 19/1, помещение 2 <br> Сайт: <a href='https://www.linline-clinic.ru' target='_blank'>www.linline-clinic.ru</a> <br>  Телефон: +7 (495) 374-59-99 <br> Часы работы: С 09:00 до 21:00"},{center:[55.697067, 37.553810], name: "ЛИНЛАЙН-V.I.F., Университетский проспект, дом 4", description: "Адрес:  119333, г.Москва, Университетский проспект, дом 4 <br> Сайт: <a href='https://www.linline-clinic.ru' target='_blank'>www.linline-clinic.ru</a> <br>  Телефон: +7 (499) 137-58-67 <br> Часы работы: С 09:00 до 21:00"},{center:[55.682615, 37.488440], name: "Клиника ЛИНЛАЙН на Удальцова, улица Удальцова, дом 85, корпус 2", description: "Адрес:  119454, Москва, улица Удальцова, дом 85, корпус 2 <br> Сайт: <a href='https://www.linline-clinic.ru' target='_blank'>www.linline-clinic.ru</a> <br>  Телефон: +7 (495) 730-55-55 <br> Часы работы: С 09:00 до 21:00"},{center:[55.755642, 37.587290], name: "Клиника ЛИНЛАЙН на Новом Арбате, переулок Трубниковский, дом 30, строение 1", description: "Адрес:  121069, Москва, переулок Трубниковский, дом 30, строение 1 <br> Сайт: <a href='https://www.linline-clinic.ru' target='_blank'>www.linline-clinic.ru</a> <br>  Телефон: +7 (499) 110-69-35 <br> Часы работы: С 09:00 до 21:00"},{center:[55.831999, 37.661096], name: "Академия красоты Dominika, улица Бажова, дом 8", description: "Адрес:  г. Москва, ул. Бажова, дом 8 <br> Сайт: <a href='http://dn-style.ru/' target='_blank'>dn-style.ru</a> <br>  Телефон: +7 (499) 750-2111, +7 (915) 328-08-05"},{center:[55.702307, 37.515093], name: "Клиника Марины Рябус, Ломоносовский проспект, дом 29, корпус 2", description: "Адрес:  г. Москва, Ломоносовский проспект, дом 29, корпус 2 <br> Сайт: <a href='https://marinaryabus.ru/' target='_blank'>marinaryabus.ru</a> <br>  Телефон: +7 (499) 397-71-30, +7 (499) 394-13-50 <br> Часы работы: ПН.-СБ. С 10:00 до 21:00"},{center:[55.755221, 37.564302], name: "Клиника эстетической медицины Premium Aesthetics, улица Рочдельская, дом 15, строение 16", description: "Адрес:  г. Москва, улица Рочдельская, дом 15, строение 16, 1 этаж<br> Сайт: <a href='https://clinic-premium.ru/' target='_blank'>clinic-premium.ru</a> <br> Email: mail@clinic-premium.ru <br>  Телефон: +7 (499) 11-200-11 <br> Часы работы: С 10:00 до 22:00"},{center:[55.795459, 37.484622], name: "Центр косметологии «Орнатэ», улица Маршала Конева, дом 16", description: "Адрес:  г. Москва, улица Маршала Конева, дом 16<br> Сайт: <a href='http://www.ornate-center.ru/' target='_blank'>ornate-center.ru</a> <br> Email: info@ornate-center.ru <br>  Телефон: +7 (499) 688-89-50 <br> Часы работы: С 10:00 до 22:00"},{center:[55.767899, 37.618938], name: "Британская сеть салонов красоты SACO, Петровский бульвар, дом 21", description: "Адрес:  г. Москва, Петровский бульвар, дом 21<br> Сайт: <a href='https://sacohair.ru/' target='_blank'>sacohair.ru</a> <br> Телефон: +7 (499) 521 69 12"},{center:[55.739250, 37.508229], name: "Клиника пластической хирургии и косметологии, улица Барклая, дом 6, строение 5", description: "Адрес:  г. Москва, улица Барклая, дом 6, строение 5, оф.210<br> Сайт: <a href='https://www.lantanclinic.ru' target='_blank'>lantanclinic.ru</a> <br> Телефон: +7 (495) 407-78-35"},{center:[55.689999, 37.580831], name: "Клиника Детали, улица Винокурова, дом 2", description: "Адрес:  г. Москва, улица Винокурова, дом 2, <br> Сайт: <a href='https://detali.com' target='_blank'>detali.com</a> <br> Телефон: +7 (495) 988-59-90"},{center:[55.855532, 37.495797], name: "Сеть фитнес-клубов «Ситифитнес», улица Лавочкина, дом 32", description: "Адрес:  г. Москва, улица Лавочкина, дом 32, <br> Сайт: <a href='https://cityfit.ru' target='_blank'>cityfit.ru</a> <br> Телефон: 8-800-550-72-57"},{center:[55.731597, 37.615165], name: "Фитнес центр «World Class», Житная улица, дом 14, строение 3", description: "Адрес:  г. Москва, Житная улица, дом 14, строение 3, <br> Сайт: <a href='https://www.worldclass.ru' target='_blank'>www.worldclass.ru</a> <br> Телефон: +7 (495) 788-00-00"},{center:[55.796046, 37.494099], name: "Салон красоты «Модные Люди», улица Маршала Рыбалко дом 3", description: "Адрес:  г. Москва, улица Маршала Рыбалко дом 3, <br> Сайт: <a href='https://mlsalon.ru/' target='_blank'>mlsalon.ru</a> <br> Телефон: +7 (499) 194-00-14, +7 (499) 194-00-15"},

{center:[55.880904, 37.700559], name: "Санаторий Светлана, улица Таежная,  дом 1", description: "Адрес:  г. Москва, улица Таежная,  дом 1, <br> Сайт: <a href='https://devon-medical.ru/' target='_blank'>devon-medical.ru</a> <br> Телефон: +7 (495) 474-36-96"},

{center:[55.695651, 37.400737], name: "Салон красоты Buro Beauty, улица Весенняя дом 2/1", description: "Адрес:  г. Москва, Сколково Парк, ЖК Заречье, улица Весенняя дом 2/1, <br> Сайт: <a href='http://www.burobeautysalon.ru' target='_blank'>burobeautysalon.ru</a>"},

{center:[55.751746, 37.411454], name: "Салон красоты Модные люди, Рублевское шоссе, дом 44, корпус 1", description: "Адрес:  г. Москва, Рублевское шоссе, дом 44, корпус 1, <br> Сайт: <a href='https://mlsalon.ru' target='_blank'>mlsalon.ru</a>"},

{center:[55.880904, 37.700559], name: "Лечебно-оздоровительный курорт Devon Medical & Spа, улица Таежная, дом 1", description: "Адрес: г. Москва, улица Таежная, дом 1, <br> Сайт: <a href='https://devon-medical.ru' target='_blank'>devon-medical.ru</a>"},

{center:[55.770583, 37.397404], name: "Авторская клиника NEO VITA, улица Крылатская, дом 45, корпус 1", description: "Адрес: г. Москва, улица Крылатская, дом 45, корпус 1, <br> Сайт: <a href='http://neo-vita.ru' target='_blank'>neo-vita.ru</a>"},

{center:[55.704823, 37.497495], name: "Клиника доктора Юркина, улица Мосфильмовская, дом 53", description: "Адрес: г. Москва, улица Мосфильмовская, дом 53, <br> Сайт: <a href='https://doctoryurkin.ru' target='_blank'>doctoryurkin.ru</a>"},

{center:[55.763883, 37.642815], name: "Клиника эстетической медицины Grand Clinic, Гусятников переулок дом 13/3", description: "Адрес: г. Москва, Гусятников переулок дом 13/3, <br> Сайт: <a href='http://www.grand-clinic.ru' target='_blank'>grand-clinic.ru</a>"},

{center:[55.733346, 37.577597], name: "Салон Мишель Экзертье, улица Россолимо 17", description: "Адрес: г. Москва,  улица Россолимо 17, <br> Сайт: <a href='http://www.grand-clinic.ru' target='_blank'>grand-clinic.ru</a>"},

{center:[55.774026, 37.584469], name: "Центр Современной косметологии Ремейк, улица 2-я Брестская, дом 39 строение 3", description: "Адрес: г. Москва,  улица 2-я Брестская, дом 39 строение 3, <br> Сайт: <a href='https://remake-center.ru' target='_blank'>remake-center.ru</a>"},

]},




{name: "Санкт-Петербург", 
preset: "islands#redDotIcon",
style: "important",
items:[{center:[60.054993, 30.311489], name: "Эстетик-Клуб, Выборгское шоссе, дом 17-4", description:"Адрес: Санкт-Петербург, Выборгское шоссе, дом 17-4 <br> Сайт: <a href='https://estetik.ru' target='_blank'>estetik.ru</a>"},{center:[60.009719, 30.262911], name: "Эстетик-Клуб, улица Уточкина, дом 1", description:"Адрес: Санкт-Петербург, улица Уточкина, дом 1 <br> Сайт: <a href='https://estetik.ru' target='_blank'>estetik.ru</a>"},{center:[59.969218, 30.306903], name: "Эстетик-Клуб, набережная реки Карповки, дом 16", description:"Адрес: Санкт-Петербург, набережная реки Карповки, дом 16 <br> Сайт: <a href='https://estetik.ru' target='_blank'>estetik.ru</a>"},{center:[59.941928, 30.284612], name: "Эстетик-Клуб, 4-ая линия В.О., дом 13 ", description:"Адрес: Санкт-Петербург, 4-ая линия В.О., дом 13 <br> Сайт: <a href='https://estetik.ru' target='_blank'>estetik.ru</a>"},{center:[59.973221, 30.259571], name: "MEDICI, Крестовский остров, улица Кемская, дом 1", description:"Адрес: Крестовский остров, улица Кемская, дом 1 <br> Сайт: <a href='https://medici-clinic.ru' target='_blank'>medici-clinic.ru</a> <br> Телефон: <a href='+78122440707'>+7 (812) 244-07-07</a>"},{center:[59.974709, 30.316339], name: "Клиника Sacre, проспект Медиков, дом 10", description: "Адрес: Санкт-Петербург, проспект Медиков дом 10 корпус 1 <br> <a href='https://www.instagram.com/klinikasacre/' target='_blank'>instagram.com/klinikasacre</a>"},{center:[59.958224, 30.322210], name: "Салон красоты «Cutrin», улица Большая Посадская, дом 6", description: "Адрес: Санкт-Петербург, улица Большая Посадская, дом 6 <br> Сайт: <a href='https://saloncutrin.ru' target='_blank'>saloncutrin.ru</a>"},{center:[59.879353, 30.315266], name: "Клиника семейной косметологии, улица Варшавская, дом 6", description: "Адрес: Санкт-Петербург, улица Варшавская, дом 6, корпус 2, строение 1, помещение 16-Н <br> Сайт: <a href='https://ksk-clinic.ru/' target='_blank'>ksk-clinic.ru</a>"},{center:[60.014027, 30.323931], name: "Медицинский центр Skin Laser Med, проспект Энгельса, дом 47", description: "Адрес: Санкт-Петербург, Энгельса пр., дом 47 <br> Сайт: <a href='https://www.skinlazermed.ru' target='_blank'>www.skinlazermed.ru</a>"},{center:[59.929980, 30.376972], name: "Медицинский центр ГАЙДЕ,  Херсонская улица, дом 2/9", description: "Адрес: Санкт-Петербург, Херсонская улица, дом 2/9 <br> Сайт: <a href='https://guideh.clinic' target='_blank'>guideh.clinic</a> <br> Телефон: +7 (812) 322-93-90"},{center:[59.935872, 30.311421], name: "Санкт-Петербургский Институт Красоты на Гороховой,  улица Гороховая, дом 6", description: "Адрес: Санкт-Петербург, улица Гороховая, дом 6 <br> Сайт: <a href='http://клиника-эстетики.рф' target='_blank'>клиника-эстетики.рф</a> <br> Телефон: +7 (812) 315-22-15"},{center:[59.965453, 30.288487], name: "Клиника доктора Элины Самойловской,  улица Петрозаводская, дом 13", description: "Адрес: Санкт-Петербург, улица Петрозаводская, дом 13 <br> Сайт: <a href='https://samoylovskaya.ru' target='_blank'>samoylovskaya.ru</a> <br> Телефон: +7? 911 819-81-93"},{center:[59.973221, 30.259571], name: "Клиника пластической хирургии и косметологии MEDICI,  улица Кемская, дом 1", description: "Адрес: Санкт-Петербург, улица Кемская, дом 1 <br> Сайт: <a href='https://www.medici-clinic.ru' target='_blank'>medici-clinic.ru</a> <br> Телефон: +7 (812) 244-07-07"},{center:[59.953772, 30.292997], name: "Медицинский центр ЭстиМед,  Большой проспект, дом 5", description: "Адрес: Санкт-Петербург, Большой проспект, дом 5 <br> Сайт: <a href='https://med98.ru' target='_blank'>med98.ru</a> <br> Телефон: +7 (812) 928-70-98, +7 (911) 928-70-98"},{center:[59.935583, 30.346698], name: "Российско-финская клиника Скандинавия, Литейный проспект, дом 55А", description: "Адрес: Санкт-Петербург, Литейный проспект, дом 55А <br> Сайт: <a href='https://www.avaclinic.ru' target='_blank'>avaclinic.ru</a> <br> Телефон: +7 (812) 445-69-34"},
{center:[59.932734, 30.349600], name: "Клиника эстетической медицины Меди, Невский проспект, дом 82", description: "Адрес: Санкт-Петербург, Невский проспект, дом 82 <br> Сайт: <a href='http://medi.spb.ru' target='_blank'>medi.spb.ru</a> <br> Телефон: +7 (812) 777-00-00"},

{center:[60.051513, 30.335236], name: "Медицинский центр АльтерМед, проспект Энгельса, дом 139/21", description: "Адрес: Санкт-Петербург, проспект Энгельса, дом 139/21 <br> Сайт: <a href='https://www.altermed.ru' target='_blank'>altermed.ru</a>"},

{center:[59.924226, 30.333772], name: "Центр Косметологии АнИрМед, улица Бородиснкая, дом 13", description: "Адрес: Санкт-Петербург, улица Бородиснкая, дом 13 <br> Сайт: <a href='https://anirmed.ru' target='_blank'>anirmed.ru</a>"},

{center:[59.928158, 30.321788], name: "Клиника аппаратной косметологии Epilime, улица Садовая, дом 38", description: "Адрес: Санкт-Петербург, улица Садовая, дом 38 <br> Сайт: <a href='https://epilime.ru' target='_blank'>epilime.ru</a>"},

{center:[59.941362, 30.288362], name: "Медицинский центр ЭстиМед, Большой проспект, дом 5", description: "Адрес: Санкт-Петербург,  Большой проспект, дом 5 <br> Сайт: <a href='http://med98.ru' target='_blank'>med98.ru</a>"},

{center:[59.962161, 30.301163], name: "Салон красоты Beauty Lounge, улица Лахтинская, дом 14", description: "Адрес: Санкт-Петербург, улица Лахтинская, дом 14 <br> Сайт: <a href='https://beautylounge.ru' target='_blank'>beautylounge.ru</a>"},

{center:[59.960088, 30.318653], name: "Центр аппаратной косметологии Эсма, улица Мира, дом 15, корпус 1", description: "Адрес: Санкт-Петербург, улица Мира, дом 15, корпус 1<br> Сайт: <a href='https://ecma.ru' target='_blank'>ecma.ru</a>"},

{center:[59.871960, 30.323818], name: "Косметологический центр Эстетик Лайф, улица Кузнецовская , дом 36, помещение 17Н", description: "Адрес: Санкт-Петербург, улица Кузнецовская , дом 36, помещение 17Н"},

{center:[59.941962, 30.354038], name: "Центр лазерной косметологии Lin Line, улица Артиллерийская, дом 10", description: "Адрес: Санкт-Петербург, улица Артиллерийская, дом 10 <br> Сайт: <a href='https://www.linline-clinic.ru' target='_blank'>linline-clinic.ru</a>"},

]},





{name: "Адлер",
preset: "islands#redDotIcon",
items:[{center:[43.441183, 39.911950], name: "Клинка Лазерной Косметологии «Бархат», улица Ленина, дом 156", description: "Адрес: г. Адлер, улица Ленина, дом 156 <br> Телефон: +7 (988) 235-00-53"},]},


{name: "Барнаул",
preset: "islands#redDotIcon",
items:[{center:[53.350553, 83.692702], name: "СПА центр 77, улица Сухэ-Батора, 7", description: "Адрес: г. Барнаул, улица Сухэ-Батора, 7 <br> Сайт: <a href='http://www.spacentr77.ru' target='_blank'>www.spacentr77.ru</a> <br> Телефон: +7 (3852) 22-29-72"},]},


{name: "Белгород",
preset: "islands#redDotIcon",
items:[{center:[50.597839, 36.597257], name: "Салон красоты и здоровья Стиль Жизни, улица Преображенская, дом 44", description: "Адрес: г. Белгород, улица Преображенская, дом 44 <br> Сайт: <a href='https://styleriviera.ru' target='_blank'>styleriviera.ru</a>"},]},


{name: "Владикавказ",
preset: "islands#redDotIcon",
items:[{center:[43.023661, 44.674162], name: "Центр лазерной косметологии «Эль клиник», улица Кубалова, дом 11", description: "Адрес: г. Владикавказ, Кубалова, дом 11 <br> Сайт: <a href='https://fotocosmetolog.ru' target='_blank'>fotocosmetolog.ru</a> <br> Телефон: +7 (918) 824-43-53, 94-43-53"},{center:[43.022468, 44.659511], name: "Салон красоты «Винтаж», улица Первомайская, дом 34", description: "Адрес: г. Владикавказ, улица Первомайская, дом 34 <br> Телефон: +7 (928) 686-26-62; +7 (967) 471-00-00"},]},


{name: "Владимир",
preset: "islands#redDotIcon",
items:[{center:[56.111639, 40.346214], name: "«МедЭстет», улица Верхняя Дуброва, дом 15", description: "Адрес: г. Владимир, улица Верхняя Дуброва, дом 15 <br> Сайт: <a href='https://www.medestet.com' target='_blank'>medestet.com</a> <br> Телефон: +7 (4922) 344-998 <br> Время работы: ПН. - ПТ. 09:30 - 20:00, ВС. 09:30 - 16:00"}]},


{name: "Вологда",
preset: "islands#redDotIcon",
items:[
{center:[59.212653, 39.892188], name: "Косметологический центр Амалуна, улица Герцена, дом 32", description: "Адрес: г. Вологда, улица Герцена, дом 32 <br> Сайт: <a href='http://amaluna35.ru' target='_blank'>amaluna35.ru</a>"},

{center:[59.210534, 39.842088], name: "Центр эстетической медицины Ирины Домбровской, улица Южакова, дом 4", description: "Адрес: г. Вологда, улица Южакова, дом 4 <br> Сайт: <a href='https://www.cemid.ru' target='_blank'>cemid.ru</a>"},

]},


{name: "Воронеж",
preset: "islands#redDotIcon",
items:[
{center:[51.698571, 39.197907], name: "Клиника «Докторъ Ч», улица Ипподромная, дом 2В", description: "Адрес: г. Воронеж, улица Ипподромная, дом 2В <br> Сайт: <a href='https://www.doctorche.ru' target='_blank'>doctorche.ru</a>"},

]},


{name: "Долгопрудный",
preset: "islands#redDotIcon",
items:[

{center:[55.931608, 37.498060], name: "ЦЭМ «Сиар», проспект Ракетостроителей, дом 3", description: "Адрес: г. Долгопрудный, проспект Ракетостроителей, дом 3 <br> Сайт: <a href='https://www.shumskaya.ru' target='_blank'>shumskaya.ru</a> <br> Телефон: +7 (495) 924-56-84, +7 (499) 978-73-11, +7 (909) 964-57-87"},

{center:[55.936469, 37.494063], name: "Сеть медицинских центров Nixor, Лихачевский проспект, дом 76 корпус 1", description: "Адрес: г. Долгопрудный, Лихачевский проспект, дом 76 корпус 1<br> Сайт: <a href='https://www.nixorclinik.ru' target='_blank'>nixorclinik.ru</a>"},

]},


{name: "Екатеринбург",
preset: "islands#redDotIcon",
items:[

{center:[56.844894, 60.591429], name: "Спа салон Т.У.Ш.Ь, улица Бориса Ельцина, дом 3", description: "Адрес: г. Екатеринбург, улица Бориса Ельцина, дом 3 <br> Сайт: <a href='https://tyshspa.ru' target='_blank'>tyshspa.ru</a> <br> Телефон: +7 (343) 345-32-32 <br> Время работы: ПН. - ВС. 09:00 - 21:00"},

{center:[56.833082, 60.580568], name: "Клиника Эсти Лайн, улица Попова, дом 33А", description: "Адрес: г. Екатеринбург, улица Попова, дом 33А <br> Сайт: <a href='https://www.e-line.su' target='_blank'>e-line.su</a>"},

{center:[56.815656, 60.619834], name: "Сеть клиник ЛинЛайн, улица Белинского, дом 122", description: "Адрес: г. Екатеринбург, улица Белинского, дом 122 <br> Сайт: <a href='https://www.linline-clinic.ru' target='_blank'>linline-clinic.ru</a>"},

]},


{name: "Ижевск",
preset: "islands#redDotIcon",
items:[{center:[52.258597, 104.363036], name: "Медицинский инновационный центр Лада-Эстет, улица Карла Маркса, дом 206", description: "Адрес: г. Ижевск, улица Карла Маркса, дом 206 <br> Сайт: <a href='https://www.lada-lada.info' target='_blank'>lada-lada.info</a>"}]},


{name: "Иркутск",
preset: "islands#redDotIcon",
items:[{center:[52.258597, 104.363036], name: "Косметологическая клиника «ДанМедКлиник», Байкальская улица, дом 309", description: "Адрес: г. Иркутск, Байкальская улица, дом 309"}]},


{name: "Йошкар-Ола",
preset: "islands#redDotIcon",
items:[
{center:[56.647390, 47.897398], name: "Салон красоты «Территория Красоты», улица Льва Толстого, дом 66", description: "Адрес: г. Йошкар-Ола, улица Льва Толстого, дом 66 <br> Сайт: <a href='https://vk.com/publicterritoriyakrasoty' target='_blank'>vk.com/publicterritoriyakrasoty</a>"}]},


{name: "Казань",
preset: "islands#redDotIcon",
items:[
{center:[55.836302, 49.109235], name: "Салон красоты «Healthy Joy», улица Чуйкова, дом 9", description: "Адрес: г. Казань, улица Чуйкова, дом 9 <br> Сайт: <a href='http://hjoy.ru/kontakty.html' target='_blank'>hjoy.ru</a>"},


{center:[55.791845, 49.157636], name: "Клиника красоты и здоровья  «Лазерная эстетика», улица Ершова, дом 18", description: "Адрес: г. Казань, улица Ершова, дом 18 <br> Сайт: <a href='http://www.laser-estet.ru' target='_blank'>laser-estet.ru</a>"}

]},


{name: "Кемерово",
preset: "islands#redDotIcon",
items:[{center:[55.351574, 86.078376], name: "Центр эстетической медицины EQUILIBRIUM, улица Весенняя, дом 19", description: "Адрес: г. Кемерово, улица Весенняя, дом 19 <br> Сайт: <a href='http://clinic-equilibrium.ru' target='_blank'>clinic-equilibrium.ru</a>"}]},


{name: "Киров",
preset: "islands#redDotIcon",
items:[{center:[58.604519, 49.662300], name: "СПА Салон «Вероника», улица Дерендяева, дом 28", description: "Адрес: г. Киров, улица Дерендяева, дом 28 <br> Сайт: <a href='https://spa-veronika.ru' target='_blank'>spa-veronika.ru</a> <br> Телефон: +7 (922) 951-1000,  +7 (8332) 64-53-54"}]},


{name: "Королев",
preset: "islands#redDotIcon",
items:[
{center:[55.933499, 37.844648], name: "Салон красоты Уголок для души и тела, улица Пушкинская, дом 13", description: "Адрес: г. Королев, улица Пушкинская, дом 13<br> Сайт: <a href='http://уголок-для-души-и-тела.рф' target='_blank'>уголок-для-души-и-тела.рф</a>"},

]},


{name: "Кострома",
preset: "islands#redDotIcon",
items:[
{center:[57.759646, 40.945327], name: "Tutto Bene Beauty Institute& Spa, улица Овражная, дом 18", description: "Адрес: г. Кострома, улица Овражная, дом 18 <br> Сайт: <a href='https://tuttobene-spa.ru' target='_blank'>tuttobene-spa.ru</a> <br> Телефон: +7 (4942) 64-10-10 <br> Время работы: ПН. - ПТ. 09:00 - 21:00, СБ. 09:00 - 20:00, ВС. 09:00 - 19:00"},

{center:[57.540410, 41.088923], name: "СПА салон при эко-отеле Романов лес, деревня Лунево, дом 50", description: "Адрес: г. Кострома, деревня Лунево, дом 50 <br> Сайт: <a href='http://www.romanovles.ru/' target='_blank'>romanovles.ru</a>"},

]},


{name: "Краснодар",
preset: "islands#redDotIcon",
items:[
{center:[45.049641, 38.965683], name: "Сеть клиник ЛинЛайн, улица Красных Партизан, дом 210", description: "Адрес: Краснодар, улица Красных Партизан, дом 210 <br> Сайт: <a href='https://www.linline-clinic.ru' target='_blank'>linline-clinic.ru</a>"},
]},


{name: "Краснознаменск",
preset: "islands#redDotIcon",
items:[{center:[55.602118, 37.029903], name: "Медицинский центр «Зарина», улица Генерала Шлыкова, дом 8", description: "Адрес:  Краснознаменск (Одинцовский район), улица Генерала Шлыкова, дом 8, офис №1 <br> Сайт: <a href='http://zarina-med.ru/' target='_blank'>zarina-med.ru</a>"}]},


{name: "Липецк",
preset: "islands#redDotIcon",
items:[{center:[52.616897, 39.595258], name: "Медико-эстетический центр «Комильфо», улица Гагарина, дом 45А, 5 этаж", description: "Адрес: г. Липецк, улица Гагарина, дом 45А, 5 этаж <br> Сайт: <a href='http://komilfocentr.ru' target='_blank'>komilfocentr.ru</a> <br> Телефон: +7 (4742) 90-09-09"}]},


{name: "Ломоносов",
preset: "islands#redDotIcon",
items:[{center:[59.897172, 29.774040], name: "Медицинский центр «Здоровье для всех», Ораниенбаумский проспект, дом 39Б", description: "Адрес: г. Ломоносов, Ораниенбаумский проспект, дом 39Б <br> Сайт: <a href='http://medcentr.org' target='_blank'>medcentr.org</a>"}]},


{name: "Магадан",
preset: "islands#redDotIcon",
items:[
{center:[59.569545, 150.800070], name: "ООО «ЕВА КЛИНИК», улица Советская, дом 2", description: "Адрес: г. Магадан, улица Советская, дом 2 <br> Сайт: <a href='http://eva-clinic.com/' target='_blank'>eva-clinic.com</a>"}]},


{name: "Магнитогорск",
preset: "islands#redDotIcon",
items:[{center:[53.425007, 58.979896], name: "Клиника эстетической медицины «Домино», проспект К.Маркса, дом 43", description: "Адрес: г. Магнитогорск, проспект К.Маркса, дом 43 <br> Сайт: <a href='http://domino174.ru' target='_blank'>domino174.ru</a> <br> Телефон: +7 (3519) 232-424, +7 (3519) 235-656 <br> Время работы: ПН. - СБ. 09:00 - 20:00, ВС. 10:00 - 18:00"}]},


{name: "Махачкала",
preset: "islands#redDotIcon",
items:[{center:[42.997423, 47.475136], name: "Клиника Арт-Мед, улица Мирзабекова, дом 80А/1", description: "Адрес: г. Махачкала, улица Мирзабекова, дом 80А/1  <br> Телефон: +7 (964) 014-09-69"}]},


{name: "Мурманск",
preset: "islands#redDotIcon",
items:[{center:[68.955626, 33.076202], name: "Центр Красоты и Здоровья БИО Эстетик, проспект Ленина, дом 29", description: "Адрес: г. Мурманск, проспект Ленина, дом 29  <br> Сайт: <a href='https://bio51.ru/' target='_blank'>bio51.ru</a>"}]},


{name: "Нижневартовск",
preset: "islands#redDotIcon",
items:[{center:[60.931455, 76.626402], name: "Резиденция красоты и здоровья Императрица, улица Мира, дом 99", description: "Адрес: г. Нижневартовск, улица Мира, дом 99"}]},


{name: "Новороссийск",
preset: "islands#redDotIcon",
items:[{center:[44.707944, 37.779610], name: "Сеть клиник ЛинЛайн, улица Серова, дом 17", description: "Адрес: г. Новороссийск, улица Серова, дом 17  <br> Сайт: <a href='https://www.linline-clinic.ru' target='_blank'>linline-clinic.ru</a>"}]},


{name: "Новосибирск",
preset: "islands#redDotIcon",
items:[{center:[55.013715, 82.937623], name: "Клиника косметологии «Алтика», улица Декабристов, дом 41", description: "Адрес: г. Новосибирск, улица Декабристов, дом 41 <br> Сайт: <a href='https://altika-clinic.ru' target='_blank'>altika-clinic.ru</a> <br> Телефон: +7 (383) 312-07-59 "},{center:[55.039749, 82.921472], name: "Центр красоты и здоровья «Sante Esthetique», улица Мичурина, дом 21", description: "Адрес: г. Новосибирск,  улица Мичурина, дом 21 <br> Сайт: <a href='https://sante-nsk.ru' target='_blank'>sante-nsk.ru</a> <br> Телефон: +7 (383) 221-49-22 "},{center:[55.027970, 82.935000], name: "Центр врачебной косметологии «Облик», улица Семьи Шамшиных, дом 16", description: "Адрес: г. Новосибирск,  улица Семьи Шамшиных, дом 16 <br> Телефон: +7 (991) 446-51-35 "},]},


{name: "Омск",
preset: "islands#redDotIcon",
items:[

{center:[54.995348, 73.353084], name: "Французский салон красоты Kriss Triane, Волочаевская улица, дом 15 корпус 2", description: "Адрес: г. Омск, Волочаевская улица, дом 15 корпус 2 <br> Сайт: <a href='http://krisst.ru' target='_blank'>krisst.ru</a> <br> Телефон: +7 (3812) 33-20-22"},

{center:[55.011846, 73.325416], name: "Медицинский центр Камелот, улица Красный путь, дом 153, корпус 3", description: "Адрес: г. Омск,  улица Красный путь, дом 153, корпус 3 <br> Сайт: <a href='https://antiageomsk.ru' target='_blank'>antiageomsk.ru</a>"},

{center:[55.001829, 73.373719], name: "Премиум-центр эстетической медицины Satus re-age, улица Герцена, дом 48", description: "Адрес: г. Омск, улица Герцена, дом 48 <br> Сайт: <a href='http://re-age.ru' target='_blank'>re-age.ru</a>"},

{center:[54.983262, 73.396581], name: "Салон красоты Нимфа, улица Куйбышева, дом 62", description: "Адрес: г. Омск,  улица Куйбышева, дом 62<br> Сайт: <a href='http://salon-nimfa.ru' target='_blank'>salon-nimfa.ru</a>"},
]},


{name: "Петрозаводск",
preset: "islands#redDotIcon",
items:[

{center:[61.767322, 34.298558], name: "Многопрофильная клиника Академика, улица Попова, дом 11", description: "Адрес: г. Петрозаводск, улица Попова, дом 11 <br> Сайт: <a href='http://academica.pro' target='_blank'>academica.pro</a> <br> Телефон: +7 (8142) 33-03-04 <br> Время работы: 09:00 - 21:00"},

{center:[61.781916, 34.349160], name: "Салон красоты Гран При, улица Горького, дом 25", description: "Адрес: г. Петрозаводск,  улица Горького, дом 25 <br> Сайт: <a href='https://salongranpri.ru' target='_blank'>salongranpri.ru</a>"},

]},


{name: "Реутов",
preset: "islands#redDotIcon",
items:[{center:[55.752014, 37.873628], name: "Mira Центр Косметологии, Юбилейный проспект, дом 41", description: "Адрес: г. Реутов, Юбилейный проспект, дом 41<br> Сайт: <a href='https://ckmira.ru' target='_blank'>ckmira.ru</a> <br> Телефон: +7 (498) 661-07-30<br> Время работы: 10:00 - 22:00"}]},


{name: "Ростов-на-Дону",
preset: "islands#redDotIcon",
items:[{center:[47.230425, 39.749203], name: "Студия косметологии «Бьюти Лайн», улица Верхненольная, дом 10", description: "Адрес: Ростов-на-Дону, улица Верхненольная, дом 10 <br> Сайт: <a href='http://www.beautyline-rostov.ru/' target='_blank'>www.beautyline-rostov.ru</a>"},{center:[47.225248, 39.701062], name: "Сеть лазерных клиник «Skinerica», улица Красноармейская, дом 72", description: "Адрес: Ростов-на-Дону, улица Красноармейская, дом 72 <br> Сайт: <a href='https://rostov.skinerica-clinic.ru/' target='_blank'>rostov.skinerica-clinic.ru</a> <br> Телефон: 8 (800) 777-47-82"},]},


{name: "Самара",
preset: "islands#redDotIcon",
items:[{center:[53.212663, 50.142243], name: "Центр медицинской косметологии и пластической хирурги «Нью Лайф», улица Ново-Садовая, дом 31", description: "Адрес: г. Самара, улица Ново-Садовая, дом 31, <br> Сайт: <a href='https://newlifesamara.ru' target='_blank'>newlifesamara.ru</a> <br> Телефон: +7 (846) 263-44-84 <br> Время работы: ПН. - СБ. 09:00 - 21:00"}]},


{name: "Саратов",
preset: "islands#redDotIcon",
items:[

{center:[51.536341, 46.022183], name: "Салон красоты SPA LOUNGE, улица Московская, 113 - 117", description: "Адрес: улица Московская, 113 - 117, Саратов, Саратовская обл., 410012, <br> Телефон: +7 (920) 666-81-02"},

{center:[52.033774, 47.773970], name: "Центр красоты и здоровья Венера, г. Балаково, улица Свердлова, дом 4", description: "Адрес: Саратовская область, г. Балаково, улица Свердлова, дом 4 <br> Сайт: <a href='https://venerasalon.ru' target='_blank'>venerasalon.ru</a>"},

]},


{name: "Смоленск",
preset: "islands#redDotIcon",
items:[{center:[54.761992, 32.027141], name: "Салон красоты PREMIUM AESTHETICS, Черняховского улица, дом 29", description: "Адрес: г. Смоленск, Черняховского улица, дом 29, <br> Телефон: +7 (920) 666-81-02"},{center:[54.783850, 32.042044], name: "Медико-косметологический центр «Боте», улица Пржевальского, дом 9/27", description: "Адрес: г. Смоленск, улица Пржевальского, дом 9/27, <br>Сайт: <a href='http://mkcbeaute.ru' target='_blank'>mkcbeaute.ru</a> <br> Телефон: +7 (4812) 389-494"}]},


{name: "Сочи",
preset: "islands#redDotIcon",
items:[

{center:[43.595156, 39.725873], name: "Клинка Лазерной Косметологии «Бархат», улица Юных Ленинцев, дом 1", description: "Адрес: г.Сочи, улица Юных Ленинцев, дом 1 <br>Сайт: <a href='https://laserbarhat.ru' target='_blank'>laserbarhat.ru</a>  <br> Телефон: +7 (988) 235-50-05"},

{center:[43.605914, 39.725379], name: "Клиника дерматологии и косметологии «Skin Expert», улица Гагарина, дом 43", description: "Адрес: г.Сочи, улица Гагарина, дом 43 <br>Сайт: <a href='http://skinexpert-sochi.ru/' target='_blank'>skinexpert-sochi.ru</a>"},

]},


{name: "Сургут",
preset: "islands#redDotIcon",
items:[{center:[61.247059, 73.406112], name: "Центр эндокринологии Здравамед, проспект Ленина, дом 18", description: "Адрес: г. Сургут, проспект Ленина, дом 18 <br>Сайт: <a href='http://zdravamed.ru/' target='_blank'>zdravamed.ru</a>"}]},


{name: "Томск",
preset: "islands#redDotIcon",
items:[{center:[56.467235, 84.965894], name: "Косметологическая клиника Нежность, Красноармейская улица, дом 96", description: "Адрес: г. Томск, Красноармейская улица, дом 96 <br> Телефон: +7 (3822) 43–12–46 +7 (3822) 22–55–30"}]},


{name: "Тула",
preset: "islands#redDotIcon",
items:[
{center:[54.199180, 37.581280], name: "Клиника лазерной медицины Л-мед, Красноармейский проспект, дом 48", description: "Адрес: г. Тула, Красноармейский проспект, дом 48 <br> Сайт: <a href='http://www.l-med.ru' target='_blank'>l-med.ru</a>"},
]},


{name: "Тюмень",
preset: "islands#redDotIcon",
items:[
{center:[57.149274, 65.532935], name: "Салон красоты премиум класса L.A.K., улица Грибоедова дом 6, корпус 1/7", description: "Адрес: г. Тюмень, улица Грибоедова 6, корпус 1/7, 2 этаж (Отель «Ремезов») <br> Сайт: <a href='http://vip-lak.ru' target='_blank'>vip-lak.ru</a> <br> Телефон: +7 (3452) 38-39-17, +7 (922) 473-88-41"},

{center:[57.159546, 65.544137], name: "Клиника эстетической медицины Косметик ПРО, улица Водопроводная, дом 6", description: "Адрес: г. Тюмень, улица Водопроводная, дом 6 <br> Сайт: <a href='http://klinikakosmetikpro.ru/' target='_blank'>klinikakosmetikpro.ru</a>"}
]},


{name: "Улан-Удэ",
preset: "islands#redDotIcon",
items:[{center:[51.821111, 107.648714], name: "АРТ-КЛИНИК Центр Эстетической Медицины, улица Ключевская, дом 72", description: "Адрес: г. Улан-Удэ, улица Ключевская, дом 72 <br> Сайт: <a href='https://artklinik.ru' target='_blank'>artklinik.ru</a> <br> Телефон: +7 (3012) 57-03-06 <br> Время работы: ПН. - ВС. 10:00 - 20:00"}]},


{name: "Ульяновск",
preset: "islands#redDotIcon",
items:[
{center:[54.326764, 48.396969], name: "Клиника красоты и долголетия Дега, улица Федерации, дом 52", description: "Адрес: г. Ульяновск, улица Федерации, дом 52 <br> Сайт: <a href='http://clinica-dega.ru' target='_blank'>clinica-dega.ru</a>"},

{center:[54.322363, 48.383189], name: "Медицинский центр ЛазерМед, улица Робеспьера, дом 81/4", description: "Адрес: г. Ульяновск, улица Робеспьера, дом 81/4 <br> Сайт: <a href='http://lazermed73.ru' target='_blank'>lazermed73.ru</a>"},

]},


{name: "Уфа",
preset: "islands#redDotIcon",
items:[
{center:[54.740901, 55.958898], name: "Косметологическая клиника Иночи, улица Цюрупы, дом 145/1", description: "Адрес: г. Уфа,  улица Цюрупы, дом 145/1 <br> Сайт: <a href='http://inochiufa.ru' target='_blank'>inochiufa.ru</a>"},

{center:[54.724027, 55.960173], name: "Клиника врачебной косметологии Международный МедЦентр, улица Энгельса, дом 1/1", description: "Адрес: г. Уфа,  улица Энгельса, дом 1/1 <br> Сайт: <a href='http://cosmetclinic.ru' target='_blank'>cosmetclinic.ru</a>"},

{center:[54.732678, 55.954765], name: "Сеть клиник ЛинЛайн, улица Достоевского, дом 100", description: "Адрес: г. Уфа,  улица Достоевского, дом 100 <br> Сайт: <a href='https://www.linline-clinic.ru' target='_blank'>linline-clinic.ru</a>"},

]},


{name: "Хабаровск",
preset: "islands#redDotIcon",
items:[{center:[48.473038, 135.071243], name: "Центр эстетической медицины Медэст, Дзержинского улица, дом 21А", description: "Адрес: г. Хабаровск, Дзержинского улица, дом 21А <br> Сайт: <a href='https://www.medaest.ru' target='_blank'>www.medaest.ru</a> <br> Телефон: +7 (4212) 30-69-82"},{center:[48.474746, 135.058235], name: "Медицинский центр Эстетик Холл, Комсомольская улица, дом 94", description: "Адрес: г. Хабаровск, Комсомольская улица, дом 94 <br> Сайт: <a href='http://estetikholl.ru/' target='_blank'>estetikholl.ru</a> <br> Телефон: +7 (4212) 30-05-57, +7 (4212) 30-50-57"}]},


{name: "Химки",
preset: "islands#redDotIcon",
items:[
{center:[55.906799, 37.400503], name: "Клиника Эстетика Групп, улица Марии Рубцовой, дом 7", description: "Адрес: г. Химки, Марии Рубцовой, дом 7 <br> Сайт: <a href='https://esthetica-group.ru/' target='_blank'>esthetica-group.ru</a>"},


]},


{name: "Челябинск",
preset: "islands#redDotIcon",
items:[
{center:[55.168167, 61.444217], name: "Medeor Cosmetology Clinic, улица Горького, дом 16", description: "Адрес: г. Челябинск, улица Горького, дом 16 <br> Сайт: <a href='https://medeorcosmetology.clinic' target='_blank'>medeorcosmetology.clinic</a>"},

{center:[55.200092, 61.330751], name: "Водно-развлекательный клуб Атлантида СПА, улица Молодогвардейцев, дом 17", description: "Адрес: г. Челябинск, улица Молодогвардейцев, дом 17 <br> Сайт: <a href='http://www.atlantida-spa.su' target='_blank'>atlantida-spa.su</a>"},

{center:[55.161769, 61.429683], name: "Клиника HOLST AESTHETIC CLINIC, проспект Ленина, дом 26-Ас2", description: "Адрес: г. Челябинск, проспект Ленина, дом 26-Ас2 <br> Сайт: <a href='https://www.instagram.com/dr_lizin/' target='_blank'>instagram.com/dr_lizin/</a>"},

{center:[55.165313, 61.409785], name: "Сеть клиник ЛинЛайн, улица Карла Маркса, дом 81", description: "Адрес: г. Челябинск, улица Карла Маркса, дом 81 <br> Сайт: <a href='https://www.linline-clinic.ru' target='_blank'>linline-clinic.ru</a>"},

{center:[55.173889, 61.401664], name: "Центр аппаратной косметологии Луч света, улица Братьев Кашириных, дом 12", description: "Адрес: г. Челябинск, улица Карла Маркса, дом 81 <br> Сайт: <a href='http://luchsveta.com/' target='_blank'>luchsveta.com</a>"},

]},



{name: "Чита",
preset: "islands#redDotIcon",
items:[{center:[52.058411, 113.499522], name: "Медицинский центр Академия Здоровья, улица Коханского, дом 13", description: "Адрес: г. Чита, Коханского, 13 <br> Сайт: <a href='http://az-chita.ru' target='_blank'>az-chita.ru</a> <br> Телефон: +7 (3022) 217-911"}]},


{name: "Южно-Сахалинск",
preset: "islands#redDotIcon",
items:[{center:[46.938688, 142.756779], name: "Центр эстетики лица и тела Belle Femme, улица Горького, дом 58-А", description: "Адрес: г. Южно-Сахалинск, улица Горького, дом 58-А <br> Сайт: <a href='http://www.belle65.ru' target='_blank'>www.belle65.ru</a> <br> Телефон: 753-399"}]},


{name: "Якутск",
preset: "islands#redDotIcon",
items:[
{center:[62.028491, 129.706711], name: "Центр New Age, улица Тургенева, дом 10", description: "Адрес: г. Якутск , улица Тургенева, дом 10"},
]},


{name: "Ярославль",
preset: "islands#redDotIcon",
items:[
{center:[57.625870, 39.887211], name: "Институт красоты Рашель, улица Кирова, дом 12", description: "Адрес: город Ярославль, улица Кирова, дом 12 <br> Сайт: <a href='https://rashele.ru' target='_blank'>rashele.ru</a> <br> Телефон: +7 (4852) 30-41-39, 72-69-05"},

{center:[57.634124, 39.861654], name: "Центр Здоровья Созвездие Красоты, проспект Ленина, дом 35/88", description: "Адрес: город Ярославль, проспект Ленина, дом 35/88 <br> Сайт: <a href='http://sozvezdie76.ru' target='_blank'>sozvezdie76.ru</a> <br> Телефон: +7 (4852) 73-77-88"},

{center:[57.633194, 39.867385], name: "Медицинский центр Диагностики и профилактики, улица Некрасова, дом 60", description: "Адрес: город Ярославль, улица Некрасова, дом 60 <br> Сайт: <a href='http://www.ymc2003.ru' target='_blank'>ymc2003.ru</a>"},

]}

,];


        
        ymaps.ready(init);

        function init(){// Создание экземпляра карты.
            var myMap = new ymaps.Map('map',{center:[59.941750, 30.284105],
                zoom: 1, controls: ['smallMapDefaultSet']});

            var select = $('<select class="nav nav-list city_select">');
			
			var optionSelected = $('<option selected>Выберите город</option>');
			
			var selectEnding = $('</select>');

			optionSelected.appendTo(select);

            $.each(groups, function (index, group){
				var selectOption = $('<option class="city_option" value="' + group.name + '">' + group.name + '</option>');

				// Создадим коллекцию для геообъектов группы.
                collection = new ymaps.GeoObjectCollection(null,{preset: group.preset});

                // Добавляем коллекцию на карту.
                myMap.geoObjects.add(collection);

                
				
				selectOption.appendTo(select);
				selectEnding.appendTo(select);



	                $.each(group.items, function (index, item){

		            	var salonItem = $('<div class="city_line" data-city="' + group.name + '" style="display:none;"> <i class="fa fa-map-marker"></i><a href="#">' + item.name + '</a></div>');

		            	// Создаем метку.
		                var placemark = new ymaps.Placemark(item.center,{balloonContent: item.description});

		                // Добавляем метку в коллекцию.
		                collection.add(placemark);
						
						

		                salonItem
						.appendTo("#cities")
						.on('click', function (e){
                            e.preventDefault();// Отменяем основное поведение (переход по ссылке)
							
							salonItem
                                .toggleClass('active')
                                .siblings('.active')
                                .removeClass('active');

                            if(placemark.balloon.isOpen()){placemark.balloon.close();}else{// Плавно меняем центр карты на координаты метки.
                                myMap.panTo(
                                    placemark.geometry.getCoordinates(),{delay: 0,
                                        zoom:19}).then(function (){placemark.balloon.open();});}

						});


            		});

            });


            


            select.appendTo("#sidebar");
			
			

			// выборка элементов
			select.change(function(){
					
					var optionValue =  $(".city_select").val();					

					$(".city_line").hide();
					 
					$('.city_line[data-city="' +optionValue+ '"]').show();

					$(".city_block").show();

					$("#fold").show();


					$("#fold").click(function(){
						$("#city_wrap").hide("slow");
						$("#unfold").show("slow");
					});

					$("#unfold").click(function(){
						$("#city_wrap").show("slow");
						$("#unfold").hide("slow");
					});
					

				});
            
            myMap.setBounds(myMap.geoObjects.getBounds());
};
            
