-- =============================================================
-- SEED: Países e Cidades
-- Execute APÓS schema.sql
-- =============================================================

-- ─── PAÍSES (195) ────────────────────────────────────────────

INSERT INTO countries (code, name, continent) VALUES
('AF','Afeganistão','Ásia'),('ZA','África do Sul','África'),('AL','Albânia','Europa'),
('DE','Alemanha','Europa'),('AD','Andorra','Europa'),('AO','Angola','África'),
('AG','Antígua e Barbuda','América do Norte'),('SA','Arábia Saudita','Ásia'),
('DZ','Argélia','África'),('AR','Argentina','América do Sul'),('AM','Armênia','Ásia'),
('AU','Austrália','Oceania'),('AT','Áustria','Europa'),('AZ','Azerbaijão','Ásia'),
('BS','Bahamas','América do Norte'),('BH','Bahrein','Ásia'),('BD','Bangladesh','Ásia'),
('BB','Barbados','América do Norte'),('BE','Bélgica','Europa'),('BZ','Belize','América do Norte'),
('BJ','Benin','África'),('BO','Bolívia','América do Sul'),('BA','Bósnia e Herzegovina','Europa'),
('BW','Botswana','África'),('BR','Brasil','América do Sul'),('BN','Brunei','Ásia'),
('BG','Bulgária','Europa'),('BF','Burkina Faso','África'),('BI','Burundi','África'),
('CV','Cabo Verde','África'),('CM','Camarões','África'),('KH','Camboja','Ásia'),
('CA','Canadá','América do Norte'),('QA','Catar','Ásia'),('KZ','Cazaquistão','Ásia'),
('TD','Chade','África'),('CL','Chile','América do Sul'),('CN','China','Ásia'),
('CY','Chipre','Europa'),('CO','Colômbia','América do Sul'),('KM','Comores','África'),
('CG','Congo','África'),('KP','Coreia do Norte','Ásia'),('KR','Coreia do Sul','Ásia'),
('CI','Costa do Marfim','África'),('CR','Costa Rica','América do Norte'),('HR','Croácia','Europa'),
('CU','Cuba','América do Norte'),('DK','Dinamarca','Europa'),('DJ','Djibuti','África'),
('DM','Dominica','América do Norte'),('EG','Egito','África'),('SV','El Salvador','América do Norte'),
('AE','Emirados Árabes Unidos','Ásia'),('EC','Equador','América do Sul'),('ER','Eritreia','África'),
('SK','Eslováquia','Europa'),('SI','Eslovênia','Europa'),('ES','Espanha','Europa'),
('US','Estados Unidos','América do Norte'),('EE','Estônia','Europa'),('SZ','Eswatini','África'),
('ET','Etiópia','África'),('FJ','Fiji','Oceania'),('PH','Filipinas','Ásia'),
('FI','Finlândia','Europa'),('FR','França','Europa'),('GA','Gabão','África'),
('GM','Gâmbia','África'),('GH','Gana','África'),('GE','Geórgia','Ásia'),
('GD','Granada','América do Norte'),('GR','Grécia','Europa'),('GT','Guatemala','América do Norte'),
('GY','Guiana','América do Sul'),('GN','Guiné','África'),('GW','Guiné-Bissau','África'),
('GQ','Guiné Equatorial','África'),('HT','Haiti','América do Norte'),('HN','Honduras','América do Norte'),
('HU','Hungria','Europa'),('YE','Iêmen','Ásia'),('IN','Índia','Ásia'),
('ID','Indonésia','Ásia'),('IR','Irã','Ásia'),('IQ','Iraque','Ásia'),
('IE','Irlanda','Europa'),('IS','Islândia','Europa'),('IL','Israel','Ásia'),
('IT','Itália','Europa'),('JM','Jamaica','América do Norte'),('JP','Japão','Ásia'),
('JO','Jordânia','Ásia'),('KW','Kuwait','Ásia'),('LA','Laos','Ásia'),
('LS','Lesoto','África'),('LV','Letônia','Europa'),('LB','Líbano','Ásia'),
('LR','Libéria','África'),('LY','Líbia','África'),('LI','Liechtenstein','Europa'),
('LT','Lituânia','Europa'),('LU','Luxemburgo','Europa'),('MG','Madagascar','África'),
('MY','Malásia','Ásia'),('MW','Malawi','África'),('MV','Maldivas','Ásia'),
('ML','Mali','África'),('MT','Malta','Europa'),('MA','Marrocos','África'),
('MU','Maurício','África'),('MR','Mauritânia','África'),('MX','México','América do Norte'),
('MZ','Moçambique','África'),('MD','Moldávia','Europa'),('MC','Mônaco','Europa'),
('MN','Mongólia','Ásia'),('ME','Montenegro','Europa'),('MM','Myanmar','Ásia'),
('NA','Namíbia','África'),('NP','Nepal','Ásia'),('NI','Nicarágua','América do Norte'),
('NE','Níger','África'),('NG','Nigéria','África'),('NO','Noruega','Europa'),
('NZ','Nova Zelândia','Oceania'),('OM','Omã','Ásia'),('NL','Países Baixos','Europa'),
('PK','Paquistão','Ásia'),('PW','Palau','Oceania'),('PS','Palestina','Ásia'),
('PA','Panamá','América do Norte'),('PG','Papua-Nova Guiné','Oceania'),('PY','Paraguai','América do Sul'),
('PE','Peru','América do Sul'),('PL','Polônia','Europa'),('PT','Portugal','Europa'),
('KE','Quênia','África'),('KG','Quirguistão','Ásia'),('GB','Reino Unido','Europa'),
('CF','República Centro-Africana','África'),('DO','República Dominicana','América do Norte'),
('CZ','República Tcheca','Europa'),('RO','Romênia','Europa'),('RW','Ruanda','África'),
('RU','Rússia','Europa'),('WS','Samoa','Oceania'),('SM','San Marino','Europa'),
('LC','Santa Lúcia','América do Norte'),('ST','São Tomé e Príncipe','África'),
('SN','Senegal','África'),('SL','Serra Leoa','África'),('RS','Sérvia','Europa'),
('SG','Singapura','Ásia'),('SY','Síria','Ásia'),('SO','Somália','África'),
('LK','Sri Lanka','Ásia'),('SD','Sudão','África'),('SS','Sudão do Sul','África'),
('SE','Suécia','Europa'),('CH','Suíça','Europa'),('SR','Suriname','América do Sul'),
('TH','Tailândia','Ásia'),('TW','Taiwan','Ásia'),('TJ','Tajiquistão','Ásia'),
('TZ','Tanzânia','África'),('TL','Timor-Leste','Ásia'),('TG','Togo','África'),
('TO','Tonga','Oceania'),('TT','Trinidad e Tobago','América do Norte'),('TN','Tunísia','África'),
('TM','Turcomenistão','Ásia'),('TR','Turquia','Europa'),('UA','Ucrânia','Europa'),
('UG','Uganda','África'),('UY','Uruguai','América do Sul'),('UZ','Uzbequistão','Ásia'),
('VU','Vanuatu','Oceania'),('VE','Venezuela','América do Sul'),('VN','Vietnã','Ásia'),
('ZM','Zâmbia','África'),('ZW','Zimbábue','África')
ON CONFLICT (code) DO NOTHING;

