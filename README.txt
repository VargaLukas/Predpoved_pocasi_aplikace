
*******************************************************************
WEBOVÁ APLIKACE - PŘEDPOVEĎ POČASÍ
*******************************************************************

Tahle webová aplikace nevznikla za komerčním účelem nýbrž jako otestování funkčnosti a nabrání nových zkušeností při programování webových aplikací. 

Cílem aplikace je zaistit správné zobrazování předpovědi počasí a některých dalších atributů na základě vybrané lokality z celého světa - v tomto případě zadáním konkrétního města. Zároveň ale aplikace také reaguje na zobrazení předpovědi počasí i v celém státě (s menší odchylkou a vzhledem k velikosti státu ale nemusí být předpověď velmi konkrétní - jako například USA, India, Rusko a podobně).

Aplikace byla naprogramována pomocí editorů Visual Studio Code a Brackets a za použití HTML5, CSS3 a Javascriptu, který zajišťuje dynamiku aplikace samotné. Nutno podotknout, že aplikace by správně nefungovala, kdyby nebyli použité zdroje třetích stran - především REST API a JSON ze stránek openweathermap.org. 

*******************************************************************
POPIS APLIKACE
*******************************************************************

Aplikace má za úkol zobrazit aktuální předpověď počasí v zadané lokalitě (především města, ale také může zobrazit předpověď v celém státě - viz.výše). 

Po zadání požadované lokality do vyhledávacího okna a stisknutím Enter-u na klávesnici (případně po kliknutí myší na ikonu "lupičky" na straně vyhledávacího okna) se zobrazí aktuální předpověď počasí včetně několika atributů. Výpis veškerých atributů je uveden níže: 

MĚSTO 
AKTUTÁLNÍ TEPLOTA
IKONA ZOBRAZUJÍCÍ AKTUÁLNÍ POČASÍ (zamračeno, slunečno, deštivo, a pod.)

Doplňujícími atributy předpovědi počasí jsou také: 

VLHKOST
RYCHLOST VĚTRU

Součástí aplikace je také zobrazení počasí na následujících 5 dní ode dne zadání požadované lokality do vyhledávacího okna. Tyto sa následně zobrazí pod aktuální předpověď. 

Atributy, které jsou součástí 5-denní předpovědi jsou: 

DATUM
IKONA ZOBRAZUJÍCÍ AKTUÁLNÍ POČASÍ (zamračeno, slunečno, deštivo, a pod.)
TEPLOTA 
VLHKOST 
RYCHLOST VĚTRU (s přihlédnutím na velikost okna, v kterém jsou data uložena musel být původní atribut "Rychlost větru" přejmenován na "Vítr" - zobrazuje ale stejná data jako aktuální předpověď.)

*******************************************************************

REST API a JSON soubory

Nutno podotknout, že aplikace by správně nezobrazovala aktuální data bez použití zdroje třetí strany - v tomto případě se jedná o REST API soubory a také soubory JSON, které byli  použity z webového zdroje: openweathermap.org

POSTUP: 

Po vytvoření registrace na stránce openweathermap.org (bezplatná registrace) se vygeneroval tzv. "API klíč", který se následně vložil do kódu aplikace (v tomto případě do Javascriptového souboru). Po načtení všech potřebných dat z REST API může následně aplikace zpracovat data a zobrazit aktuální informace, které uživatel požaduje. 

Z důvodu zachování jednoduchosti aplikace byli některé atributy, které API může zobrazit "zablokovány" a vybrány pouze ty, které by uživatel mohl považovat za relevantní (vlhkost vzduchu, rychlost větru a pod.)

*******************************************************************

*******************************************************************
ZPUŠTĚNÍ APLIKACE
*******************************************************************

Jelikož je aplikace pouhým projektem k otestování dovedností a zkušeností a není nahrána na žádný web, je možné ji zpustit v tzv. "živém náhledu": 

OTEVŘÍT LIBOVOLNÝ EDITOR (Brackets, Visual Studio Code, Sublime Text, a pod.)
NAČÍST PŘÍSLUŠNÉ SOUBORY VE SLOŽCE APLIKACE
OTEVŘÍT SOUBOR "INDEX.HTML"
ZPUSTIT "ŽIVÝ NÁHLED" 

Po načtení / zpuštění živého náhledu se v prohlížeči (Mozilla, Google Chrome, Opera) otevře okno aplikace, která bude následně reagovat na podněty uživatele po zadání požadovaného města do vyhledávacího okna. V případě, že by aplikace data správně nenačetla - vyskočí tzv. Alert - Chybová hláška, že požadované data / lokalita nebyla nalezena. V takovém případě stačí "refresh" prohlížeče, případně chvilku počkat než aplikace načte data. 

Pokud bude vyhledávání úspěšné, data se zobrazí podle těch, které získá ze zdrojů REST API a openweathermap.org.

*******************************************************************

*POZNÁMKA*

APLIKACE JE TAKÉ RESPONZIVNÍ - TUDÍŽ JE MOŽNÉ ZOBRAZIT SI JI NA MENŠÍCH ZAŘÍZENÍCH (TELEFON, TABLET).

*******************************************************************








