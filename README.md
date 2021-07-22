## Instalacja

* `git clone https://github.com/schriker/three-head.git` lub pobierz i rozpakuj kod tego repozytorium. 
* w termianlu przejdź do foleru z kodem i uruchom `npm install`
* po pobraniu paczek możesz uruchomić sobie projekt `npm start` i w przeglądarce domyślnie będzie dostępny pod adresem `http://localhost:3000`

## Podmiana modelu

* podmień pliki w folderze public/model na pliki swojego modelu `.gltf`
* w pliku `src/Model.js` popraw w obu miejscach `'/model/[twoja_nazwa_pliku].gltf'`

## Budowanie projektu
* Najpierw musisz "skompilować" kod komendą `npm run build` w katalogu głównym.
* Pliki w katalogu `build` to twoje gotowe pliki. 
* Możesz to uruchomić przechodząc do folderu `build` i komendą `npx serve` domyślnie odpali się pod adresem `http://localhost:5000 `
* Jeśli chcesz to dodać na istniejącą już stronę musisz dodać do niej pliki z folderu `build/static` i podlinkować w sekcji `<head>` oraz folder `build/model` a w miejscu, w którym chcesz żeby model się wyrenderował dodać `  <div id="model"></div>`

## Przydatne link
* https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
* https://docs.pmnd.rs/react-three-fiber/getting-started/examples
* https://github.com/pmndrs/gltfjsx