-- ─── CIDADES ─────────────────────────────────────────────────

INSERT INTO cities (name, country_code) VALUES
-- Brasil
('São Paulo','BR'),('Rio de Janeiro','BR'),('Brasília','BR'),('Salvador','BR'),
('Fortaleza','BR'),('Manaus','BR'),('Curitiba','BR'),('Recife','BR'),
('Porto Alegre','BR'),('Belo Horizonte','BR'),('Florianópolis','BR'),('Natal','BR'),
('Maceió','BR'),('João Pessoa','BR'),('Belém','BR'),('Goiânia','BR'),
('Campo Grande','BR'),('Teresina','BR'),('São Luís','BR'),('Foz do Iguaçu','BR'),
('Gramado','BR'),('Bonito','BR'),('Paraty','BR'),('Búzios','BR'),('Ouro Preto','BR'),
-- Argentina
('Buenos Aires','AR'),('Córdoba','AR'),('Rosario','AR'),('Mendoza','AR'),
('Salta','AR'),('Bariloche','AR'),('Ushuaia','AR'),('Iguazú','AR'),
('El Calafate','AR'),('Tucumán','AR'),('Mar del Plata','AR'),('Jujuy','AR'),
-- Chile
('Santiago','CL'),('Valparaíso','CL'),('Puerto Natales','CL'),('San Pedro de Atacama','CL'),
('Punta Arenas','CL'),('Temuco','CL'),('Puerto Varas','CL'),('Antofagasta','CL'),
-- Colômbia
('Bogotá','CO'),('Medellín','CO'),('Cartagena','CO'),('Cali','CO'),
('Barranquilla','CO'),('Santa Marta','CO'),('Leticia','CO'),('Manizales','CO'),
-- Peru
('Lima','PE'),('Cusco','PE'),('Arequipa','PE'),('Iquitos','PE'),
('Trujillo','PE'),('Puno','PE'),('Huaraz','PE'),('Machu Picchu','PE'),
-- Uruguai
('Montevidéu','UY'),('Punta del Este','UY'),('Colônia do Sacramento','UY'),
-- Bolívia
('La Paz','BO'),('Santa Cruz de la Sierra','BO'),('Sucre','BO'),('Potosí','BO'),('Salar de Uyuni','BO'),
-- Equador
('Quito','EC'),('Guayaquil','EC'),('Cuenca','EC'),('Galápagos','EC'),
-- Venezuela
('Caracas','VE'),('Mérida','VE'),('Maracaibo','VE'),
-- Paraguai
('Assunção','PY'),('Ciudad del Este','PY'),
-- Guiana
('Georgetown','GY'),
-- Suriname
('Paramaribo','SR'),

