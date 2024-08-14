# ITDesk Projesi

ITDesk, IT hizmetleri ve destek yönetimi için geliştirilmiş bir web uygulamasıdır. Bu proje, hem istemci (client) hem de sunucu (server) tarafı bileşenlerini içermektedir.

## Proje Yapısı

### ITDeskClient
Angular ile geliştirilmiş istemci tarafı uygulamasıdır. Kullanıcı arayüzü, PrimeNG bileşenleri ve ag-grid gibi kütüphaneler kullanılarak oluşturulmuştur. Ayrıca sosyal giriş için `angularx-social-login` ve JWT doğrulama işlemleri için `jwt-decode` kütüphaneleri entegre edilmiştir.

### ITDeskServer
ASP.NET Core ile geliştirilmiş sunucu tarafı API'sini içerir. Entity Framework Core, JWT tabanlı kimlik doğrulama ve FluentValidation gibi kütüphaneler kullanılarak veritabanı işlemleri, kimlik doğrulama ve veri doğrulama işlemleri gerçekleştirilmiştir. Ayrıca, Swagger ile API dokümantasyonu sağlanmıştır.

## Kullanılan Teknolojiler ve Kütüphaneler

### Client Tarafı:
- Angular
- PrimeNG
- ag-grid-angular
- angularx-social-login
- jwt-decode

### Server Tarafı:
- ASP.NET Core
- Entity Framework Core
- FluentValidation
- Swashbuckle (Swagger)
- Microsoft.AspNetCore.OData

