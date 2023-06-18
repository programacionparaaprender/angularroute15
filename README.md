### curso sonarqube
https://udemy.com/course/sonarqube

### página de scanner
https://docs.sonarqube.org/latest/analyzing-source-code/scanners/sonarscanner/

### primero  
cd refugio 
luego ejecutar comandos

### comando token
### comando empleando token
C:\sonarqube-8.9.10.61524\ss-4.7.x-php\bin\

sonar-scanner -Dsonar.login=1dafde238dbde9821ab0fbc409e56008401b7fb0 -Dsonar.host.url=http://localhost:9000 -Dsonar.projectName=angularroute -Dsonar.projectKey=angularrouteID -Dsonar.projectVersion=1.0 -Dsonar.sources=.

### comando login

sonar-scanner -Dsonar.host.url=http://localhost:9000 -Dsonar.login=admin -Dsonar.password=admin -Dsonar.projectName=angularroute -Dsonar.projectKey=angularrouteID -Dsonar.projectVersion=1.0 -Dsonar.sources=.

### realizar publicación en apache tomcat
1 con powershell node .\node_modules\@angular\cli\bin\ng build --base-href="/angularroure/" --output-path="tomcat_publish/salida" 
2 abrir la carpeta salida ruta frontend/tomcat_publish/
3 copiar la carpeta WEB-INF dentro de salida ruta frontend/tomcat_publish/salida/
4 dentro de frontend/tomcat_publish/salida gitbash(unix, linux) si usas java 7 'C:\Program Files\Java\jdk1.7.0_80\bin\jar.exe' cvf angularroute.war *
5 copiar angularroute.war y pegar en otra ruta para que no se borre, se encuentra en frontend/tomcat_publish/salida/

### habilitar el coverage
https://www.tutorialspoint.com/angular_cli/angular_cli_code_coverage.htm

### habilitar eslint
@angular-devkit/build-angular": "~0.1102.12",
"@angular-eslint/builder": "4.3.0",
"@angular-eslint/eslint-plugin": "4.3.0",
"@angular-eslint/eslint-plugin-template": "4.3.0",
"@angular-eslint/schematics": "4.3.0",
"@angular-eslint/template-parser": "4.3.0",

npm install --save @angular-eslint/builder@4.3.0
npm install --save @angular-eslint/eslint-plugin@4.3.0
npm install --save @angular-eslint/eslint-plugin-template@4.3.0
npm install --save @angular-eslint/schematics@4.3.0
npm install --save @angular-eslint/template-parser@4.3.0


### pruebas unitarias a inyectables
https://medium.com/practical-angular-karma-testing/testing-angular-injectables-in-practice-part-1-bfde2e02fb35


### crear componente
ng generate component ejemplo


### trabajar google maps
npm install @agm/core@1.1.0

npm install @ngrx/store@9.1.0
npm install @ngrx/store-devtools@9.1.0
npm install ngrx-store-persist@1.0.20
npm i --save-dev @types/ngrx-store-persist


### obtener valores de form
>- https://stackoverflow.com/questions/68152611/angular-formarray-getrawvalue-at-index


### migrar stores
>- https://stackoverflow.com/questions/61445152/which-to-use-storemodule-forroot-or-storemodule-forfeature
>- npm i --save ngrx-store-persist
>- npm i --save-dev @types/ngrx-store-persist
>- https://www.npmjs.com/package/ngrx-store-persist/v/1.0.15