-- Estados Unidos
('Nova York','US'),('Los Angeles','US'),('Chicago','US'),('Houston','US'),
('Miami','US'),('San Francisco','US'),('Las Vegas','US'),('Washington DC','US'),
('Seattle','US'),('Boston','US'),('New Orleans','US'),('Nashville','US'),
('Denver','US'),('Atlanta','US'),('Dallas','US'),('Phoenix','US'),
('Orlando','US'),('San Diego','US'),('Portland','US'),('Honolulu','US'),
('Anchorage','US'),('Austin','US'),('Philadelphia','US'),('Detroit','US'),
('Minneapolis','US'),('Salt Lake City','US'),('Charleston','US'),('Savannah','US'),
-- Canadá
('Toronto','CA'),('Vancouver','CA'),('Montreal','CA'),('Quebec','CA'),
('Calgary','CA'),('Ottawa','CA'),('Banff','CA'),('Victoria','CA'),
('Halifax','CA'),('Niagara Falls','CA'),('Whistler','CA'),('Edmonton','CA'),
-- México
('Cidade do México','MX'),('Cancún','MX'),('Guadalajara','MX'),('Monterrey','MX'),
('Oaxaca','MX'),('San Miguel de Allende','MX'),('Puebla','MX'),('Tulum','MX'),
('Playa del Carmen','MX'),('Los Cabos','MX'),('Guanajuato','MX'),('Mérida','MX'),
('Chichen Itza','MX'),('Palenque','MX'),('Puerto Vallarta','MX'),
-- Cuba
('Havana','CU'),('Trinidad','CU'),('Varadero','CU'),('Viñales','CU'),('Santiago de Cuba','CU'),
-- República Dominicana
('Santo Domingo','DO'),('Punta Cana','DO'),('Puerto Plata','DO'),('La Romana','DO'),
-- Jamaica
('Kingston','JM'),('Montego Bay','JM'),('Negril','JM'),
-- Costa Rica
('San José','CR'),('Monteverde','CR'),('Manuel Antonio','CR'),('La Fortuna','CR'),
-- Panamá
('Cidade do Panamá','PA'),('Bocas del Toro','PA'),('Boquete','PA'),

-- França
('Paris','FR'),('Lyon','FR'),('Marseille','FR'),('Toulouse','FR'),('Nice','FR'),
('Bordeaux','FR'),('Strasbourg','FR'),('Nantes','FR'),('Montpellier','FR'),
('Lille','FR'),('Rennes','FR'),('Grenoble','FR'),('Versalhes','FR'),('Mont Saint-Michel','FR'),
-- Itália
('Roma','IT'),('Milão','IT'),('Florença','IT'),('Veneza','IT'),('Nápoles','IT'),
('Turim','IT'),('Bolonha','IT'),('Gênova','IT'),('Palermo','IT'),('Verona','IT'),
('Siena','IT'),('Pisa','IT'),('Amalfi','IT'),('Cinque Terre','IT'),('Pompeia','IT'),
('Positano','IT'),('Capri','IT'),('Bari','IT'),('Trieste','IT'),
-- Espanha
('Madrid','ES'),('Barcelona','ES'),('Sevilha','ES'),('Valencia','ES'),
('Bilbao','ES'),('Granada','ES'),('Málaga','ES'),('Toledo','ES'),
('Córdoba','ES'),('Salamanca','ES'),('San Sebastián','ES'),('Palma de Maiorca','ES'),
('Ibiza','ES'),('Santiago de Compostela','ES'),('Segóvia','ES'),('Ávila','ES'),
-- Portugal
('Lisboa','PT'),('Porto','PT'),('Faro','PT'),('Coimbra','PT'),('Braga','PT'),
('Évora','PT'),('Sintra','PT'),('Óbidos','PT'),('Cascais','PT'),('Lagos','PT'),
-- Alemanha
('Berlim','DE'),('Munique','DE'),('Hamburgo','DE'),('Frankfurt','DE'),
('Colônia','DE'),('Stuttgart','DE'),('Dresden','DE'),('Düsseldorf','DE'),
('Leipzig','DE'),('Nuremberg','DE'),('Heidelberg','DE'),('Rothenburg ob der Tauber','DE'),
('Neuschwanstein','DE'),('Bremen','DE'),
-- Reino Unido
('Londres','GB'),('Edimburgo','GB'),('Manchester','GB'),('Birmingham','GB'),
('Liverpool','GB'),('Bristol','GB'),('Bath','GB'),('Cambridge','GB'),
('Oxford','GB'),('York','GB'),('Glasgow','GB'),('Brighton','GB'),('Canterbury','GB'),
('Cardiff','GB'),('Belfast','GB'),('Stonehenge','GB'),
-- Países Baixos
('Amsterdã','NL'),('Roterdã','NL'),('Haia','NL'),('Utrecht','NL'),
('Delft','NL'),('Leiden','NL'),('Haarlem','NL'),('Eindhoven','NL'),
-- Bélgica
('Bruxelas','BE'),('Bruges','BE'),('Ghent','BE'),('Antuérpia','BE'),('Liège','BE'),
-- Suíça
('Zurique','CH'),('Genebra','CH'),('Berna','CH'),('Lausanne','CH'),
('Lucerna','CH'),('Interlaken','CH'),('Zermatt','CH'),('Basel','CH'),
('Jungfrau','CH'),('St. Moritz','CH'),
-- Áustria
('Viena','AT'),('Salzburgo','AT'),('Innsbruck','AT'),('Graz','AT'),('Hallstatt','AT'),('Linz','AT'),
-- Suécia
('Estocolmo','SE'),('Gotemburgo','SE'),('Malmö','SE'),('Uppsala','SE'),('Kiruna','SE'),
-- Noruega
('Oslo','NO'),('Bergen','NO'),('Tromsø','NO'),('Stavanger','NO'),('Flåm','NO'),
('Geiranger','NO'),('Ålesund','NO'),('Lofoten','NO'),
-- Dinamarca
('Copenhague','DK'),('Aarhus','DK'),('Odense','DK'),
-- Finlândia
('Helsinki','FI'),('Tampere','FI'),('Turku','FI'),('Rovaniemi','FI'),
-- Islândia
('Reiquiavique','IS'),('Akureyri','IS'),('Blue Lagoon','IS'),('Höfn','IS'),
-- Polônia
('Varsóvia','PL'),('Cracóvia','PL'),('Gdańsk','PL'),('Wrocław','PL'),('Poznań','PL'),('Łódź','PL'),
-- República Tcheca
('Praga','CZ'),('Brno','CZ'),('Český Krumlov','CZ'),('Karlovy Vary','CZ'),
-- Hungria
('Budapeste','HU'),('Debrecen','HU'),('Pécs','HU'),('Eger','HU'),
-- Romênia
('Bucareste','RO'),('Cluj-Napoca','RO'),('Brasov','RO'),('Sibiu','RO'),('Sighișoara','RO'),
-- Grécia
('Atenas','GR'),('Santorini','GR'),('Mikonos','GR'),('Tessalônica','GR'),
('Rodes','GR'),('Creta','GR'),('Corfu','GR'),('Meteora','GR'),('Delfos','GR'),
-- Croácia
('Zagreb','HR'),('Dubrovnik','HR'),('Split','HR'),('Zadar','HR'),('Pula','HR'),('Hvar','HR'),
-- Sérvia
('Belgrado','RS'),('Novi Sad','RS'),
-- Eslovênia
('Ljubljana','SI'),('Bled','SI'),
-- Montenegro
('Podgorica','ME'),('Kotor','ME'),('Budva','ME'),
-- Bulgária
('Sófia','BG'),('Plovdiv','BG'),('Varna','BG'),
-- Rússia
('Moscou','RU'),('São Petersburgo','RU'),('Novosibirsk','RU'),('Sochi','RU'),
('Vladivostok','RU'),('Kazan','RU'),('Ecaterimburgo','RU'),
-- Ucrânia
('Kiev','UA'),('Lviv','UA'),('Odessa','UA'),('Kharkiv','UA'),
-- Estônia
('Tallinn','EE'),
-- Letônia
('Riga','LV'),
-- Lituânia
('Vilnius','LT'),
-- Irlanda
('Dublin','IE'),('Cork','IE'),('Galway','IE'),('Killarney','IE'),
-- Turquia
('Istambul','TR'),('Ancara','TR'),('Izmir','TR'),('Capadócia','TR'),
('Antalya','TR'),('Éfeso','TR'),('Pamukkale','TR'),('Bodrum','TR'),
-- Geórgia
('Tbilisi','GE'),('Batumi','GE'),('Kazbegi','GE'),
-- Armênia
('Erevan','AM'),
-- Azerbaijão
('Baku','AZ'),

-- Japão
('Tóquio','JP'),('Kyoto','JP'),('Osaka','JP'),('Hiroshima','JP'),('Nara','JP'),
('Yokohama','JP'),('Sapporo','JP'),('Fukuoka','JP'),('Kobe','JP'),('Nagoya','JP'),
('Nikko','JP'),('Hakone','JP'),('Kanazawa','JP'),('Nagasaki','JP'),('Okinawa','JP'),
-- China
('Pequim','CN'),('Xangai','CN'),('Guangzhou','CN'),('Chengdu','CN'),('Xi''an','CN'),
('Guilin','CN'),('Hangzhou','CN'),('Suzhou','CN'),('Shenzhen','CN'),('Chongqing','CN'),
('Lijiang','CN'),('Zhangjiajie','CN'),('Huangshan','CN'),('Lhasa','CN'),
-- Coreia do Sul
('Seul','KR'),('Busan','KR'),('Jeju','KR'),('Gyeongju','KR'),('Incheon','KR'),
-- Taiwan
('Taipé','TW'),('Kaohsiung','TW'),('Tainan','TW'),('Hualien','TW'),
-- Hong Kong (exibido via CN mas listado separado)
-- Tailândia
('Bangkok','TH'),('Chiang Mai','TH'),('Phuket','TH'),('Pattaya','TH'),
('Koh Samui','TH'),('Ayutthaya','TH'),('Chiang Rai','TH'),('Koh Phi Phi','TH'),
-- Vietnã
('Hanói','VN'),('Ho Chi Minh','VN'),('Hội An','VN'),('Đà Nẵng','VN'),
('Hạ Long','VN'),('Nha Trang','VN'),('Huế','VN'),('Sapa','VN'),
-- Camboja
('Phnom Penh','KH'),('Siem Reap','KH'),('Angkor Wat','KH'),
-- Laos
('Vientiane','LA'),('Luang Prabang','LA'),('Vang Vieng','LA'),
-- Myanmar
('Yangon','MM'),('Bagan','MM'),('Mandalay','MM'),('Inle Lake','MM'),
-- Indonésia
('Bali','ID'),('Jakarta','ID'),('Yogyakarta','ID'),('Lombok','ID'),
('Komodo','ID'),('Ubud','ID'),('Seminyak','ID'),('Makassar','ID'),
-- Malásia
('Kuala Lumpur','MY'),('Penang','MY'),('Langkawi','MY'),('Malacca','MY'),
('Kota Kinabalu','MY'),('Kuching','MY'),
-- Singapura
('Singapura','SG'),
-- Filipinas
('Manila','PH'),('Cebu','PH'),('Palawan','PH'),('Boracay','PH'),('Davao','PH'),
-- Índia
('Delhi','IN'),('Mumbai','IN'),('Agra','IN'),('Jaipur','IN'),('Varanasi','IN'),
('Kolkata','IN'),('Chennai','IN'),('Bangalore','IN'),('Hyderabad','IN'),('Goa','IN'),
('Udaipur','IN'),('Jodhpur','IN'),('Pushkar','IN'),('Rishikesh','IN'),
('Darjeeling','IN'),('Amritsar','IN'),('Kochi','IN'),
-- Nepal
('Katmandu','NP'),('Pokhara','NP'),('Namche Bazaar','NP'),('Bhaktapur','NP'),
-- Sri Lanka
('Colombo','LK'),('Kandy','LK'),('Galle','LK'),('Sigiriya','LK'),('Ella','LK'),
-- Maldivas
('Malé','MV'),('Maafushi','MV'),('Baa Atol','MV'),
-- Emirados Árabes Unidos
('Dubai','AE'),('Abu Dhabi','AE'),('Sharjah','AE'),
-- Arábia Saudita
('Riad','SA'),('Jeddah','SA'),('Meca','SA'),('AlUla','SA'),
-- Israel
('Tel Aviv','IL'),('Jerusalém','IL'),('Haifa','IL'),('Eilat','IL'),
-- Jordânia
('Amã','JO'),('Petra','JO'),('Wadi Rum','JO'),('Aqaba','JO'),
-- Líbano
('Beirute','LB'),('Baalbek','LB'),
-- Irã
('Teerã','IR'),('Isfahan','IR'),('Shiraz','IR'),('Yazd','IR'),
-- Egito
('Cairo','EG'),('Luxor','EG'),('Assuã','EG'),('Alexandria','EG'),
('Hurghada','EG'),('Sharm el-Sheikh','EG'),
-- Marrocos
('Marrakech','MA'),('Fez','MA'),('Casablanca','MA'),('Rabat','MA'),
('Chefchaouen','MA'),('Tânger','MA'),('Essaouira','MA'),('Meknes','MA'),('Agadir','MA'),
-- Tunísia
('Tunis','TN'),('Sousse','TN'),('Kairouan','TN'),('Djerba','TN'),
-- África do Sul
('Cidade do Cabo','ZA'),('Joanesburgo','ZA'),('Durban','ZA'),('Pretória','ZA'),
('Kruger','ZA'),('Garden Route','ZA'),('Stellenbosch','ZA'),
-- Quênia
('Nairóbi','KE'),('Mombasa','KE'),('Masai Mara','KE'),('Amboseli','KE'),
-- Tanzânia
('Dar es Salaam','TZ'),('Zanzibar','TZ'),('Serengeti','TZ'),('Arusha','TZ'),('Kilimanjaro','TZ'),
-- Etiópia
('Adis Abeba','ET'),('Lalibela','ET'),('Gondar','ET'),('Axum','ET'),
-- Ruanda
('Kigali','RW'),('Ruhengeri','RW'),
-- Uganda
('Kampala','UG'),('Jinja','UG'),('Bwindi','UG'),
-- Gana
('Acra','GH'),('Kumasi','GH'),('Cape Coast','GH'),
-- Senegal
('Dacar','SN'),('Saint-Louis','SN'),
-- Nigéria
('Lagos','NG'),('Abuja','NG'),('Ibadan','NG'),
-- Namíbia
('Windhoek','NA'),('Sossusvlei','NA'),('Etosha','NA'),('Swakopmund','NA'),
-- Madagáscar
('Antananarivo','MG'),('Nosy Be','MG'),('Morondava','MG'),
-- Moçambique
('Maputo','MZ'),('Ilha de Moçambique','MZ'),('Vilanculos','MZ'),
-- Botsuana
('Gaborone','BW'),('Maun','BW'),('Okavango','BW'),('Chobe','BW'),
-- Zimbábue
('Harare','ZW'),('Victória Falls','ZW'),('Hwange','ZW'),
-- Zâmbia
('Lusaka','ZM'),('Victoria Falls','ZM'),('South Luangwa','ZM'),

-- Austrália
('Sydney','AU'),('Melbourne','AU'),('Brisbane','AU'),('Perth','AU'),
('Adelaide','AU'),('Cairns','AU'),('Darwin','AU'),('Hobart','AU'),
('Gold Coast','AU'),('Byron Bay','AU'),('Uluru','AU'),('Great Barrier Reef','AU'),
-- Nova Zelândia
('Auckland','NZ'),('Wellington','NZ'),('Christchurch','NZ'),('Queenstown','NZ'),
('Rotorua','NZ'),('Milford Sound','NZ'),('Napier','NZ'),('Dunedin','NZ'),
-- Fiji
('Suva','FJ'),('Nadi','FJ'),

-- Capitais e cidades principais dos demais países
('Kabul','AF'),('Tirana','AL'),('Luanda','AO'),('Saint John''s','AG'),
('Manama','BH'),('Daca','BD'),('Bridgetown','BB'),('Belmopán','BZ'),
('Cotonu','BJ'),('Sucre','BO'),('Sarajevo','BA'),('Bandar Seri Begawan','BN'),
('Sófia','BG'),('Ouagadougou','BF'),('Bujumbura','BI'),('Praia','CV'),
('Yaoundé','CM'),('Phnom Penh','KH'),('Doha','QA'),('Nur-Sultan','KZ'),
('N''Djamena','TD'),('Nicósia','CY'),('Yamoussoukro','CI'),('San José','CR'),
('Havana','CU'),('Djibuti','DJ'),('Roseau','DM'),('El Salvador','SV'),
('Quito','EC'),('Asmara','ER'),('Bratislava','SK'),('Ljubljana','SI'),
('Tallinn','EE'),('Mbabane','SZ'),('Adis Abeba','ET'),('Suva','FJ'),
('Manila','PH'),('Helsinki','FI'),('Libreville','GA'),('Banjul','GM'),
('Acra','GH'),('São Jorge','GD'),('Atenas','GR'),('Cidade da Guatemala','GT'),
('Georgetown','GY'),('Conacri','GN'),('Bissau','GW'),('Malabo','GQ'),
('Porto Príncipe','HT'),('Tegucigalpa','HN'),('Sanaã','YE'),
('Nova Delhi','IN'),('Jacarta','ID'),('Bagdá','IQ'),('Dublin','IE'),
('Kingston','JM'),('Amã','JO'),('Kuwait','KW'),('Vientiane','LA'),
('Maseru','LS'),('Riga','LV'),('Beirute','LB'),('Monróvia','LR'),
('Trípoli','LY'),('Vaduz','LI'),('Vilnius','LT'),('Luxemburgo','LU'),
('Antananarivo','MG'),('Kuala Lumpur','MY'),('Lilongwe','MW'),
('Malé','MV'),('Bamaco','ML'),('Valletta','MT'),('Nouakchott','MR'),
('Cidade do México','MX'),('Maputo','MZ'),('Chișinău','MD'),
('Mônaco','MC'),('Ulan Bator','MN'),('Podgorica','ME'),('Naipidá','MM'),
('Windhoek','NA'),('Katmandu','NP'),('Manágua','NI'),('Niamey','NE'),
('Abuja','NG'),('Oslo','NO'),('Mascate','OM'),('Amsterdã','NL'),
('Islamabad','PK'),('Melekeok','PW'),('Ramallah','PS'),('Cidade do Panamá','PA'),
('Port Moresby','PG'),('Assunção','PY'),('Varsóvia','PL'),
('Nairóbi','KE'),('Bishkek','KG'),('Bangui','CF'),('Santo Domingo','DO'),
('Bucareste','RO'),('Kigali','RW'),('Moscou','RU'),('Apia','WS'),
('São Marino','SM'),('Castries','LC'),('São Tomé','ST'),('Dacar','SN'),
('Freetown','SL'),('Belgrado','RS'),('Damasco','SY'),('Mogadíscio','SO'),
('Cartum','SD'),('Juba','SS'),('Estocolmo','SE'),('Paramaribo','SR'),
('Bancoc','TH'),('Dushanbe','TJ'),('Dar es Salaam','TZ'),('Díli','TL'),
('Lomé','TG'),('Nukualofa','TO'),('Porto de Espanha','TT'),('Tunis','TN'),
('Asgabate','TM'),('Campala','UG'),('Montevidéu','UY'),('Tasquente','UZ'),
('Port Vila','VU'),('Caracas','VE'),('Hanói','VN'),('Lusaka','ZM'),('Harare','ZW')
ON CONFLICT DO NOTHING;
